import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'The Future of AI Architecture',
      excerpt:
        'Exploring emerging trends in AI system design and their implications for the future of technology.',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'AI Trends',
      image: 'https://images.unsplash.com/photo-1677442136469-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Scaling Neural Networks',
      excerpt:
        'Best practices for designing and implementing scalable neural network architectures.',
      date: '2024-03-10',
      readTime: '8 min read',
      category: 'Technical',
      image: 'https://images.unsplash.com/photo-1677442137010-f16935b6f3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Distributed AI Systems',
      excerpt:
        'A comprehensive guide to building and maintaining distributed AI systems.',
      date: '2024-03-05',
      readTime: '10 min read',
      category: 'System Design',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const categories = ['All', 'AI Trends', 'Technical', 'System Design'];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blog
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Thoughts and insights on AI architecture and technology
          </p>
        </div>

        {/* Categories */}
        <div className="mt-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === 'All'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  {post.readTime}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-indigo-600" />
                  <span className="text-sm text-indigo-600">{post.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}