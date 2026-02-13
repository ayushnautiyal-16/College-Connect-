import './globals.css';
import MainLayoutWrapper from '@/layouts/MainLayout/MainLayoutWrapper';

export const metadata = {
    title: 'College Connect - Find Your Dream College',
    description: 'Your trusted partner in finding the perfect college and shaping your educational future.',
    keywords: 'college, admission, counseling, Dehradun, engineering, management',
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
