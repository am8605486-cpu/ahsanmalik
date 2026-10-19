import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    q: 'How do I determine my correct size for AL HAFIZ COLLECTION suiting?',
    a: 'Our suits are cut in traditional European/UK drop-6 tailoring sizes (e.g. 40R jacket pairs with a 34 waist trouser with unfinished hem). Refer to our interactive Sartorial Sizing Guide on any product page, or contact our bespoke concierge desk for personal measurement assistance.'
  },
  {
    q: 'What is the difference between half-canvas and full-canvas tailoring?',
    a: 'Half-canvas jackets feature a genuine horsehair canvas chest piece that gently drapes over the chest and lapel, providing a structured yet soft feel without stiffness. Over time, the canvas molds to the wearer’s body heat and posture, producing a bespoke contour.'
  },
  {
    q: 'Which countries qualify for complimentary express delivery?',
    a: 'We offer complimentary express courier shipping via DHL Priority or FedEx on all international orders over $250 / £200 / €230 / AED 900 across the United Kingdom, European Union, United States, UAE, Saudi Arabia, Canada, and Switzerland.'
  },
  {
    q: 'Can I visit your flagship boutiques for in-person alterations?',
    a: 'Yes. All AL HAFIZ COLLECTION suiting, trousers, and overcoats include complimentary hemming and minor sleeve adjustments at our London, Dubai, New York, and Milan flagship salons upon presenting your order confirmation number.'
  },
  {
    q: 'What is your return and exchange policy?',
    a: 'We accept returns and exchanges on all ready-to-wear pieces within 30 days of delivery, provided the garment is unworn, in pristine condition, and all security atelier tags remain attached. We provide pre-paid return courier pickup labels.'
  },
  {
    q: 'How should I care for my cashmere knitwear and wool overcoats?',
    a: 'Cashmere garments should be gently hand-washed in cool water with gentle wool shampoo, or professionally dry cleaned. Wool overcoats should be brushed with a natural horsehair brush after each wear to dislodge dust particles and rested on broad-shouldered wooden hangers.'
  }
];

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { setCurrentPage, navigateToShop } = useShop();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Client Inquiries</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-lg mx-auto">
            Guidance on bespoke fits, international courier delivery, atelier alterations, and fabric care.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#141418] border border-white/5 transition-all overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-semibold text-white uppercase tracking-wider hover:text-[#C5A880] transition-colors"
              >
                <span>{faq.q}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#C5A880] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                )}
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="mt-16 p-8 bg-[#16161C] border border-[#C5A880]/30 text-center space-y-3">
          <h3 className="font-serif text-base font-bold uppercase text-white tracking-wider">
            Have a Specific Sartorial Requirement?
          </h3>
          <p className="text-xs text-neutral-400 max-w-md mx-auto">
            Our master tailors and private concierge team are available for bespoke inquiries and styling advice.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-2.5 bg-[#C5A880] text-[#0D0D10] text-xs font-bold uppercase tracking-wider hover:bg-[#d8bc93] transition-colors"
            >
              BOOK PRIVATE SALON
            </button>
            <button
              onClick={() => navigateToShop()}
              className="px-6 py-2.5 border border-white/20 text-xs text-white uppercase tracking-wider hover:border-white transition-colors"
            >
              SHOP COLLECTION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
