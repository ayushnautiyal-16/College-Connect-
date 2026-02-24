'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import EnquiryTogglePanel from '@/components/EnquiryTogglePanel/EnquiryTogglePanel';
import FloatingSideButtons from '@/components/FloatingSideButtons/FloatingSideButtons';
import GetInTouchPopup from '@/components/GetInTouchPopup/GetInTouchPopup';
import Chatbot from '@/components/Chatbot/Chatbot';

function MainLayoutWrapper({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-1 w-full">
                {children}
            </main>
            <Footer />
            <FloatingSideButtons />
            <EnquiryTogglePanel />
            <GetInTouchPopup />
            <Chatbot />
        </div>
    );
}

export default MainLayoutWrapper;
