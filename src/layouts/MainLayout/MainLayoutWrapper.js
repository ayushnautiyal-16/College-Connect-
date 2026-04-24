'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import EnquiryTogglePanel from '@/components/EnquiryTogglePanel/EnquiryTogglePanel';
import FloatingSideButtons from '@/components/FloatingSideButtons/FloatingSideButtons';
import GetInTouchPopup from '@/components/GetInTouchPopup/GetInTouchPopup';
import Chatbot from '@/components/Chatbot/Chatbot';

function MainLayoutWrapper({ children }) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isThankYouPage = pathname === '/thank-you';
    const isApplyPage = pathname === '/apply';

    return (
        <div className={`flex flex-col min-h-screen ${isApplyPage ? '' : 'bg-gray-50'}`}>
            {(!isApplyPage && !isThankYouPage) && <Header />}
            <main className="flex-1 w-full">
                {children}
            </main>
            <Footer />
            {isHomePage && <FloatingSideButtons />}
            {isHomePage && <EnquiryTogglePanel />}
            {!isThankYouPage && <GetInTouchPopup />}
            {!isThankYouPage && <Chatbot />}
        </div>
    );
}

export default MainLayoutWrapper;
