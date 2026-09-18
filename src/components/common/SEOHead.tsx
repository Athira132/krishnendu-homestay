import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | KRISHNENDU HOMESTAY Guruvayur`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | KRISHNENDU HOMESTAY`);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
