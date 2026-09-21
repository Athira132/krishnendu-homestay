import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  structuredData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = 'Guruvayur homestay, Homestay in Guruvayur, Guruvayur accommodation, Rooms in Guruvayur, Stay near Guruvayur Temple, Guruvayur tourist home, Accommodation near Guruvayur Temple',
  canonicalPath,
  ogImage = '/images/hero-guruvayur.png',
  structuredData,
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title.includes('Guruvayur') ? title : `${title} | Guruvayur Homestay`;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // 4. Open Graph Tags
    const ogTags: { [key: string]: string } = {
      'og:title': document.title,
      'og:description': description,
      'og:image': ogImage,
      'og:type': 'website',
    };

    if (canonicalPath) {
      ogTags['og:url'] = window.location.origin + canonicalPath;
    }

    Object.entries(ogTags).forEach(([prop, val]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', val);
    });

    // 5. Canonical Link
    if (canonicalPath) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', window.location.origin + canonicalPath);
    }

    // 6. Dynamic JSON-LD Structured Data
    if (structuredData) {
      let scriptTag = document.getElementById('page-structured-data');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'page-structured-data';
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonicalPath, ogImage, structuredData]);

  return null;
};
