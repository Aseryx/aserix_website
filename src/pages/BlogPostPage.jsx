import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout.jsx';
import BLOG_POSTS from '../data/blog/index.js';
import { loadBlogContent } from '../data/blog/loadContent.js';
import { formatDate } from '../utils/formatDate.js';
import { renderBlogContent } from '../utils/renderBlogContent.jsx';
import { usePageMeta } from '../hooks/usePageMeta.jsx';
import { metaForBlogPost } from '../config/pageMeta.js';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const meta = post ? metaForBlogPost(post) : null;
  usePageMeta({
    title: meta?.title,
    description: meta?.description,
    path: post ? `/blog/${post.slug}` : undefined,
  });

  useEffect(() => {
    if (!post) return;
    let cancelled = false;
    setLoading(true);
    loadBlogContent(post.slug)
      .then((text) => {
        if (!cancelled) setContent(text);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <PageLayout>
      <article className="relative pt-28 pb-8 md:pt-36 md:pb-12 px-4 md:px-8 grid-bg">
        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="section-divider pt-8 md:pt-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-[var(--text-secondary)]">{formatDate(post.date)}</span>
              <span className="w-1 h-1 rounded-full bg-[var(--text-secondary)]" />
              <span className="font-mono text-xs text-[var(--text-secondary)]">{post.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-[var(--text-secondary)]" />
              <span className="font-mono text-xs text-brand-orange uppercase tracking-wider">{post.category}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-8">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">{post.excerpt}</p>
          </div>
        </div>
      </article>

      <section className="px-4 md:px-8 pb-16 md:pb-24 grid-bg">
        <div className="max-w-3xl mx-auto relative z-10 section-divider pt-10 md:pt-14">
          {loading && <p className="text-[var(--text-secondary)]">Loading article…</p>}
          {!loading && content && renderBlogContent(content)}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24 grid-bg">
        <div className="max-w-3xl mx-auto relative z-10 section-divider pt-10 md:pt-14">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-brand-orange transition-colors"
            >
              aseryx.xyz
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://x.com/aseryxHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-brand-orange transition-colors"
            >
              @AseryxHQ
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/company/aseryx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-brand-orange transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPostPage;