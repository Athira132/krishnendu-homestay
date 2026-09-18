import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`space-y-3 mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2">
          <span className={`text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full border ${
            isDark
              ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50'
              : 'bg-emerald-50 text-emerald-800 border-emerald-200'
          }`}>
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight ${
        isDark ? 'text-white' : 'text-forest-950'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          isDark ? 'text-stone-300' : 'text-charcoal-600'
        }`}>
          {subtitle}
        </p>
      )}

      {/* Decorative accent divider */}
      <div className={`flex items-center gap-2 pt-1 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="h-0.5 w-12 bg-emerald-600 rounded-full" />
        <span className="w-2 h-2 rounded-full bg-gold-500" />
        <span className="h-0.5 w-6 bg-emerald-600/50 rounded-full" />
      </div>
    </div>
  );
};
