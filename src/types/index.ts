export type Category = 
  | 'all'
  | 'unstitched'
  | 'shalwar-kameez'
  | 'kurta'
  | 'waistcoats'
  | 'ceremonial'
  | 'footwear'
  | 'accessories';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: Category;
  categoryName: string;
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  shortDescription: string;
  description: string;
  fabric: string;
  origin: string;
  fit: string;
  careInstructions: string[];
  features: string[];
  colors: {
    name: string;
    hex: string;
  }[];
  sizes: string[];
  images: string[];
}

export interface CartItem {
  id: string; // product id + size + color
  productId: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  shippingMethod: 'express' | 'white-glove' | 'standard';
  paymentMethod: 'card' | 'cod' | 'apple-pay';
  notes?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  customer: CustomerDetails;
  status: 'confirmed' | 'processing' | 'shipped';
}

export type PageView = 
  | 'home'
  | 'shop'
  | 'product'
  | 'cart'
  | 'wishlist'
  | 'checkout'
  | 'about'
  | 'contact'
  | 'faq'
  | 'shipping'
  | 'terms'
  | 'privacy';
