import React from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Truck, RotateCcw, Lock, ArrowLeft } from 'lucide-react';

export const ShippingPolicyPage: React.FC = () => {
  const { setCurrentPage } = useShop();

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-1.5 text-xs text-[#C5A880] hover:underline uppercase tracking-wider mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Atelier</span>
        </button>

        <div className="border-b border-white/10 pb-6 mb-10">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
            Atelier Logistics
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
            Complimentary Shipping & Returns
          </h1>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-lg font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C5A880]" />
              <span>Worldwide Express Dispatch</span>
            </h2>
            <p>
              Every order from <strong className="text-white">AL HAFIZ COLLECTION</strong> is hand-inspected by our quality controllers, carefully steamed, and enclosed inside our signature breathable cotton and cedar garment carriers.
            </p>
            <p>
              Orders above $250 / £200 / €230 / AED 900 automatically qualify for complimentary international air courier via DHL Priority or FedEx. Most metropolitan destinations receive their delivery within 2 to 4 business days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#C5A880]" />
              <span>30-Day Fitting Guarantee & Return Process</span>
            </h2>
            <p>
              We want you to feel complete confidence in your sartorial investment. If any ready-to-wear piece does not fit to your absolute satisfaction, you may request an exchange or full refund within 30 days of receipt.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Garments must remain unworn, unwashed, and unaltered.</li>
              <li>Original AL HAFIZ COLLECTION security tags and spare buttons must remain intact.</li>
              <li>Complimentary pre-paid courier collection labels are provided upon contacting concierge.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Complimentary Atelier Alterations</span>
            </h2>
            <p>
              Trouser hemming and sleeve adjustments are provided compliments of the house at any of our flagship salons in London, Dubai, New York, or Milan. Simply bring your garment and digital receipt.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicyPage: React.FC = () => {
  const { setCurrentPage } = useShop();

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-1.5 text-xs text-[#C5A880] hover:underline uppercase tracking-wider mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Atelier</span>
        </button>

        <div className="border-b border-white/10 pb-6 mb-10">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
            Confidentiality Standards
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
            Client Privacy Policy
          </h1>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          <p>
            At <strong className="text-white">AL HAFIZ COLLECTION</strong>, discretion and client confidentiality are as foundational as our bespoke tailoring. We adhere strictly to the highest global data privacy standards, including the UK GDPR and EU General Data Protection Regulation.
          </p>

          <h3 className="font-serif text-base font-bold uppercase text-white tracking-wider">
            1. Client Data & Local Storage Architecture
          </h3>
          <p>
            In this demonstration digital storefront, your shopping bag items, curated wishlist, recently viewed garments, and customer demo preferences are stored strictly in your personal browser&rsquo;s LocalStorage. No private identifiers or credit card secrets are collected or broadcast to third-party ad networks.
          </p>

          <h3 className="font-serif text-base font-bold uppercase text-white tracking-wider">
            2. Bespoke Salon Records
          </h3>
          <p>
            When booking private salon appointments or commissioning bespoke tailoring, client anatomical measurements and fabric preferences are maintained on encrypted, restricted servers solely accessible to your dedicated cutter and concierge team.
          </p>

          <h3 className="font-serif text-base font-bold uppercase text-white tracking-wider">
            3. Communications & Opt-Out
          </h3>
          <p>
            We will never sell, rent, or lease your contact information to external marketers. Sovereign Circle subscribers may adjust their email preferences or opt out at any moment with a single click.
          </p>
        </div>
      </div>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  const { setCurrentPage } = useShop();

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-1.5 text-xs text-[#C5A880] hover:underline uppercase tracking-wider mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Atelier</span>
        </button>

        <div className="border-b border-white/10 pb-6 mb-10">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
            Legal & Salon Terms
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
            Terms of Service
          </h1>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          <p>
            Welcome to the digital portal of <strong className="text-white">AL HAFIZ COLLECTION</strong>. By accessing our services, perusing our seasonal archives, or requesting bespoke consultations, you agree to comply with the terms set forth herein.
          </p>

          <h3 className="font-serif text-base font-bold uppercase text-white tracking-wider">
            1. Authenticity & Intellectual Property
          </h3>
          <p>
            All designs, silhouettes, custom fabric patterns, crests, photography, and editorial texts showcased on this platform are the exclusive intellectual property of AL HAFIZ COLLECTION Ltd. Unauthorized reproduction or commercial imitation is strictly prohibited.
          </p>

          <h3 className="font-serif text-base font-bold uppercase text-white tracking-wider">
            2. Bespoke Drafting & Production
          </h3>
          <p>
            Bespoke commissions entail customized drafting and hand embroidery. Production timelines generally range from 3 to 6 weeks depending on fabric mill availability and complexity of zardozi bullion detailing.
          </p>

          <h3 className="font-serif text-base font-bold uppercase text-white tracking-wider">
            3. LocalStorage Prototype Notice
          </h3>
          <p>
            This interactive website operates with client-side LocalStorage for shopping bag and wishlist state. Orders finalized in the demo checkout salon are simulated for portfolio and demonstration evaluation.
          </p>
        </div>
      </div>
    </div>
  );
};
