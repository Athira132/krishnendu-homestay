import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen flex items-center justify-center text-center px-4">
      <SEOHead
        title="Page Not Found"
        description="The requested page could not be found. Return to Krishnendu Homestay homepage."
      />
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-800 mx-auto flex items-center justify-center">
          <MapPin className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-4xl font-bold text-forest-950">
          Page Not Found
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          We couldn't find the page you were looking for. Perhaps you'd like to explore our comfortable stays in Guruvayur?
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-sm font-semibold tracking-wide transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
