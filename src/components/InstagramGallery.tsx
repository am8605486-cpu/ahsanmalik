import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Instagram, ArrowUpRight } from 'lucide-react';

const LOOKBOOK_ITEMS = [
  {
    image: '/src/assets/images/product_unstitched_navy_1792395667369.jpg',
    handle: '@alhafizcollection',
    caption: 'Unboxing luxury. AL HAFIZ Royal Gold Egyptian Cotton 4.5M unstitched suit box with engraved buttons & gold selvedge.',
    productId: 'ahc-001',
  },
  {
    image: '/src/assets/images/product_charcoal_suit_1792395650852.jpg',
    handle: '@alhafizcollection',
    caption: 'Modern elegance. Executive charcoal grey wash-and-wear designer shalwar kameez with stiff ban collar.',
    productId: 'ahc-006',
  },
  {
    image: '/src/assets/images/product_karandi_suit_1792395633176.jpg',
    handle: '@alhafizcollection',
    caption: 'Heritage winter warmth. Mughal Karandi handwoven unstitched suit box in fawn camel with mother-of-pearl buttons.',
    productId: 'ahc-002',
  },
  {
    image: '/src/assets/images/product_ivory_shalwar_kameez_1792394426969.jpg',
    handle: '@alhafizcollection',
    caption: 'Atelier perfection. Superfine Egyptian Giza cotton Shalwar Kameez with micro-embroidered Ban collar.',
    productId: 'ahc-007',
  },
];

export const InstagramGallery: React.FC = () => {
  const { navigateToProduct } = useShop();

  return (
    <section className="py-20 lg:py-24 bg-[#0B0B0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5" />
              <span>@ALHAFIZCOLLECTION</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white">
              The Gentleman&rsquo;s Lookbook
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Follow our campaign editorials, unboxing moments, and sartorial inspirations across Lahore, Karachi, Islamabad, and Dubai.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOOKBOOK_ITEMS.map((item, idx) => {
            const product = PRODUCTS.find((p) => p.id === item.productId);
            return (
              <div
                key={idx}
                onClick={() => product && navigateToProduct(product)}
                className="group relative cursor-pointer overflow-hidden bg-[#16161A] border border-white/5 hover:border-[#C5A880]/50 transition-all duration-300"
              >
                <div className="aspect-[4/5] w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt="Editorial Lookbook"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Top Corner Instagram Tag */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 text-[10px] text-neutral-300 tracking-wider flex items-center gap-1 border border-white/10">
                    <Instagram className="w-2.5 h-2.5 text-[#C5A880]" />
                    <span>Look 0{idx + 1}</span>
                  </div>

                  {/* Bottom Overlay Info with Shop the Look */}
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <p className="text-xs text-neutral-300 font-light line-clamp-2 mb-3">
                      {item.caption}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold flex items-center gap-1">
                        <span>Shop The Look</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                      <span className="text-[11px] text-white font-medium truncate max-w-[120px]">
                        {product ? product.name.split(' ')[0] + ' ' + (product.name.split(' ')[1] || '') : 'View Piece'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
