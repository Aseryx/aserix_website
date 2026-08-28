/** Customer-facing copy. Track B (regulated institutions). Single source of truth. */

/** Protocol stack: appraisal → verification → assetization (on-prem data; custody never transfers) */
export const PROTOCOL = {
  label: 'On-prem data appraisal, verification, and assetization.',
  deployment: 'On-prem. Runs in your environment.',
  rotate: ['appraisal.', 'verification.', 'assetization.'],
  appraisal: 'Score what proprietary data is worth to a counterparty.',
  verification: 'Produce verified proof counterparties trust without export.',
  assetization: 'License access on your terms. Data becomes a usable asset on-prem.',
};

export const HOME = {
  hero: {
    titlePrefix: 'On-prem data',
    titleRotate: PROTOCOL.rotate,
    subhead: 'Know what your data is worth to a counterparty. Nothing leaves.',
    builtFor: ['Finance', 'Insurance', 'Healthcare'],
    secondaryCta: { label: 'View case study', to: '/case-study/en-my-corpus' },
  },
  riskBand: ['On-prem data.', 'You approve access.'],
  protocolTabs: {
    label: 'The Protocol',
    title: 'Appraise, verify, assetize.',
    titleAccent: 'On-prem.',
    tabs: [
      {
        id: 'appraise',
        label: 'Appraise',
        title: 'Two-layer verified score',
        body: 'Two-layer verified score. Readiness gate, then richness. Custody never transfers.',
        details: [
          {
            label: 'Provenance and Readiness',
            desc: 'Verify origin and minimum quality. Pass/fail before scoring.',
          },
          {
            label: 'Information Richness',
            desc: 'Verified score across four dimensions. Breakdown before any commitment.',
          },
          { label: 'Schema Depth', desc: 'Field count and type diversity' },
          { label: 'Statistical Power', desc: 'Rows relative to dimensionality' },
          { label: 'Information Density', desc: 'Cardinality and entropy proxy' },
          { label: 'Distribution Quality', desc: 'Class balance across categorical fields' },
        ],
      },
      {
        id: 'verify',
        label: 'Verify',
        title: 'Verified Score',
        body: 'Vault your slice. Receive a 0–100 quality score counterparties trust.',
        details: [
          {
            label: "Verify, Don't Reveal",
            desc: 'Prove the quality. Never move the data.',
          },
          {
            label: 'Quality Proven',
            desc: 'Verified appraisal before any counterparty commits.',
          },
          'You approve access after proof.',
        ],
      },
      {
        id: 'assetize',
        label: 'Assetize',
        title: 'You Approve',
        body: 'Access follows proof. You retain veto on every request. License access on your terms. Data becomes a usable asset on-prem.',
        details: [
          {
            label: 'Zero Custody Transfer',
            desc: 'Data stays in your infrastructure. Always.',
          },
          {
            label: 'You Approve',
            desc: 'Access follows proof. You retain veto on every request.',
          },
          {
            label: 'Assetization',
            desc: 'License access on your terms. Data becomes a usable asset on-prem.',
          },
        ],
      },
    ],
  },
  verticals: {
    label: 'Built for',
    title: 'Regulated industries',
    items: ['Finance', 'Insurance', 'Healthcare'],
  },
  privacyParadox: {
    label: 'The Privacy Paradox',
    title: "To make data safe, you've always had to",
    titleAccent: 'destroy its value.',
    cards: [
      {
        tag: '01 / Finance',
        title: 'Signal Lost',
        body: 'Strip the identifiers and you strip the signal. De-identification destroys what makes the data valuable.',
      },
      {
        tag: '02 / Health',
        title: 'Data Stays Locked',
        body: 'Operational health data cannot leave the building. Without proof of quality, it never gets used.',
      },
      {
        tag: '03 / The Fix',
        title: "Verify, Don't Reveal",
        body: 'Prove the quality. Never move the data.',
      },
    ],
  },
  howItWorks: {
    label: 'How It Works',
    title: 'Prove quality.',
    titleAccent: 'Never move the data.',
    footnote: 'You approve access after proof.',
    steps: [
      {
        step: '01 / Connect',
        title: 'Your Environment',
        body: 'Pair Aseryx Runtime in your infrastructure. Data stays local.',
      },
      {
        step: '02 / Define',
        title: 'Build Your Slice',
        body: 'Discover tables in Workspace. Refine fields. Commit when ready.',
      },
      {
        step: '03 / Appraise',
        title: 'Verified Score',
        body: 'Vault your slice. Receive a 0–100 quality score counterparties trust.',
        featured: true,
      },
    ],
  },
  dataAppraisal: {
    label: 'Data Appraisal',
    title: 'Know what your dataset',
    titleAccent: 'is worth to a counterparty.',
    subhead: 'Two-layer verified score. Readiness gate, then richness. Custody never transfers.',
    layer1: {
      title: 'Provenance and Readiness',
      body: 'Verify origin and minimum quality. Pass/fail before scoring.',
    },
    layer2: {
      title: 'Information Richness',
      body: 'Verified score across four dimensions. Breakdown before any commitment.',
    },
    dimensions: [
      { label: 'Schema Depth', desc: 'Field count and type diversity' },
      { label: 'Statistical Power', desc: 'Rows relative to dimensionality' },
      { label: 'Information Density', desc: 'Cardinality and entropy proxy' },
      { label: 'Distribution Quality', desc: 'Class balance across categorical fields' },
    ],
  },
  keyBenefits: {
    label: 'Key Benefits',
    title: 'Proof',
    titleAccent: 'without export.',
    cards: [
      {
        tag: '01 // ZERO CUSTODY',
        title: 'Zero Custody Transfer',
        body: 'Data stays in your infrastructure. Always.',
      },
      {
        tag: '02 // VERIFICATION',
        title: 'Quality Proven',
        body: 'Verified appraisal before any counterparty commits.',
      },
      {
        tag: '03 // ACCESS',
        title: 'You Approve',
        body: 'Access follows proof. You retain veto on every request.',
      },
    ],
  },
  useCases: [
    { label: 'EN–MY Translation Memory', href: '/case-study/en-my-corpus' },
    'Financial Services',
    'Insurance',
    'Healthcare',
  ],
  caseStudy: {
    label: 'Appraisal Case Study',
    title: 'EN–MY Translation Memory',
    score: 93,
    certificateId: 'MAY-2026-EN-MY-001',
    summary: '4.6M segment pairs appraised on-prem. Verified score 93/100.',
    href: '/case-study/en-my-corpus',
  },
  unlocks: [
    {
      title: 'On-Prem Data',
      description: 'Data appraisal, verification, and assetization in your environment. Counterparties see verified proof.',
    },
    {
      title: 'Custody Never Transfers',
      description: 'Appraise proprietary data without copying it out.',
    },
    {
      title: 'Built for Regulated Environments',
      description: 'Designed for institutions where data cannot leave the perimeter.',
    },
  ],
  faqs: [
    {
      question: 'How does appraisal work if the data never leaves?',
      answer: 'The protocol runs in your environment. You receive a verified quality score. Raw data stays under your control.',
      delay: 100,
    },
    {
      question: 'What happens if my dataset fails Layer 1?',
      answer: 'It does not receive a commercial score. You get a report on what failed so you can fix it.',
      delay: 200,
    },
    {
      question: 'How do we use this in a regulated environment?',
      answer: 'The protocol runs in your environment. Your counsel validates your use case against applicable rules.',
      delay: 300,
    },
  ],
  cta: {
    title: 'Know what your data is worth',
    titleAccent: 'without moving it.',
    subhead: 'Request an appraisal. On-prem data. Your environment.',
  },
};

export const PARTNERS = {
  badge: 'FOR INSTITUTIONS',
  hero: {
    titlePrefix: 'On-prem data',
    titleRotate: PROTOCOL.rotate,
    subhead: 'For regulated data teams.',
  },
  shift: {
    label: 'The Shift',
    title: 'You stay in control.',
    titleAccent: 'Proof, not files.',
  },
  oldWay: {
    label: 'The Old Way',
    title: 'Export and Broker',
    bullets: [
      'Lose custody of files',
      'One-time payment only',
      'You inherit compliance liability',
      'Generic pricing, low value',
    ],
  },
  newWay: {
    label: 'The New Way',
    title: 'On-Prem Data Appraisal',
    bullets: [
      'Verified score before any commitment',
      'You approve every access request',
      'Proof first, access second',
      'Zero custody by architecture',
    ],
  },
  builtFor: [
    {
      tag: 'Financial Services',
      title: 'Trading & Underwriting',
      body: 'Appraise deal flow and ops data on-prem. Prove quality without revealing positions.',
    },
    {
      tag: 'Insurance',
      title: 'Claims & Actuarial',
      body: 'Score claims and policy tables where they sit. Know what is safe to use.',
    },
    {
      tag: 'Healthcare & Life Sciences',
      title: 'Operational Data',
      body: 'Data that stays in-house. Verified quality without export.',
    },
    {
      tag: 'Industrial & Research',
      title: 'Sensitive Operations',
      body: 'Sensor, legal, and research datasets that cannot leave your perimeter.',
    },
  ],
  cta: {
    title: 'Appraise where your data sits.',
    titleAccent: 'Share proof, not files.',
    subhead: 'Custody never transfers.',
  },
};

export const META = {
  siteTitle: 'Aseryx | On-Prem Data Appraisal Protocol',
  homeDescription:
    'On-prem data appraisal, verification, and assetization for regulated institutions. Verified score in your environment. Custody never transfers.',
  partnersDescription:
    'On-prem data appraisal, verification, and assetization for regulated data teams. Verified score in your environment. You approve access.',
  blogDescription:
    'Thinking on on-prem data appraisal, verification, assetization, and institutional data economics.',
};
