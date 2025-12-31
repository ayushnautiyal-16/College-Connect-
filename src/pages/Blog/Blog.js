import React from 'react';
import Card from '../../components/Card/Card';

function Blog() {
  // Sample blog posts - in real app, this would come from API
  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right College for Your Career',
      excerpt: 'A comprehensive guide to selecting a college that aligns with your career goals and aspirations.',
      date: 'March 15, 2024',
      category: 'Admission Tips',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Top 10 Engineering Colleges in India',
      excerpt: 'Discover the premier engineering institutes and what makes them stand out.',
      date: 'March 10, 2024',
      category: 'College Reviews',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Scholarship Opportunities for 2024',
      excerpt: 'Complete guide to available scholarships and how to apply for them.',
      date: 'March 5, 2024',
      category: 'Financial Aid',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and news about college admissions
          </p>
        </section>

        {/* Blog Posts Grid */}
        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="max-w-2xl mx-auto p-8 md:p-10 text-center">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
              Blog Coming Soon
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're working on creating valuable content about college admissions, career guidance, 
              and educational insights. Check back soon for exciting articles!
            </p>
            <p className="text-gray-500 text-sm">
              In the meantime, feel free to contact us for any questions or inquiries.
            </p>
          </Card>
        )}

        {/* Newsletter Subscription */}
        <section className="mt-16 max-w-3xl mx-auto">
          <Card className="p-8 md:p-10 text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/90 mb-6">
              Get the latest articles, admission tips, and college updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default Blog;
