import PageLayout from '../components/layout/PageLayout.jsx';
import { usePageMeta } from '../hooks/usePageMeta.jsx';
import { PAGE_META } from '../config/pageMeta.js';
import privacyHtml from '../content/privacy-policy.html?raw';

const PrivacyPolicyPage = () => {
  usePageMeta({ ...PAGE_META['/privacy'], path: '/privacy' });

  return (
    <PageLayout>
      <main id="main-content" className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-[var(--bg-card)] rounded-lg p-6 md:p-12 border border-[var(--border-color)] legal-document">
          <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />
        </div>
      </main>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;