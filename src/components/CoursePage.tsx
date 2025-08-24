import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Star, TrendingUp, Users, DollarSign, Shield } from 'lucide-react';
import type { Course } from '../App';

interface CoursePageProps {
  course: Course;
  onBack: () => void;
}

export const CoursePage: React.FC<CoursePageProps> = ({ course, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Back Button */}
      <button 
        className="fixed top-6 left-6 z-20 h-10 w-10 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
        onClick={onBack}
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>

      <div className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Course Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6 accent-glow-soft">
              {course.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 accent-glow-soft">
              {course.title}
            </h1>
            <p className="text-xl text-white/60 mb-8">{course.subtitle}</p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <Users className="w-5 h-5 text-blue-400" />
                <span>12,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>{course.demand}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <DollarSign className="w-5 h-5 text-purple-400" />
                <span>{course.salary}</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Course Overview</h2>
                <p className="text-lg text-white/80 leading-relaxed">{course.description}</p>
              </div>

              {/* Why This Course Matters */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Why This Course Matters</h2>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <p className="text-lg text-white/80 leading-relaxed">{course.importance}</p>
                </div>
              </div>

              {/* Career Impact */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Career Impact</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-white mb-2">{course.salary.split(' - ')[0]}</div>
                    <div className="text-sm text-white/60">Starting Salary</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-white mb-2">{course.salary.split(' - ')[1]?.split(' ')[0] || '$250K+'}</div>
                    <div className="text-sm text-white/60">Senior Level</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-white mb-2">{course.demand.split('%')[0]}%</div>
                    <div className="text-sm text-white/60">Growth Rate</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-white mb-2">95%</div>
                    <div className="text-sm text-white/60">Job Success</div>
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">What You'll Master</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <h4>Core Concepts</h4>
                      <p>Master fundamental principles and advanced techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <h4>Real Projects</h4>
                      <p>Build portfolio-worthy applications and systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl">💼</div>
                    <div>
                      <h4>Industry Skills</h4>
                      <p>Learn tools and practices used by top companies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <h4>Career Support</h4>
                      <p>Get interview prep and job placement assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 accent-glow-medium">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white">Access It Here</h3>
                  </div>

                  <div className="text-center mb-6">
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-white">{course.price}</span>
                      <span className="text-lg text-white/40 line-through ml-2">{course.originalPrice}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full accent-beacon-pulse">
                      90% OFF
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-white/80 text-sm">
                      <span className="mr-2">✨</span>
                      <span>Lifetime Access</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <span className="mr-2">📱</span>
                      <span>Mobile Compatible</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <span className="mr-2">🎓</span>
                      <span>Certificate Included</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <span className="mr-2">💬</span>
                      <span>Community Access</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <span className="mr-2">🔄</span>
                      <span>30-Day Refund</span>
                    </div>
                  </div>

                  <a 
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full accent-button-primary py-3 px-6 rounded-lg font-semibold text-center flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 accent-beacon-pulse mb-4"
                  >
                    <span>Buy Now</span>
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-green-400 text-sm">
                      <Shield className="w-4 h-4" />
                      <span>30-Day Money-Back Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};