import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Hugo Vinicius</h2>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/hugo-dcavalcante/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:hugovinidc@gmail.com@" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hugo Vinicius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}