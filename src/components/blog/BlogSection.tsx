import React from 'react';
import { BlogCard } from './BlogCard';
import { blogPosts } from './blogData';

export function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-sm text-purple-600">Our blog</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">Latest blog posts</h2>
            <p className="text-gray-600 mt-2">
              Tool and strategies modern teams need to help their companies grow.
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700">
            View all posts
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}