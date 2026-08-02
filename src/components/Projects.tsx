import { useState } from 'react';
import { ExternalLink, Github, Monitor, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    titleKey: 'TIPSI',
    tags: ['Java', 'Quarkus', 'Next.js', 'PostgreSQL', 'GCP', 'Terraform'],
    github: 'https://tipsi.io',
    demo: '',
    category: 'professional'
  },
  {
    titleKey: 'OntoPortal',
    tags: ['Ruby on Rails', 'Hotwire', 'Redis', 'NoSQL', 'Solr', 'Sidekiq'],
    github: 'https://ontoportal.org',
    demo: '',
    category: 'professional'
  },
  {
    titleKey: 'Luceed.ai',
    tags: ['Next.js', 'Nest.js', 'Microservices', 'PostgreSQL', 'Redis'],
    github: 'https://luceed.ai',
    demo: '',
    category: 'professional'
  },
  {
    titleKey: 'CursorMate',
    tags: ['JavaScript', 'Chrome Extension', 'Manifest V3', 'OpenAI API'],
    github: 'https://github.com/imadbourouche/CursorMate',
    demo: '',
    category: 'personal'
  },
  {
    titleKey: 'Redis Implementation in Java',
    tags: ['Java', 'Redis', 'TCP/IP', 'Data Structures', 'Pub/Sub'],
    github: 'https://github.com/imadbourouche/redis-java',
    demo: '',
    category: 'personal'
  },
  {
    titleKey: 'Simple Proxy Server',
    tags: ['Python', 'Networking', 'HTTP', 'Proxy'],
    github: 'https://github.com/imadbourouche/simple_proxy_server',
    demo: '',
    category: 'personal'
  },
  {
    titleKey: 'QR Code attendance checking system',
    tags: ['Python', 'Computer Vision', 'OpenCV', 'Qt'],
    github: 'https://github.com/imadbourouche/QR_code',
    demo: '',
    category: 'personal'
  }
];

interface ProjectItem {
  title: string;
  description: string;
  category: string;
}

export function Projects() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');

  const projectItems = t('projects.items', { returnObjects: true }) as ProjectItem[];

  // Merge translation data with static project data (tags, links)
  const mergedProjects = projects.map((p, i) => ({
    ...p,
    title: projectItems[i]?.title || p.titleKey,
    description: projectItems[i]?.description || '',
  }));

  const filteredProjects = activeTab === 'professional'
    ? mergedProjects.filter(p => p.category === 'professional')
    : mergedProjects.filter(p => p.category === 'personal');


  const cols =
    filteredProjects.length === 1
      ? "md:grid-cols-1"
      : filteredProjects.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";

  return (
    <section id="projects" className="py-32 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl tracking-tight text-slate-900 dark:text-white transition-colors">
            {t('projects.subtitle')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto transition-colors">
            {t('projects.description')}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm transition-colors">
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeTab === 'professional'
                ? 'bg-teal-500 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
            >
              <Monitor className="w-4 h-4" />
              {t('projects.professional')}
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeTab === 'personal'
                ? 'bg-teal-500 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
            >
              <Code2 className="w-4 h-4" />
              {t('projects.personal')}
            </button>
          </div>
        </div>


        <div className={`grid grid-cols-1 ${cols} gap-8 justify-items-center`}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full w-full max-w-sm lg:max-w-none"
            >
              {/* <div className="relative h-48 overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div> */}

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-1 text-sm transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium border border-teal-200 dark:border-teal-800 transition-colors"
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
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    {project.category === 'professional' ? t('projects.website') : t('projects.code')}
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
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
