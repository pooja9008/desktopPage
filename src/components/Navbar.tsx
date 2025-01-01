import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
          <span className="font-semibold">Untitled UI</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700">Home</Link>
          <Link to="/products" className="text-gray-700">Products</Link>
          <Link to="/resources" className="text-gray-700">Resources</Link>
          <Link to="/pricing" className="text-gray-700">Pricing</Link>
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
    </nav>
  );
}