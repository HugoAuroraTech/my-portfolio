import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card } from '../ui/Card';

const experiences = [
  {
    title: "Leader of Development",
    company: "Aurora Tech.",
    period: "2024 - Present",
    description: "Leading a team of 3 developers, implementing microfront-ends architecture, and improving performance by 40%.",
    technologies: ["React", "TypeScript", "Redux", "GraphQL", "Flutter"]
  },
  {
    title: "Frontend Developer",
    company: "Ateliê de Software",
    period: "2023 - 2024",
    description: "Developed and maintained several React and Flutter applications",
    technologies: ["Flutter", "React", "Next.js", "Jest", "Cypress"]
  },
  {
    title: "Frontend Developer",
    company: "Codifica Tec.",
    period: "2022 - 2023",
    description: "Built responsive web applications and contributed to the company's component library.",
    technologies: ["React", "JavaScript", "SASS", "Webpack"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Over 2 years of experience in building modern web applications
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.title} delay={index}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-900">{exp.title}</h3>
                    <p className="text-gray-900 dark:text-gray-9000">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}