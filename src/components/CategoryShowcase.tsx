import React from 'react';
import { useShop } from '../context/ShopContext';
import { Category } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCard {
  id: Category;
  title: string;
  subtitle: string;
  image: string;
  count: string;
}

const FEATURED_CATS: CategoryCard[] = [
  {
    id: 'unstitched',
    title: "Men's Unstitched Fabrics",
    subtitle: 'Royal Giza Cotton · 8-Pound Boski Silk · Mughal Karandi',
    image: '/src/assets/images/product_unstitched_navy_1792395667369.jpg',
    count: 'Luxury Suit Boxes',
  },
  {
    id: 'shalwar-kameez',
    title: 'Luxury Shalwar Kameez',
    subtitle: 'Classic Tailored Fit · Crisp Ban Collar · Fluid Pleats',
    image: '/src/assets/images/product_charcoal_suit_1792395650852.jpg',
    count: 'Ready-to-Wear',
  },
  {
    id: 'waistcoats',
    title: 'Jamawar Waistcoats (Waskat)',
    subtitle: 'Banarasi Brocade Silk · Antique Brass Crests',
    image: '/src/assets/images/product_jamawar_waistcoat_1792394428976.jpg',
    count: 'Handwoven Silk',
  },
  {
    id: 'kurta',
    title: 'Designer Kurtas',
    subtitle: 'High-Density Wash & Wear · Embroidered Plackets',
    image: '/src/assets/images/product_black_designer_kurta_1792394427923.jpg',
    count: 'Wrinkle-Free',
  },
  {
    id: 'ceremonial',
    title: 'Sherwanis & Prince Coats',
    subtitle: 'Royal Zardozi Bullion & Tilla Hand Embroidery',
    image: '/src/assets/images/product_royal_groom_sherwani_1792394429377.jpg',
    count: 'Bridal Couture',
  },
  {
    id: 'footwear',
    title: 'Kaptaan Peshawari Chappals',
    subtitle: 'Full-Grain Cowhide · Tyre Tread Rubber Soles',
    image: '/src/assets/images/product_peshawari_chappal_1792394429333.jpg',
    count: 'Artisanal Cobblers',
  },
];

export const CategoryShowcase: React.FC = () => {
  const { navigateToCategory } = useShop();

  return (
    <section className="py-20 lg:py-28 bg-[#0D0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-[#C5A880] mb-2 font-medium">
              Eastern Menswear Pillars
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white">
              Signature Collections
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            From heirloom unstitched suit presentation boxes to ready-to-wear tailored Shalwar Kameez and Jamawar waistcoats, discover unmatched Pakistani menswear craftsmanship.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_CATS.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateToCategory(cat.id)}
              className="group relative cursor-pointer overflow-hidden bg-[#16161A] border border-white/5 hover:border-[#C5A880]/40 transition-all duration-300"
            >
              {/* Image Container with 4:3 Aspect Ratio and subtle zoom */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#121215] relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#C5A880] border border-white/10">
                  {cat.count}
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-lg lg:text-xl font-bold text-white uppercase tracking-wider group-hover:text-[#C5A880] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-neutral-300 text-xs font-light mt-1 tracking-wide">
                      {cat.subtitle}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#C5A880] flex items-center justify-center transition-all duration-300 group-hover:text-[#0B0B0D] text-white shrink-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
