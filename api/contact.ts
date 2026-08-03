import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const DEFAULT_TO = 'Ryan@MillwoodRemodeling.com';
const DEFAULT_FROM = 'onboarding@resend.dev';

const REQUIRED_FIELDS: { kebab: string; camel: string; label: string }[] = [
  { kebab: 'name', camel: 'name', label: 'name' },
  { kebab: 'phone', camel: 'phone', label: 'phone' },
  { kebab: 'email', camel: 'email', label: 'email' },
  { kebab: 'project-type', camel: 'projectType', label: 'project-type' },
];

function pick(body: Record<string, unknown>, kebab: string, camel: string): string {
  const raw = body[kebab] ?? body[camel];
  return typeof raw === 'string' ? raw.trim() : '';
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  let body: Record<string, unknown> = {};
  try {
    if (typeof req.body === 'string') {
      body = JSON.parse(req.body);
    } else if (req.body && typeof req.body === 'object') {
      body = req.body as Record<string, unknown>;
    }
  } catch {
    res.status(400).json({ ok: false, error: 'Invalid request body' });
    return;
  }

  const gotcha = pick(body, '_gotcha', '_gotcha');
  if (gotcha.length > 0) {
    res.status(200).json({ ok: true });
    return;
  }

  const name = pick(body, 'name', 'name');
  const phone = pick(body, 'phone', 'phone');
  const email = pick(body, 'email', 'email');
  const projectType = pick(body, 'project-type', 'projectType');
  const message = pick(body, 'message', 'message');
  const contactMethod = pick(body, 'contact-method', 'contactMethod');
  const site = pick(body, 'site', 'site');

  const missing = REQUIRED_FIELDS.filter((f) => !pick(body, f.kebab, f.camel)).map(
    (f) => f.label,
  );
  if (missing.length > 0) {
    res.status(400).json({ ok: false, error: `Missing required fields: ${missing.join(', ')}` });
    return;
  }
  if (!isEmail(email)) {
    res.status(400).json({ ok: false, error: 'Please enter a valid email address' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    res.status(500).json({ ok: false, error: 'The contact form is temporarily unavailable. Please try again later or call us.' });
    return;
  }

  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO;
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM;
  const siteLabel = site || 'Website';
  const subjectSite = siteLabel.replace(/[<>]/g, '');

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New remodel lead — ${subjectSite}`,
      text: [
        'New remodel lead',
        '',
        `Site / Brand: ${site || 'Not provided'}`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        `Preferred contact method: ${contactMethod || 'Not provided'}`,
        `Message: ${message || 'Not provided'}`,
        '',
        `Submitted: ${new Date().toISOString()}`,
      ].join('\n'),
    });

    if (error) {
      throw error;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] email send failed:', err);
    res.status(500).json({
      ok: false,
      error: 'We could not send your message. Please try again or call us directly.',
    });
  }
}
