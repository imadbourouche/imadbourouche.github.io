import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'INRAE',
    period: 'Jan 2024 - Present',
    description: 'Developing and maintaining AgroPortal using Ruby on Rails and Sinatra, based on a modular monolithic architecture.',
    achievements: [
      'Refactored legacy code and added 200+ automated tests (Minitest, RSpec) reducing technical debt',
      'Implemented CI/CD pipelines (GitHub Actions, GitLab CI/CD) increasing release frequency to twice a month',
      'Dockerized environments accelerating developer onboarding by 80% and standardizing deployments',
      'Integrated Sentry for monitoring/error tracking, reducing MTTR by 25%',
      'Optimized backend performance (REST APIs, SPARQL queries, caching, pagination)'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Freelance',
    period: 'Jan 2023 - Present',
    description: 'Designing and building custom web solutions with a focus on microservices architecture and modern frontend frameworks.',
    achievements: [
      'Architected a LinkedIn scraping platform (Lucced.ai) using microservices (Next.js, Nest.js)',
      'Implemented admin/user dashboards, notification services, and third-party API integrations',
      'Collaborated remotely using GitHub and project management tools like Notion'
    ]
  },
  {
    title: 'Odoo Developer',
    company: 'FINOUTSOURCE',
    period: 'Jun 2023 - Dec 2023',
    description: 'Specialized in Odoo ERP customization, deployment, and module development.',
    achievements: [
      'Customized and deployed Odoo modules using Python, HTML, XML, and PostgreSQL',
      'Performed Odoo version migrations ensuring zero data loss and system continuity',
      'Deployed systems on on-premises servers using Docker',
      'Developed and integrated a custom payment service connected to the existing Odoo system'
    ]
  },
  {
    title: 'Backend Developer Intern',
    company: 'RELEASIN',
    period: 'May 2022 - Jul 2022',
    description: 'Contributed to backend architecture and API development during a summer internship.',
    achievements: [
      'Collaborated on the architecture and development of scalable REST APIs using Node.js and MongoDB',
      'Applied software development best practices: TDD, SOLID principles, and Clean Architecture',
      'Participated in code reviews and team planning sessions'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <p className="text-teal-600 tracking-wider uppercase text-sm">Career Journey</p>
          <h2 className="text-5xl tracking-tight text-slate-900">
            Work Experience
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            My professional journey in software engineering and development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? '' : 'md:col-start-2'}>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 transition-colors">
                        <Briefcase className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-2xl text-slate-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-teal-600">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4 leading-relaxed text-left">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-teal-500 flex-shrink-0">•</span>
                          <span className="text-left">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
