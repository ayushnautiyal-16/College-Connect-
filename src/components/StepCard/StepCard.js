import React from 'react';

function StepCard({ number, title, description, icon }) {
  return (
    <div className="relative">
      <div className="card p-6 md:p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-heading font-bold text-primary-600">{number}</span>
        </div>
        <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      {number < 4 && (
        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
          <svg className="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default StepCard;


