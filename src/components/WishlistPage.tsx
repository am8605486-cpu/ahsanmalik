import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Heart, ArrowRight } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, navigateToShop } = useShop();

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
              Curated Favorites
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
              Your Personal Wishlist
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm font-light mt-1">
              Garments and tailored pieces saved for your upcoming fittings and occasions.
            </p>
          </div>

          <div className="text-xs text-neutral-400">
            <span className="text-white font-semibold tabular-nums">{wishlistProducts.length}</span> pieces saved
          </div>
        </div>

        {wishlistProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-[#121215] border border-white/5 p-8 max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-neutral-600 mx-auto mb-4 stroke-[1]" />
            <h3 className="font-serif text-xl uppercase tracking-wider text-white mb-2">
              Your Wishlist is Empty
            </h3>
            <p className="text-neutral-400 text-xs font-light max-w-md mx-auto mb-8 leading-relaxed">
              Explore our bespoke suits, fine cashmere knitwear, and handcrafted Italian footwear. Click the heart icon on any piece to save it to your curated wishlist.
            </p>
            <button
              onClick={() => navigateToShop()}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C5A880] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#d8bc93] transition-colors"
            >
              <span>EXPLORE THE COLLECTION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
