import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PartnersPage from './pages/PartnersPage';
import BuyersPage from './pages/BuyersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import DatasetPage from './pages/DatasetPage';
import DatasetsPage from './pages/DatasetsPage';

export const STATIC_ROUTES = [
  '/',
  '/partners',
  '/buyers',
  '/privacy',
  '/terms',
  '/blog',
  '/datasets',
];

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/buyers" element={<BuyersPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfUsePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/datasets" element={<DatasetsPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/dataset/:slug" element={<DatasetPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}