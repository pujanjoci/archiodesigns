import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center pt-36 pb-24">
      <div className="max-w-md w-full mx-auto px-6 text-center space-y-8">
        <span className="font-heading text-6xl md:text-8xl font-bold tracking-widest text-accent block">
          404
        </span>
        <div className="space-y-3">
          <h1 className="font-heading text-xl uppercase tracking-[0.2em] font-bold text-primary-text">
            Page Not Found
          </h1>
          <p className="text-xs text-secondary-text leading-relaxed font-light">
            The spatial coordinates you requested do not exist in our studio’s index. The URL may have changed, or the case study has been archived.
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-3 font-heading text-xs uppercase tracking-[0.2em] bg-primary-text text-white px-8 py-3.5 hover:bg-accent transition-colors"
          >
            <span>Return to Studio</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
