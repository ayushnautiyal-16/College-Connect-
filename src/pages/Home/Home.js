import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import StepCard from '../../components/StepCard/StepCard';
import CollegeCard from '../../components/CollegeCard/CollegeCard';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import AnimatedSectionHeader from '../../components/AnimatedSectionHeader/AnimatedSectionHeader';
import SimpleAnimatedHeader from '../../components/SimpleAnimatedHeader/SimpleAnimatedHeader';
import LogoTicker from '../../components/LogoTicker/LogoTicker';
import { collegesData } from '../../utils/collegesData';

function Home() {
  const navigate = useNavigate();
  const [students, setStudents] = useState(0);
  const [colleges, setColleges] = useState(0);
  const [experience, setExperience] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  // Counter animation effect
  useEffect(() => {
    if (statsVisible) {
      // Animate students count (0 to 5000) - slower animation
      const studentInterval = setInterval(() => {
        setStudents(prev => {
          if (prev >= 5000) {
            clearInterval(studentInterval);
            return 5000;
          }
          return prev + 50;
        });
      }, 40);

      // Animate colleges count (0 to actual count) - slower animation
      const totalColleges = collegesData.length;
      const collegeInterval = setInterval(() => {
        setColleges(prev => {
          if (prev >= totalColleges) {
            clearInterval(collegeInterval);
            return totalColleges;
          }
          return prev + 1;
        });
      }, 100);

      // Animate experience count (0 to 5) - slower animation
      const expInterval = setInterval(() => {
        setExperience(prev => {
          if (prev >= 5) {
            clearInterval(expInterval);
            return 5;
          }
          return prev + 1;
        });
      }, 400);

      return () => {
        clearInterval(studentInterval);
        clearInterval(collegeInterval);
        clearInterval(expInterval);
      };
    }
  }, [statsVisible]);

  // Intersection observer for stats animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement);
      }
    };
  }, [statsVisible]);

  // Show first 6 colleges on home page
  const initialCollegesCount = 6;
  const displayedColleges = collegesData.slice(0, initialCollegesCount);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      college: 'IIT Delhi',
      rating: 5,
      testimonial: 'Campus Finder helped me find the perfect college that matched my interests. The counseling was excellent and the entire process was smooth.',
    },
    {
      name: 'Priya Sharma',
      college: 'BITS Pilani',
      rating: 5,
      testimonial: 'The team was incredibly supportive throughout my admission process. They helped me with everything from college selection to application submission.',
    },
    {
      name: 'Amit Patel',
      college: 'NIT Surat',
      rating: 5,
      testimonial: 'Professional service and expert guidance. I got admission in my dream college thanks to Campus Finder.',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Free Consultation',
      description: 'Book a free counseling session with our expert advisors to understand your options.',
    },
    {
      number: 2,
      title: 'College Selection',
      description: 'We help you identify the best colleges based on your preferences, scores, and career goals.',
    },
    {
      number: 3,
      title: 'Application Support',
      description: 'Get assistance with application forms, documentation, and submission process.',
    },
    {
      number: 4,
      title: 'Admission Confirmation',
      description: 'We guide you through the entire admission process until you secure your seat.',
    },
  ];

  const features = [
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          <path d="M2 8C3.65685 8 5 6.65685 5 5C5 3.34315 3.65685 2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        </svg>
      ),
      title: 'Expert Counseling',
      description: 'Get guidance from experienced education consultants who understand the admission process.',
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
          <path d="M17 17L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Wide College Database',
      description: 'Access information about thousands of colleges across various streams and locations.',
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 3H9C7.89543 3 7 3.89543 7 5V19C7 20.1046 7.89543 21 9 21H17C18.1046 21 19 20.1046 19 19V8L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 11L21.0001 7.00002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          <path d="M3 11V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        </svg>
      ),
      title: 'Application Assistance',
      description: 'Complete support for filling applications, documentation, and submission.',
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 4L16.01 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 8L20.01 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'High Success Rate',
      description: 'Join thousands of successful students who got admission in their dream colleges.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Slideshow & Search */}
      <div className="relative">
        <HomeSearch />
        <HeroSlider />
      </div>

      {/* Top Colleges Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSectionHeader
            leftText="Top Colleges in"
            rightText="Dehradun"
            subtitle="Discover the best educational institutions in Dehradun offering quality education, excellent infrastructure, and outstanding placement opportunities"
          />

          {/* Colleges Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
              {displayedColleges.map((college, index) => (
                <div key={college.id} className="w-full max-w-sm">
                  <CollegeCard college={college} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* View All Colleges Button */}
          <div className="text-center mt-12">
            <Link
              to="/campuses"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View All Colleges
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-3">
                {students.toLocaleString()}+
              </div>
              <div className="text-gray-600 text-base md:text-lg font-medium">Students Helped</div>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-3">{colleges}+</div>
              <div className="text-gray-600 text-base md:text-lg font-medium">Colleges</div>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-3">{experience}+</div>
              <div className="text-gray-600 text-base md:text-lg font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Ticker Section */}
      <LogoTicker />

      {/* Features Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <SimpleAnimatedHeader
            title="Why Choose College Connect?"
            subtitle="We provide comprehensive support for your college admission journey"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SimpleAnimatedHeader
            title="How It Works"
            subtitle="Our simple 4-step process to get you into your dream college"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SimpleAnimatedHeader
            title="Success Stories"
            subtitle="Hear from students who achieved their dreams with our help"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                college={testimonial.college}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your College Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Take the first step towards your dream college today
          </p>
          <button
            onClick={() => navigate('/apply')}
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
