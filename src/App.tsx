import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { NewArrivalsSection, BestSellersSection, PromotionalBanner } from './components/FeaturedSections';
import { EditorialStory } from './components/EditorialStory';
import { Testimonials } from './components/Testimonials';
import { InstagramGallery } from './components/InstagramGallery';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ShopPage } from './components/ShopPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartPage } from './components/CartPage';
import { WishlistPage } from './components/WishlistPage';
import { CheckoutPage } from './components/CheckoutPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { FAQPage } from './components/FAQPage';
import { ShippingPolicyPage, PrivacyPolicyPage, TermsPage } from './components/PolicyPages';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { SearchModal } from './components/SearchModal';
import { ToastContainer } from './components/ToastContainer';

const MainContent: React.FC = () => {
  const { currentPage } = useShop();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <CategoryShowcase />
            <NewArrivalsSection />
            <PromotionalBanner />
            <BestSellersSection />
            <EditorialStory />
            <Testimonials />
            <InstagramGallery />
            <Newsletter />
          </>
        );
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductDetailPage />;
      case 'cart':
        return <CartPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      case 'shipping':
        return <ShippingPolicyPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <ShopPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0D] text-[#F4F4F6]">
      <Navbar />
      <main className="flex-1">{renderPage()}</main>
      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <QuickViewModal />
      <SizeGuideModal />
      <SearchModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
