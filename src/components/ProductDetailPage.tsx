import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import {
  Star,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Ruler,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowLeft,
  Share2
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice,
    setIsSizeGuideOpen,
    recentlyViewed,
    navigateToShop,
    setCurrentPage,
    showToast,
  } = useShop();

  const product = selectedProduct || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'fabric' | 'care' | 'delivery'>('details');
  const [added, setAdded] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none', backgroundPosition: '0% 0%' });

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || 'M');
      setSelectedColor(product.colors[0]?.name || 'Standard');
      setQuantity(1);
      setActiveImageIndex(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product]);

  const isFavorited = isInWishlist(product.id);

  // Related products from same category or featured
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isFeatured)
  ).slice(0, 3);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none', backgroundPosition: '0% 0%' });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      showToast('Please select your tailored size');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      showToast('Please select your tailored size');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    setCurrentPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard');
    }
  };

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] pb-24">
      {/* Breadcrumb & Navigation */}
      <div className="border-b border-white/5 bg-[#101013]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs tracking-wider text-neutral-400">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateToShop()}
              className="flex items-center gap-1.5 hover:text-[#C5A880] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Collection</span>
            </button>
            <span className="text-neutral-600">/</span>
            <span className="uppercase text-neutral-500">{product.categoryName}</span>
            <span className="text-neutral-600">/</span>
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            title="Share this sartorial piece"
          >
            <Share2 className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Gallery (Sticky on Desktop) lg:col-span-7 */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Vertical Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto shrink-0 pb-2 sm:pb-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border transition-all shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-[#C5A880] ring-1 ring-[#C5A880]'
                        : 'border-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Interactive Zoomable Image Frame */}
            <div
              className="relative flex-1 aspect-[4/5] sm:aspect-[3/4] bg-[#141418] border border-white/10 overflow-hidden cursor-crosshair group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-top transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* High-Resolution Zoom Lens Layer */}
              <div
                className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-200"
                style={{
                  ...zoomStyle,
                  backgroundImage: `url(${product.images[activeImageIndex] || product.images[0]})`,
                  backgroundSize: '220%',
                }}
              />

              {/* Status Tags */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 pointer-events-none">
                {product.isNew && (
                  <span className="text-[10px] uppercase tracking-widest text-[#0D0D10] bg-[#C5A880] font-bold px-2.5 py-1">
                    New Season
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="text-[10px] uppercase tracking-widest text-white bg-black/80 border border-white/20 font-medium px-2.5 py-1">
                    Atelier Best Seller
                  </span>
                )}
              </div>

              {/* Zoom hint */}
              <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] text-neutral-300 pointer-events-none border border-white/10 hidden sm:block">
                Hover to magnify fabric weave
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module (Sticky on Desktop) lg:col-span-5 */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8">
            <div>
              {/* Category & Origin */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-2 font-medium">
                <span>{product.categoryName}</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-400">{product.origin}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mb-3 leading-tight">
                {product.name}
              </h1>

              {/* Review & Social Proof */}
              <div className="flex items-center gap-3 text-xs text-neutral-400 mb-5">
                <div className="flex text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                  ))}
                </div>
                <span className="text-white font-semibold tabular-nums">{product.rating.toFixed(2)}</span>
                <span className="text-neutral-500">({product.reviewCount} verified gentlemen reviews)</span>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-4 pb-6 border-b border-white/10">
                <span className="font-sans font-bold text-3xl text-white tabular-nums">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-neutral-500 line-through tabular-nums">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold bg-[#C5A880]/10 px-2 py-0.5 border border-[#C5A880]/20">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                )}
              </div>
            </div>

            {/* Short editorial description */}
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatches */}
            {product.colors.length > 0 && (
              <div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 mb-2.5 flex items-center justify-between">
                  <span>Selected Shade: <strong className="text-white font-semibold">{selectedColor}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-full transition-transform flex items-center justify-center ${
                        selectedColor === c.name
                          ? 'ring-2 ring-[#C5A880] ring-offset-2 ring-offset-[#0B0B0D] scale-110'
                          : 'opacity-80 hover:opacity-100 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector with Size Guide */}
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-400 mb-2.5 flex items-center justify-between">
                <span>Select Size: <strong className="text-white font-semibold">{selectedSize}</strong></span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-[#d4b58c] uppercase tracking-wider"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Sartorial Sizing Guide</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-3 text-xs uppercase tracking-wider font-semibold border transition-all ${
                      selectedSize === s
                        ? 'border-[#C5A880] bg-[#C5A880] text-[#0D0D10] shadow-md shadow-[#C5A880]/15'
                        : 'border-white/10 text-neutral-300 hover:border-white/30 bg-[#16161A]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Stock Urgency Indicator */}
              <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>
                  {product.stockCount <= 5
                    ? `Limited availability: only ${product.stockCount} pieces handcrafted in this batch`
                    : 'In stock — Prepared and dispatched within 24 hours'}
                </span>
              </div>
            </div>

            {/* Quantity Stepper & Add to Bag & Buy Now */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-white/15 bg-[#141418] h-12">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 text-neutral-400 hover:text-white text-base"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 text-white font-semibold text-sm tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    className="px-3.5 text-neutral-400 hover:text-white text-base"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 h-12 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 ${
                    added
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500'
                      : 'bg-[#C5A880] hover:bg-[#d8bc93] text-[#0B0B0D] shadow-lg shadow-[#C5A880]/15'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO SHOPPING BAG</span>
                    </>
                  )}
                </button>

                {/* Wishlist toggle */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`w-12 h-12 flex items-center justify-center border transition-colors ${
                    isFavorited
                      ? 'border-[#C5A880] bg-[#C5A880]/10 text-[#C5A880]'
                      : 'border-white/15 hover:border-white/40 text-neutral-300 bg-[#141418]'
                  }`}
                  aria-label="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-[#C5A880]' : ''}`} />
                </button>
              </div>

              {/* Buy Now Immediate Express Checkout */}
              <button
                onClick={handleBuyNow}
                className="w-full h-12 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 text-xs font-medium tracking-[0.2em] uppercase transition-all"
              >
                EXPRESS CHECKOUT
              </button>
            </div>

            {/* Trust and Delivery Markers */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 text-center">
              <div className="p-3 bg-[#141418] border border-white/5">
                <Truck className="w-4 h-4 text-[#C5A880] mx-auto mb-1.5" />
                <div className="text-[10px] font-semibold uppercase text-white">Express Air</div>
                <div className="text-[9px] text-neutral-400">Complimentary</div>
              </div>
              <div className="p-3 bg-[#141418] border border-white/5">
                <RotateCcw className="w-4 h-4 text-[#C5A880] mx-auto mb-1.5" />
                <div className="text-[10px] font-semibold uppercase text-white">30-Day Returns</div>
                <div className="text-[9px] text-neutral-400">Prepaid courier</div>
              </div>
              <div className="p-3 bg-[#141418] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#C5A880] mx-auto mb-1.5" />
                <div className="text-[10px] font-semibold uppercase text-white">Master Tailor</div>
                <div className="text-[9px] text-neutral-400">Free adjustments</div>
              </div>
            </div>

            {/* Accordion Tabs for Specifications */}
            <div className="border-t border-white/10 pt-4 space-y-2">
              {/* Tab 1: Tailoring & Fit */}
              <div className="border border-white/5 bg-[#121215]">
                <button
                  onClick={() => setActiveTab(activeTab === 'details' ? '' as any : 'details')}
                  className="w-full px-4 py-3.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white"
                >
                  <span>Sartorial Details & Fit</span>
                  {activeTab === 'details' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeTab === 'details' && (
                  <div className="px-4 pb-4 text-xs text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-3 space-y-2">
                    <p><strong className="text-white font-medium">Cut & Silhouette:</strong> {product.fit}</p>
                    <p><strong className="text-white font-medium">Crafted In:</strong> {product.origin}</p>
                    <div className="pt-2">
                      <strong className="text-white font-medium block mb-1">Tailoring Highlights:</strong>
                      <ul className="list-disc pl-4 space-y-1 text-neutral-400">
                        {product.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Tab 2: Fabric & Composition */}
              <div className="border border-white/5 bg-[#121215]">
                <button
                  onClick={() => setActiveTab(activeTab === 'fabric' ? '' as any : 'fabric')}
                  className="w-full px-4 py-3.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white"
                >
                  <span>Fabric Composition & Provenance</span>
                  {activeTab === 'fabric' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeTab === 'fabric' && (
                  <div className="px-4 pb-4 text-xs text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-3 space-y-2">
                    <p><strong className="text-white font-medium">Material:</strong> {product.fabric}</p>
                    <p className="text-neutral-400">
                      Sourced strictly from certified ethical mills adhering to century-old finishing and weaving traditions with zero synthetic plastic blends.
                    </p>
                  </div>
                )}
              </div>

              {/* Tab 3: Care Instructions */}
              <div className="border border-white/5 bg-[#121215]">
                <button
                  onClick={() => setActiveTab(activeTab === 'care' ? '' as any : 'care')}
                  className="w-full px-4 py-3.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white"
                >
                  <span>Care & Maintenance</span>
                  {activeTab === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeTab === 'care' && (
                  <div className="px-4 pb-4 text-xs text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-3">
                    <ul className="list-disc pl-4 space-y-1.5 text-neutral-400">
                      {product.careInstructions.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Tab 4: Delivery & Returns */}
              <div className="border border-white/5 bg-[#121215]">
                <button
                  onClick={() => setActiveTab(activeTab === 'delivery' ? '' as any : 'delivery')}
                  className="w-full px-4 py-3.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white"
                >
                  <span>Complimentary Shipping & Returns</span>
                  {activeTab === 'delivery' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeTab === 'delivery' && (
                  <div className="px-4 pb-4 text-xs text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-3 space-y-2">
                    <p>
                      All orders are shipped via discreet DHL Express / FedEx Priority courier in signature AL HAFIZ COLLECTION protective garment bags.
                    </p>
                    <p className="text-neutral-400">
                      We offer a 30-day return or exchange period for unworn garments with original security tags intact. Complimentary courier collection can be arranged directly from your residence or office.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">Complete The Look</span>
                <h2 className="font-serif text-2xl font-bold uppercase tracking-wider text-white mt-1">
                  Complementary Sartorial Pieces
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed */}
        {recentlyViewed.filter((p) => p.id !== product.id).length > 0 && (
          <div className="mt-20 pt-16 border-t border-white/10">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-medium">Personal Archive</span>
              <h2 className="font-serif text-2xl font-bold uppercase tracking-wider text-white mt-1">
                Recently Viewed
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentlyViewed
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((recent) => (
                  <ProductCard key={recent.id} product={recent} />
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky Buy Bar (<15% screen height compliant) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-[#0F0F12]/95 backdrop-blur-md border-t border-white/15 p-3 z-30 flex items-center justify-between gap-3 shadow-2xl">
        <div>
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider truncate max-w-[140px]">
            {product.name}
          </div>
          <div className="font-bold text-sm text-white tabular-nums">
            {formatPrice(product.price)}
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex-1 py-3 px-4 bg-[#C5A880] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>ADD TO BAG</span>
        </button>
      </div>
    </div>
  );
};
