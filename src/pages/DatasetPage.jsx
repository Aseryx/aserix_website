import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, X, BadgeCheck, ShieldCheck, Radio, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../hooks/useScrollReveal.jsx';
import Navigation from '../components/layout/Navigation.jsx';
import Footer from '../components/layout/Footer.jsx';
import { AnimatedProgress, AnimatedScore } from '../components/common/AppraisalCertificate.jsx';

/* -------------------------------------------------------
   DATASET-SPECIFIC DATA
   ------------------------------------------------------- */

const SCORES = [
    { label: 'Completeness', value: 94 },
    { label: 'Uniqueness', value: 99 },
    { label: 'Accuracy', value: 91 },
    { label: 'Timeliness', value: 88 },
];

const STATS = [
    { val: '4.6M', label: 'Segment pairs' },
    { val: '2016–2024', label: 'Collection span' },
    { val: '0%', label: 'Synthetic data' },
    { val: 'JSONL / Unicode', label: 'Format' },
];

const DOMAINS = [
    'Medical / clinic talks',
    'Business',
    'Engineering',
    'General conversational',
    'Documentary',
    'Shopping & retail',
    'Relationships',
    'General media localization',
];

const PERMITTED = [
    'Research & academic use',
    'Commercial AI/ML training',
    'Machine translation systems',
    'Model evaluation & benchmarking',
    'Internal product development',
    'LLM fine-tuning & RLHF workflows',
];

const RESTRICTED = [
    'Raw dataset redistribution',
    'Resale or sublicensing',
    'Public release without agreement',
    'Third-party transfer',
];

const QA_STEPS = [
    { n: '01', label: 'Outsourced translation', note: '~80 professional freelancers' },
    { n: '02', label: 'In-house curation', note: '15–25 full-time editors' },
    { n: '03', label: 'Client review', note: 'National broadcast standards applied' },
    { n: '04', label: 'Corrections & sign-off', note: '3–4 rounds per batch' },
];

const LICENSING = [
    { type: 'Non-exclusive', isDefault: true, desc: 'Multiple buyers may license simultaneously. Standard for commercial AI training and research.' },
    { type: 'Evaluation subset', isDefault: false, desc: '100K–1M segment samples under separate terms for pre-purchase validation.' },
    { type: 'Time-based exclusivity', isDefault: false, desc: '2–3 year exclusive terms available. Scope, use case, and pricing negotiated per deal.' },
];

/* -------------------------------------------------------
   DATASET PAGE
   ------------------------------------------------------- */

const DatasetPage = () => {
    useEffect(() => {
        document.title = 'Aseryx | EN–MY Professional Translation Memory Corpus';
    }, []);

    return (
        <div className="min-h-screen bg-[#F9F8F6] dark:bg-[#0a0a0a] text-[#1A1A1A] dark:text-white font-sans selection:bg-brand-orange selection:text-black overflow-x-hidden">

            {/* Nav */}
            <Navigation variant="enterprise" />

            {/* ===== BREADCRUMB ===== */}
            <div className="pt-24 md:pt-28">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 border-b border-[#E8E4DE] dark:border-[#1F2937]">
                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center gap-1.5 text-xs font-mono text-[#6B7280] dark:text-gray-500">
                            <li>
                                <Link to="/datasets" className="hover:text-[#1A1A1A] dark:hover:text-white transition-colors">
                                    Datasets
                                </Link>
                            </li>
                            <li><ChevronRight className="w-3 h-3" /></li>
                            <li className="text-[#1A1A1A] dark:text-white">EN–MY Professional Translation Memory</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* ===== HERO ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Badge strip */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5E5] dark:bg-[#1A2E1C] border border-[#2E7D32]/20 dark:border-[#4CAF50]/20">
                            <BadgeCheck className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50]" />
                            <span className="text-[10px] font-mono font-bold text-[#2E7D32] dark:text-[#4CAF50] tracking-widest uppercase">Verified</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20">
                            <span className="text-[10px] font-mono font-bold text-brand-orange tracking-widest uppercase">Human-curated</span>
                        </span>
                        {['English → Burmese', 'Parallel corpus', 'NLP / MT / LLM training'].map(tag => (
                            <span key={tag} className="px-3 py-1 text-[10px] font-mono text-[#6B7280] dark:text-gray-500 border border-[#E8E4DE] dark:border-[#1F2937] rounded-full tracking-wider uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Heading */}
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 max-w-4xl">
                        EN–MY Professional<br />
                        <span className="italic text-[#6B7280] dark:text-gray-400">Translation Memory Corpus</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[#6B7280] dark:text-gray-400 leading-relaxed mb-12 max-w-2xl">
                        4.6 million human-verified segment pairs from eight years of professional media localization. Never published online. Zero synthetic data. Built to national Myanmar broadcast standards.
                    </p>

                    {/* Stat strip */}
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E8E4DE] dark:bg-[#1F2937] border border-[#E8E4DE] dark:border-[#1F2937] overflow-hidden rounded-none md:card-oasis">
                            {STATS.map(({ val, label }) => (
                                <div key={label} className="bg-white dark:bg-[#0f0f0f] p-5 md:p-6">
                                    <div className="font-display text-2xl md:text-3xl text-[#1A1A1A] dark:text-white tracking-tight mb-1">{val}</div>
                                    <div className="text-[10px] font-mono text-[#A3A3A3] dark:text-gray-500 tracking-widest uppercase">{label}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== DATA APPRAISAL ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Data Appraisal</p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
                            Cryptographically verified.{' '}
                            <span className="italic text-[#6B7280] dark:text-gray-400">Proof, not promises.</span>
                        </h2>
                        <p className="text-[#6B7280] dark:text-gray-400 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
                            This dataset has passed Aseryx's two-layer cryptographic appraisal. Provenance verified. Information richness scored. No raw data was transmitted at any point in the process.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Left: Dimensions */}
                        <ScrollReveal delay={100}>
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    {['Completeness', 'Accuracy', 'Uniqueness', 'Authenticity'].map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-[10px] font-mono bg-[#F9F8F6] dark:bg-[#0a0a0a] border border-[#E8E4DE] dark:border-[#1F2937] text-[#6B7280] dark:text-gray-500 uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right: Certificate card */}
                        <ScrollReveal delay={200}>
                            <div className="bg-white dark:bg-[#0f0f0f] rounded-xl overflow-hidden shadow-sm border border-[#E8E4DE] dark:border-[#1F2937] border-t-[3px] border-t-[#E85D22]">
                                {/* Header */}
                                <div className="p-6 md:p-8 flex items-start justify-between">
                                    <div>
                                        <p className="text-[10px] font-mono text-[#A3A3A3] dark:text-gray-500 uppercase tracking-widest mb-1.5">Quality Certificate</p>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] dark:text-white mb-1">EN–MY Translation Memory</h3>
                                        <p className="text-xs font-mono text-[#A3A3A3] dark:text-gray-500">MAY-2026-EN-MY-001</p>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EAF5E5] dark:bg-[#1A2E1C] rounded-full">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] dark:bg-[#4CAF50]" />
                                        <span className="text-[10px] font-mono text-[#2E7D32] dark:text-[#4CAF50] font-bold tracking-widest uppercase">Verified</span>
                                    </div>
                                </div>

                                {/* Score + Bars */}
                                <div className="px-6 md:px-8 pb-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start border-b border-[#E8E4DE] dark:border-[#1F2937]">
                                    {/* Score */}
                                    <div className="flex flex-col items-center md:items-start flex-shrink-0 min-w-[120px]">
                                        <p className="text-[10px] font-mono text-[#A3A3A3] dark:text-gray-500 uppercase tracking-widest mb-2 hidden md:block">Overall Score</p>
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-6xl md:text-7xl font-display tracking-tighter text-[#1A1A1A] dark:text-white leading-none">
                                                <AnimatedScore value={93} />
                                            </span>
                                        </div>
                                        <span className="text-lg text-[#A3A3A3] dark:text-gray-500 font-mono mb-4">/ 100</span>
                                        <div className="flex items-center gap-1.5">
                                            <BadgeCheck className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50]" />
                                            <span className="text-[10px] font-bold text-[#2E7D32] dark:text-[#4CAF50] tracking-widest uppercase">Verified</span>
                                        </div>
                                    </div>

                                    {/* Progress Bars */}
                                    <div className="flex-1 w-full flex flex-col justify-center pt-2">
                                        {SCORES.map(({ label, value }, i) => (
                                            <AnimatedProgress key={label} label={label} value={value} delay={i * 200} />
                                        ))}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="p-4 md:px-8 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-xs font-mono text-[#A3A3A3] dark:text-gray-500">
                                        NLP &bull; Parallel corpus
                                    </div>
                                    <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
                                        <div className="hidden sm:flex items-center gap-1.5 mr-2">
                                            <BadgeCheck className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50]" />
                                            <span className="text-[10px] font-bold text-[#2E7D32] dark:text-[#4CAF50] tracking-widest uppercase">Verified</span>
                                        </div>
                                        <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border border-[#E8E4DE] dark:border-[#333] rounded hover:bg-[#F3F1EE] dark:hover:bg-[#1A1A1A] transition-colors bg-white dark:bg-[#0a0a0a] text-[#1A1A1A] dark:text-white whitespace-nowrap">
                                            View proof
                                        </button>
                                        <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border border-[#E8E4DE] dark:border-[#333] rounded hover:bg-[#F3F1EE] dark:hover:bg-[#1A1A1A] transition-colors bg-white dark:bg-[#0a0a0a] text-[#1A1A1A] dark:text-white whitespace-nowrap">
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ===== PROVENANCE ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Provenance</p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
                            Eight years of professional{' '}
                            <span className="italic text-[#6B7280] dark:text-gray-400">localization workflows.</span>
                        </h2>
                        <p className="text-[#6B7280] dark:text-gray-400 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
                            This corpus was produced for professional media localization between 2016 and 2024. It has never appeared online — no contamination risk for model pre-training or benchmarking. A genuine differentiator against web-scraped alternatives.
                        </p>
                    </div>

                    {/* QA Steps */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                        {QA_STEPS.map(({ n, label, note }, i) => (
                            <ScrollReveal key={n} delay={i * 100}>
                                <div className="group h-full bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden border border-[#E8E4DE] dark:border-[#1F2937] hover:border-brand-orange/20 transition-colors">
                                    <div className="p-5 md:p-6">
                                        <span className="font-mono text-4xl md:text-5xl leading-none text-gray-200 dark:text-gray-800 group-hover:text-brand-orange/20 transition-colors select-none">{n}</span>
                                        <h3 className="font-display text-base md:text-lg text-[#1A1A1A] dark:text-white mt-4 mb-2">{label}</h3>
                                        <p className="text-xs text-[#6B7280] dark:text-gray-500 leading-relaxed">{note}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Callout banner */}
                    <ScrollReveal delay={400}>
                        <div className="bg-brand-orange/10 dark:bg-brand-orange/5 border border-brand-orange/20 card-oasis p-4 md:p-5 flex items-center gap-3 md:gap-4">
                            <Radio className="w-5 h-5 text-brand-orange flex-shrink-0" />
                            <span className="text-sm text-[#1A1A1A] dark:text-gray-300 leading-relaxed">
                                Many translations produced for national Myanmar TV — adhering to Burmese national language standards, orthography, and broadcasting requirements.
                            </span>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== DOMAIN COVERAGE ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Domain Coverage</p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
                            Eight domains <span className="italic text-[#6B7280] dark:text-gray-400">covered.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                        {DOMAINS.map((domain, i) => (
                            <ScrollReveal key={domain} delay={i * 50}>
                                <div className="group bg-white dark:bg-[#0f0f0f] border border-[#E8E4DE] dark:border-[#1F2937] rounded-lg p-4 flex items-center gap-3 hover:border-brand-orange/30 transition-colors">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                                    <span className="text-sm text-[#6B7280] dark:text-gray-400 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors">{domain}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== USE CASES & RESTRICTIONS ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Use Cases & Restrictions</p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
                            Clear terms.{' '}
                            <span className="italic text-[#6B7280] dark:text-gray-400">Agreed in writing.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Permitted */}
                        <ScrollReveal delay={100}>
                            <div className="h-full bg-[#EAF5E5] dark:bg-[#111111] card-oasis overflow-hidden border border-[#2E7D32]/15 dark:border-[#4CAF50]/15 p-6 md:p-8">
                                <p className="font-mono text-xs text-[#2E7D32] dark:text-[#4CAF50] tracking-widest uppercase font-bold mb-6">
                                    Permitted under written license
                                </p>
                                <div className="space-y-0">
                                    {PERMITTED.map(item => (
                                        <div key={item} className="flex items-center gap-3 py-3 border-b border-[#2E7D32]/10 dark:border-[#4CAF50]/10 last:border-b-0">
                                            <Check className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50] flex-shrink-0" />
                                            <span className="text-sm text-[#1A1A1A] dark:text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Restricted */}
                        <ScrollReveal delay={200}>
                            <div className="h-full bg-red-50 dark:bg-[#111111] card-oasis-alt overflow-hidden border border-red-200/50 dark:border-red-900/30 p-6 md:p-8">
                                <p className="font-mono text-xs text-red-700 dark:text-red-400 tracking-widest uppercase font-bold mb-6">
                                    Restricted unless separately agreed
                                </p>
                                <div className="space-y-0">
                                    {RESTRICTED.map(item => (
                                        <div key={item} className="flex items-center gap-3 py-3 border-b border-red-200/30 dark:border-red-900/20 last:border-b-0">
                                            <X className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                                            <span className="text-sm text-[#1A1A1A] dark:text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ===== LICENSING ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Licensing</p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
                            Three models <span className="italic text-[#6B7280] dark:text-gray-400">available.</span>
                        </h2>
                    </div>

                    {/* License cards */}
                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
                        {LICENSING.map(({ type, isDefault, desc }, i) => (
                            <ScrollReveal key={type} delay={i * 100}>
                                <div className={`group h-full bg-white dark:bg-[#0f0f0f] overflow-hidden relative p-6 md:p-8 card-oasis transition-colors ${
                                    isDefault
                                        ? 'border-2 border-brand-orange'
                                        : 'border border-[#E8E4DE] dark:border-[#1F2937] hover:border-brand-orange/30'
                                }`}>
                                    {isDefault && (
                                        <div className="absolute top-0 left-5 bg-brand-orange text-black text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-b">
                                            Default
                                        </div>
                                    )}
                                    <h3 className={`font-display text-xl md:text-2xl text-[#1A1A1A] dark:text-white mb-3 ${isDefault ? 'mt-4' : ''}`}>{type}</h3>
                                    <p className="text-sm text-[#6B7280] dark:text-gray-400 leading-relaxed">{desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Info bar */}
                    <ScrollReveal delay={300}>
                        <div className="bg-[#EDEBE8] dark:bg-[#111111] border border-[#E8E4DE] dark:border-[#1F2937] card-oasis-alt p-4 md:px-6 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
                            <span className="text-xs font-mono text-[#6B7280] dark:text-gray-500 tracking-wide">
                                Access control: seller approves each buyer individually
                            </span>
                            <span className="hidden md:block w-px h-4 bg-[#D1D5DB] dark:bg-gray-700" />
                            <span className="text-xs font-mono text-[#6B7280] dark:text-gray-500 tracking-wide">
                                Platform fee: 20% on Aseryx-sourced transactions
                            </span>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-4xl mx-auto relative z-10 text-center section-divider pt-12 md:pt-16">
                    <ScrollReveal>
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Request Access</p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                            One appraisal away from knowing{' '}
                            <span className="italic text-[#6B7280] dark:text-gray-400">what this data is worth.</span>
                        </h2>
                        <p className="text-[#6B7280] dark:text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                            Submit your organization, intended use case, and segment volume. The data owner reviews and responds to each request individually.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://tally.so/r/dWdWQq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-black font-medium hover:bg-white transition-colors text-sm uppercase tracking-wide"
                            >
                                Request Access
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="https://tally.so/r/gDGD7O"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 border border-[#E5E5E5] dark:border-[#333] text-[#1A1A1A] dark:text-white font-medium hover:bg-[#F3F4F6] dark:hover:bg-[#1A1A1A] transition-colors text-sm uppercase tracking-wide"
                            >
                                Schedule a Call
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer variant="enterprise" />

        </div>
    );
};

export default DatasetPage;
