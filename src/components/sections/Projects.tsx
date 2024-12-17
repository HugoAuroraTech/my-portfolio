
import { Card } from '../ui/Card';
import { AnimatedText } from '../ui/AnimatedText';

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A sophisticated task management application leveraging OpenAI's GPT-4 for smart task categorization and priority suggestions.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=870&q=80",
    tech: ["React", "TypeScript", "OpenAI API", "TailwindCSS"],
  },
  {
    title: "Real-time Collaboration Platform",
    description: "A collaborative workspace platform with real-time updates, document sharing, and team chat.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=870&q=80",
    tech: ["React", "Firebase", "WebSocket", "Redux"],
  },
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with advanced analytics and inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=870&q=80",
    tech: ["React", "Chart.js", "TailwindCSS", "React Query"],
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedText
          text="Featured Projects"
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} delay={index}>
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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