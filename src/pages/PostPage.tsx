import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';

export function PostPage() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <div className="flex items-center space-x-4 text-gray-500 mb-8">
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
      </div>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
}