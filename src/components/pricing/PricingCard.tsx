import React from 'react';

interface PricingCardProps {
  name: string;
  logo: string;
  price: string;
  description: string;
}

export function PricingCard({ name, logo, price, description }: PricingCardProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
      <img src={logo} alt={name} className="w-8 h-8" />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="text-right">
        <div className="text-sm font-medium text-gray-900">{price}</div>
      </div>
    </div>
  );
}