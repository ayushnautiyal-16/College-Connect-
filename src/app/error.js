'use client';

export default function Error({ error, reset }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong</h1>
                <p className="text-gray-600 mb-4">Please try refreshing the page.</p>
                <button
                    onClick={() => reset()}
                    className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors mr-4"
                >
                    Try Again
                </button>
                <a
                    href="/"
                    className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors inline-block"
                >
                    Go to Home
                </a>
            </div>
        </div>
    );
}
