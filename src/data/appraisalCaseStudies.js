/** Appraisal case studies: real datasets used to validate the protocol (not a catalog). */

export const CASE_STUDIES = [
  {
    slug: 'en-my-corpus',
    shortTitle: 'EN–MY Translation Memory',
    title: 'EN–MY Professional Translation Memory Corpus',
    heroTitleLines: ['EN–MY Professional', 'Translation Memory Corpus'],
    breadcrumbLabel: 'EN–MY Translation Memory',
    metaDescription:
      'On-prem appraisal case study: 4.6M EN–MY translation segment pairs scored 93/100. Verified provenance and richness. No raw data exported.',
    heroDescription:
      '4.6 million human-verified segment pairs from eight years of professional media localization. Never published online. Zero synthetic data. Appraised on-prem with Aseryx.',
    heroTags: ['English → Burmese', 'Parallel corpus', 'NLP / MT / LLM'],
    stats: { segments: '4.6M', span: '2016–2024', synthetic: '0%', format: 'JSONL / Unicode' },
    statLabels: {
      segments: 'Segment pairs',
      span: 'Collection span',
      synthetic: 'Synthetic data',
      format: 'Format',
    },
    certificateTitle: 'EN–MY Translation Memory',
    certificateId: 'MAY-2026-EN-MY-001',
    certificateFooter: 'NLP • Parallel corpus • On-prem appraisal',
    overallScore: 93,
    richnessDimensions: [
      { label: 'Schema Depth', score: 96, desc: 'Field count and type diversity' },
      { label: 'Statistical Power', score: 94, desc: 'Rows relative to dimensionality' },
      { label: 'Information Density', score: 91, desc: 'Cardinality and entropy proxy' },
      { label: 'Distribution Quality', score: 88, desc: 'Class balance across categoricals' },
    ],
    scores: [
      { label: 'Completeness', value: 94 },
      { label: 'Uniqueness', value: 99 },
      { label: 'Accuracy', value: 91 },
      { label: 'Timeliness', value: 88 },
    ],
    readinessTags: ['Completeness', 'Accuracy', 'Uniqueness', 'Authenticity'],
    layer1Summary: 'Origin and minimum quality verified. Full pass on readiness gate.',
    layer2Summary: 'Information richness scored across four dimensions. Breakdown issued before any access commitment.',
    qaSteps: [
      { n: '01', label: 'Outsourced translation', note: '~80 professional freelancers' },
      { n: '02', label: 'In-house curation', note: '15–25 full-time editors' },
      { n: '03', label: 'Client review', note: 'Editorial quality standards applied' },
      { n: '04', label: 'Corrections & sign-off', note: '3–4 rounds per batch' },
    ],
    provenanceDescription:
      'Produced for professional media localization between 2016 and 2024. Never appeared online. No contamination risk for model training or benchmarking.',
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
    validated: [
      'Provenance and eight-year collection span',
      'Human curation pipeline (no synthetic rows)',
      'Schema depth and segment pair integrity',
      'Domain diversity across eight content areas',
      'Readiness gate: completeness, accuracy, uniqueness, authenticity',
    ],
    insights: [
      {
        title: 'Human signal, not synthetic fill',
        body: '0% synthetic rows. The appraisal confirmed a fully human-verified pipeline, relevant for teams that cannot risk contaminated training data.',
      },
      {
        title: 'Low-resource language depth',
        body: 'English → Burmese parallel pairs with professional human curation. Uniqueness scored 99, with minimal duplicate segments across 4.6M pairs.',
      },
      {
        title: 'Domain breadth, not single-topic bias',
        body: 'Eight content domains scored. Appraisal showed richness across medical, business, and conversational registers, not a narrow crawl.',
      },
      {
        title: 'Offline provenance',
        body: 'Never published online. The readiness gate verified origin and collection span (2016–2024) without exporting raw rows.',
      },
    ],
    /** Illustrative: why a counterparty might care about the score (not a license offer). */
    applications: [
      'Machine translation for English ↔ Burmese',
      'Low-resource LLM fine-tuning and evaluation',
      'Model benchmarking without web-scrape contamination',
      'Domain-specific MT quality testing (medical, business, media)',
      'RLHF and alignment workflows needing verified parallel text',
    ],
    contactNote:
      'Counterparties: this page shows verified appraisal output only. Access follows holder approval. Contact us to discuss next steps.',
  },
];

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((s) => s.slug === slug) ?? null;
}

export function getCaseStudySlugs() {
  return CASE_STUDIES.map((s) => s.slug);
}

export const FEATURED_CASE_STUDY = CASE_STUDIES[0];
