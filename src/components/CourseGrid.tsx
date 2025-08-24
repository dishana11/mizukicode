import React from 'react';
import { ExternalLink, Star, TrendingUp, DollarSign } from 'lucide-react';
import type { Course } from '../App';

interface CourseGridProps {
  courses: Course[];
  onCourseSelect: (course: Course) => void;
}

export const CourseGrid: React.FC<CourseGridProps> = ({ courses, onCourseSelect }) => {
  return (
    <section id="courses" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Course Galaxy
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Navigate through our constellation of premium programming courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="accent-chip group cursor-pointer p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              onClick={() => onCourseSelect(course)}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {course.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg font-semibold text-white mb-2 text-center">{course.title}</h3>
              <p className="text-sm text-white/60 mb-4 text-center">{course.subtitle}</p>

              {/* Stats */}
              <div className="flex justify-between items-center mb-4 text-xs">
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span className="text-white/60">4.9</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3 text-green-400" />
                  <span className="text-white/60">{course.demand.split(' ')[0]}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-3 h-3 text-blue-400" />
                  <span className="text-white/60">{course.price}</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-center">
                <span className="text-lg font-bold text-white">{course.price}</span>
                <span className="text-sm text-white/40 line-through ml-2">{course.originalPrice}</span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 accent-glow-medium pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-white/60 mb-6">
            Can't decide? Take our cosmic compatibility quiz!
          </p>
          <button className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
            Find My Perfect Course
          </button>
        </div>
      </div>
    </section>
  );
};