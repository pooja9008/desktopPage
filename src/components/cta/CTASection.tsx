import React from 'react';

export function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="inline-block px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full mb-4">
          1440 × 830 Hug
        </span>
        <h2 className="text-3xl font-bold mb-4">Start your free trial</h2>
        <p className="text-gray-600 mb-8">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button className="px-6 py-2.5 text-gray-600 hover:text-gray-900 font-medium">
            Learn more
          </button>
          <button className="px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}