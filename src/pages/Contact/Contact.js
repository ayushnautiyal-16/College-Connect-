import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 px-4 text-center">
        <AnimatedSection animationType="zoom-in" delay={100}>
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 animate-ping opacity-25 rounded-full bg-indigo-500"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-2xl">
              <span className="text-6xl md:text-7xl">🚀</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fade-up" delay={200}>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Coming Soon</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animationType="fade-up" delay={300}>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We're working hard to bring you an amazing counselling experience. <br className="hidden md:block" />
            Stay tuned for something great!
          </p>
        </AnimatedSection>

        <AnimatedSection animationType="fade-up" delay={400}>
          <button
            onClick={() => navigate('/')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-500/25"
          >
            <span>Back to Home</span>
            <svg
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </AnimatedSection>


      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
}

export default Contact;
