import React, { useState, useEffect } from 'react';
import './GetInTouchPopup.css';

function GetInTouchPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            course: formData.get('course'),
        };

        // Here you would typically send data to your backend
        console.log('Form submitted:', data);

        // Show success message and close
        alert('Thank you! Our team will contact you soon.');
        handleClose();
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
                    <div className="popup-icon">
                        🎓
                    </div>
                    <h2 className="popup-title">Apply Now!</h2>
                    <p className="popup-subtitle">
                        Take the first step towards your dream college. Our admission experts will help you choose the perfect course and secure your future!
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
                        <select id="course" name="course" required>
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

                    <button type="submit" className="popup-submit-btn">
                        <span>Request Free Callback</span>
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
