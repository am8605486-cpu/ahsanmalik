import React from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Sparkles, Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { currency, setCurrency } = useShop();

  return (
    <div className="bg-[#121215] border-b border-white/5 text-[11px] uppercase tracking-[0.16em] text-neutral-300 py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="text-[#C5A880] flex items-center gap-1 font-medium">
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            AL HAFIZ LUXURY SHALWAR KAMEEZ & FESTIVE EDIT
          </span>
          <span className="hidden md:inline text-neutral-600">|</span>
          <span className="hidden md:inline text-neutral-400">
            Complimentary Delivery Across Pakistan on orders over Rs. 5,000 · Cash on Delivery (COD) Available
          </span>
        </div>

        <div className="flex items-center gap-4 text-neutral-400">
          <div className="hidden lg:flex items-center gap-1.5 text-neutral-400 hover:text-neutral-200 transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Master Atelier Stitching Guarantee</span>
          </div>

          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <span className="text-neutral-500 text-[10px]">CURRENCY:</span>
            {(['PKR', 'USD', 'AED', 'GBP'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`text-[10px] font-medium tracking-wider transition-colors ${
                  currency === curr
                    ? 'text-[#C5A880] underline underline-offset-4 font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {curr === 'PKR' ? 'PKR (Rs.)' : curr}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
