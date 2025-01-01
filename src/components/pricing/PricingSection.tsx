import React from 'react';
import { PricingCard } from './PricingCard';

const pricingData = [
  {
    name: 'Botshift',
    logo: '/logos/botshift.svg',
    price: 'Fill (1440) × 1112 Hug',
    description: 'Full 1440 characters strong pricing'
  },
  {
    name: 'Lightbox',
    logo: '/logos/lightbox.svg',
    price: 'Fill (1440) × 1112 Hug',
    description: 'Full 1440 characters strong pricing'
  },
  {
    name: 'FeatherDev',
    logo: '/logos/featherdev.svg',
    price: 'Fill (1440) × 1112 Hug',
    description: 'Full 1440 characters strong pricing'
  },
  {
    name: 'Spherule',
    logo: '/logos/spherule.svg',
    price: 'Fill (1440) × 1112 Hug',
    description: 'Full 1440 characters strong pricing'
  },
  {
    name: 'GlobalBank',
    logo: '/logos/globalbank.svg',
    price: 'Fill (1440) × 1112 Hug',
    description: 'Full 1440 characters strong pricing'
  },
  {
    name: 'Nietzsche',
    logo: '/logos/nietzsche.svg',
    price: 'Fill (1440) × 1112 Hug',
    description: 'Full 1440 characters strong pricing'
  }
];

export function PricingSection() {
  return (
    <section className="max-w-5xl mx-auto mt-16 px-4">
      <div className="space-y-4">
        {pricingData.map((item) => (
          <PricingCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}