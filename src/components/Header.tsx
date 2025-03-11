import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Briefcase } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">DevBlog</span>
          </Link>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Home
            </Link>
            <Link to="/jobs" className="text-gray-600 hover:text-gray-900 px-3 py-2 flex items-center">
              <Briefcase className="h-5 w-5 mr-1" />
              Jobs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}