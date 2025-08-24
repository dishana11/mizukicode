import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '@/data/courses';

const CourseCard: React.FC<{course: Course}> = ({ course }) => (
  <Link to={`/course/${course.id}`} className={`block p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-[var(--accent-bg-primary)] hover:border-[var(--accent-interactive-primary)] accent-chip theme-transition hover:scale-105 ripple-hover ${course.bgClass??''}`}>
    <div className="flex items-center gap-3">
      <div className="text-2xl">{course.icon}</div>
      <div>
        <div className="text-sm font-medium text-[var(--accent-interactive-primary)]">{course.title}</div>
        <div className="text-xs text-white/60">{course.subtitle}</div>
      </div>
    </div>
  </Link>
);

export default CourseCard;

