/** Instrument-led landing copy (product proof first). */

export const INSTRUMENT = {
  nav: [
    { to: '/', label: 'Runtime' },
    { to: '/case-study/en-my-corpus', label: 'Use Case' },
    { to: '/partners', label: 'Institutions' },
    { to: '/blog', label: 'Blog' },
  ],
  hero: {
    badge: 'Appraisal instrument · live',
    title: 'A number your counterparty can trust.',
    subhead:
      'Aseryx runs inside your perimeter and returns a signed score. No raw rows. No custody transfer.',
    primaryCta: 'Request an Appraisal',
    secondaryCta: 'See a real readout',
    secondaryHref: '/case-study/en-my-corpus',
    scoreLabel: 'Richness · verified',
  },
  egress: {
    title: 'What the instrument never sees',
    body: 'Read-only access to metadata and statistical summaries. Egress policy attestation included with every score.',
    items: [
      { key: 'raw rows', value: 'never leave' },
      { key: 'column values', value: 'never read' },
      { key: 'custody', value: 'never transfers' },
      { key: 'signed score', value: 'egress · allowed', highlight: true },
    ],
  },
  footer: {
    links: [
      { to: '/partners', label: 'For Institutions' },
      { to: '/case-study/en-my-corpus', label: 'Case Study' },
      { to: '/privacy', label: 'Privacy' },
      { to: '/terms', label: 'Terms' },
    ],
  },
};
