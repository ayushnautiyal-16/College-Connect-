/**
 * Google Ads conversion (gtag). Client-only; requires gtag.js (root layout) and
 * NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO (e.g. AW-123456789/AbC-dEfGhIjK).
 */
export function trackGoogleAdsFormConversion() {
    if (typeof window === 'undefined') {
        console.warn('[Google Ads] Conversion skipped: no window (SSR).');
        return;
    }

    const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO;
    if (!sendTo) {
        console.warn(
            '[Google Ads] Conversion skipped: NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO is not set.',
        );
        return;
    }

    const gtag = window.gtag;
    if (typeof gtag !== 'function') {
        console.warn(
            '[Google Ads] Conversion skipped: window.gtag is not a function. Is gtag.js loaded in the root layout?',
        );
        return;
    }

    const payload = { send_to: sendTo };
    console.log('[Google Ads] Firing conversion event', payload);

    gtag('event', 'conversion', payload);

    if (Array.isArray(window.dataLayer)) {
        const last = window.dataLayer.slice(-3);
        console.log('[Google Ads] dataLayer (last 3 entries):', last);
    } else {
        console.warn('[Google Ads] window.dataLayer is not an array after conversion.');
    }
}
