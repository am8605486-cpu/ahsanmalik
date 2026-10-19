import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    navigateToProduct,
    formatPrice,
    navigateToCategory,
  } = useShop();

  const [term, setTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setTerm('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const results = term.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(term.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(term.toLowerCase()) ||
          p.fabric.toLowerCase().includes(term.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(term.toLowerCase())
      )
    : [];

  const handleSelectProduct = (product: typeof PRODUCTS[0]) => {
    navigateToProduct(product);
    setIsSearchOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Search Container */}
      <div className="relative w-full max-w-3xl bg-[#141418] border border-white/10 shadow-2xl p-6 sm:p-8 z-10">
        <div className="flex items-center gap-3 border-b border-white/15 pb-4">
          <Search className="w-5 h-5 text-[#C5A880] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search unstitched suit boxes, shalwar kameez, designer kurtas, waistcoats, sherwanis..."
            className="w-full bg-transparent text-white placeholder-neutral-500 text-base sm:text-lg focus:outline-none font-sans"
          />
          {term && (
            <button
              onClick={() => setTerm('')}
              className="text-neutral-400 hover:text-white p-1 text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestions when empty */}
        {!term.trim() && (
          <div className="mt-6">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-3 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Suggested Collections</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Men's Unstitched Suit Boxes", cat: 'unstitched' },
                { name: 'Egyptian Shalwar Kameez', cat: 'shalwar-kameez' },
                { name: 'Designer Black Kurtas', cat: 'kurta' },
                { name: 'Jamawar Waistcoats', cat: 'waistcoats' },
                { name: 'Royal Groom Sherwanis', cat: 'ceremonial' },
                { name: 'Kaptaan Peshawari Chappals', cat: 'footwear' },
                { name: '18k Gold Royal Cufflinks', cat: 'accessories' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigateToCategory(item.cat as any);
                    setIsSearchOpen(false);
                  }}
                  className="px-3 py-1.5 bg-black/40 hover:bg-[#C5A880] text-neutral-300 hover:text-[#0D0D10] border border-white/5 text-xs transition-colors uppercase tracking-wider"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {term.trim() && (
          <div className="mt-6 max-h-[60vh] overflow-y-auto divide-y divide-white/5">
            {results.length > 0 ? (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  className="group py-3.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 px-3 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-14 h-14 object-cover bg-black/40 border border-white/10 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#C5A880]">
                        {product.categoryName}
                      </div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#C5A880] transition-colors">
                        {product.name}
                      </div>
                      <div className="text-xs text-neutral-400 font-light line-clamp-1">
                        {product.fabric}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm font-semibold text-white tabular-nums">
                      {formatPrice(product.price)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#C5A880] transition-colors" />
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-neutral-400 text-sm">
                No bespoke menswear found matching &ldquo;<span className="text-white">{term}</span>&rdquo;.
                <div className="mt-2 text-xs text-neutral-500">
                  Try searching for &quot;suits&quot;, &quot;cotton&quot;, &quot;wool&quot;, or &quot;overcoat&quot;.
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
