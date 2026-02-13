'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function HomeSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push('/campuses?query=' + encodeURIComponent(searchTerm.trim()));
        }
    };

    return (
        <div className="absolute top-24 md:top-32 left-0 right-0 z-40 flex justify-center px-4 animate-slide-up">
            <form
                onSubmit={handleSearch}
                className={`
          relative flex items-center w-full max-w-xl
          bg-white/20 backdrop-blur-xl border border-white/30
          rounded-full transition-all duration-300 ease-out
          ${isFocused ? 'shadow-[0_0_30px_rgba(79,70,229,0.3)] bg-white/30 scale-[1.02]' : 'shadow-xl hover:bg-white/25'}
        `}
            >
                <div className="pl-6 text-white/80">
                    <svg className={`w-5 h-5 transition-colors ${isFocused ? 'text-white' : 'text-white/80'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                    type="text"
                    placeholder="Search for colleges..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full bg-transparent border-none text-white placeholder-white/80 px-4 py-3 md:py-3.5 text-base md:text-lg focus:ring-0 focus:outline-none placeholder:transition-opacity focus:placeholder-white/50 font-medium"
                />

                <button
                    type="submit"
                    className={`
            m-1.5 px-6 py-2 md:px-7 md:py-2.5 rounded-full font-bold text-sm md:text-base tracking-wide
            bg-white text-indigo-600 shadow-md hover:shadow-lg
            transition-all duration-300 transform
            hover:bg-indigo-50 hover:scale-105 active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
                    disabled={!searchTerm.trim()}
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default HomeSearch;
