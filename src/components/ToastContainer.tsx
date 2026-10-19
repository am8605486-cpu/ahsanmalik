import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2 } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-[#181820] border border-[#C5A880]/50 text-white p-4 shadow-2xl flex items-center gap-3 animate-fadeIn pointer-events-auto"
        >
          <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
          <p className="text-xs text-neutral-200 tracking-wide font-light">{toast.message}</p>
        </div>
      ))}
    </div>
  );
};
