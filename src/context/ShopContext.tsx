import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Category, PageView, Order, CustomerDetails } from '../types';
import { PRODUCTS } from '../data/products';

interface ToastState {
  id: number;
  message: string;
  type?: 'success' | 'info';
}

interface ShopContextType {
  // Navigation
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  navigateToProduct: (product: Product) => void;
  navigateToCategory: (cat: Category) => void;
  navigateToShop: (filter?: { category?: Category; search?: string }) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartItemCount: number;
  subtotal: number;
  discountAmount: number;
  shippingAmount: number;
  taxAmount: number;
  grandTotal: number;
  promoCode: string;
  promoDiscountPercent: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  freeShippingThreshold: number;
  remainingForFreeShipping: number;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;

  // Recently Viewed
  recentlyViewed: Product[];
  addToRecentlyViewed: (product: Product) => void;

  // Currency
  currency: 'PKR' | 'USD' | 'AED' | 'GBP';
  setCurrency: (c: 'PKR' | 'USD' | 'AED' | 'GBP') => void;
  formatPrice: (amount: number) => string;

  // Orders
  orders: Order[];
  createOrder: (customer: CustomerDetails) => Order;

  // Modals & Drawers
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  // Notifications
  toasts: ToastState[];
  showToast: (message: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const STORAGE_KEYS = {
  CART: 'alhafiz_cart_v1',
  WISHLIST: 'alhafiz_wishlist_v1',
  RECENT: 'alhafiz_recent_v1',
  ORDERS: 'alhafiz_orders_v1',
  CURRENCY: 'alhafiz_currency_v1',
};

const CURRENCY_RATES = {
  PKR: { symbol: 'Rs. ', rate: 1.0 },
  USD: { symbol: '$', rate: 0.0036 },
  AED: { symbol: 'AED ', rate: 0.013 },
  GBP: { symbol: '£', rate: 0.0028 },
};

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recentIds, setRecentIds] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currency, setCurrencyState] = useState<'PKR' | 'USD' | 'AED' | 'GBP'>('PKR');

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const [promoCode, setPromoCode] = useState<string>('');
  const [promoDiscountPercent, setPromoDiscountPercent] = useState<number>(0);

  // Initialize from LocalStorage safely
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedRecent = localStorage.getItem(STORAGE_KEYS.RECENT);
      if (savedRecent) setRecentIds(JSON.parse(savedRecent));

      const savedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
      if (savedOrders) setOrders(JSON.parse(savedOrders));

      const savedCurr = localStorage.getItem(STORAGE_KEYS.CURRENCY) as 'PKR' | 'USD' | 'AED' | 'GBP';
      if (savedCurr && CURRENCY_RATES[savedCurr]) setCurrencyState(savedCurr);
    } catch {
      // LocalStorage access restricted or unavailable
    }
  }, []);

  // Sync to LocalStorage on updates
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recentIds));
    } catch {}
  }, [recentIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    } catch {}
  }, [orders]);

  const setCurrency = (c: 'PKR' | 'USD' | 'AED' | 'GBP') => {
    setCurrencyState(c);
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENCY, c);
    } catch {}
  };

  const showToast = (message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const formatPrice = (amount: number): string => {
    const info = CURRENCY_RATES[currency] || CURRENCY_RATES.PKR;
    const converted = amount * info.rate;
    return `${info.symbol}${converted.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    addToRecentlyViewed(product);
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (cat: Category) => {
    setSelectedCategory(cat);
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToShop = (filter?: { category?: Category; search?: string }) => {
    if (filter?.category) setSelectedCategory(filter.category);
    if (filter?.search !== undefined) setSearchQuery(filter.search);
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product, size: string, color: string, quantity = 1) => {
    const cartItemId = `${product.id}-${size}-${color}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          product,
          size,
          color,
          quantity,
          price: product.price,
        },
      ];
    });
    showToast(`Added ${product.name} (${size}) to your Shopping Bag.`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast('Item removed from Shopping Bag.');
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved to Wishlist: ${product.name}`);
        return [...prev, product.id];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const addToRecentlyViewed = (product: Product) => {
    setRecentIds((prev) => {
      const filtered = prev.filter((id) => id !== product.id);
      return [product.id, ...filtered].slice(0, 8);
    });
  };

  const recentlyViewed = recentIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ALHAFIZ10') {
      setPromoCode('ALHAFIZ10');
      setPromoDiscountPercent(0.10);
      showToast('Promotional Code ALHAFIZ10 Applied: 10% Off Your Order');
      return { success: true, message: '10% privilege discount applied!' };
    }
    if (clean === 'VIPGENTLEMAN') {
      setPromoCode('VIPGENTLEMAN');
      setPromoDiscountPercent(0.15);
      showToast('VIP Privilege Code Applied: 15% Off Your Order');
      return { success: true, message: '15% VIP concierge discount applied!' };
    }
    return { success: false, message: 'Invalid code. Try ALHAFIZ10 or VIPGENTLEMAN' };
  };

  const removePromoCode = () => {
    setPromoCode('');
    setPromoDiscountPercent(0);
    showToast('Promotional code removed.');
  };

  const freeShippingThreshold = 5000;
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * promoDiscountPercent);
  const shippingAmount = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 350;
  const taxAmount = 0; // All taxes included in retail price in PKR
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingAmount + taxAmount);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const createOrder = (customer: CustomerDetails): Order => {
    const orderNumber = `AHC-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      createdAt: new Date().toISOString(),
      items: [...cart],
      subtotal,
      discount: discountAmount,
      shipping: shippingAmount,
      tax: taxAmount,
      total: grandTotal,
      customer,
      status: 'confirmed',
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedProduct,
        setSelectedProduct,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        navigateToProduct,
        navigateToCategory,
        navigateToShop,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartItemCount,
        subtotal,
        discountAmount,
        shippingAmount,
        taxAmount,
        grandTotal,
        promoCode,
        promoDiscountPercent,
        applyPromoCode,
        removePromoCode,
        freeShippingThreshold,
        remainingForFreeShipping,
        wishlist,
        toggleWishlist,
        isInWishlist,
        recentlyViewed,
        addToRecentlyViewed,
        currency,
        setCurrency,
        formatPrice,
        orders,
        createOrder,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        quickViewProduct,
        setQuickViewProduct,
        toasts,
        showToast,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within ShopProvider');
  return context;
};
