import React from 'react';
import type { FooterSection } from './types';

export function FooterColumn({ title, links }: FooterSection) {
  return (
    <div>
      <h3 className="font-medium text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm flex items-center">
              {link.label}
              {link.isNew && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
                  New
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}