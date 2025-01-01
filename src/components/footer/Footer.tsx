import React from 'react';
import { FooterColumn } from './FooterColumn';
import { footerSections } from './footerData';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerSections.map((section) => (
            <FooterColumn key={section.title} {...section} />
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              <span className="font-semibold">Untitled UI</span>
            </div>
            <p className="text-sm text-gray-600">
              © 2077 Untitled UI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}