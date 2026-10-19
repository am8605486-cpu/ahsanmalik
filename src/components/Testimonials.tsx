import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0D0D10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
            Client Accolades
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
            Endorsed by Gentlemen of Distinction
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light mt-3 leading-relaxed">
            From Mayfair boardrooms to international royal galas, discover why our clients trust AL HAFIZ COLLECTION for their most defining sartorial moments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#141418] border border-white/5 hover:border-[#C5A880]/30 p-8 flex flex-col justify-between transition-colors relative"
            >
              <Quote className="w-8 h-8 text-[#C5A880]/20 absolute top-6 right-6" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-[#C5A880] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-serif text-base font-semibold text-white uppercase tracking-wider mb-3 leading-snug">
                  {review.title}
                </h3>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white tracking-wide">
                    {review.author}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {review.role}
                  </div>
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1 text-[10px] text-[#C5A880] uppercase tracking-wider font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Buyer</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
