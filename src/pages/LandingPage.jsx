import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BadgeCheck, Lock } from 'lucide-react';
import { ScrollReveal } from '../hooks/useScrollReveal.jsx';
import ParticlesBackground from '../components/common/ParticlesBackground.jsx';
import PageLayout from '../components/layout/PageLayout.jsx';
import RiskBand from '../components/common/RiskBand.jsx';
import FaqItem from '../components/common/FaqItem.jsx';
import BLOG_POSTS from '../data/blog/index.js';
import { formatDate } from '../utils/formatDate.js';
import { AppraisalCertificate } from '../components/common/AppraisalCertificate.jsx';
import {
  GeometricShield,
  GeometricCube,
  GeometricSphere,
  GeometricToroid,
  GeometricLattice,
  GeometricPrism,
  GeometricWave,
} from '../components/common/GeometricIllustrations.jsx';
import { RotatingHeroTitle } from '../components/common/RotatingHeroTitle.jsx';
import { usePageMeta } from '../hooks/usePageMeta.jsx';
import { PAGE_META } from '../config/pageMeta.js';
import { TALLY } from '../config/tally.js';
import { HOME } from '../content/siteCopy.js';

const PRIVACY_ILLUSTRATIONS = [GeometricLattice, GeometricSphere, GeometricShield];
const HOW_IT_WORKS_ILLUSTRATIONS = [GeometricCube, GeometricToroid, GeometricShield];
const KEY_BENEFIT_ILLUSTRATIONS = [GeometricShield, GeometricPrism, GeometricWave];
const UNLOCK_ICONS = [BadgeCheck, Shield, Lock];

const LandingPage = () => {
  usePageMeta({ ...PAGE_META['/'], path: '/' });

  return (
    <PageLayout>
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,77,0.06),transparent_50%)]" />
          <img
            src="/hero-bg-new.jpg"
            alt=""
            className="absolute top-0 right-0 w-full md:w-[70%] h-full object-cover object-top md:object-[center_20%] grayscale opacity-50 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen"
            style={{
              maskImage: 'linear-gradient(to right, transparent 5%, black 35%), linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 35%), linear-gradient(to bottom, black 80%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            }}
            loading="eager"
            fetchPriority="high"
          />
          <ParticlesBackground />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-left">
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 animate-fade-up delay-100 opacity-0 max-w-4xl"
            style={{ animationFillMode: 'forwards' }}
          >
            <RotatingHeroTitle prefix={HOME.hero.titlePrefix} rotate={HOME.hero.titleRotate} />
          </h1>

          <p
            className="text-lg md:text-xl text-[#6B7280] dark:text-gray-400 leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200 opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            {HOME.hero.subhead}
          </p>

          <div className="animate-fade-up delay-300 opacity-0 flex flex-wrap gap-4" style={{ animationFillMode: 'forwards' }}>
            <a
              href={TALLY.appraisal}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-black font-medium tracking-wide text-sm uppercase hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-[#F9F8F6] dark:focus:ring-offset-[#0a0a0a]"
            >
              Request an Appraisal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to={HOME.hero.secondaryCta.to}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#E5E5E5] dark:border-[#333] text-[#1A1A1A] dark:text-white font-medium tracking-wide text-sm uppercase hover:bg-[#F3F4F6] dark:hover:bg-[#1A1A1A] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              {HOME.hero.secondaryCta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div
            className="animate-fade-up delay-400 opacity-0 mt-8 flex items-center gap-3 text-[#6B7280] dark:text-gray-500"
            style={{ animationFillMode: 'forwards' }}
          >
            <span className="text-xs font-mono tracking-wider uppercase">Built for</span>
            {HOME.hero.builtFor.map((item, index) => (
              <span key={item} className="contents">
                {index > 0 && <span className="w-px h-3 bg-[#D1D5DB] dark:bg-gray-700" />}
                <span className="text-xs tracking-wide">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <RiskBand items={HOME.riskBand} />

      {/* ===== THE PRIVACY PARADOX ===== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">{HOME.privacyParadox.label}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
              {HOME.privacyParadox.title}{' '}
              <span className="italic text-[#6B7280] dark:text-gray-400">{HOME.privacyParadox.titleAccent}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            <div className="md:col-span-3 space-y-6">
              {HOME.privacyParadox.cards.slice(0, 2).map((card, index) => {
                const Illustration = PRIVACY_ILLUSTRATIONS[index];
                return (
                  <ScrollReveal key={card.tag} delay={(index + 1) * 100}>
                    <div className="group flex flex-col sm:flex-row bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden border border-transparent dark:border-transparent opacity-70 hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-center p-8 sm:p-10 grayscale group-hover:grayscale-0 transition-all duration-500 sm:border-r border-b sm:border-b-0 border-[#E8E4DE] dark:border-[#1F2937]">
                        <Illustration className="w-24 h-24 md:w-32 md:h-32 text-[#6B7280] group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6 md:p-8 flex-1">
                        <p className="font-mono text-xs text-[#6B7280] dark:text-gray-500 mb-4 uppercase tracking-wider">{card.tag}</p>
                        <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A] dark:text-white mb-3">{card.title}</h3>
                        <p className="text-[#6B7280] dark:text-gray-400 text-sm leading-relaxed">{card.body}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <div className="md:col-span-2">
              {(() => {
                const card = HOME.privacyParadox.cards[2];
                const Illustration = PRIVACY_ILLUSTRATIONS[2];
                return (
                  <ScrollReveal delay={300} className="h-full">
                    <div className="group h-full flex flex-col justify-between bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden border border-brand-orange/10 dark:border-brand-orange/20">
                      <div className="flex items-center justify-center py-8 md:py-12">
                        <Illustration className="w-28 h-28 md:w-36 md:h-36 text-brand-orange group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6 md:p-8 border-t border-brand-orange/20 dark:border-brand-orange/30">
                        <p className="font-mono text-xs text-brand-orange mb-4 uppercase tracking-wider">{card.tag}</p>
                        <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A] dark:text-white mb-3">{card.title}</h3>
                        <p className="text-[#6B7280] dark:text-gray-400 text-sm leading-relaxed">{card.body}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">{HOME.howItWorks.label}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
              {HOME.howItWorks.title}
              <br />
              <span className="italic text-[#6B7280] dark:text-gray-400">{HOME.howItWorks.titleAccent}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {HOME.howItWorks.steps.map((step, index) => {
              const Illustration = HOW_IT_WORKS_ILLUSTRATIONS[index];
              const featured = step.featured;
              return (
                <ScrollReveal key={step.step} delay={(index + 1) * 100}>
                  <div
                    className={`group h-full flex flex-col bg-[#EDEBE8] dark:bg-[#111111] overflow-hidden relative ${
                      featured ? 'card-oasis-alt border border-brand-orange/10 dark:border-brand-orange/20' : 'card-oasis'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center py-10 md:py-14 ${
                        featured ? '' : 'text-[#6B7280] grayscale group-hover:grayscale-0 transition-all duration-500'
                      }`}
                    >
                      <Illustration
                        className={`w-32 h-32 md:w-36 md:h-36 group-hover:scale-105 transition-transform duration-500 ${
                          featured ? 'text-brand-orange' : 'text-[#6B7280]'
                        }`}
                      />
                    </div>
                    <div
                      className={`p-6 md:p-8 flex-1 border-t ${
                        featured ? 'border-brand-orange/20 dark:border-brand-orange/30' : 'border-[#E8E4DE] dark:border-[#1F2937]'
                      }`}
                    >
                      <p
                        className={`font-mono text-xs mb-4 uppercase tracking-wider ${
                          featured ? 'text-brand-orange' : 'text-[#6B7280] dark:text-gray-500'
                        }`}
                      >
                        {step.step}
                      </p>
                      <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A] dark:text-white mb-3">{step.title}</h3>
                      <p className="text-[#6B7280] dark:text-gray-400 text-sm leading-relaxed mb-4">{step.body}</p>
                      {featured && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                          <span className="text-[10px] text-brand-orange font-mono tracking-wider">VERIFYING</span>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {HOME.howItWorks.footnote && (
            <p className="mt-10 text-sm text-[#6B7280] dark:text-gray-400 font-mono tracking-wide">{HOME.howItWorks.footnote}</p>
          )}
        </div>
      </section>

      {/* ===== DATA APPRAISAL ===== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">{HOME.dataAppraisal.label}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
              {HOME.dataAppraisal.title}{' '}
              <span className="italic text-[#6B7280] dark:text-gray-400">{HOME.dataAppraisal.titleAccent}</span>
            </h2>
            <p className="text-[#6B7280] dark:text-gray-400 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">{HOME.dataAppraisal.subhead}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <ScrollReveal delay={100}>
              <AppraisalCertificate
                title={HOME.caseStudy.title}
                certificateId={HOME.caseStudy.certificateId}
                overallScore={HOME.caseStudy.score}
                proofHref={HOME.caseStudy.href}
              />

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to={HOME.caseStudy.href}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-brand-orange hover:gap-3 transition-all"
                >
                  See {HOME.caseStudy.title} case study
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={TALLY.appraisal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-brand-orange text-black font-medium tracking-wide text-sm uppercase hover:bg-white transition-colors"
                >
                  Request an Appraisal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={200}>
                <div className="group bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden border border-transparent hover:border-brand-orange/20 transition-colors">
                  <div className="p-6 md:p-8">
                    <p className="font-mono text-xs text-brand-orange mb-4 uppercase tracking-wider">01 / Layer 1</p>
                    <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A] dark:text-white mb-3">{HOME.dataAppraisal.layer1.title}</h3>
                    <p className="text-[#6B7280] dark:text-gray-400 text-sm leading-relaxed mb-5">{HOME.dataAppraisal.layer1.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {['Completeness', 'Accuracy', 'Uniqueness', 'Authenticity'].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-[10px] font-mono bg-[#F9F8F6] dark:bg-[#0a0a0a] border border-[#E8E4DE] dark:border-[#1F2937] text-[#6B7280] dark:text-gray-500 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="group bg-[#EDEBE8] dark:bg-[#111111] card-oasis-alt overflow-hidden border border-brand-orange/10 dark:border-brand-orange/20">
                  <div className="p-6 md:p-8">
                    <p className="font-mono text-xs text-brand-orange mb-4 uppercase tracking-wider">02 / Layer 2</p>
                    <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A] dark:text-white mb-3">{HOME.dataAppraisal.layer2.title}</h3>
                    <p className="text-[#6B7280] dark:text-gray-400 text-sm leading-relaxed mb-5">{HOME.dataAppraisal.layer2.body}</p>
                    <div className="space-y-2">
                      {HOME.dataAppraisal.dimensions.map((dim) => (
                        <div key={dim.label} className="flex items-baseline gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0 mt-1.5" />
                          <span className="text-xs text-[#1A1A1A] dark:text-white font-medium">{dim.label}</span>
                          <span className="text-xs text-[#6B7280] dark:text-gray-500">{dim.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY BENEFITS ===== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg relative">
        <div className="max-w-5xl mx-auto relative z-10 pb-16 md:pb-32">
          <div className="section-divider pt-8 md:pt-12 mb-16 md:mb-24">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">{HOME.keyBenefits.label}</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              {HOME.keyBenefits.title}{' '}
              <span className="italic text-[#6B7280] dark:text-gray-400">{HOME.keyBenefits.titleAccent}</span>
            </h2>
          </div>

          <div className="relative w-full">
            {HOME.keyBenefits.cards.map((card, index) => {
              const Illustration = KEY_BENEFIT_ILLUSTRATIONS[index];
              const isLast = index === HOME.keyBenefits.cards.length - 1;
              const stickyTop = index === 0 ? 'top-24' : index === 1 ? 'top-32' : 'top-40';
              const bgClass = isLast
                ? 'bg-brand-orange text-black border-brand-orange'
                : index === 1
                  ? 'bg-[#F9F8F6] dark:bg-[#0a0a0a] border-[#E8E4DE] dark:border-[#1F2937]'
                  : 'bg-[#EDEBE8] dark:bg-[#111111] border-[#E8E4DE] dark:border-[#1F2937]';
              const shadowClass = isLast ? 'shadow-2xl' : index === 1 ? 'shadow-2xl' : 'shadow-xl';
              const tagClass = isLast ? 'text-black/60' : 'text-brand-orange';
              const titleClass = isLast ? 'text-black tracking-tight' : 'text-[#1A1A1A] dark:text-white';
              const bodyClass = isLast ? 'text-black/80 font-medium' : 'text-[#6B7280] dark:text-gray-400';
              const iconClass = isLast ? 'text-black/20' : 'text-brand-orange';

              return (
                <div
                  key={card.tag}
                  className={`sticky ${stickyTop} w-full h-auto min-h-[40vh] ${bgClass} border p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 ${shadowClass} mb-12 origin-top transition-all card-oasis`}
                >
                  <div className="max-w-xl">
                    <p className={`font-mono mb-4 tracking-widest ${tagClass}`}>{card.tag}</p>
                    <h3 className={`font-display text-3xl md:text-4xl lg:text-5xl mb-6 ${titleClass}`}>{card.title}</h3>
                    <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>{card.body}</p>
                  </div>
                  <Illustration className={`w-32 h-32 md:w-48 md:h-48 flex-shrink-0 ${iconClass}`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-8 md:mb-12">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase">Use Cases</p>
          </div>

          <div className="use-cases-scroll mb-12 md:mb-16 section-divider pt-4 pb-4">
            {HOME.useCases.map((item) => {
              if (typeof item === 'object' && item.href) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="whitespace-nowrap text-sm md:text-base text-brand-orange hover:text-brand-orange font-medium"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <span
                  key={item}
                  className="whitespace-nowrap text-sm md:text-base text-[#6B7280] dark:text-gray-400 hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-default font-medium"
                >
                  {item}
                </span>
              );
            })}
          </div>

          <ScrollReveal delay={100}>
            <Link
              to={HOME.caseStudy.href}
              className="group block mb-12 md:mb-16 bg-[#EDEBE8] dark:bg-[#111111] card-oasis border border-brand-orange/10 hover:border-brand-orange/30 transition-colors overflow-hidden"
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-3">{HOME.caseStudy.label}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-[#1A1A1A] dark:text-white mb-2 group-hover:text-brand-orange transition-colors">
                    {HOME.caseStudy.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-gray-400 max-w-xl">{HOME.caseStudy.summary}</p>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <div className="text-right">
                    <p className="font-display text-4xl text-[#1A1A1A] dark:text-white">{HOME.caseStudy.score}</p>
                    <p className="text-[10px] font-mono text-[#6B7280] dark:text-gray-500 uppercase tracking-widest">Verified score</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-brand-orange text-sm font-medium">
                    View appraisal
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <ScrollReveal>
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-8">Aseryx unlocks:</h2>
                <div className="hidden lg:block">
                  <GeometricLattice className="w-full max-w-md text-brand-orange/60 dark:text-brand-orange/40" />
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {HOME.unlocks.map((item, index) => {
                const Icon = UNLOCK_ICONS[index];
                return (
                  <ScrollReveal key={item.title} delay={index * 150}>
                    <div className="group p-6 bg-[#EDEBE8] dark:bg-[#111111] card-oasis hover:bg-[#E5E2DD] dark:hover:bg-[#1a1a1a] transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-[#F9F8F6] dark:bg-[#0a0a0a] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h3 className="font-display text-lg md:text-xl mb-2 text-[#1A1A1A] dark:text-white">{item.title}</h3>
                      <p className="text-[#6B7280] dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Common <span className="italic text-[#6B7280] dark:text-gray-400">questions</span>
            </h2>
          </div>

          <div className="border-t-2 border-[var(--text-primary)] dark:border-[#333]">
            {HOME.faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} delay={faq.delay} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-4xl mx-auto relative z-10 text-center section-divider pt-12 md:pt-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
              {HOME.cta.title}{' '}
              <span className="italic text-[#6B7280] dark:text-gray-400">{HOME.cta.titleAccent}</span>
            </h2>
            <p className="text-[#6B7280] dark:text-gray-400 text-lg mb-10 max-w-xl mx-auto">{HOME.cta.subhead}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={TALLY.appraisal}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-black font-medium hover:bg-white transition-colors text-sm uppercase tracking-wide"
              >
                Request an Appraisal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== LATEST ARTICLE ===== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Latest Article</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-2xl">
              From our <span className="text-[#6B7280] dark:text-gray-400">blog</span>
            </h2>
          </div>

          {BLOG_POSTS.filter((p) => p.featured).map((post) => (
            <ScrollReveal key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="group block bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xs text-[#6B7280] dark:text-gray-500">{formatDate(post.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-[#6B7280] dark:bg-gray-500" />
                    <span className="font-mono text-xs text-[#6B7280] dark:text-gray-500">{post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-[#6B7280] dark:bg-gray-500" />
                    <span className="font-mono text-xs text-brand-orange uppercase tracking-wider">{post.category}</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-4 text-[#1A1A1A] dark:text-white group-hover:text-brand-orange transition-colors duration-300 max-w-4xl">
                    {post.title}
                  </h3>

                  <p className="text-[#6B7280] dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mb-6">{post.excerpt}</p>

                  <span className="inline-flex items-center gap-2 text-brand-orange text-sm font-medium group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default LandingPage;
