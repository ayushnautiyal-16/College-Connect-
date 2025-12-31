import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';

function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in every interaction and service we provide.',
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building lasting relationships based on trust and transparency.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Continuously improving our services with innovative solutions.',
    },
    {
      icon: '❤️',
      title: 'Care',
      description: 'We genuinely care about your success and academic journey.',
    },
  ];

  const trustBadges = [
    { label: '10K+', sublabel: 'Students Helped' },
    { label: '500+', sublabel: 'Colleges' },
    { label: '95%', sublabel: 'Success Rate' },
    { label: '15+', sublabel: 'Years Experience' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Campus Finder
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Your trusted partner in finding the perfect college and shaping your educational future
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 md:p-10">
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower students and parents with expert guidance, comprehensive information, and complete support 
                throughout their college admission journey. We are committed to helping every student find the perfect 
                college that aligns with their academic goals, career aspirations, and personal preferences.
              </p>
            </Card>

            <Card className="p-8 md:p-10">
              <div className="text-5xl mb-6">👁️</div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the most trusted and reliable education consultancy platform, recognized for our integrity, 
                expertise, and unwavering commitment to student success. We envision a future where every student has 
                access to quality education guidance and achieves their academic dreams.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustBadges.map((badge, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-2">
                  {badge.label}
                </div>
                <div className="text-gray-600 font-medium">{badge.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services designed to support you at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Comprehensive college database with detailed information',
              'Expert counseling and career guidance',
              'Advanced search and filtering options',
              'Location-based college discovery',
              'Application assistance and documentation support',
              'Verified and up-to-date information',
              'Student testimonials and success stories',
              'Complete admission process guidance',
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Expert Team
              </h2>
              <p className="text-lg text-gray-600">
                We are a dedicated team of education consultants, career counselors, and support staff 
                committed to making college discovery accessible and efficient for everyone.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team consists of experienced professionals with deep knowledge of the education sector, 
                admission processes, and career counseling. We understand the challenges students face and 
                are here to provide personalized guidance tailored to your unique needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With years of combined experience, we've helped thousands of students achieve their academic 
                goals. Your success is our success, and we're committed to going above and beyond to ensure 
                you get into the college of your dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get expert guidance from our team and find the perfect college for you
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book Free Counseling
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
