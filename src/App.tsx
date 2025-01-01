import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/features/FeaturesSection';
import { Dashboard } from './components/Dashboard';
import { TestimonialSection } from './components/testimonial/TestimonialSection';
import { PricingSection } from './components/pricing/PricingSection';
import { BlogSection } from './components/blog/BlogSection';
import { CTASection } from './components/cta/CTASection';
import { Footer } from './components/footer/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <Dashboard />
        <TestimonialSection />
        <PricingSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;