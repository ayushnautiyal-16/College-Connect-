import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts, categories, seoTitles } from '../../data/blogData';

function Blog() {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/djjdvw3wc/image/upload/v1767468206/header-image-1_ccchxr.jpg"
            alt="Knowledge Hub Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Heavy Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 tracking-wide animate-fade-in shadow-lg">
            OUR LATEST INSIGHTS
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
            Knowledge Hub for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              Aspiring Students
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-slide-up drop-shadow-md font-medium" style={{ animationDelay: '0.2s' }}>
            Stay ahead of the curve with expert advice, detailed campus reviews, and the latest trends in higher education.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">

        {/* Categories Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Explore Topics</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-600 font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm hover:shadow-md text-sm md:text-base"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post (First Item) */}
        {blogPosts.length > 0 && (
          <div className="mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white grid grid-cols-1 lg:grid-cols-2 min-h-[400px] border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.14)]">
              <div className={`relative h-64 lg:h-full overflow-hidden bg-gradient-to-br ${blogPosts[0].imageGradient}`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                {/* Decorative Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
                  <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" className="text-white" fill="currentColor" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="text-white font-medium text-sm tracking-wide">Featured Article</span>
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <span className="text-indigo-600 font-bold tracking-wide uppercase">{blogPosts[0].category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="text-gray-500">{blogPosts[0].date}</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-indigo-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
                      {blogPosts[0].author.charAt(0)}
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">{blogPosts[0].author}</p>
                      <p className="text-gray-500">{blogPosts[0].readTime}</p>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/blog/${blogPosts[0].id}`)} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image Area */}
              <div className={`h-56 w-full relative overflow-hidden bg-gradient-to-br ${post.imageGradient}`}>
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="mb-4 text-sm text-gray-500 flex items-center gap-2">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                  <button
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="text-indigo-600 font-semibold text-sm flex items-center gap-1 group/btn"
                  >
                    Read
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trending / SEO Topics */}
        <section className="mb-20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading text-center">Trending Discussions</h2>
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {seoTitles.map((title, index) => (
                <div key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                  <span className="text-indigo-500 font-bold text-lg mt-0.5 opacity-50 text-right w-6">{(index + 1).toString().padStart(2, '0')}</span>
                  <p className="text-gray-700 font-medium group-hover:text-indigo-700 transition-colors leading-relaxed">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section - Premium Redesign */}
        <section className="relative overflow-hidden rounded-3xl bg-gray-900 text-white animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>

          <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Join Our Community of Achievers
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Subscribe to get weekly insights, scholarship alerts, and premium admission strategies directly in your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/20 backdrop-blur-sm transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-1"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-6 text-sm text-gray-500">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Blog;
