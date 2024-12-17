import React from 'react';
import { Code2, Layout, Sparkles, Users } from 'lucide-react';

export function About() {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, title: "Frontend Development", description: "Expert in React, TypeScript, and modern JavaScript" },
    { icon: <Layout className="w-6 h-6" />, title: "UI/UX Design", description: "Creating beautiful and intuitive user interfaces" },
    { icon: <Users className="w-6 h-6" />, title: "Team Collaboration", description: "Experience in agile environments and team leadership" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Performance Optimization", description: "Building fast and scalable web applications" }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Frontend Developer with 2+ years.
            I focus on creating efficient, scalable, and beautiful web applications that provide exceptional user experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}