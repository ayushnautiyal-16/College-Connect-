'use client';

import React, { useState, useEffect } from 'react';
import './GetInTouchPopup.css';

function GetInTouchPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const [selectedCourse, setSelectedCourse] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Show popup after 8-12 seconds (random delay) on every page load
        const delay = Math.random() * 4000 + 8000; // 8000ms to 12000ms
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
        }, 300);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        // Handle "Other" course selection
        let course = formData.get('course');
        if (course === 'Other') {
            course = formData.get('customCourse') || 'Other';
        }

        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            course: course,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                alert('Thank you! Our team will contact you soon.');
                handleClose();
            } else {
                alert(result.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            handleClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div
            className={`popup-overlay ${isClosing ? 'closing' : ''}`}
            onClick={handleOverlayClick}
        >
            <div className={`popup-container ${isClosing ? 'closing' : ''}`}>
                {/* Close Button */}
                <button
                    className="popup-close-btn"
                    onClick={handleClose}
                    aria-label="Close popup"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Popup Content */}
                <div className="popup-header">
                    <div className="popup-icon-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="popup-header-icon"
                        >
                            <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.24 50.552 50.552 0 00-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                    </div>
                    <h2 className="popup-title">Start Your Journey</h2>
                    <p className="popup-subtitle">
                        Get expert guidance for your admission. Fill the form below.
                    </p>
                </div>

                {/* Form */}
                <form className="popup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            required
                            autoComplete="name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            pattern="[0-9]{10}"
                            required
                            autoComplete="tel"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email (Optional)</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="course">Course Interest *</label>
                        <select
                            id="course"
                            name="course"
                            required
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                        >
                            <option value="">Select your course</option>
                            <option value="B.Tech">B.Tech / Engineering</option>
                            <option value="MBA">MBA / Management</option>
                            <option value="BBA">BBA / Business Administration</option>
                            <option value="BCA">BCA / Computer Applications</option>
                            <option value="B.Pharma">B.Pharma / Pharmacy</option>
                            <option value="LLB">LLB / Law</option>
                            <option value="B.Sc">B.Sc / Science</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Conditional input for "Other" course */}
                    {selectedCourse === 'Other' && (
                        <div className="form-group animate-slide-in">
                            <label htmlFor="customCourse">Specify Course *</label>
                            <input
                                type="text"
                                id="customCourse"
                                name="customCourse"
                                placeholder="Enter specific course name"
                                required
                            />
                        </div>
                    )}

                    <button type="submit" className="popup-submit-btn" disabled={isSubmitting}>
                        <span>{isSubmitting ? 'Submitting...' : 'Request Free Callback'}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="btn-icon"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </form>

                {/* Trust Badge */}
                <div className="popup-footer">
                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="trust-icon"
                        >
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        </svg>
                        100% Free. No Spam. Your data is secure.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GetInTouchPopup;
