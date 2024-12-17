import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Shield, Zap } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    items: ["React", "TypeScript", "Next.js", "Redux", "GraphQL"]
  },
  {
    category: "UI/UX",
    icon: <Layout className="w-6 h-6" />,
    items: ["Tailwind CSS", "Styled Components", "Framer Motion", "Figma"]
  },
  {
    category: "Backend Integration",
    icon: <Database className="w-6 h-6" />,
    items: ["REST APIs", "GraphQL", "WebSocket", "Firebase"]
  },
  {
    category: "Testing",
    icon: <Shield className="w-6 h-6" />,
    items: ["Jest", "React Testing Library", "Cypress", "Playwright"]
  },
  {
    category: "Performance",
    icon: <Zap className="w-6 h-6" />,
    items: ["Webpack", "Code Splitting", "Lazy Loading", "PWA"]
  },
  {
    category: "DevOps",
    icon: <Settings className="w-6 h-6" />,
    items: ["Git", "CI/CD", "Docker", "AWS"]
  }
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Expertise in modern web technologies and best practices
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}