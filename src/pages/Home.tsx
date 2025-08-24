import React, { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ChatBubble from '@/components/ChatBubble';
import ThemeSettingsModal from '@/components/ThemeSettingsModal';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen text-white">
      <NavBar onOpenSettings={()=>setOpen(true)} />
      <ThemeSettingsModal open={open} onClose={()=>setOpen(false)} />
      <div className="flex items-center justify-center pt-36 pb-24 px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-geist font-bold drop-shadow-[0_0_20px_rgba(157,28,43,0.28)]">Mizuki Code</h1>
          <p className="mt-3 text-lg md:text-xl text-white/60 font-geist">Unlock the Cosmos of Programming</p>
        </div>
      </div>
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Home;

