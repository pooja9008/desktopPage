import React from 'react';

export function Hero() {
  return (
    <div className="text-center max-w-3xl mx-auto mt-16 px-4">
      <div className="flex items-center justify-center space-x-4 mb-6">
        <span className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full">New feature</span>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
          Check out the team dashboard
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-6">Beautiful analytics to grow smarter</h1>
      <p className="text-xl text-gray-600 mb-8">
        Powerful, self-serve product and growth analytics to help you convert, engage,
        and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="flex items-center justify-center space-x-4">
        <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
          Demo
        </button>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Sign up
        </button>
      </div>
    </div>
  );
}