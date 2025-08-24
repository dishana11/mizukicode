import React, { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ChatBubble from '@/components/ChatBubble';
import ThemeSettingsModal from '@/components/ThemeSettingsModal';

const Contact: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen text-white">
      <NavBar onOpenSettings={()=>setOpen(true)} />
      <ThemeSettingsModal open={open} onClose={()=>setOpen(false)} />
      <div className="max-w-3xl mx-auto p-4 pt-24">
        <h1 className="text-3xl font-bold mb-3">Contact</h1>
        <p className="text-white/80">Email us at <a className="text-[var(--accent-interactive-primary)]" href="mailto:hello@mizukicode.com">hello@mizukicode.com</a></p>
      </div>
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Contact;

