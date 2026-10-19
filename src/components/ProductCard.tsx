import React, { useState } from 'react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    navigateToProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice,
  } = useShop();

  const isFavorited = isInWishlist(product.id);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [showSizeSelector, setShowSizeSelector] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.sizes.length > 1 && !showSizeSelector) {
      setShowSizeSelector(true);
      return;
    }
    addToCart(product, selectedSize, product.colors[0]?.name || 'Standard', 1);
    setShowSizeSelector(false);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const handleSizeClick = (e: React.MouseEvent, size: string) => {
    e.stopPropagation();
    setSelectedSize(size);
    addToCart(product, size, product.colors[0]?.name || 'Standard', 1);
    setShowSizeSelector(false);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <div
      onClick={() => navigateToProduct(product)}
      className="group relative flex flex-col bg-[#121215] border border-white/5 hover:border-[#C5A880]/40 transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/50"
    >
      {/* Product Image Slot (65-75% height) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#18181C]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Subtle Dark Gradient Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity" />

        {/* Top Floating Actions: Status & Wishlist */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-1.5">
            {product.isNew && (
              <span className="text-[10px] uppercase tracking-widest text-[#0D0D10] bg-[#C5A880] font-bold px-2 py-0.5">
                New
              </span>
            )}
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[10px] uppercase tracking-widest text-white bg-rose-950/80 border border-rose-500/30 px-2 py-0.5">
                Privilege Offer
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className="pointer-events-auto w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:text-[#C5A880] hover:bg-black/90 transition-all"
            aria-label={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorited ? 'fill-[#C5A880] text-[#C5A880]' : 'text-neutral-300'
              }`}
            />
          </button>
        </div>

        {/* Quick View Button (Desktop hover reveal) */}
        <div className="absolute bottom-3 inset-x-3 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-black/80 hover:bg-black text-white text-xs tracking-wider uppercase backdrop-blur-sm border border-white/20 hover:border-[#C5A880] transition-colors w-full justify-center"
          >
            <Eye className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Content Slot */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Zero-Pill Unboxed Clean Metadata */}
          <div className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-neutral-400 mb-2">
            <span>{product.categoryName}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#C5A880] font-medium">{product.stockCount <= 5 ? `Only ${product.stockCount} Left` : 'In Atelier'}</span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-base font-semibold text-white group-hover:text-[#C5A880] transition-colors line-clamp-1 leading-snug">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-neutral-400">
            <div className="flex items-center text-[#C5A880]">
              <Star className="w-3 h-3 fill-[#C5A880]" />
            </div>
            <span className="font-medium text-neutral-200 text-[11px]">{product.rating.toFixed(1)}</span>
            <span className="text-neutral-500 text-[11px]">({product.reviewCount})</span>
          </div>
        </div>

        {/* Price & Action Area */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-sans font-semibold text-white tabular-nums text-base">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-500 line-through tabular-nums">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Quick Add or Size Drawer */}
          <div className="relative">
            {showSizeSelector ? (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 bottom-full mb-2 bg-[#1C1C22] border border-[#C5A880]/40 p-2 shadow-2xl z-30 min-w-[160px] animate-fadeIn"
              >
                <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5 px-1 font-medium">
                  Select Size:
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={(e) => handleSizeClick(e, sz)}
                      className="px-2 py-1 text-xs text-white bg-black/40 hover:bg-[#C5A880] hover:text-[#0D0D10] border border-white/10 transition-colors uppercase font-medium"
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <button
              onClick={handleQuickAdd}
              className={`p-2 rounded-sm border transition-all ${
                addedSuccess
                  ? 'bg-emerald-950 text-emerald-400 border-emerald-500'
                  : 'bg-white/5 hover:bg-[#C5A880] text-neutral-300 hover:text-[#0D0D10] border-white/10 hover:border-[#C5A880]'
              }`}
              title="Add to Shopping Bag"
              aria-label={`Add ${product.name} to bag`}
            >
              {addedSuccess ? (
                <Check className="w-4 h-4" />
              ) : (
                <ShoppingBag className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
