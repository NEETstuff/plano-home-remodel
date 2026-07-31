// ---------------------------------------------------------------------------
// Shared content for local service pages (used by ServicePage.astro).
// Keeping the "included / not included" lists and trust strip in one place
// keeps every local service page consistent and easy to maintain.
// ---------------------------------------------------------------------------

export const includedInEveryProject = [
  'Free in-home consultation and a detailed, itemized estimate',
  'In-house 3D design renderings and material selection',
  'Demolition and site protection',
  'Materials and labor for the full agreed scope',
  'All city permits and inspections',
  'Plumbing and electrical rough-in and finishing',
  'Project management and daily job-site oversight',
  'Final cleanup and a post-project walkthrough',
  '2-year workmanship warranty',
];

export const notIncludedUnlessSpecified = [
  'Additions or new square footage',
  'Foundation or major structural work',
  'Appliances — unless included in your agreed scope',
  'Window or door replacement, unless specified',
  'Temporary housing or off-site storage during the build',
  'Utilities re-routed by the city or utility providers',
  'Any item outside the agreed scope discovered during demolition — we flag it immediately and price it transparently before proceeding',
];

export const serviceTrustStrip = [
  'Free in-home consultation',
  'Custom 3D design renderings',
  '2-year workmanship warranty',
  'Transparent, itemized pricing',
];
