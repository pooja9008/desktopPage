import React from 'react';
import { Icons } from './Icons';
import type { Feature } from './types';

export function FeatureCard({ iconType, title, description }: Feature) {
  const IconComponent = Icons[iconType];
  
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <IconComponent />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}