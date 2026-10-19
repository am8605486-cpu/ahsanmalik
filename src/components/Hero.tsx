import React from 'react';
import { useShop } from '../context/ShopContext';
import { HERO_IMAGE } from '../data/products';
import { ArrowRight, Sparkles, Shield, Clock, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateToShop, navigateToCategory } = useShop();

  return (
    <section className="relative w-full bg-[#0B0B0D] overflow-hidden">
      {/* Full-width editorial hero image with measured luxury contrast scrim */}
      <div className="relative min-h-[580px] lg:min-h-[720px] flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="AL HAFIZ COLLECTION Luxury Pakistani Shalwar Kameez & Waistcoat"
            className="w-full h-full object-cover object-top opacity-65 filter brightness-95 transition-transform duration-1000 scale-100 hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          {/* Measured gradient scrim for impeccable typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            {/* Subtle editorial kicker */}
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#C5A880] mb-5 font-medium">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Unstitched Suit Boxes & Royal Shalwar Kameez Edit 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.04em] text-white leading-[1.1] uppercase mb-6 drop-shadow-sm [text-wrap:balance]">
              ELEVATE YOUR STYLE.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed tracking-wide mb-10 max-w-xl">
              Discover timeless menswear crafted for the modern gentleman. Genuine 8-Pound pure Boski silk, Egyptian Giza cotton unstitched suit boxes, and tailored Shalwar Kameez crafted with master precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => navigateToCategory('unstitched')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 shadow-lg shadow-[#C5A880]/15"
              >
                <span>SHOP UNSTITCHED SUITS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigateToCategory('shalwar-kameez')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-200 backdrop-blur-sm"
              >
                <span>EXPLORE SHALWAR KAMEEZ</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Craftsmanship Strip */}
      <div className="border-y border-white/10 bg-[#101013]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-neutral-300 text-xs">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0" />
              <div>
                <div className="font-semibold text-white uppercase tracking-wider text-[11px]">8-Pound Boski & Giza Cotton</div>
                <div className="text-neutral-400 text-[10px]">Pure unstitched luxury fabrics</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Compass className="w-4 h-4 text-[#C5A880] shrink-0" />
              <div>
                <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Free Shipping in Pakistan</div>
                <div className="text-neutral-400 text-[10px]">On orders over Rs. 5,000</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-[#C5A880] shrink-0" />
              <div>
                <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Cash on Delivery (COD)</div>
                <div className="text-neutral-400 text-[10px]">Pay upon delivery inspection</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
              <div>
                <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Private Boutiques</div>
                <div className="text-neutral-400 text-[10px]">Lahore, Karachi, Islamabad, Dubai</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
