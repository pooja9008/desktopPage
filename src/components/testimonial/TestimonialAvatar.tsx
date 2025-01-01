import React from 'react';

interface TestimonialAvatarProps {
  imageSrc?: string;
  name: string;
  role: string;
  company: string;
}

export function TestimonialAvatar({ imageSrc, name, role, company }: TestimonialAvatarProps) {
  return (
    <div className="flex flex-col items-center">
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-12 h-12 rounded-full mb-3"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-gray-200 mb-3" />
      )}
      <h4 className="font-medium text-gray-900">{name}</h4>
      <p className="text-sm text-gray-500">{role}, {company}</p>
    </div>
  );
}