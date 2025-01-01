import React from 'react';
import type { BlogPost } from './types';

export function BlogCard({ category, title, description, author, image }: BlogPost) {
  return (
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <span className="text-sm font-medium text-purple-600">{category}</span>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600">
            {title}
          </h3>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center space-x-3">
          {author.avatar ? (
            <img src={author.avatar} alt={author.name} className="w-6 h-6 rounded-full" />
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-200" />
          )}
          <div className="text-sm text-gray-600">
            <span>{author.name}</span>
            <span className="mx-2">·</span>
            <span>{author.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}