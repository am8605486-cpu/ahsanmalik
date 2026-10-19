import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { Category } from '../types';
import { SlidersHorizontal, ArrowUpDown, X, RotateCcw, Search } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    formatPrice,
  } = useShop();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Available unique colors and sizes from dataset
  const availableColors = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => p.colors.forEach((c) => set.add(c.name)));
    return Array.from(set);
  }, []);

  const availableSizes = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => p.sizes.forEach((s) => set.add(s)));
    return Array.from(set);
  }, []);

  // Filter and Sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCat = product.categoryName.toLowerCase().includes(query);
        const matchesFabric = product.fabric.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query);
        if (!matchesName && !matchesCat && !matchesFabric && !matchesDesc) {
          return false;
        }
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // Color filter
      if (selectedColor !== 'all') {
        const hasColor = product.colors.some((c) => c.name === selectedColor);
        if (!hasColor) return false;
      }
      // Size filter
      if (selectedSize !== 'all') {
        const hasSize = product.sizes.includes(selectedSize);
        if (!hasSize) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, maxPrice, selectedColor, selectedSize, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setMaxPrice(100000);
    setSelectedColor('all');
    setSelectedSize('all');
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery.trim() !== '' ||
    maxPrice < 100000 ||
    selectedColor !== 'all' ||
    selectedSize !== 'all';

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
              Sartorial Catalog
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
              {selectedCategory === 'all'
                ? 'The Complete Collection'
                : CATEGORIES.find((c) => c.id === selectedCategory)?.name || 'The Collection'}
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm font-light mt-2 max-w-xl">
              {CATEGORIES.find((c) => c.id === selectedCategory)?.description ||
                'Curated bespoke and ready-to-wear garments tailored with precision and hand-finished in our ateliers.'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort Select */}
            <div className="flex items-center gap-2 bg-[#141418] border border-white/10 px-3.5 py-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="text-neutral-400 uppercase tracking-wider text-[11px]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="featured" className="bg-[#141418] text-white">Curated Selection</option>
                <option value="newest" className="bg-[#141418] text-white">New Arrivals</option>
                <option value="price-asc" className="bg-[#141418] text-white">Price: Low to High</option>
                <option value="price-desc" className="bg-[#141418] text-white">Price: High to Low</option>
                <option value="rating" className="bg-[#141418] text-white">Client Rating</option>
              </select>
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 bg-[#141418] border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Bar) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as Category)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all whitespace-nowrap shrink-0 border ${
                selectedCategory === cat.id
                  ? 'border-[#C5A880] bg-[#C5A880] text-[#0D0D10] font-bold shadow-md shadow-[#C5A880]/15'
                  : 'border-white/10 text-neutral-300 hover:border-white/30 bg-[#121215]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Filter Sidebar (lg:col-span-1) */}
          <div
            className={`lg:block ${
              mobileFilterOpen
                ? 'fixed inset-0 z-50 bg-[#121215] p-6 overflow-y-auto'
                : 'hidden'
            } lg:relative lg:p-0 lg:bg-transparent space-y-8`}
          >
            {mobileFilterOpen && (
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 lg:hidden">
                <span className="font-serif text-lg font-bold uppercase text-white">Filter Collection</span>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Active Filters Clear Bar */}
            {hasActiveFilters && (
              <div className="p-4 bg-[#141418] border border-[#C5A880]/30 flex items-center justify-between">
                <span className="text-xs text-[#C5A880] uppercase tracking-wider font-medium">
                  Filters Active
                </span>
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>
              </div>
            )}

            {/* Search within catalog */}
            <div className="p-5 bg-[#141418] border border-white/5 space-y-3">
              <label className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold block">
                Keyword Filter
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. shalwar kameez, cotton, kurta, jamawar..."
                  className="w-full bg-black/40 border border-white/10 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A880]"
                />
                <Search className="w-3.5 h-3.5 text-neutral-500 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="p-5 bg-[#141418] border border-white/5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-wider text-[#C5A880] font-semibold">Maximum Price</span>
                <span className="text-white font-semibold tabular-nums">{formatPrice(maxPrice)}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#C5A880] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>{formatPrice(5000)}</span>
                <span>{formatPrice(100000)}</span>
              </div>
            </div>

            {/* Color Filter */}
            <div className="p-5 bg-[#141418] border border-white/5 space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold">
                Color Palette
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedColor('all')}
                  className={`px-2.5 py-1 text-[11px] uppercase tracking-wider border transition-colors ${
                    selectedColor === 'all'
                      ? 'border-[#C5A880] bg-[#C5A880] text-[#0D0D10] font-bold'
                      : 'border-white/10 text-neutral-400 bg-black/30'
                  }`}
                >
                  All Shades
                </button>
                {availableColors.map((colorName) => (
                  <button
                    key={colorName}
                    onClick={() => setSelectedColor(colorName)}
                    className={`px-2.5 py-1 text-[11px] uppercase tracking-wider border transition-colors ${
                      selectedColor === colorName
                        ? 'border-[#C5A880] bg-[#C5A880] text-[#0D0D10] font-bold'
                        : 'border-white/10 text-neutral-400 hover:text-white bg-black/30'
                    }`}
                  >
                    {colorName}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="p-5 bg-[#141418] border border-white/5 space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold">
                Tailored Sizes
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                <button
                  onClick={() => setSelectedSize('all')}
                  className={`px-2 py-1.5 text-[11px] uppercase tracking-wider border transition-colors text-center ${
                    selectedSize === 'all'
                      ? 'border-[#C5A880] bg-[#C5A880] text-[#0D0D10] font-bold'
                      : 'border-white/10 text-neutral-400 bg-black/30'
                  }`}
                >
                  All
                </button>
                {availableSizes.slice(0, 11).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-2 py-1.5 text-[11px] uppercase tracking-wider border transition-colors text-center ${
                      selectedSize === s
                        ? 'border-[#C5A880] bg-[#C5A880] text-[#0D0D10] font-bold'
                        : 'border-white/10 text-neutral-400 hover:text-white bg-black/30'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {mobileFilterOpen && (
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-[#C5A880] text-[#0D0D10] text-xs font-bold uppercase tracking-widest mt-6 lg:hidden"
              >
                APPLY & VIEW {filteredProducts.length} PRODUCTS
              </button>
            )}
          </div>

          {/* Product Grid Area (lg:col-span-3) */}
          <div className="lg:col-span-3">
            {/* Results Count bar */}
            <div className="flex items-center justify-between mb-6 text-xs text-neutral-400">
              <span>
                Showing <strong className="text-white font-semibold">{filteredProducts.length}</strong> sartorial garments
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-[#C5A880] hover:underline uppercase tracking-wider text-[11px]"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center border border-white/5 bg-[#141418] p-8">
                <SlidersHorizontal className="w-10 h-10 text-neutral-600 mx-auto mb-4 stroke-[1]" />
                <h3 className="font-serif text-xl uppercase tracking-wider text-white mb-2">
                  No matching garments found
                </h3>
                <p className="text-neutral-400 text-xs font-light max-w-md mx-auto mb-6">
                  Try adjusting your price range, shade selection, or clear your search term to view our full sartorial collection.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-[#C5A880] text-[#0D0D10] text-xs font-bold uppercase tracking-widest hover:bg-[#d8bc93] transition-colors"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
