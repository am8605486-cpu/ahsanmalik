import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { AnnouncementBar } from './AnnouncementBar';

export const Navbar: React.FC = () => {
  const {
    setCurrentPage,
    navigateToCategory,
    navigateToShop,
    cartItemCount,
    wishlist,
    setIsCartOpen,
    setIsSearchOpen,
    currentPage,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnnouncementBar />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0F]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-3.5'
            : 'bg-[#0D0D0F] border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single text element) */}
            <button
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group text-left cursor-pointer whitespace-nowrap shrink-0"
            >
              <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] text-white uppercase group-hover:text-[#C5A880] transition-colors">
                AL HAFIZ
              </span>
              <span className="block text-[8px] sm:text-[9px] tracking-[0.38em] text-[#C5A880] font-sans font-medium uppercase -mt-0.5">
                COLLECTION
              </span>
            </button>

            {/* Zone 2: 4–5 single-line clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-medium tracking-[0.15em] uppercase text-neutral-300">
              <button
                onClick={() => navigateToCategory('unstitched')}
                className="hover:text-[#C5A880] transition-colors whitespace-nowrap py-1 border-b border-transparent hover:border-[#C5A880] text-[#C5A880] font-semibold"
              >
                Unstitched Suits
              </button>
              <button
                onClick={() => navigateToCategory('shalwar-kameez')}
                className="hover:text-[#C5A880] transition-colors whitespace-nowrap py-1 border-b border-transparent hover:border-[#C5A880]"
              >
                Shalwar Kameez
              </button>
              <button
                onClick={() => navigateToCategory('kurta')}
                className="hover:text-[#C5A880] transition-colors whitespace-nowrap py-1 border-b border-transparent hover:border-[#C5A880]"
              >
                Kurtas
              </button>
              <button
                onClick={() => navigateToCategory('waistcoats')}
                className="hover:text-[#C5A880] transition-colors whitespace-nowrap py-1 border-b border-transparent hover:border-[#C5A880]"
              >
                Waistcoats
              </button>
              <button
                onClick={() => navigateToCategory('ceremonial')}
                className="hover:text-[#C5A880] transition-colors whitespace-nowrap py-1 border-b border-transparent hover:border-[#C5A880]"
              >
                Sherwanis
              </button>
              <button
                onClick={() => navigateToCategory('footwear')}
                className="hover:text-[#C5A880] transition-colors whitespace-nowrap py-1 border-b border-transparent hover:border-[#C5A880]"
              >
                Peshawari Footwear
              </button>
              <button
                onClick={() => navigateToShop({ category: 'all' })}
                className={`transition-colors whitespace-nowrap py-1 border-b ${
                  currentPage === 'shop'
                    ? 'text-[#C5A880] border-[#C5A880]'
                    : 'hover:text-[#C5A880] border-transparent hover:border-[#C5A880]'
                }`}
              >
                The Archive
              </button>
            </nav>

            {/* Zone 3: Actions + Shopping Bag (1 primary action zone) */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Search trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-neutral-300 hover:text-[#C5A880] transition-colors relative"
                aria-label="Search Collection"
                title="Search collection"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist trigger */}
              <button
                onClick={() => {
                  setCurrentPage('wishlist');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-2 text-neutral-300 hover:text-[#C5A880] transition-colors relative"
                aria-label="Wishlist"
                title="View wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#C5A880] text-[#0D0D0F] font-bold text-[10px] flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag (Primary Action) */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 bg-[#1B1B1E] hover:bg-[#25252A] text-white border border-white/10 px-3.5 py-2 rounded-sm text-xs font-medium tracking-wider transition-all hover:border-[#C5A880]/50"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 text-[#C5A880]" />
                <span className="hidden sm:inline uppercase text-[11px] tracking-[0.14em]">Bag</span>
                <span className="bg-[#C5A880] text-[#0D0D0F] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-300 hover:text-[#C5A880] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121215] border-b border-white/10 px-6 py-6 animate-fadeIn">
            <div className="flex flex-col gap-4 text-sm font-medium tracking-[0.16em] uppercase text-neutral-200">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-[#C5A880] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigateToCategory('unstitched');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 text-[#C5A880] font-semibold hover:text-white transition-colors"
              >
                Men&apos;s Unstitched Suits &amp; Fabric Boxes
              </button>
              <button
                onClick={() => {
                  navigateToCategory('shalwar-kameez');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-[#C5A880] transition-colors"
              >
                Luxury Shalwar Kameez
              </button>
              <button
                onClick={() => {
                  navigateToCategory('kurta');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-[#C5A880] transition-colors"
              >
                Designer Kurtas
              </button>
              <button
                onClick={() => {
                  navigateToCategory('waistcoats');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-[#C5A880] transition-colors"
              >
                Jamawar Waistcoats
              </button>
              <button
                onClick={() => {
                  navigateToCategory('ceremonial');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-[#C5A880] transition-colors"
              >
                Sherwanis & Prince Coats
              </button>
              <button
                onClick={() => {
                  navigateToCategory('footwear');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-[#C5A880] transition-colors"
              >
                Kaptaan Peshawari Chappals
              </button>
              <button
                onClick={() => {
                  navigateToCategory('accessories');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-[#C5A880] transition-colors"
              >
                Fine Accessories & Shawls
              </button>
              <button
                onClick={() => {
                  navigateToShop();
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 text-[#C5A880] font-semibold transition-colors"
              >
                View Full Collection
              </button>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2 text-xs text-neutral-400">
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-1 hover:text-white"
                >
                  Our Heritage & Ateliers
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-1 hover:text-white"
                >
                  Boutique Concierge & Appointments
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('faq');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-1 hover:text-white"
                >
                  Client Services & FAQ
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
