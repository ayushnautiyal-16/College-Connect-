import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import GetInTouchPopup from '../../components/GetInTouchPopup/GetInTouchPopup';

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <GetInTouchPopup />
    </div>
  );
}

export default MainLayout;

