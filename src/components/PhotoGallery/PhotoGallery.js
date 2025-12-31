import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';

function PhotoGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const galleryElement = document.getElementById('photo-gallery');
        if (galleryElement) {
            observer.observe(galleryElement);
        }

        return () => {
            if (galleryElement) {
                observer.unobserve(galleryElement);
            }
        };
    }, []);

    const openLightbox = (image, index) => {
        setSelectedImage({ ...image, index });
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction) => {
        if (!selectedImage) return;

        const currentIndex = selectedImage.index;
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % images.length;
        } else {
            newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        }

        setSelectedImage({ ...images[newIndex], index: newIndex });
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedImage) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                navigateImage('next');
            } else if (e.key === 'ArrowLeft') {
                navigateImage('prev');
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedImage]);

    // Assign size classes for masonry layout
    const getImageSize = (index) => {
        if (index === 0) return 'masonry-large'; // First image is featured
        if (index % 5 === 0) return 'masonry-medium'; // Every 5th image is medium
        return 'masonry-small'; // Rest are small
    };

    return (
        <div id="photo-gallery" className="photo-gallery-section">
            <div className="gallery-header">
                <h2 className="gallery-title">Campus Gallery</h2>
                <p className="gallery-subtitle">Events & Campus Life</p>
            </div>

            <div className="photo-gallery-masonry">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`masonry-item ${getImageSize(index)} ${isVisible ? 'masonry-item-visible' : ''}`}
                        style={{ transitionDelay: `${index * 80}ms` }}
                        onClick={() => openLightbox(image, index)}
                    >
                        <div className="masonry-image-wrapper">
                            <img
                                src={image.url}
                                alt={image.title || 'College Event'}
                                className="masonry-image"
                                loading="lazy"
                            />
                            <div className="masonry-overlay">
                                <span className="masonry-title">{image.title || 'View Image'}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button
                        className="lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage('prev');
                        }}
                        aria-label="Previous image"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage('next');
                        }}
                        aria-label="Next image"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.title}
                            className="lightbox-image"
                        />
                        {selectedImage.title && (
                            <div className="lightbox-info">
                                <h3 className="lightbox-title">{selectedImage.title}</h3>
                            </div>
                        )}
                    </div>

                    <div className="lightbox-counter">
                        {selectedImage.index + 1} / {images.length}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PhotoGallery;
