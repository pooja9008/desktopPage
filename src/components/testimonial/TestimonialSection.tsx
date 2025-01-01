import React from 'react';
import { TestimonialAvatar } from './TestimonialAvatar';

export function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <img 
            src="/logos/sisyphus.svg" 
            alt="Sisyphus Logo" 
            className="h-8 mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold mb-12 max-w-2xl mx-auto">
          We've been using Untitled to kick start every new project and can't imagine working without it.
        </h2>
        <TestimonialAvatar
          name="Candice Wu"
          role="Product Manager"
          company="Sisyphus"
        />
      </div>
    </section>
  );
}