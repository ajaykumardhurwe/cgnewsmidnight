import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <Link to={`/post/${post.id}`}>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
}