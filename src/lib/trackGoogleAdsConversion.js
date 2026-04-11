/**
 * Google Ads conversion (gtag). Runs only in the browser when gtag and send_to are available.
 */
export function trackGoogleAdsFormConversion() {
    if (typeof window === 'undefined') return;

    const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO;
    if (!sendTo) return;

    const gtag = window.gtag;
    if (typeof gtag !== 'function') return;

    gtag('event', 'conversion', { send_to: sendTo });
}
