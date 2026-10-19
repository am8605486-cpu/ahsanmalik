import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Scissors, Sparkles, Feather } from 'lucide-react';

export const EditorialStory: React.FC = () => {
  const { navigateToShop, setCurrentPage } = useShop();

  return (
    <section className="py-20 lg:py-28 bg-[#0B0B0D] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] bg-[#16161A] border border-white/10 overflow-hidden shadow-2xl">
              <img
                src="/src/assets/images/hero_shalwar_kameez_1792394426422.jpg"
                alt="AL HAFIZ COLLECTION Master Tailoring"
                className="w-full h-full object-cover object-center filter brightness-95"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Craft Quote */}
              <div className="absolute bottom-6 inset-x-6 bg-[#0D0D10]/90 backdrop-blur-md p-5 border border-white/10">
                <p className="font-serif italic text-sm text-neutral-200 leading-relaxed">
                  &ldquo;A masterfully tailored Shalwar Kameez requires mathematical precision in the Ban collar roll, flawless shoulder fall, and pure natural fabrics that breathe in every season.&rdquo;
                </p>
                <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
                  Mian Al-Hafiz · Master Ustad & Cutter
                </div>
              </div>
            </div>

            {/* Overlapping Detail Frame */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 h-48 bg-[#18181F] border border-[#C5A880]/40 overflow-hidden shadow-2xl z-10">
              <img
                src="/src/assets/images/product_ivory_shalwar_kameez_1792394426969.jpg"
                alt="Embroidered Ban Collar Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
              The Heritage Atelier
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white leading-tight">
              Honoring Century-Old Pakistani Tailoring & Regal Embroidery
            </h2>

            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Founded on the belief that Eastern menswear deserves the highest standard of sartorial excellence, <strong className="text-white font-medium">AL HAFIZ COLLECTION</strong> crafts Pakistan&rsquo;s most sought-after Shalwar Kameez, luxury festive waistcoats, and regal groom sherwanis.
            </p>

            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Every garment in our catalog is cut from premium natural fibers: extra-long staple Egyptian Giza cotton, pure raw silk, and high-density wrinkle-free wash-and-wear. Each piece is hand-finished in our Lahore and Karachi ateliers with single-needle precision and genuine mother-of-pearl buttons.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 bg-[#141418] border border-white/5">
                <Scissors className="w-5 h-5 text-[#C5A880] mb-2" />
                <h4 className="text-xs font-semibold uppercase text-white tracking-wider mb-1">
                  Stiff Ban Collar
                </h4>
                <p className="text-[11px] text-neutral-400 font-light">
                  German interlining that maintains crisp structure through repeated washings.
                </p>
              </div>

              <div className="p-4 bg-[#141418] border border-white/5">
                <Sparkles className="w-5 h-5 text-[#C5A880] mb-2" />
                <h4 className="text-xs font-semibold uppercase text-white tracking-wider mb-1">
                  Zardozi & Tilla
                </h4>
                <p className="text-[11px] text-neutral-400 font-light">
                  Hand-done bullion embroidery by heritage artisans with antique gold wire.
                </p>
              </div>

              <div className="p-4 bg-[#141418] border border-white/5">
                <Feather className="w-5 h-5 text-[#C5A880] mb-2" />
                <h4 className="text-xs font-semibold uppercase text-white tracking-wider mb-1">
                  Combed Giza Cotton
                </h4>
                <p className="text-[11px] text-neutral-400 font-light">
                  Supreme breathability, ultra-smooth latha finish, and zero synthetic itch.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => navigateToShop()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                <span>EXPLORE THE ARCHIVE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-white text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors"
              >
                <span>OUR ATELIER HERITAGE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
