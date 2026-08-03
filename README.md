# Plano Home Remodel — Multi-City Astro Site

Astro 7 static site. One codebase, multiple city-specific domain builds selected via `SITE_CITY` (defaults to `plano`).

## Builds

```sh
npm run build:plano        # SITE_CITY=plano
npm run build:dallas       # SITE_CITY=dallas
npm run build:frisco
npm run build:richardson
npm run build:grapevine
npm run build:southlake
npm run build:highlandpark
```

Each city project deploys its own static build to Vercel from this repo.

## Contact form

The contact page (`src/pages/contact.astro`) submits via AJAX to the Vercel
serverless function at `api/contact.ts`, which sends lead emails through
Resend. The function is a root-level Vercel Function, so the static Astro
build is untouched.

### Required env vars (set in every city's Vercel project)

| Variable | Required | Default | Notes |
| :--- | :---: | :--- | :--- |
| `RESEND_API_KEY` | Yes | — | API key from the Resend dashboard (no client-side exposure). |
| `CONTACT_TO_EMAIL` | No | `Ryan@MillwoodRemodeling.com` | Recipient of lead emails. |
| `CONTACT_FROM_EMAIL` | No | `onboarding@resend.dev` | Must be a verified sender. Until a domain is verified, Resend only delivers the onboarding sender to the email address used to sign up for the Resend account. |

### Testing the endpoint

```sh
curl -X POST https://<your-domain>/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"(214) 555-0123","email":"test@example.com","project-type":"kitchen","message":"Hello","site":"Plano Home Remodel & Design"}'
```

Expected: `{"ok":true}` and an email at `CONTACT_TO_EMAIL`.

### Security

- POST-only (`405` otherwise)
- Server-side validation of `name`, `phone`, `email`, `project-type`
- Honeypot (`_gotcha`) silently rejects bots
- No secrets in client code; errors never leak stack traces
