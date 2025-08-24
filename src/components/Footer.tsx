import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 border-t border-gray-800">
      <div className="footer-bg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Mizuki Code
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unlock the cosmos of programming and join thousands of developers 
              advancing their careers with cutting-edge skills.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="footer-link">AI & Machine Learning</a></li>
              <li><a href="#" className="footer-link">Deep Learning</a></li>
              <li><a href="#" className="footer-link">Rust Programming</a></li>
              <li><a href="#" className="footer-link">CUDA C</a></li>
              <li><a href="#" className="footer-link">Neuralink & BCI</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Press</a></li>
              <li><a href="#" className="footer-link">Partners</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">Community</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="social-link">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="social-link">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="social-link">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="social-link">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-400 sparkle-animation" />
            <span>for the coding universe</span>
          </div>
        </div>

        <div className="text-center pt-8 text-sm text-gray-500">
          © 2025 Mizuki Code. All rights reserved. Journey through the infinite cosmos of programming.
        </div>
      </div>
    </footer>
  );
};