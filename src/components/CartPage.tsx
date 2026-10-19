import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shippingAmount,
    taxAmount,
    grandTotal,
    formatPrice,
    remainingForFreeShipping,
    freeShippingThreshold,
    promoCode,
    applyPromoCode,
    removePromoCode,
    setCurrentPage,
    navigateToShop,
  } = useShop();

  const [inputCode, setInputCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; success: boolean } | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyPromoCode(inputCode);
    setPromoMessage({ text: res.message, success: res.success });
    if (res.success) setInputCode('');
  };

  const percentFreeShipping = Math.min(
    100,
    Math.round(((freeShippingThreshold - remainingForFreeShipping) / freeShippingThreshold) * 100)
  );

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-[#F4F4F6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigateToShop()}
          className="flex items-center gap-1.5 text-xs text-[#C5A880] hover:underline uppercase tracking-wider mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Continue Shopping</span>
        </button>

        <div className="border-b border-white/10 pb-8 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
              Review Selections
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
              Your Shopping Bag
            </h1>
          </div>
          <div className="text-xs text-neutral-400">
            <span className="text-white font-semibold tabular-nums">{cart.reduce((a, b) => a + b.quantity, 0)}</span> Garments
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="py-24 text-center bg-[#121215] border border-white/5 p-8 max-w-2xl mx-auto">
            <ShoppingBag className="w-12 h-12 text-neutral-600 mx-auto mb-4 stroke-[1]" />
            <h3 className="font-serif text-xl uppercase tracking-wider text-white mb-2">
              Your Shopping Bag is Empty
            </h3>
            <p className="text-neutral-400 text-xs font-light max-w-md mx-auto mb-8 leading-relaxed">
              You haven&rsquo;t added any garments to your bag yet. Explore our handcrafted Italian wool suits, Egyptian cotton shirts, and winter overcoats.
            </p>
            <button
              onClick={() => navigateToShop()}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C5A880] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#d8bc93] transition-colors"
            >
              <span>EXPLORE THE COLLECTION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Items Table (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Free Shipping Meter */}
              <div className="bg-[#141418] p-4 border border-white/10">
                {remainingForFreeShipping > 0 ? (
                  <div>
                    <div className="text-xs text-neutral-300 font-light flex items-center justify-between mb-2">
                      <span>Add <strong className="text-[#C5A880] font-semibold">{formatPrice(remainingForFreeShipping)}</strong> more to receive Complimentary Express Delivery</span>
                      <span className="text-neutral-400 text-xs tabular-nums">{percentFreeShipping}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/50 overflow-hidden">
                      <div
                        className="h-full bg-[#C5A880] transition-all duration-500 ease-out"
                        style={{ width: `${percentFreeShipping}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-[#C5A880] font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>Your order qualifies for Complimentary International Air Courier Delivery</span>
                  </div>
                )}
              </div>

              {/* Items List */}
              <div className="bg-[#141418] border border-white/10 divide-y divide-white/5">
                {cart.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover bg-black/40 border border-white/10 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-[#C5A880]">
                          {item.product.categoryName}
                        </div>
                        <h3 className="font-serif text-base font-semibold text-white tracking-wide">
                          {item.product.name}
                        </h3>
                        <div className="text-xs text-neutral-400 mt-1 flex items-center gap-3">
                          <span>Size: <strong className="text-white">{item.size}</strong></span>
                          <span>·</span>
                          <span>Color: <strong className="text-white">{item.color}</strong></span>
                        </div>
                        <div className="text-xs text-neutral-400 font-mono mt-1">
                          {formatPrice(item.price)} each
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-0 border-white/5">
                      {/* Stepper */}
                      <div className="flex items-center border border-white/15 bg-black/40 text-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1.5 text-neutral-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-4 py-1.5 text-white font-medium tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1.5 text-neutral-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      {/* Line total */}
                      <span className="font-bold text-sm text-white tabular-nums min-w-[70px] text-right">
                        {formatPrice(item.price * item.quantity)}
                      </span>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Order Summary (lg:col-span-4) */}
            <div className="lg:col-span-4 bg-[#141418] border border-white/10 p-6 sm:p-8 space-y-6">
              <h3 className="font-serif text-base font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4">
                Bag Summary
              </h3>

              {/* Promo Code Form */}
              <div>
                {promoCode ? (
                  <div className="flex items-center justify-between bg-black/40 px-3 py-2 border border-[#C5A880]/30 text-xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span className="text-[#C5A880] font-medium tracking-wider uppercase">
                        {promoCode} (10% OFF)
                      </span>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-neutral-400 hover:text-white text-[11px] underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      placeholder="Privilege Code (e.g. ALHAFIZ10)"
                      className="bg-black/50 border border-white/15 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] flex-1 uppercase tracking-wider"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white/10 hover:bg-[#C5A880] text-neutral-200 hover:text-[#0D0D10] text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoMessage && !promoCode && (
                  <p className={`text-[10px] mt-1.5 ${promoMessage.success ? 'text-[#C5A880]' : 'text-rose-400'}`}>
                    {promoMessage.text}
                  </p>
                )}
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-2 text-xs text-neutral-400 border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white tabular-nums">{formatPrice(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#C5A880]">
                    <span>Privilege Discount</span>
                    <span className="tabular-nums">-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Courier Shipping</span>
                  <span className="text-white tabular-nums">
                    {shippingAmount === 0 ? 'Complimentary' : formatPrice(shippingAmount)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated VAT (5%)</span>
                  <span className="text-white tabular-nums">{formatPrice(taxAmount)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-3 border-t border-white/10">
                  <span className="uppercase tracking-wider">Estimated Total</span>
                  <span className="text-[#C5A880] tabular-nums text-lg">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  setCurrentPage('checkout');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl shadow-[#C5A880]/15"
              >
                <span>PROCEED TO CHECKOUT SALON</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Complimentary 30-day returns and boutique alterations included.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
