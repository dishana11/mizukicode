import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ChatBubble from '@/components/ChatBubble';
import ThemeSettingsModal from '@/components/ThemeSettingsModal';
import { courses } from '@/data/courses';

const CoursePage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const course = useMemo(() => courses.find(c => c.id === id), [id]);

  if (!course) {
    return (
      <div className="min-h-screen text-white">
        <NavBar onOpenSettings={()=>setOpen(true)} />
        <ThemeSettingsModal open={open} onClose={()=>setOpen(false)} />
        <div className="max-w-4xl mx-auto p-4 pt-24">
          <Link to="/courses" className="text-[var(--accent-interactive-primary)]">← Back to courses</Link>
          <h2 className="text-2xl font-semibold mt-4">Course not found</h2>
        </div>
        <Footer />
        <ChatBubble />
      </div>
    );
  }

  return (
    <div className={`min-h-screen text-white ${course.bgClass??''}`}>
      <NavBar onOpenSettings={()=>setOpen(true)} />
      <ThemeSettingsModal open={open} onClose={()=>setOpen(false)} />
      <div className="max-w-4xl mx-auto p-4 pt-24">
        <Link to="/courses" className="text-[var(--accent-interactive-primary)]">← Back to courses</Link>
        <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
        <p className="text-lg text-white/60">{course.subtitle}</p>
        <div className="prose prose-invert mt-6 max-w-none">
          <p>{course.description}</p>
          <p><strong>Importance:</strong> {course.importance} Key FAANG teams rely on these skills for performance and scale.</p>
          <p><strong>Salaries:</strong> {course.salary}</p>
          <p><strong>Demand:</strong> {course.demand}</p>
        </div>
        <div className="mt-8 p-4 rounded-lg border border-white/10 bg-white/5 accent-glow-soft hover:scale-[1.01] theme-transition">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-white/80">Access It Here</div>
              <div className="text-xl font-semibold">Buy Now — <span className="text-[var(--accent-primary)]">{course.price}</span> <span className="text-white/50 line-through ml-2">{course.originalPrice}</span></div>
            </div>
            <a href={course.link} target="_blank" rel="noreferrer" className="px-4 py-2 bg-[var(--accent-primary)] text-white rounded-lg">Buy Now</a>
          </div>
        </div>
      </div>
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default CoursePage;

