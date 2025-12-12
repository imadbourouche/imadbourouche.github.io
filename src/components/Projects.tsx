import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Redis Implementation in Java',
    description: 'A custom implementation of the Redis key-value store built in Java, featuring core data structure support and TCP networking.',
    image: '/redis-java.png',
    tags: ['Java', 'Redis', 'TCP/IP', 'Data Structures', 'Pub/Sub'],
    github: 'https://github.com/imadbourouche/redis-java',
    demo: ''
  },
  {
    title: 'Simple Proxy Server',
    description: 'A dedicated forward proxy server written in Python that allows for interception and logging of HTTP requests and responses.',
    image: '/simple-proxy-server.png',
    tags: ['Python', 'Networking', 'HTTP', 'Proxy'],
    github: 'https://github.com/imadbourouche/simple_proxy_server',
    demo: ''
  },
  {
    title: 'QR Code attendance checking system',
    description: 'An interactive application for generating and scanning QR codes using a webcam, designed for event attendance tracking.',
    image: '/qr-code.png',
    tags: ['Python', 'Computer Vision', 'OpenCV', 'Qt'],
    github: 'https://github.com/imadbourouche/QR_code',
    demo: ''
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
            A selection of projects that i worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed flex-1 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium border border-teal-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-white text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
