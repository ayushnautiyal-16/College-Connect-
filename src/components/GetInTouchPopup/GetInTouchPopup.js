'use client';

import React, { useState, useEffect } from 'react';
import './GetInTouchPopup.css';

function GetInTouchPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const [selectedCourse, setSelectedCourse] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

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
            setSubmitStatus(null);
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
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
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

                {/* Split Layout */}
                <div className="popup-split-layout">

                    {/* LEFT SIDE - Form Content */}
                    <div className="popup-left-panel">

                        {/* Submitting / Loading State */}
                        {isSubmitting && (
                            <div className="popup-result submitting-result">
                                <div className="submitting-animation">
                                    <div className="submitting-spinner">
                                        <svg className="spinner-svg" viewBox="0 0 50 50">
                                            <circle className="spinner-circle" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
                                        </svg>
                                        <div className="spinner-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                                                <path d="M22 2L11 13" />
                                                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="submitting-title">Submitting Your Request</h2>
                                <p className="submitting-message">Please wait while we process your details...</p>

                                <div className="submitting-steps">
                                    <div className="submitting-step active done">
                                        <div className="step-dot">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <span>Validating your details</span>
                                    </div>
                                    <div className="submitting-step active">
                                        <div className="step-dot pulsing"></div>
                                        <span>Saving your application</span>
                                    </div>
                                    <div className="submitting-step">
                                        <div className="step-dot"></div>
                                        <span>Sending confirmation</span>
                                    </div>
                                </div>

                                <div className="submitting-progress-bar">
                                    <div className="submitting-progress-fill"></div>
                                </div>
                            </div>
                        )}

                        {/* Success State */}
                        {!isSubmitting && submitStatus === 'success' && (
                            <div className="popup-result success-result">
                                <div className="result-icon-container success-icon-bg">
                                    <svg className="result-icon success-check" viewBox="0 0 52 52">
                                        <circle className="success-circle" cx="26" cy="26" r="25" fill="none" />
                                        <path className="success-checkmark" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                    </svg>
                                </div>
                                <h2 className="result-title">Thank You!</h2>
                                <p className="result-message">
                                    Your request has been received successfully. Our expert counselor will reach out to you shortly.
                                </p>
                                <div className="result-details">
                                    <div className="result-detail-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                        </svg>
                                        <span>We&apos;ll call you within 24 hours</span>
                                    </div>
                                    <div className="result-detail-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                        <span>Your data is 100% secure</span>
                                    </div>
                                </div>
                                <button className="popup-done-btn" onClick={handleClose}>
                                    Done
                                </button>
                            </div>
                        )}

                        {/* Error State */}
                        {!isSubmitting && submitStatus === 'error' && (
                            <div className="popup-result error-result">
                                <div className="result-icon-container error-icon-bg">
                                    <svg className="result-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="8" x2="12" y2="12" />
                                        <line x1="12" y1="16" x2="12.01" y2="16" />
                                    </svg>
                                </div>
                                <h2 className="result-title error-title">Oops! Something went wrong</h2>
                                <p className="result-message">
                                    We couldn&apos;t process your request right now. Please try again or reach us directly on WhatsApp.
                                </p>
                                <div className="error-actions">
                                    <button className="popup-retry-btn" onClick={() => setSubmitStatus(null)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                            <polyline points="23 4 23 10 17 10" />
                                            <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                                        </svg>
                                        Try Again
                                    </button>
                                    <button className="popup-done-btn outline" onClick={handleClose}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Form State */}
                        {!isSubmitting && submitStatus === null && (
                            <>
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
                            </>
                        )}
                    </div>



                </div>
            </div>
        </div>
    );
}

export default GetInTouchPopup;
