import React from 'react';
import { useShop } from '../context/ShopContext';
import { BOUTIQUES } from '../data/products';
import { MapPin, Phone, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const {
    setCurrentPage,
    navigateToCategory,
    navigateToShop,
  } = useShop();

  const handleNav = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090B] border-t border-white/10 text-neutral-400 text-xs">
      {/* Flagship Boutiques Strip */}
      <div className="border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-6 font-medium text-center sm:text-left">
            Global Flagship Ateliers & Private Suites
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOUTIQUES.map((b) => (
              <div key={b.city} className="p-4 bg-[#111114] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                    {b.city}
                  </span>
                  <span className="text-[10px] text-[#C5A880] uppercase tracking-widest">{b.type}</span>
                </div>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{b.address}</span>
                </p>
                <div className="text-[10px] text-neutral-500 pt-1 flex items-center justify-between border-t border-white/5">
                  <span>{b.phone}</span>
                  <span>{b.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Links Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer" onClick={() => handleNav('home')}>
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-white uppercase">
                AL HAFIZ
              </span>
              <span className="block text-[9px] tracking-[0.38em] text-[#C5A880] font-sans font-medium uppercase">
                COLLECTION
              </span>
            </div>
            <p className="text-neutral-400 text-xs font-light leading-relaxed max-w-sm">
              Heirloom Pakistani menswear crafted for the modern gentleman. Pure 8-Pound Boski silk, combed Egyptian Giza cotton latha, handwoven Karandi, and master-tailored Shalwar Kameez.
            </p>
            <div className="pt-2 flex items-center gap-3 text-neutral-400 text-xs">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Authentic Selvedge Hallmark · Master Atelier Tailoring</span>
            </div>
          </div>

          {/* SARTORIAL COLLECTIONS */}
          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => navigateToCategory('unstitched')} className="hover:text-[#C5A880] text-[#C5A880] font-semibold transition-colors">
                  Men&apos;s Unstitched Suit Boxes
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('shalwar-kameez')} className="hover:text-[#C5A880] transition-colors">
                  Luxury Shalwar Kameez
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('kurta')} className="hover:text-[#C5A880] transition-colors">
                  Designer Kurtas
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('waistcoats')} className="hover:text-[#C5A880] transition-colors">
                  Jamawar Waistcoats
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('ceremonial')} className="hover:text-[#C5A880] transition-colors">
                  Sherwanis & Prince Coats
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('footwear')} className="hover:text-[#C5A880] transition-colors">
                  Kaptaan Peshawari Chappals
                </button>
              </li>
              <li>
                <button onClick={() => navigateToShop()} className="text-[#C5A880] hover:underline flex items-center gap-1 font-medium">
                  <span>View All 2026 Archive</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* CLIENT SERVICES */}
          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Client Concierge
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#C5A880] transition-colors">
                  Bespoke Appointments
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shipping')} className="hover:text-[#C5A880] transition-colors">
                  Complimentary Shipping & Returns
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-[#C5A880] transition-colors">
                  Tailoring & Fit FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#C5A880] transition-colors">
                  Our Artisanal Heritage
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cart')} className="hover:text-[#C5A880] transition-colors">
                  Shopping Bag
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('wishlist')} className="hover:text-[#C5A880] transition-colors">
                  Saved Wishlist
                </button>
              </li>
            </ul>
          </div>

          {/* LEGAL & POLICIES */}
          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Privilege & Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-[#C5A880] transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-[#C5A880] transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shipping')} className="hover:text-[#C5A880] transition-colors">
                  Duty & Customs Policy
                </button>
              </li>
              <li className="pt-2 text-neutral-500 text-[11px]">
                Concierge Hotline:
                <div className="text-white font-medium mt-0.5">+44 20 7946 0912</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 bg-[#070709]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            &copy; 2026 AL HAFIZ COLLECTION Ltd. All international rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Gulberg III, Lahore</span>
            <span>·</span>
            <span>Zamzama, Karachi</span>
            <span>·</span>
            <span>Blue Area, Islamabad</span>
            <span>·</span>
            <span>Fashion Avenue, Dubai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
