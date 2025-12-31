import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
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
      icon: '🎓',
      title: 'Expert Counseling',
      description: 'Get guidance from experienced education consultants who understand the admission process.',
    },
    {
      icon: '📚',
      title: 'Wide College Database',
      description: 'Access information about thousands of colleges across various streams and locations.',
    },
    {
      icon: '✅',
      title: 'Application Assistance',
      description: 'Complete support for filling applications, documentation, and submission.',
    },
    {
      icon: '💯',
      title: 'High Success Rate',
      description: 'Join thousands of successful students who got admission in their dream colleges.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Slideshow */}
      <HeroSlider />

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedColleges.map((college, index) => (
              <CollegeCard key={college.id} college={college} index={index} />
            ))}
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SimpleAnimatedHeader
            title="Why Choose Campus Finder?"
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
            Book a free counseling session with our expert advisors today
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get Free Counseling Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
