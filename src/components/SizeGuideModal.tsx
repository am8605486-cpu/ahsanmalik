import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler, CheckCircle2, Scissors } from 'lucide-react';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [categoryTab, setCategoryTab] = useState<'unstitched' | 'shalwar' | 'waistcoat' | 'shoes'>('unstitched');

  if (!isSizeGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={() => setIsSizeGuideOpen(false)}
      />

      <div className="relative w-full max-w-2xl bg-[#141418] border border-white/10 shadow-2xl p-6 sm:p-8 z-10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#C5A880]" />
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-white">
              Sartorial Sizing & Fabric Guide
            </h3>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab & Unit Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-6">
          <div className="flex items-center gap-1 bg-black/40 p-1 border border-white/5 overflow-x-auto">
            <button
              onClick={() => setCategoryTab('unstitched')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap ${
                categoryTab === 'unstitched'
                  ? 'bg-[#C5A880] text-[#0D0D10] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Unstitched Fabric
            </button>
            <button
              onClick={() => setCategoryTab('shalwar')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap ${
                categoryTab === 'shalwar'
                  ? 'bg-[#C5A880] text-[#0D0D10] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Shalwar Kameez
            </button>
            <button
              onClick={() => setCategoryTab('waistcoat')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap ${
                categoryTab === 'waistcoat'
                  ? 'bg-[#C5A880] text-[#0D0D10] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Waistcoat
            </button>
            <button
              onClick={() => setCategoryTab('shoes')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap ${
                categoryTab === 'shoes'
                  ? 'bg-[#C5A880] text-[#0D0D10] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Peshawari Chappal
            </button>
          </div>

          <div className="flex items-center gap-1 text-xs">
            <span className="text-neutral-400 uppercase tracking-wider text-[11px] mr-2">Unit:</span>
            <button
              onClick={() => setUnit('in')}
              className={`px-2.5 py-1 text-xs border ${
                unit === 'in'
                  ? 'border-[#C5A880] text-[#C5A880] bg-[#C5A880]/10 font-bold'
                  : 'border-white/10 text-neutral-400'
              }`}
            >
              INCHES
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-2.5 py-1 text-xs border ${
                unit === 'cm'
                  ? 'border-[#C5A880] text-[#C5A880] bg-[#C5A880]/10 font-bold'
                  : 'border-white/10 text-neutral-400'
              }`}
            >
              CM
            </button>
          </div>
        </div>

        {/* Tab 1: Unstitched Fabric Guide */}
        {categoryTab === 'unstitched' && (
          <div className="space-y-4 text-xs text-neutral-300">
            <div className="p-4 bg-black/40 border border-[#C5A880]/30 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold uppercase tracking-wider">
                <Scissors className="w-4 h-4 text-[#C5A880]" />
                <span>Standard Unstitched Fabric Specifications</span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                All AL HAFIZ COLLECTION unstitched suit fabrics are provided in ample lengths with broad double-width (arzah) to accommodate traditional loose-cut pleated Shalwars, contemporary Kurta Pajamas, and all heights up to 6ft 4in.
              </p>
            </div>

            <table className="w-full text-left text-xs text-neutral-300">
              <thead className="text-[11px] uppercase tracking-wider text-[#C5A880] bg-black/40 border-b border-white/10">
                <tr>
                  <th className="py-2.5 px-3">Fabric Cut</th>
                  <th className="py-2.5 px-3">Total Length</th>
                  <th className="py-2.5 px-3">Width (Arzah)</th>
                  <th className="py-2.5 px-3">Recommended For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">Standard Suit Box</td>
                  <td className="py-2.5 px-3 tabular-nums">4.0 – 4.5 Meters</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '54.0 Inches' : '137.2 cm'}</td>
                  <td className="py-2.5 px-3 text-neutral-300">Complete Shalwar Kameez (up to 6ft 2in)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">Tall / Full-Cut Cut</td>
                  <td className="py-2.5 px-3 tabular-nums">4.5 – 5.0 Meters</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '54.0 Inches' : '137.2 cm'}</td>
                  <td className="py-2.5 px-3 text-neutral-300">Tall gentlemen (6ft 2in+) or deep Gher Shalwars</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">Kurta Only</td>
                  <td className="py-2.5 px-3 tabular-nums">2.25 – 2.5 Meters</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '54.0 Inches' : '137.2 cm'}</td>
                  <td className="py-2.5 px-3 text-neutral-300">Standalone designer Kurta</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Shalwar Kameez */}
        {categoryTab === 'shalwar' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-neutral-300">
              <thead className="text-[11px] uppercase tracking-wider text-[#C5A880] bg-black/40 border-b border-white/10">
                <tr>
                  <th className="py-2.5 px-3">Size</th>
                  <th className="py-2.5 px-3">Chest ({unit})</th>
                  <th className="py-2.5 px-3">Kameez Length ({unit})</th>
                  <th className="py-2.5 px-3">Shoulder ({unit})</th>
                  <th className="py-2.5 px-3">Sleeve ({unit})</th>
                  <th className="py-2.5 px-3">Collar Ban</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">S (38)</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '40.0' : '101.6'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '40.0' : '101.6'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '17.5' : '44.5'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '23.5' : '59.7'}</td>
                  <td className="py-2.5 px-3">15.0&quot; (38cm)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">M (40)</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '42.0' : '106.7'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '42.0' : '106.7'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '18.5' : '47.0'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '24.5' : '62.2'}</td>
                  <td className="py-2.5 px-3">15.5&quot; (39.5cm)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">L (42)</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '45.0' : '114.3'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '43.0' : '109.2'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '19.5' : '49.5'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '25.5' : '64.8'}</td>
                  <td className="py-2.5 px-3">16.0&quot; (40.6cm)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">XL (44)</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '48.0' : '121.9'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '44.0' : '111.8'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '20.5' : '52.1'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '26.0' : '66.0'}</td>
                  <td className="py-2.5 px-3">16.5&quot; (42cm)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">XXL (46)</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '51.0' : '129.5'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '45.0' : '114.3'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '21.5' : '54.6'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '26.5' : '67.3'}</td>
                  <td className="py-2.5 px-3">17.0&quot; (43.2cm)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Waistcoat */}
        {categoryTab === 'waistcoat' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-neutral-300">
              <thead className="text-[11px] uppercase tracking-wider text-[#C5A880] bg-black/40 border-b border-white/10">
                <tr>
                  <th className="py-2.5 px-3">Waistcoat Size</th>
                  <th className="py-2.5 px-3">Chest ({unit})</th>
                  <th className="py-2.5 px-3">Waist ({unit})</th>
                  <th className="py-2.5 px-3">Length ({unit})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">38R (Small)</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '39.0' : '99.1'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '37.0' : '94.0'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '27.5' : '69.8'}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">40R (Medium)</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '41.0' : '104.1'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '39.0' : '99.1'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '28.0' : '71.1'}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">42R (Large)</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '43.0' : '109.2'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '41.0' : '104.1'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '29.0' : '73.7'}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">44R (XL)</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '45.0' : '114.3'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '43.0' : '109.2'}</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '29.5' : '74.9'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 4: Shoes */}
        {categoryTab === 'shoes' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-neutral-300">
              <thead className="text-[11px] uppercase tracking-wider text-[#C5A880] bg-black/40 border-b border-white/10">
                <tr>
                  <th className="py-2.5 px-3">Pak / EU Size</th>
                  <th className="py-2.5 px-3">UK Size</th>
                  <th className="py-2.5 px-3">US Size</th>
                  <th className="py-2.5 px-3">Foot Length ({unit})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">40</td>
                  <td className="py-2.5 px-3">7 UK</td>
                  <td className="py-2.5 px-3">8.0 US</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '10.2' : '26.0'}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">41</td>
                  <td className="py-2.5 px-3">8 UK</td>
                  <td className="py-2.5 px-3">8.5 US</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '10.5' : '26.7'}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">42</td>
                  <td className="py-2.5 px-3">9 UK</td>
                  <td className="py-2.5 px-3">9.5 US</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '10.8' : '27.4'}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">43</td>
                  <td className="py-2.5 px-3">10 UK</td>
                  <td className="py-2.5 px-3">10.5 US</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '11.1' : '28.2'}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-white">44</td>
                  <td className="py-2.5 px-3">11 UK</td>
                  <td className="py-2.5 px-3">11.5 US</td>
                  <td className="py-2.5 px-3 tabular-nums">{unit === 'in' ? '11.4' : '29.0'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Tailor Concierge Note */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-start gap-3 text-xs text-neutral-400">
          <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Custom Stitching & Bespoke Master Assistance:</strong> Need a custom kameez length, ban collar diameter, or sleeve adjustment? Contact our WhatsApp concierge or visit our Lahore, Karachi, or Islamabad flagship salons for complimentary bespoke measurements.
          </p>
        </div>
      </div>
    </div>
  );
};
