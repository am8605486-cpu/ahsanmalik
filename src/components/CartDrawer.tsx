import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shippingAmount,
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

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyPromoCode(inputCode);
    setPromoMessage({ text: res.message, success: res.success });
    if (res.success) setInputCode('');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const percentFreeShipping = Math.min(
    100,
    Math.round(((freeShippingThreshold - remainingForFreeShipping) / freeShippingThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121215] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C5A880]" />
              <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-white">
                Your Shopping Bag
              </h2>
              <span className="text-xs text-neutral-400 font-medium">
                ({cart.reduce((a, b) => a + b.quantity, 0)})
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close Shopping Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Progress Bar */}
          <div className="bg-[#17171C] px-5 py-3 border-b border-white/5">
            {remainingForFreeShipping > 0 ? (
              <div>
                <div className="text-[11px] text-neutral-300 font-light flex items-center justify-between mb-1.5">
                  <span>Add <strong className="text-[#C5A880] font-semibold">{formatPrice(remainingForFreeShipping)}</strong> for Complimentary Express Shipping</span>
                  <span className="text-[10px] text-neutral-500">{percentFreeShipping}%</span>
                </div>
                <div className="w-full h-1 bg-black/50 overflow-hidden">
                  <div
                    className="h-full bg-[#C5A880] transition-all duration-500 ease-out"
                    style={{ width: `${percentFreeShipping}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs text-[#C5A880] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>You qualify for Complimentary Express Delivery</span>
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 divide-y divide-white/5">
            {cart.length === 0 ? (
              <div className="py-16 text-center">
                <ShoppingBag className="w-12 h-12 text-neutral-600 mx-auto mb-4 stroke-[1]" />
                <h3 className="font-serif text-base uppercase tracking-wider text-white mb-2">
                  Your bag is currently empty
                </h3>
                <p className="text-xs text-neutral-400 font-light max-w-xs mx-auto mb-6">
                  Explore our tailored collections, fine Italian wool suits, and handcrafted leather footwear.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateToShop();
                  }}
                  className="px-6 py-3 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold tracking-[0.2em] uppercase transition-colors"
                >
                  DISCOVER COLLECTION
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover bg-black/40 border border-white/5 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-semibold text-white tracking-wide leading-tight line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-500 hover:text-rose-400 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-neutral-400 mt-1 flex items-center gap-2">
                        <span>Size: <strong className="text-neutral-200">{item.size}</strong></span>
                        <span>·</span>
                        <span>Color: <strong className="text-neutral-200">{item.color}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-white/10 bg-black/40 text-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-neutral-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-3 py-0.5 text-white font-medium tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-neutral-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-semibold text-sm text-white tabular-nums">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#16161A] border-t border-white/10 space-y-4">
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
                      placeholder="Privilege Code (try ALHAFIZ10)"
                      className="bg-black/50 border border-white/10 px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] flex-1 uppercase tracking-wider"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-1.5 bg-white/10 hover:bg-[#C5A880] text-neutral-200 hover:text-[#0D0D10] text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoMessage && !promoCode && (
                  <p className={`text-[10px] mt-1 ${promoMessage.success ? 'text-[#C5A880]' : 'text-rose-400'}`}>
                    {promoMessage.text}
                  </p>
                )}
              </div>

              {/* Cost Summary Breakdown */}
              <div className="space-y-1.5 text-xs text-neutral-400 border-t border-white/5 pt-3">
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
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                  <span className="uppercase tracking-wider">Estimated Total</span>
                  <span className="tabular-nums text-base text-[#C5A880]">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-lg shadow-[#C5A880]/15"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 uppercase tracking-widest text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>30-Day Complimentary Returns & Exchanges</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
