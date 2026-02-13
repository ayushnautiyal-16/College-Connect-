import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
                <Link
                    href="/"
                    className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors inline-block"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
}
