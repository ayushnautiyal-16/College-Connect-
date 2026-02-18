import React from 'react';
import { getAssetUrl } from '@/utils/assets';
import './LogoTicker.css';

function LogoTicker() {
    // First row logos
    const logosRow1 = [
        { id: 1, url: getAssetUrl('PARTNERS/adobe.png') },
        { id: 2, url: getAssetUrl('PARTNERS/amazon.png') },
        { id: 3, url: getAssetUrl('PARTNERS/american-express.png') },
        { id: 4, url: getAssetUrl('PARTNERS/deshaw.png') },
        { id: 5, url: getAssetUrl('PARTNERS/flipkart.png') },
        { id: 6, url: getAssetUrl('PARTNERS/goldman-sachs.png') },
    ];

    // Second row logos
    const logosRow2 = [
        { id: 7, url: getAssetUrl('PARTNERS/google.png') },
        { id: 8, url: getAssetUrl('PARTNERS/morgan-stanley.png') },
        { id: 9, url: getAssetUrl('PARTNERS/nasdaq.png') },
        { id: 10, url: getAssetUrl('PARTNERS/uber.png') },
        { id: 11, url: getAssetUrl('PARTNERS/zsacler.png') },
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
