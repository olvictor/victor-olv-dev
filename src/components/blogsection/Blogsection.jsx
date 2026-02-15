import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../../constants.js';

const BlogSection = () => {
  return (
    <div className="mt-24">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-5xl font-black uppercase tracking-tighter text-white">Blog</h2>
        <Link to="/" className="text-orange-500 font-bold flex items-center gap-2 hover:underline">
          Ver todos <ArrowRight size={20} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map(post => (
          <Link 
            key={post.id} 
            to={`/post/${post.id}`}
            className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-orange-600/10 text-orange-500 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-neutral-500 text-xs">
                  <Clock size={14} />
                  {post.readTime} de leitura
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {post.summary}
              </p>
              <span className="text-orange-500 font-bold flex items-center gap-2 text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                Ler mais <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
