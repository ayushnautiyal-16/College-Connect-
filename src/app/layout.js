import './globals.css';
import MainLayoutWrapper from '@/layouts/MainLayout/MainLayoutWrapper';

export const metadata = {
    title: 'College Connect – Top Private Colleges in Dehradun (2026 Admissions)',
    description:
        'Find and compare top private colleges in Dehradun for B.Tech, MBA, BBA, BCA, Pharmacy and more. Get expert counselling for direct admission, fees and placements.',
    keywords:
        'Dehradun private colleges, direct admission Dehradun, B.Tech colleges Dehradun, MBA colleges Dehradun, BBA BCA admission, pharmacy colleges, college counselling',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                <MainLayoutWrapper>{children}</MainLayoutWrapper>
            </body>
        </html>
    );
}
