import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export const NewArrivalsSection: React.FC = () => {
  const { navigateToShop } = useShop();
  const newProducts = PRODUCTS.filter((p) => p.isNew).slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-[#0B0B0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autumn / Winter 2026 Drop</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white">
              New Arrivals
            </h2>
          </div>

          <button
            onClick={() => navigateToShop({ category: 'all' })}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880] hover:text-[#d8bc93] font-semibold group self-start md:self-auto"
          >
            <span>VIEW ALL NEW ARRIVALS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const BestSellersSection: React.FC = () => {
  const { navigateToShop } = useShop();
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-[#0D0D10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
              Iconic Sartorial Staples
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white">
              Best-Selling Pieces
            </h2>
          </div>

          <button
            onClick={() => navigateToShop({ category: 'all' })}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880] hover:text-[#d8bc93] font-semibold group self-start md:self-auto"
          >
            <span>DISCOVER CLIENT FAVORITES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PromotionalBanner: React.FC = () => {
  const { navigateToCategory } = useShop();

  return (
    <section className="py-16 bg-[#121216] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-black/80 via-[#181820] to-black/80 border border-[#C5A880]/30 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limited Atelier Commission</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight">
              The Royal Festive & Wedding Couture Capsule
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Curated for grand Barat ceremonies, Walima banquets, and festive Eid gatherings. Featuring hand-embroidered raw silk sherwanis, Banarasi Jamawar waistcoats, and luxury Giza cotton Shalwar Kameez.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => navigateToCategory('ceremonial')}
              className="px-8 py-4 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] transition-colors text-center"
            >
              ROYAL SHERWANIS
            </button>
            <button
              onClick={() => navigateToCategory('waistcoats')}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 text-xs font-medium uppercase tracking-[0.2em] transition-colors text-center"
            >
              JAMAWAR WAISTCOATS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
