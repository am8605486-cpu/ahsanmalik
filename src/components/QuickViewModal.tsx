import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Star, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    formatPrice,
    navigateToProduct,
    setIsSizeGuideOpen,
  } = useShop();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.sizes[0] || '');
      setSelectedColor(quickViewProduct.colors[0]?.name || '');
      setQuantity(1);
      setActiveImageIndex(0);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedSize, selectedColor, quantity);
    setQuickViewProduct(null);
  };

  const handleFullView = () => {
    navigateToProduct(quickViewProduct);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#141418] border border-white/10 shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-neutral-400 hover:text-white bg-black/50 hover:bg-black rounded-full transition-colors"
          aria-label="Close Quick View"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Showcase */}
          <div className="relative bg-[#1A1A20] p-6 flex flex-col justify-between">
            <div className="aspect-[4/3] w-full overflow-hidden bg-black/40 mb-4">
              <img
                src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Thumbnail switcher if multiple images exist */}
            {quickViewProduct.images.length > 1 && (
              <div className="flex items-center gap-3">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-14 border overflow-hidden transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#C5A880] ring-1 ring-[#C5A880]'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-2">
                <span>{quickViewProduct.categoryName}</span>
                <span className="text-neutral-600">·</span>
                <span className="text-[#C5A880]">{quickViewProduct.origin}</span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-white uppercase tracking-wider mb-2">
                {quickViewProduct.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
                <div className="flex text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                  ))}
                </div>
                <span className="text-white font-medium">{quickViewProduct.rating.toFixed(2)}</span>
                <span className="text-neutral-500">({quickViewProduct.reviewCount} client reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="font-sans font-bold text-2xl text-white tabular-nums">
                  {formatPrice(quickViewProduct.price)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-neutral-500 line-through text-base tabular-nums">
                    {formatPrice(quickViewProduct.originalPrice)}
                  </span>
                )}
                {quickViewProduct.originalPrice && (
                  <span className="text-xs text-[#C5A880] uppercase tracking-wider font-semibold">
                    Save {formatPrice(quickViewProduct.originalPrice - quickViewProduct.price)}
                  </span>
                )}
              </div>

              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                {quickViewProduct.shortDescription}
              </p>

              {/* Color Selection */}
              {quickViewProduct.colors.length > 0 && (
                <div className="mb-5">
                  <div className="text-xs uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
                    <span>Color: <strong className="text-white font-medium">{selectedColor}</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    {quickViewProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full transition-transform flex items-center justify-center ${
                          selectedColor === c.name
                            ? 'ring-2 ring-[#C5A880] ring-offset-2 ring-offset-[#141418] scale-110'
                            : 'opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection & Size Guide */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
                  <span>Size: <strong className="text-white font-medium">{selectedSize}</strong></span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-[11px] text-[#C5A880] hover:underline uppercase tracking-wider"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium border transition-colors ${
                        selectedSize === s
                          ? 'border-[#C5A880] bg-[#C5A880] text-[#0D0D10]'
                          : 'border-white/10 text-neutral-300 hover:border-white/30 bg-black/30'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs uppercase tracking-wider text-neutral-400">Quantity:</span>
                <div className="flex items-center border border-white/10 bg-black/30">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-neutral-400 hover:text-white text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm text-white font-medium tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(quickViewProduct.stockCount, quantity + 1))}
                    className="px-3 py-1.5 text-neutral-400 hover:text-white text-sm"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-neutral-400">
                  {quickViewProduct.stockCount} available
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                onClick={handleAdd}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#C5A880] hover:bg-[#d4b58c] text-[#0D0D10] text-xs font-bold tracking-[0.2em] uppercase transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO SHOPPING BAG</span>
              </button>

              <button
                onClick={handleFullView}
                className="w-full flex items-center justify-center gap-2 py-3 text-neutral-300 hover:text-white text-xs tracking-[0.16em] uppercase hover:underline"
              >
                <span>View Full Sartorial Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-6 pt-2 text-[11px] text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#C5A880]" />
                  Express Worldwide Courier
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  Authenticity Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
