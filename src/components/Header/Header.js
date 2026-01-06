import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for navbar shadow and auto-hide
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shadow logic
      setIsScrolled(currentScrollY > 10);

      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & passed threshold -> Hide
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu if open
      } else {
        // Scrolling up -> Show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/campuses', label: 'Colleges' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Blog' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleCTAClick = () => {
    navigate('/contact');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'shadow-lg' : 'shadow-none'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Left Side */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src="https://res.cloudinary.com/djjdvw3wc/image/upload/v1766824093/Gemini_Generated_Image_8r81ar8r81ar8r81__1_-removebg-preview_sal8sh.png"
              alt="College Connect Logo"
              className="h-12 md:h-14"
            />
          </Link>

          {/* Desktop Navigation + Phone - Right Side */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <nav className="flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-base font-medium transition-colors duration-200 ${isActive(link.path) ? 'active text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={() => navigate('/apply')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm md:text-base whitespace-nowrap transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
            }`}
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-50 ${isActive(link.path) ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 mt-2">
              <button
                onClick={() => { navigate('/apply'); setIsMobileMenuOpen(false); }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                Apply Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
