import { build } from 'vite';
import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import BLOG_POSTS from '../src/data/blog/index.js';
import { getCaseStudyBySlug, getCaseStudySlugs } from '../src/data/appraisalCaseStudies.js';
import { PAGE_META, metaForBlogPost, metaForCaseStudy } from '../src/config/pageMeta.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');
const serverDir = resolve(distDir, 'server');

const STATIC_ROUTES = ['/', '/partners', '/privacy', '/terms', '/blog'];

function getRoutes() {
  const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}`);
  const caseStudyRoutes = getCaseStudySlugs().map((slug) => `/case-study/${slug}`);
  return [...STATIC_ROUTES, ...caseStudyRoutes, ...blogRoutes];
}

function resolveMeta(route) {
  if (PAGE_META[route]) return PAGE_META[route];

  const blogMatch = route.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = BLOG_POSTS.find((p) => p.slug === blogMatch[1]);
    return post ? metaForBlogPost(post) : PAGE_META['/blog'];
  }

  const caseStudyMatch = route.match(/^\/case-study\/([^/]+)$/);
  if (caseStudyMatch) {
    const study = getCaseStudyBySlug(caseStudyMatch[1]);
    return study ? metaForCaseStudy(study) : PAGE_META['/'];
  }

  return PAGE_META['/'];
}

function injectMeta(html, { title, description }, route) {
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  out = out.replace(
    /<meta name="title" content="[^"]*"\s*\/>/,
    `<meta name="title" content="${title}" />`,
  );
  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );

  const url = `https://aseryx.xyz${route === '/' ? '/' : route}`;
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  out = out.replace(
    /<meta name="twitter:url" content="[^"]*"\s*\/>/,
    `<meta name="twitter:url" content="${url}" />`,
  );

  return out;
}

async function prerender() {
  await build({
    build: {
      ssr: resolve(__dirname, '../src/entry-server.jsx'),
      outDir: serverDir,
    },
  });

  const modulePath = pathToFileURL(resolve(serverDir, 'entry-server.js')).href;
  const { render } = await import(modulePath);

  const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');
  const routes = getRoutes();

  for (const route of routes) {
    console.log(`Prerendering ${route}...`);

    const appHtml = render(route);
    const meta = resolveMeta(route);
    let html = template.replace(/(<div id="root">)(<\/div>)/, `$1${appHtml}$2`);
    html = injectMeta(html, meta, route);

    let filePath;
    if (route === '/') {
      filePath = resolve(distDir, 'index.html');
    } else {
      filePath = resolve(distDir, route.slice(1), 'index.html');
      mkdirSync(dirname(filePath), { recursive: true });
    }

    writeFileSync(filePath, html, 'utf-8');
    console.log(`  -> Wrote ${filePath}`);
  }

  rmSync(serverDir, { recursive: true, force: true });
  console.log(`Prerendering complete (${routes.length} routes).`);
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
