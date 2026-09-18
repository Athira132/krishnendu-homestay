import React from 'react';
import { Shield, Sparkles, HeartHandshake, Compass, Wind, Home } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const HighlightsSection: React.FC = () => {
  const features = [
    {
      icon: Compass,
      title: 'Proximity to Guruvayur Temple',
      description:
        'Peacefully nestled in North Nada, allowing convenient morning and evening darshan access without commercial noise.',
    },
    {
      icon: Home,
      title: 'Homely & Devotional Retreat',
      description:
        'Designed as a welcoming sanctuary for pilgrims, devotees, and traveling families seeking peace and quiet reflection.',
    },
    {
      icon: Wind,
      title: 'Air-Conditioned Comfort',
      description:
        'Cool, clean, and restful bedrooms featuring comfortable beds, quality linens, and attached private bathrooms.',
    },
    {
      icon: HeartHandshake,
      title: 'Warm Kerala Hospitality',
      description:
        'Attentive personal care, respectful service, and helpful guidance for local temple rituals and transport.',
    },
    {
      icon: Sparkles,
      title: 'Spotless Cleanliness',
      description:
        'High standards of hygiene, spotless floors, fresh bed linen, and thoroughly sanitized facilities.',
    },
    {
      icon: Shield,
      title: 'Secure & Private Compound',
      description:
        'Gated residential property with parking space and a safe environment for elderly pilgrims and children.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-y border-[#EADBCE]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY STAY WITH US"
          title="Comfort, Peace & Warm Hospitality"
          subtitle="Combining traditional Kerala values with thoughtful modern accommodation for your pilgrimage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center mb-5 group-hover:bg-forest-800 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest-950 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
