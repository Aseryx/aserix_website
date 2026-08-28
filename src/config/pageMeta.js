/** Per-route SEO metadata used by usePageMeta and the prerender script */
export const PAGE_META = {
  '/': {
    title: 'Aseryx | Data Appraisal Protocol',
    description:
      'In-place data appraisal for finance and healthcare institutions. Prove data quality without moving it. Custody never transfers. Request an appraisal.',
  },
  '/partners': {
    title: 'Aseryx | For Institutions',
    description:
      'In-place appraisal for finance and healthcare data holders. Appraise proprietary datasets in your environment and license with a score counterparties trust.',
  },
  '/blog': {
    title: 'Aseryx | Blog',
    description:
      'Thinking on data appraisal, privacy-preserving verification, and institutional data economics.',
  },
  '/privacy': {
    title: 'Aseryx | Privacy Policy',
    description: 'Aseryx privacy policy and data handling practices.',
  },
  '/terms': {
    title: 'Aseryx | Terms of Use',
    description: 'Aseryx terms of use.',
  },
};

export function metaForBlogPost(post) {
  return {
    title: `${post.title} | Aseryx Blog`,
    description: post.excerpt,
  };
}

export function resolvePageMeta(pathname) {
  if (PAGE_META[pathname]) return PAGE_META[pathname];

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    return null; // resolved at runtime with post data
  }

  return PAGE_META['/'];
}
