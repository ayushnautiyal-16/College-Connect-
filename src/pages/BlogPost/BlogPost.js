import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

function BlogPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundPost = blogPosts.find(p => p.id === id);
        if (foundPost) {
            setPost(foundPost);
        } else {
            // Fallback or 404 handling could go here
            // For now, let's redirect to blog listing
            navigate('/blog');
        }
    }, [id, navigate]);

    if (!post) return null;

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Article Hero */}
            <section className={`relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br ${post.imageGradient || 'from-blue-900 to-indigo-900'}`}>
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <div className="flex items-center justify-center gap-4 mb-6 text-sm font-medium tracking-wide uppercase opacity-80 animate-fade-in">
                            <span>{post.category}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                            <span>{post.date}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                            <span>{post.readTime}</span>
                        </div>

                        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl font-bold">
                                {post.author.charAt(0)}
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-white">{post.author}</p>
                                <p className="text-white/70 text-sm">Admission Expert</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
                <div className="max-w-3xl mx-auto">
                    {/* Main Content Body */}
                    <article className="prose prose-lg prose-indigo md:prose-xl bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>

                    {/* CTAs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                            <p className="mb-6 opacity-90">Secure your seat in top Dehradun colleges with Direct Admission.</p>
                            <button
                                onClick={() => navigate('/apply')}
                                className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>

                        <div className="bg-white border-2 border-indigo-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Confused? Talk to Us</h3>
                            <p className="mb-6 text-gray-600">Get a free consultation call from our senior admission experts.</p>
                            <button
                                onClick={() => navigate('/contact')}
                                className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors"
                            >
                                Get Free Counselling
                            </button>
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => navigate('/blog')}
                            className="text-gray-500 hover:text-indigo-600 font-medium flex items-center justify-center gap-2 mx-auto transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to All Articles
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BlogPost;
