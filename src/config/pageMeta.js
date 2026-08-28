import { META } from '../content/siteCopy.js';

/** Per-route SEO metadata used by usePageMeta and the prerender script */
export const PAGE_META = {
  '/': {
    title: META.siteTitle,
    description: META.homeDescription,
  },
  '/partners': {
    title: 'Aseryx | For Institutions',
    description: META.partnersDescription,
  },
  '/blog': {
    title: 'Aseryx | Blog',
    description: META.blogDescription,
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

export function metaForCaseStudy(study) {
  return {
    title: `${study.shortTitle} Appraisal | Aseryx Case Study`,
    description: study.metaDescription,
  };
}

export function resolvePageMeta(pathname) {
  if (PAGE_META[pathname]) return PAGE_META[pathname];

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    return null; // resolved at runtime with post data
  }

  const caseStudyMatch = pathname.match(/^\/case-study\/([^/]+)$/);
  if (caseStudyMatch) {
    return null; // resolved at runtime with case study data
  }

  return PAGE_META['/'];
}
