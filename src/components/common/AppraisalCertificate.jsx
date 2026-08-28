import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck } from 'lucide-react';

export const AnimatedProgress = ({ label, value, delay = 0 }) => {
    const [width, setWidth] = useState(0);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (!ref) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setWidth(value), delay);
                observer.disconnect();
            }
        }, { threshold: 0.1 });
        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref, value, delay]);

    return (
        <div ref={setRef} className="flex items-center gap-4 py-3">
            <span className="w-24 md:w-32 text-[10px] md:text-xs font-mono text-[#A3A3A3] dark:text-gray-500 tracking-widest uppercase">{label}</span>
            <div className="flex-1 h-0.5 md:h-1 bg-[#E8E4DE] dark:bg-[#1F2937] overflow-hidden">
                <div 
                    className="h-full bg-[#E85D22] transition-all duration-1000 ease-out" 
                    style={{ width: `${width}%` }} 
                />
            </div>
            <span className="w-6 text-right font-mono text-sm font-bold text-[#1A1A1A] dark:text-white">{value}</span>
        </div>
    );
};

export const AnimatedScore = ({ value }) => {
    return <span>{value}</span>;
};

export const AppraisalCertificate = ({
    title = 'EN–MY Translation Memory',
    certificateId = 'MAY-2026-EN-MY-001',
    subtitle = 'NLP • Parallel corpus • On-prem appraisal',
    overallScore = 93,
    scores = [
        { label: 'Completeness', value: 94 },
        { label: 'Uniqueness', value: 99 },
        { label: 'Accuracy', value: 91 },
        { label: 'Timeliness', value: 88 },
    ],
    footer = 'NLP • Parallel corpus • On-prem appraisal',
    showActions = true,
    proofHref = '/case-study/en-my-corpus',
}) => {
    return (
        <div className="bg-white dark:bg-[#0f0f0f] rounded-xl overflow-hidden shadow-sm border border-[#E8E4DE] dark:border-[#1F2937] border-t-[3px] border-t-[#E85D22]">
            {/* Top Header */}
            <div className="p-6 md:p-8 flex items-start justify-between">
                <div>
                    <p className="text-[10px] font-mono text-[#A3A3A3] dark:text-gray-500 uppercase tracking-widest mb-1.5">Quality Certificate</p>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] dark:text-white mb-1">{title}</h3>
                    <p className="text-xs font-mono text-[#A3A3A3] dark:text-gray-500">{certificateId} &bull; {subtitle}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EAF5E5] dark:bg-[#1A2E1C] rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] dark:bg-[#4CAF50]" />
                    <span className="text-[10px] font-mono text-[#2E7D32] dark:text-[#4CAF50] font-bold tracking-widest uppercase">Verified</span>
                </div>
            </div>

            {/* Middle Content */}
            <div className="px-6 md:px-8 pb-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start border-b border-[#E8E4DE] dark:border-[#1F2937]">
                <div className="flex flex-col items-center md:items-start flex-shrink-0 min-w-[120px]">
                    <p className="text-[10px] font-mono text-[#A3A3A3] dark:text-gray-500 uppercase tracking-widest mb-2 hidden md:block">Overall Score</p>
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-6xl md:text-7xl font-display tracking-tighter text-[#1A1A1A] dark:text-white leading-none">
                            <AnimatedScore value={overallScore} />
                        </span>
                    </div>
                    <span className="text-lg text-[#A3A3A3] dark:text-gray-500 font-mono mb-4">/ 100</span>
                    <div className="flex items-center gap-1.5">
                        <BadgeCheck className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50]" />
                        <span className="text-[10px] font-bold text-[#2E7D32] dark:text-[#4CAF50] tracking-widest uppercase">Verified</span>
                    </div>
                </div>

                <div className="flex-1 w-full flex flex-col justify-center pt-2">
                    {scores.map(({ label, value }, i) => (
                        <AnimatedProgress key={label} label={label} value={value} delay={i * 200} />
                    ))}
                </div>
            </div>

            <div className="p-4 md:px-8 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#A3A3A3] dark:text-gray-500">{footer}</div>
                {showActions && (
                    <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
                        <div className="hidden sm:flex items-center gap-1.5 mr-2">
                            <BadgeCheck className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50]" />
                            <span className="text-[10px] font-bold text-[#2E7D32] dark:text-[#4CAF50] tracking-widest uppercase">Verified</span>
                        </div>
                        <Link to={proofHref} className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border border-[#E8E4DE] dark:border-[#333] rounded hover:bg-[#F3F1EE] dark:hover:bg-[#1A1A1A] transition-colors bg-white dark:bg-[#0a0a0a] text-[#1A1A1A] dark:text-white whitespace-nowrap">
                            View proof
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
