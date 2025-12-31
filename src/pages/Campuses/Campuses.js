import React, { useState } from 'react';
import CollegeCard from '../../components/CollegeCard/CollegeCard';
import { collegesData } from '../../utils/collegesData';

function Campuses() {
  const [searchQuery, setSearchQuery] = useState('');

  // Use all colleges from collegesData
  const colleges = collegesData;

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top Colleges in Dehradun
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best colleges in Dehradun offering quality education in engineering, management, and various other disciplines
          </p>
        </section>

        {/* Search */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <input
              type="text"
              placeholder="Search colleges by name, location or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </section>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-semibold text-gray-900">{filteredColleges.length}</span> colleges
          </p>
        </div>

        {/* Colleges Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college, index) => (
              <CollegeCard key={college.id} college={college} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No colleges found</h3>
              <p className="text-gray-600">Try adjusting your search query</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}


export default Campuses
