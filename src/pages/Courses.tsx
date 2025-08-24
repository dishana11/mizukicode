import React, { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ChatBubble from '@/components/ChatBubble';
import ThemeSettingsModal from '@/components/ThemeSettingsModal';
import { courses } from '@/data/courses';
import CourseCard from '@/components/CourseCard';

const Courses: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen text-white">
      <NavBar onOpenSettings={()=>setOpen(true)} />
      <ThemeSettingsModal open={open} onClose={()=>setOpen(false)} />
      <div className="max-w-5xl mx-auto p-4 pt-24">
        <h2 className="text-2xl font-semibold mb-4">Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
      </div>
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Courses;

