import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Analytics Dashboard',
    description: 'A real-time analytics platform with interactive data visualizations, custom reporting, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU1MDE4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NTIwNzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React Native', 'Expo', 'Firebase', 'Redux'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with payment processing, inventory management, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NTUxNTA0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <p className="text-teal-600 tracking-wider uppercase text-sm">Portfolio</p>
          <h2 className="text-5xl tracking-tight text-slate-900">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A selection of recent work showcasing my technical abilities and creative problem-solving
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl text-slate-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm border border-teal-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border-2 border-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
