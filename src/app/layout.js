import './globals.css';
import MainLayoutWrapper from '@/layouts/MainLayout/MainLayoutWrapper';
import Script from 'next/script';

const SITE_URL = 'https://www.collegeconnectedu.com';

export const metadata = {
    // ── Title Template ──────────────────────────────────────────
    title: {
        default: 'College Connect – Top Private Colleges in Dehradun (2026 Admissions)',
        template: '%s | College Connect',
    },

    // ── Core Meta ───────────────────────────────────────────────
    description:
        'Find and compare top private colleges in Dehradun for B.Tech, MBA, BBA, BCA, Pharmacy and more. Get expert counselling for direct admission, fees and placements.',
    keywords: [
        'Dehradun private colleges',
        'direct admission Dehradun',
        'B.Tech colleges Dehradun',
        'MBA colleges Dehradun',
        'BBA BCA admission',
        'pharmacy colleges',
        'college counselling',
        'college connect',
        'top colleges Dehradun 2026',
    ],

    // ── Canonical & Base ────────────────────────────────────────
    metadataBase: new URL(SITE_URL),
    alternates: {
        canonical: '/',
    },

    // ── Open Graph (Facebook, LinkedIn, WhatsApp) ───────────────
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: SITE_URL,
        siteName: 'College Connect',
        title: 'College Connect – Top Private Colleges in Dehradun (2026 Admissions)',
        description:
            'Find and compare top private colleges in Dehradun for B.Tech, MBA, BBA, BCA, Pharmacy and more. Get expert counselling for direct admission, fees and placements.',
        images: [
            {
                url: '/icon.png',
                width: 512,
                height: 512,
                alt: 'College Connect Logo',
            },
        ],
    },

    // ── Twitter Card ────────────────────────────────────────────
    twitter: {
        card: 'summary_large_image',
        title: 'College Connect – Top Private Colleges in Dehradun',
        description:
            'Expert counselling for direct admission to private colleges in Dehradun. B.Tech, MBA, BBA, BCA, Pharmacy & more.',
        images: ['/icon.png'],
    },

    // ── Robots ──────────────────────────────────────────────────
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // ── Verification (add your IDs when ready) ──────────────────
    // verification: {
    //     google: 'YOUR_GOOGLE_VERIFICATION_ID',
    // },

    // ── Icons ───────────────────────────────────────────────────
    icons: {
        icon: '/icon.png',
        apple: '/icon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Google Tag Manager - Head */}
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WWX2F7DX');`,
                    }}
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400;1,600&display=swap"
                    rel="stylesheet"
                />
                {/* 
                  Google Ads (AW-18007804678) is managed by GTM — 
                  do NOT load gtag.js directly here, it conflicts with GTM's Google Tag.
                */}
            </head>
            <body className="antialiased">
                {/* Google Tag Manager - Body (noscript fallback) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WWX2F7DX"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>

                <MainLayoutWrapper>{children}</MainLayoutWrapper>
            </body>
        </html>
    );
}
