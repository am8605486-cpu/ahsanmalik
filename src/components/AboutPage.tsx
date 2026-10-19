import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Scissors, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateToShop, setCurrentPage } = useShop();

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
            Our Heritage & Philosophy
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white leading-tight mb-6">
            Crafting Unrivaled Eastern Elegance for the Modern Gentleman
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            <strong className="text-white font-medium">AL HAFIZ COLLECTION</strong> was established to champion uncompromising quality in Pakistani men&apos;s fashion. In an era dominated by synthetic mass production, we celebrate the purity of unstitched 8-Pound Boski silk, combed Egyptian Giza cotton latha, handwoven Karandi, and master-tailored Shalwar Kameez suits.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative aspect-[4/3] bg-[#16161A] border border-white/10 overflow-hidden shadow-2xl">
            <img
              src="/src/assets/images/product_charcoal_suit_1792395650852.jpg"
              alt="Tailoring Heritage AL HAFIZ"
              className="w-full h-full object-cover filter brightness-95"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
              Centuries of Subcontinental Tailoring Artistry
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              We preserve the royal heritage of Mughal courts with modern sartorial tailoring. From the crisp German interlining in our stiff Ban collars to the precision of French cuffs and full-pleat shalwars, every stitch is executed by master ustads in Lahore and Karachi.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              Our unstitched fabric boxes represent the gold standard of bespoke gifting—featuring authentic gold selvedge hallmarks, custom cast brass and mother-of-pearl collar buttons, measuring tapes, and matching embroidery spools.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-[#C5A880] font-bold text-lg tabular-nums block">8-Pound Silk</span>
                <span className="text-neutral-400">Pure Chinese mulberry Boski with golden luster</span>
              </div>
              <div>
                <span className="text-[#C5A880] font-bold text-lg tabular-nums block">Giza 45 Cotton</span>
                <span className="text-neutral-400">Extra-long staple Egyptian combed cotton latha</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-white/10">
          <div className="p-8 bg-[#141418] border border-white/5 space-y-3">
            <Scissors className="w-6 h-6 text-[#C5A880]" />
            <h3 className="font-serif text-base font-bold uppercase text-white tracking-wider">
              Bespoke Ban Collar Roll
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Our collars use German-fused canvas interlining that retains its crisp posture throughout whole-day wear and repeated gentle washes.
            </p>
          </div>

          <div className="p-8 bg-[#141418] border border-white/5 space-y-3">
            <Sparkles className="w-6 h-6 text-[#C5A880]" />
            <h3 className="font-serif text-base font-bold uppercase text-white tracking-wider">
              Artisanal Presentation Boxes
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Every unstitched suit is nestled in a magnetic-clasp heirloom rigid gift box with gold crest embossing, buttons card, and brand certification tag.
            </p>
          </div>

          <div className="p-8 bg-[#141418] border border-white/5 space-y-3">
            <Compass className="w-6 h-6 text-[#C5A880]" />
            <h3 className="font-serif text-base font-bold uppercase text-white tracking-wider">
              Private Boutiques in Pakistan & Dubai
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Experience private fitting consultations and luxury fabric previews at our flagship ateliers on MM Alam Road Lahore, DHA Karachi, Blue Area Islamabad, and Downtown Dubai.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-10 text-center">
          <button
            onClick={() => navigateToShop()}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          >
            <span>BROWSE THE 2026 ARCHIVE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
