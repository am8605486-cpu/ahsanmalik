import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const { applyPromoCode, showToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address');
      return;
    }

    setError('');
    setSubscribed(true);
    applyPromoCode('ALHAFIZ10');
    showToast('Privilege membership unlocked. Code ALHAFIZ10 applied!');
  };

  return (
    <section className="py-20 lg:py-24 bg-[#0D0D10] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-3 font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Sovereign Circle</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mb-4">
          Receive Private Salon Invitations
        </h2>

        <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-xl mx-auto mb-8 leading-relaxed">
          Subscribe to receive private preview access to limited seasonal runs, invitations to bespoke fitting sessions in London and Dubai, and a complimentary 10% welcome privilege code.
        </p>

        {subscribed ? (
          <div className="p-6 bg-[#16161C] border border-[#C5A880]/40 max-w-lg mx-auto text-center space-y-3 animate-fadeIn">
            <CheckCircle2 className="w-8 h-8 text-[#C5A880] mx-auto" />
            <h3 className="font-serif text-lg font-bold uppercase text-white tracking-wider">
              Welcome to The Sovereign Circle
            </h3>
            <p className="text-xs text-neutral-300">
              Your 10% privilege code <strong className="text-[#C5A880] font-mono text-sm">ALHAFIZ10</strong> has been automatically added to your bag.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address..."
                  className="w-full bg-[#141418] border border-white/15 px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                />
                <Mail className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 bg-[#C5A880] hover:bg-[#d8bc93] text-[#0D0D10] text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>JOIN CLUB</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            {error && <p className="text-xs text-rose-400 mt-2 text-left">{error}</p>}
            <p className="text-[10px] text-neutral-500 mt-3 font-light">
              We respect your privacy. Unsubscribe at any time. No unwanted marketing spam.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
