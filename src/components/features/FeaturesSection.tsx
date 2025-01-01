import React from 'react';
import { FeatureCard } from './FeatureCard';
import { features } from './featureData';

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 mb-2">Features</p>
          <h2 className="text-3xl font-bold mb-4">Analytics that feels like it&apos;s from the future</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful, self-serve product and growth analytics to help you convert, engage,
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}