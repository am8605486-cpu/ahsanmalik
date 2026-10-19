# AL HAFIZ COLLECTION — Premium Men's Fashion E-Commerce

A modern, luxurious menswear digital storefront crafted for **AL HAFIZ COLLECTION**. Designed with an editorial black, charcoal, warm ivory, and brushed champagne gold visual identity, timeless typography, bespoke tailoring narratives, and a complete client-side shopping architecture.

---

## 🌟 Features & Highlights

- **Luxury Brand Aesthetic**: Editorial typography featuring *Cinzel* and *Plus Jakarta Sans*, balanced whitespace, high-contrast imagery, and subtle gold accents.
- **Top Bar Contract**: Minimalist one-row header with brand wordmark, single-line collection links, search trigger, saved wishlist count, and live shopping bag.
- **Hero Campaign**: Full-width campaign visual with measured contrast scrim, “ELEVATE YOUR STYLE” headline, and trust metrics.
- **Interactive Product Catalog**:
  - Filter by Category (Suits & Tailoring, Luxury Shirts, Outerwear, Knitwear, Ceremonial, Artisanal Footwear, Fine Accessories).
  - Price Range Slider ($200 to $2,500).
  - Shade & Color Swatch Filters.
  - Tailored Size Filters (38R, 40R, 42R, S, M, L, XL, EU 40–45).
  - Sorting by Curated Selection, Newest, Price (Low to High / High to Low), and Client Rating.
  - Live Keyword Search.
- **Product Detail View (PDP)**:
  - High-resolution interactive zoom-on-hover lens.
  - Vertical and horizontal thumbnail switchers.
  - Color swatches and size selectors.
  - Interactive Sartorial Sizing Guide modal with Inches / CM toggle.
  - Quantity stepper with live atelier stock limits.
  - Expandable sartorial specifications: Tailoring & Fit, Fabric Provenance, Care, and Complimentary Courier Delivery.
  - Related garments and recently viewed items.
- **Shopping Bag & Slide-Over Drawer**:
  - Real-time LocalStorage synchronization (`alhafiz_cart_v1`).
  - Progress bar for Complimentary International Air Courier Delivery ($250 threshold).
  - Privilege Voucher Support (`ALHAFIZ10` for 10% off, `VIPGENTLEMAN` for 15% off).
  - Item removals and quantity adjustments.
- **Dedicated Wishlist View**:
  - Saved favorites persisted across browser sessions (`alhafiz_wishlist_v1`).
  - Quick move-to-bag and removal actions.
- **Multi-Step Concierge Checkout**:
  - Step 1: Customer details & shipping destination with form validation.
  - Step 2: Courier dispatch selection (DHL Priority Air, White-Glove Handover, Insured Freight).
  - Step 3: Payment method demo (Card, Cash on Delivery upon inspection, Digital Wallet).
  - Celebratory gold confetti launch (`canvas-confetti`).
  - Itemized receipt confirmation with order number (e.g. `#AHC-XXXXXX`) and printable receipt.
  - Clear LocalStorage prototype notice.
- **Private Salon Appointments**:
  - Flagship salon booking form for London (Savile Row), Dubai (Fashion Avenue), New York (Madison Ave), and Milan (Via Monte Napoleone).
- **The Sovereign Circle Newsletter**:
  - Email signup that automatically activates a 10% welcome coupon (`ALHAFIZ10`).
- **Additional Pages**:
  - About Us (Savile Row & Eastern royal textile history).
  - Client Services & FAQ.
  - Complimentary Shipping & Returns Policy.
  - Privacy Policy & Terms of Service.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom `@theme` tokens
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Storage**: Browser LocalStorage for persistent client cart, wishlist, recently viewed, and orders

---

## 🚀 Getting Started

To run the application locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🔑 Demo Privilege Vouchers

Test the checkout and cart discounts with the following codes:
- `ALHAFIZ10` — 10% off entire order
- `VIPGENTLEMAN` — 15% VIP concierge discount
