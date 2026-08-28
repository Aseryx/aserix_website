import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PartnersPage from './pages/PartnersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

export const STATIC_ROUTES = [
  '/',
  '/partners',
  '/privacy',
  '/terms',
  '/blog',
];

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfUsePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/buyers" element={<Navigate to="/" replace />} />
      <Route path="/datasets" element={<Navigate to="/" replace />} />
      <Route path="/dataset/:slug" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
