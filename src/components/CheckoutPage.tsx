import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { CustomerDetails, Order } from '../types';
import confetti from 'canvas-confetti';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Banknote,
  CheckCircle2,
  Lock,
  ArrowRight,
  Printer,
  ShoppingBag,
  Sparkles,
  Info
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    subtotal,
    discountAmount,
    shippingAmount,
    taxAmount,
    grandTotal,
    formatPrice,
    promoCode,
    createOrder,
    setCurrentPage,
    navigateToShop,
  } = useShop();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);

  // Form State
  const [formData, setFormData] = useState<CustomerDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: 'Lahore',
    state: 'Punjab',
    postalCode: '54000',
    country: 'Pakistan',
    shippingMethod: 'express',
    paymentMethod: 'cod',
    notes: '',
  });

  const [cardDetails, setCardDetails] = useState({
    number: '•••• •••• •••• 4242',
    name: '',
    expiry: '12/28',
    cvv: '888',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateStep1 = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email required';
    if (!formData.phone.trim()) errs.phone = 'Phone number required for courier dispatch';
    if (!formData.address.trim()) errs.address = 'Street address required';
    if (!formData.city.trim()) errs.city = 'City required';
    if (!formData.postalCode.trim()) errs.postalCode = 'Postal code required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePlaceOrder = () => {
    const newOrder = createOrder(formData);
    setConfirmedOrder(newOrder);

    // Launch luxury gold celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A880', '#D4AF37', '#FAF9F6', '#2A2A30'],
      });
    } catch {}
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  if (cart.length === 0 && !confirmedOrder) {
    return (
      <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-24 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#141418] border border-white/5 p-8 text-center">
          <ShoppingBag className="w-12 h-12 text-[#C5A880] mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-bold uppercase text-white mb-2">Your Bag is Empty</h2>
          <p className="text-xs text-neutral-400 font-light mb-6">
            Please select your desired menswear pieces before continuing to the checkout salon.
          </p>
          <button
            onClick={() => navigateToShop()}
            className="w-full py-3.5 bg-[#C5A880] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em]"
          >
            DISCOVER THE COLLECTION
          </button>
        </div>
      </div>
    );
  }

  // Confirmation View
  if (confirmedOrder) {
    return (
      <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-[#141418] border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center pb-8 border-b border-white/10">
            <div className="w-16 h-16 bg-[#C5A880]/10 border border-[#C5A880]/30 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C5A880]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
              Order Confirmed & Atelier Dispatched
            </div>
            <h1 className="font-serif text-3xl font-bold uppercase text-white mb-2">
              Thank You, {confirmedOrder.customer.firstName}
            </h1>
            <p className="text-sm text-neutral-300 font-light max-w-lg mx-auto">
              Your bespoke order <strong className="text-white font-mono">{confirmedOrder.orderNumber}</strong> has been logged. Our master tailors are inspecting each garment prior to packaging in our protective garment carriers.
            </p>
          </div>

          {/* Demo Sandbox Disclaimer */}
          <div className="my-6 p-4 bg-amber-950/20 border border-amber-600/30 flex items-start gap-3 text-xs text-amber-200">
            <Info className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold text-white uppercase tracking-wider mb-0.5">
                Demonstration Prototype Notice
              </strong>
              This storefront runs in interactive demo mode using your browser&rsquo;s local storage. No actual payment was charged or transmitted to external processors. Your cart and simulated orders remain safely inside this browser session.
            </div>
          </div>

          {/* Order Summary & Delivery Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-white/10 text-xs">
            <div>
              <span className="text-neutral-500 uppercase tracking-wider block mb-1">Delivery Address</span>
              <div className="text-white font-medium">
                {confirmedOrder.customer.firstName} {confirmedOrder.customer.lastName}
              </div>
              <div className="text-neutral-300">
                {confirmedOrder.customer.address}
                {confirmedOrder.customer.apartment ? `, ${confirmedOrder.customer.apartment}` : ''}
              </div>
              <div className="text-neutral-300">
                {confirmedOrder.customer.city}, {confirmedOrder.customer.state} {confirmedOrder.customer.postalCode}
              </div>
              <div className="text-neutral-400">{confirmedOrder.customer.country}</div>
              <div className="text-neutral-400 mt-2">Courier Contact: {confirmedOrder.customer.phone}</div>
            </div>

            <div>
              <span className="text-neutral-500 uppercase tracking-wider block mb-1">Dispatch Method</span>
              <div className="text-white font-medium capitalize">
                {confirmedOrder.customer.shippingMethod === 'express'
                  ? 'Complimentary Express Air Courier (2-3 Business Days)'
                  : confirmedOrder.customer.shippingMethod === 'white-glove'
                  ? 'White-Glove Private Courier & In-Home Steaming'
                  : 'Standard Insured Freight'}
              </div>
              <div className="mt-4">
                <span className="text-neutral-500 uppercase tracking-wider block mb-1">Payment Demo</span>
                <div className="text-white capitalize">
                  {confirmedOrder.customer.paymentMethod === 'card'
                    ? 'Card (Simulated Demo Checkout)'
                    : confirmedOrder.customer.paymentMethod === 'cod'
                    ? 'Cash on Delivery (Pay upon fitting inspection)'
                    : 'Digital Wallet Demo'}
                </div>
              </div>
            </div>
          </div>

          {/* Items breakdown */}
          <div className="py-6 border-b border-white/10 divide-y divide-white/5">
            <div className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-3">
              Itemized Garments ({confirmedOrder.items.length})
            </div>
            {confirmedOrder.items.map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-12 h-14 object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-white font-semibold">{item.product.name}</div>
                    <div className="text-neutral-400 text-[11px]">
                      Size: {item.size} · Color: {item.color} · Qty: {item.quantity}
                    </div>
                  </div>
                </div>
                <div className="text-white font-semibold tabular-nums text-sm">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          {/* Total Breakdown */}
          <div className="py-6 border-b border-white/10 space-y-1.5 text-xs text-neutral-400">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-white tabular-nums">{formatPrice(confirmedOrder.subtotal)}</span>
            </div>
            {confirmedOrder.discount > 0 && (
              <div className="flex justify-between text-[#C5A880]">
                <span>Privilege Discount</span>
                <span className="tabular-nums">-{formatPrice(confirmedOrder.discount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping & Courier</span>
              <span className="text-white tabular-nums">
                {confirmedOrder.shipping === 0 ? 'Complimentary' : formatPrice(confirmedOrder.shipping)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated VAT / Duties</span>
              <span className="text-white tabular-nums">{formatPrice(confirmedOrder.tax)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-white pt-3 border-t border-white/10">
              <span className="uppercase tracking-wider">Total Amount</span>
              <span className="text-[#C5A880] tabular-nums">{formatPrice(confirmedOrder.total)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handlePrintReceipt}
              className="w-full sm:w-auto px-6 py-3 border border-white/20 hover:border-white text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4 text-[#C5A880]" />
              <span>Print / Save Receipt</span>
            </button>

            <button
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              RETURN TO ATELIER
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Multi-Step Checkout
  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Title */}
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
            Concierge Checkout Salon
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
            Complete Your Acquisition
          </h1>
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-3 mt-6 text-xs uppercase tracking-wider">
            <span className={`px-3 py-1 font-semibold ${step >= 1 ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : 'text-neutral-500'}`}>
              01. Delivery Address
            </span>
            <span className="text-neutral-600">→</span>
            <span className={`px-3 py-1 font-semibold ${step >= 2 ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : 'text-neutral-500'}`}>
              02. Courier Method
            </span>
            <span className="text-neutral-600">→</span>
            <span className={`px-3 py-1 font-semibold ${step === 3 ? 'text-[#C5A880] border-b-2 border-[#C5A880]' : 'text-neutral-500'}`}>
              03. Payment & Confirmation
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Form Area (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#141418] border border-white/10 p-6 sm:p-8">
            {/* Step 1: Delivery Details */}
            {step === 1 && (
              <form onSubmit={handleNextStep} className="space-y-6">
                <div>
                  <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-white mb-1">
                    Contact & Delivery Details
                  </h2>
                  <p className="text-xs text-neutral-400 font-light">
                    Ensure your address matches where private courier handover can be coordinated.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. Julian"
                      className={`w-full bg-black/40 border px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] ${
                        errors.firstName ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.firstName && <span className="text-[10px] text-rose-400 mt-1 block">{errors.firstName}</span>}
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Sterling"
                      className={`w-full bg-black/40 border px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] ${
                        errors.lastName ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.lastName && <span className="text-[10px] text-rose-400 mt-1 block">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      Email Address (For Tracking & Invoice) *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="julian@mayfair.com"
                      className={`w-full bg-black/40 border px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] ${
                        errors.email ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-rose-400 mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      Phone Number (For Courier Handover) *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 20 7946 0912"
                      className={`w-full bg-black/40 border px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] ${
                        errors.phone ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] text-rose-400 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="14 Savile Row or Residential Address"
                    className={`w-full bg-black/40 border px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] ${
                      errors.address ? 'border-rose-500' : 'border-white/15'
                    }`}
                  />
                  {errors.address && <span className="text-[10px] text-rose-400 mt-1 block">{errors.address}</span>}
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                    Apartment, Suite, Unit (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.apartment}
                    onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                    placeholder="Penthouse 4B / Floor 12"
                    className="w-full bg-black/40 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="London"
                      className={`w-full bg-black/40 border px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] ${
                        errors.city ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.city && <span className="text-[10px] text-rose-400 mt-1 block">{errors.city}</span>}
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      State / County
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="Greater London"
                      className="w-full bg-black/40 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      placeholder="W1S 3JN"
                      className={`w-full bg-black/40 border px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] ${
                        errors.postalCode ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.postalCode && <span className="text-[10px] text-rose-400 mt-1 block">{errors.postalCode}</span>}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                    Country / Region
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-black/40 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Pakistan" className="bg-[#141418]">Pakistan (Nationwide Delivery)</option>
                    <option value="United Arab Emirates" className="bg-[#141418]">United Arab Emirates (Dubai / Abu Dhabi)</option>
                    <option value="Saudi Arabia" className="bg-[#141418]">Saudi Arabia</option>
                    <option value="United Kingdom" className="bg-[#141418]">United Kingdom</option>
                    <option value="United States" className="bg-[#141418]">United States</option>
                    <option value="Canada" className="bg-[#141418]">Canada</option>
                  </select>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentPage('cart')}
                    className="text-xs text-neutral-400 hover:text-white underline"
                  >
                    Return to Shopping Bag
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                  >
                    <span>CONTINUE TO COURIER</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Courier Method */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-white mb-1">
                    Select Courier Delivery Speed
                  </h2>
                  <p className="text-xs text-neutral-400 font-light">
                    Every garment is shipped in an acid-free cedar wood dust carrier with tamper-proof security seals.
                  </p>
                </div>

                <div className="space-y-3">
                  <label
                    onClick={() => setFormData({ ...formData, shippingMethod: 'express' })}
                    className={`p-4 border block cursor-pointer transition-all ${
                      formData.shippingMethod === 'express'
                        ? 'border-[#C5A880] bg-[#C5A880]/10'
                        : 'border-white/10 hover:border-white/20 bg-black/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Truck className="w-5 h-5 text-[#C5A880]" />
                        <div>
                          <div className="text-xs font-semibold text-white uppercase tracking-wider">
                            Standard Courier (TCS / Leopards / Call Courier)
                          </div>
                          <div className="text-[11px] text-neutral-400">
                            2–3 working days nationwide · SMS Tracking & Secure Packing
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#C5A880]">
                        {shippingAmount === 0 ? 'COMPLIMENTARY' : formatPrice(shippingAmount)}
                      </span>
                    </div>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, shippingMethod: 'white-glove' })}
                    className={`p-4 border block cursor-pointer transition-all ${
                      formData.shippingMethod === 'white-glove'
                        ? 'border-[#C5A880] bg-[#C5A880]/10'
                        : 'border-white/10 hover:border-white/20 bg-black/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-[#C5A880]" />
                        <div>
                          <div className="text-xs font-semibold text-white uppercase tracking-wider">
                            VIP Priority Delivery (Lahore / Karachi / Islamabad)
                          </div>
                          <div className="text-[11px] text-neutral-400">
                            24-hour delivery with hanger carrier and fitting check
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-white">
                        {formatPrice(750)}
                      </span>
                    </div>
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-neutral-400 hover:text-white underline"
                  >
                    Back to Address
                  </button>

                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                  >
                    <span>CONTINUE TO PAYMENT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment Method & Place Order */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-white mb-1">
                    Select Payment Method
                  </h2>
                  <p className="text-xs text-neutral-400 font-light">
                    Choose Cash on Delivery or digital payment for your order.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-3.5 border text-left transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'border-[#C5A880] bg-[#C5A880]/10'
                        : 'border-white/10 hover:border-white/20 bg-black/20'
                    }`}
                  >
                    <Banknote className="w-5 h-5 text-[#C5A880] mb-2" />
                    <div className="text-xs font-semibold text-white">Cash on Delivery (COD)</div>
                    <div className="text-[10px] text-neutral-400">Pay cash upon delivery</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3.5 border text-left transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#C5A880] bg-[#C5A880]/10'
                        : 'border-white/10 hover:border-white/20 bg-black/20'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-[#C5A880] mb-2" />
                    <div className="text-xs font-semibold text-white">Credit / Debit Card</div>
                    <div className="text-[10px] text-neutral-400">Visa, Mastercard, UnionPay</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'apple-pay' })}
                    className={`p-3.5 border text-left transition-all ${
                      formData.paymentMethod === 'apple-pay'
                        ? 'border-[#C5A880] bg-[#C5A880]/10'
                        : 'border-white/10 hover:border-white/20 bg-black/20'
                    }`}
                  >
                    <Lock className="w-5 h-5 text-[#C5A880] mb-2" />
                    <div className="text-xs font-semibold text-white">Bank Transfer / Raast</div>
                    <div className="text-[10px] text-neutral-400">Direct account transfer</div>
                  </button>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div className="p-4 bg-black/30 border border-white/10 space-y-3">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                        Card Number (Simulated)
                      </label>
                      <input
                        type="text"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                        className="w-full bg-black/50 border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A880] font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          className="w-full bg-black/50 border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A880] font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                          CVV / CVC
                        </label>
                        <input
                          type="text"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          className="w-full bg-black/50 border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A880] font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Special Delivery Instruction / Notes */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-neutral-300 block mb-1">
                    Bespoke Tailoring Notes or Delivery Instructions
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Please leave with concierge; request 1.75 inch trouser cuff hem."
                    className="w-full bg-black/40 border border-white/15 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-neutral-400 hover:text-white underline"
                  >
                    Back to Courier Speed
                  </button>

                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-[#C5A880]/20 transition-all"
                  >
                    <Lock className="w-4 h-4" />
                    <span>CONFIRM & PLACE ORDER ({formatPrice(grandTotal)})</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-[#141418] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-serif text-base font-bold uppercase tracking-wider text-white">
                Sartorial Summary
              </h3>
              <span className="text-xs text-[#C5A880] font-medium">
                {cart.reduce((a, b) => a + b.quantity, 0)} Pieces
              </span>
            </div>

            {/* List */}
            <div className="max-h-[340px] overflow-y-auto divide-y divide-white/5 pr-1">
              {cart.map((item) => (
                <div key={item.id} className="py-3.5 flex items-center gap-3">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-14 h-16 object-cover bg-black/40 border border-white/5 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-white line-clamp-1">{item.product.name}</div>
                    <div className="text-[11px] text-neutral-400">
                      Size: {item.size} · Color: {item.color}
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      Qty: {item.quantity} × {formatPrice(item.price)}
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-white tabular-nums">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            {/* Costs */}
            <div className="space-y-2 text-xs text-neutral-400 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#C5A880]">
                  <span>Privilege Code ({promoCode})</span>
                  <span className="tabular-nums">-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Courier Dispatch</span>
                <span className="text-white tabular-nums">
                  {formData.shippingMethod === 'white-glove'
                    ? formatPrice(75)
                    : shippingAmount === 0
                    ? 'Complimentary'
                    : formatPrice(shippingAmount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated VAT / Duties</span>
                <span className="text-white tabular-nums">{formatPrice(taxAmount)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-3 border-t border-white/10">
                <span className="uppercase tracking-wider">Total</span>
                <span className="text-[#C5A880] tabular-nums text-lg">
                  {formatPrice(
                    grandTotal + (formData.shippingMethod === 'white-glove' ? 75 : 0)
                  )}
                </span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-4 bg-black/40 border border-white/5 flex items-center gap-3 text-xs text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-[#C5A880] shrink-0" />
              <div>
                <span className="font-semibold text-white block text-[11px] uppercase tracking-wider">
                  Guaranteed Sartorial Authenticity
                </span>
                <span>Protected by AL HAFIZ COLLECTION worldwide craftsmanship warranty.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
