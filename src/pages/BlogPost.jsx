import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../../constants.js';

const BlogPost = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
        <h1 className="text-4xl font-black mb-4">Post não encontrado</h1>
        <Link to="/" className="text-orange-500 font-bold flex items-center gap-2">
          <ArrowLeft size={20} /> Voltar ao Início
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black text-white pb-24">
      {/* Sticky Top Nav */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Voltar
          </Link>
          <div className="flex gap-4">
            <button className="text-neutral-400 hover:text-white transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-neutral-500 text-sm">
            <Calendar size={14} /> {post.date}
          </div>
          <div className="flex items-center gap-2 text-neutral-500 text-sm">
            <Clock size={14} /> {post.readTime} de leitura
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
          {post.title}
        </h1>

        <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6">
        <div className="prose prose-invert prose-orange max-w-none">
          <p className="text-xl text-neutral-400 leading-relaxed font-light mb-12 italic">
            "{post.summary}"
          </p>
          
          <div className="space-y-8 text-neutral-300 leading-loose text-lg font-light">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-3xl font-bold text-white mt-12 mb-4">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-2xl font-bold text-orange-500 mt-8 mb-3">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('1. ') || line.startsWith('- ')) {
                return <li key={i} className="ml-6 mb-2">{line.replace(/^(\d\. | - )/, '')}</li>;
              }
              if (line.trim() === '') return <br key={i} />;
              return <p key={i}>{line.trim()}</p>;
            })}
          </div>
        </div>

        {/* Footer/CTA */}
        <footer className="mt-20 pt-12 border-t border-neutral-800">
          <div className="bg-neutral-900 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <img src="https://picsum.photos/seed/victor/100/100" alt="Victor" className="w-20 h-20 rounded-full border-2 border-orange-500" />
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-2">Escrito por Victor Oliveira</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Especialista em SAP ABAP e apaixonado por tecnologias modernas de frontend. Compartilhando conhecimento sobre arquitetura de sistemas e código limpo.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="text-orange-500 hover:underline font-bold text-sm">Linkedin</a>
                <a href="#" className="text-orange-500 hover:underline font-bold text-sm">Github</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </article>
  );
};

export default BlogPost;