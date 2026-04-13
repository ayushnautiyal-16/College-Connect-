export const metadata = {
    title: 'Privacy Policy',
    description:
        'Read the Privacy Policy for College Connect to understand how we collect, use, protect, and process personal information.',
};

export default function PrivacyPolicyPage() {
    const sectionStyles =
        'rounded-2xl border border-slate-200/70 bg-white/85 backdrop-blur-sm p-5 sm:p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]';

    return (
        <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#f5f3ff_34%,#ecfeff_68%,#eef2ff_100%)] py-14 px-4 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
                <div className="absolute top-1/4 -right-20 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl" />
                <div className="absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: 'radial-gradient(#4338ca 0.75px, transparent 0.75px)',
                        backgroundSize: '20px 20px',
                    }}
                />
            </div>

            <article className="relative max-w-4xl mx-auto rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(37,99,235,0.15)] p-6 sm:p-8 lg:p-10">
                <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-slate-700 leading-relaxed text-[15px] sm:text-base">
                        College Connect (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
                        privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                        information when you visit{' '}
                        <a
                            href="https://collegeconnectedu.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-700 underline"
                        >
                            collegeconnectedu.com
                        </a>
                        . By using our website, you agree to the practices described in this policy.
                    </p>
                </header>

                <section className="space-y-5 text-slate-700 leading-relaxed">
                    <div className={sectionStyles}>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">1. Information We Collect</h2>
                        <p>
                            We collect personal information that you voluntarily provide through lead forms and
                            enquiries, including:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Course or admission preferences</li>
                        </ul>
                        <p className="mt-2">
                            We may also collect limited technical information such as browser type, device details,
                            pages visited, and referral source through cookies and analytics tools.
                        </p>
                    </div>

                    <div className={sectionStyles}>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">2. How We Use Data</h2>
                        <p>We use your information for legitimate educational and operational purposes, including:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Providing college admissions counselling, guidance, and support</li>
                            <li>Responding to queries and sharing relevant program details</li>
                            <li>Communicating application, eligibility, and admission updates</li>
                            <li>Improving our website, services, and user experience</li>
                            <li>Running analytics and campaign performance measurement</li>
                        </ul>
                        <p className="mt-2">
                            We may contact you via email, phone calls, or WhatsApp for admission-related communication.
                        </p>
                    </div>

                    <div className={sectionStyles}>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">3. Cookies &amp; Tracking</h2>
                        <p>
                            Our website may use cookies, pixels, and similar tracking technologies to understand user
                            behavior, remember preferences, and measure advertising effectiveness.
                        </p>
                        <p className="mt-2">
                            You can manage cookie preferences through your browser settings. Disabling cookies may
                            affect certain website functionality.
                        </p>
                    </div>

                    <div className={sectionStyles}>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">4. Data Sharing</h2>
                        <p>
                            We do not sell your personal data. We may share limited information only when necessary:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>With trusted service providers that help us operate our website and communications</li>
                            <li>With admission-related partners, only where relevant to your request</li>
                            <li>When required by law, regulation, legal process, or government request</li>
                        </ul>
                        <p className="mt-2">
                            All such sharing is done with reasonable safeguards and only for legitimate business or
                            legal purposes.
                        </p>
                    </div>

                    <div className={sectionStyles}>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">5. Data Security</h2>
                        <p>
                            We use reasonable administrative, technical, and organizational measures to protect your
                            personal information from unauthorized access, alteration, disclosure, or destruction.
                            While no system is completely secure, we strive to apply appropriate safeguards in line
                            with general data privacy standards.
                        </p>
                    </div>

                    <div className={sectionStyles}>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">6. User Rights</h2>
                        <p>
                            Subject to applicable laws, you may have the right to request access, correction, update,
                            or deletion of your personal data, and to object to or restrict certain processing
                            activities.
                        </p>
                        <p className="mt-2">
                            To exercise your rights, please contact us using the details in the Contact Information
                            section below. We will respond within a reasonable timeframe.
                        </p>
                    </div>

                    <div className={sectionStyles}>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">7. Contact Information</h2>
                        <p>
                            For any privacy-related questions, requests, or concerns, please contact:
                        </p>
                        <p className="mt-2">
                            <span className="font-medium">College Connect</span>
                            <br />
                            Website:{' '}
                            <a
                                href="https://collegeconnectedu.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-700 underline"
                            >
                                https://collegeconnectedu.com/
                            </a>
                        </p>
                    </div>
                </section>
            </article>
        </main>
    );
}
