import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';

const PageLayout = ({ children, mainId = 'main-content' }) => (
  <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-brand-orange selection:text-black overflow-x-hidden">
    <Navigation />
    {mainId ? <div id={mainId}>{children}</div> : children}
    <Footer />
  </div>
);

export default PageLayout;