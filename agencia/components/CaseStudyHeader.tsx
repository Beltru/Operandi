
import React from 'react';

interface CaseStudyHeaderProps {
  icon: string;
  title: string;
  subtitle: string;
  onClose: () => void;
}

export const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ icon, title, subtitle, onClose }) => (
  <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-white shrink-0 z-20">
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest font-bold text-primary">{subtitle}</span>
        <h2 className="text-text-main text-base font-bold leading-tight">{title}</h2>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <button className="hidden sm:flex h-9 px-4 items-center justify-center rounded-lg border border-border-subtle bg-transparent text-text-muted hover:text-text-main hover:bg-surface-subtle transition-colors text-xs font-bold uppercase tracking-wide">
        Share Report
      </button>
      <button 
        onClick={onClose} 
        aria-label="Close" 
        className="flex size-9 items-center justify-center rounded-lg bg-surface-subtle text-text-muted hover:bg-red-50 hover:text-red-600 transition-colors"
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  </div>
);
