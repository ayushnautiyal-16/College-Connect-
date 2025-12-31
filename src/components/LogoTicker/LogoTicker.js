import React from 'react';
import './LogoTicker.css';

function LogoTicker() {
    // First row logos
    const logosRow1 = [
        {
            id: 1,
            url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946258/Infosys_logo.svg_feindm.png',
        },
        {
            id: 2,
            url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946258/Adobe_Corporate_logo.svg_drdl8p.png',
        },
        {
            id: 3,
            url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946254/Amazon_logo.svg_n8i8jw.webp',
        },
        {
            id: 4,
            url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946257/Wipro_Primary_Logo_Color_RGB.svg_blpfxt.png',
        },
        {
            id: 9,
            url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946253/PharmEasy_logo_opzbvr.png',
        },
        {
            id: 10,
            url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946253/Google_2015_logo.svg_mq6axm.png',
        },
    ];

    // Second row logos
    const logosRow2 = [
        {
            id: 5,
            url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946257/Tata_Consultancy_Services_old_logo.svg_njnfta.png',
        },
        {
            id: 6,
            url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946254/MANKIND.NS-3f70896f_idw63x.png',
        },
        {
            id: 7,
            url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946254/Accenture.svg_fjqnhy.png',
        },
        {
            id: 8,
            url: 'https://res.cloudinary.com/djjdvw3wc/image/upload/v1766946254/Amul_official_logo.svg_jronsu.png',
        },
    ];

    // Duplicate logos for seamless infinite scroll
    const duplicatedRow1 = [...logosRow1, ...logosRow1, ...logosRow1];
    const duplicatedRow2 = [...logosRow2, ...logosRow2, ...logosRow2];

    return (
        <section className="logo-ticker-section">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-8">
                <h2 className="ticker-heading">Our Industry Partners</h2>
            </div>

            <div className="logo-ticker-container">
                {/* First Row - Scroll Right to Left */}
                <div className="logo-ticker-wrapper">
                    <div className="logo-ticker-track scroll-left">
                        {duplicatedRow1.map((logo, index) => (
                            <div key={`row1-${logo.id}-${index}`} className="logo-ticker-item">
                                <img
                                    src={logo.url}
                                    alt="Partner College Logo"
                                    className="logo-ticker-image"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row - Scroll Left to Right */}
                <div className="logo-ticker-wrapper">
                    <div className="logo-ticker-track scroll-right">
                        {duplicatedRow2.map((logo, index) => (
                            <div key={`row2-${logo.id}-${index}`} className="logo-ticker-item">
                                <img
                                    src={logo.url}
                                    alt="Partner College Logo"
                                    className="logo-ticker-image"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LogoTicker;
