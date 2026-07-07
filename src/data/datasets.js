export const DATASETS = [
  {
    slug: 'en-my-corpus',
    title: 'EN–MY Professional Translation Memory Corpus',
    shortTitle: 'EN–MY Professional Translation Memory',
    heroTitleLines: ['EN–MY Professional', 'Translation Memory Corpus'],
    breadcrumbLabel: 'EN–MY Professional Translation Memory',
    provenanceHeading: ['Eight years of professional', 'localization workflows.'],
    description:
      '4.6 million human-verified segment pairs from eight years of professional media localization. Never published online. Zero synthetic data.',
    heroDescription:
      '4.6 million human-verified segment pairs from eight years of professional media localization. Never published online. Zero synthetic data. Built to national Myanmar broadcast standards.',
    tags: ['English → Burmese', 'Parallel corpus', 'NLP / MT / LLM'],
    heroTags: ['English → Burmese', 'Parallel corpus', 'NLP / MT / LLM training'],
    category: 'NLP',
    verified: true,
    stats: { segments: '4.6M', span: '2016–2024', synthetic: '0%', format: 'JSONL / Unicode' },
    statLabels: {
      segments: 'Segment pairs',
      span: 'Collection span',
      synthetic: 'Synthetic data',
      format: 'Format',
    },
    scores: [
      { label: 'Completeness', value: 94 },
      { label: 'Uniqueness', value: 99 },
      { label: 'Accuracy', value: 91 },
      { label: 'Timeliness', value: 88 },
    ],
    overallScore: 93,
    certificateId: 'MAY-2026-EN-MY-001',
    certificateTitle: 'EN–MY Translation Memory',
    certificateFooter: 'NLP • Parallel corpus',
    readinessTags: ['Completeness', 'Accuracy', 'Uniqueness', 'Authenticity'],
    domains: [
      'Medical / clinic talks',
      'Business',
      'Engineering',
      'General conversational',
      'Documentary',
      'Shopping & retail',
      'Relationships',
      'General media localization',
    ],
    permitted: [
      'Research & academic use',
      'Commercial AI/ML training',
      'Machine translation systems',
      'Model evaluation & benchmarking',
      'Internal product development',
      'LLM fine-tuning & RLHF workflows',
    ],
    restricted: [
      'Raw dataset redistribution',
      'Resale or sublicensing',
      'Public release without agreement',
      'Third-party transfer',
    ],
    qaSteps: [
      { n: '01', label: 'Outsourced translation', note: '~80 professional freelancers' },
      { n: '02', label: 'In-house curation', note: '15–25 full-time editors' },
      { n: '03', label: 'Client review', note: 'National broadcast standards applied' },
      { n: '04', label: 'Corrections & sign-off', note: '3–4 rounds per batch' },
    ],
    licensing: [
      {
        type: 'Non-exclusive',
        isDefault: true,
        desc: 'Multiple buyers may license simultaneously. Standard for commercial AI training and research.',
      },
      {
        type: 'Evaluation subset',
        isDefault: false,
        desc: '100K–1M segment samples under separate terms for pre-purchase validation.',
      },
      {
        type: 'Time-based exclusivity',
        isDefault: false,
        desc: '2–3 year exclusive terms available. Scope, use case, and pricing negotiated per deal.',
      },
    ],
    provenanceDescription:
      'This corpus was produced for professional media localization between 2016 and 2024. It has never appeared online — no contamination risk for model pre-training or benchmarking. A genuine differentiator against web-scraped alternatives.',
    broadcastNote:
      'Many translations produced for national Myanmar TV — adhering to Burmese national language standards, orthography, and broadcasting requirements.',
  },
];

export function getDatasetBySlug(slug) {
  return DATASETS.find((d) => d.slug === slug) ?? null;
}

export function getDatasetSlugs() {
  return DATASETS.map((d) => d.slug);
}