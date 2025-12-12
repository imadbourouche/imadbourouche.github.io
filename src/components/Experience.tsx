import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Lead development of microservices architecture serving 2M+ users. Mentor junior developers and establish coding standards.',
    achievements: [
      'Reduced API response time by 60% through optimization',
      'Led migration to TypeScript across 15+ repositories',
      'Implemented CI/CD pipeline reducing deployment time by 80%'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built and shipped multiple features for SaaS platform. Collaborated with design team to create intuitive user experiences.',
    achievements: [
      'Developed real-time collaboration features using WebSockets',
      'Increased test coverage from 40% to 90%',
      'Architected scalable database schema supporting 100k+ records'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Co',
    period: '2019 - 2020',
    description: 'Created responsive web applications for diverse clients. Focused on performance optimization and accessibility.',
    achievements: [
      'Built 20+ client websites with 98+ Lighthouse scores',
      'Implemented design system used across 30+ projects',
      'Reduced bundle size by 45% through code splitting'
    ]
  },
  {
    title: 'Junior Developer',
    company: 'Web Solutions Inc',
    period: '2018 - 2019',
    description: 'Contributed to full-stack projects and gained experience in modern web technologies.',
    achievements: [
      'Collaborated on 10+ production web applications',
      'Participated in code reviews and agile ceremonies',
      'Learned React, Node.js, and cloud deployment practices'
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
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
                    <div className="flex items-center gap-3 mb-4 md:justify-end">
                      {index % 2 === 0 ? (
                        <>
                          <div className="flex items-center gap-2 text-slate-500">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-2 text-slate-500">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex items-start gap-3 mb-4 md:justify-end">
                      <div className={index % 2 === 0 ? 'text-right' : ''}>
                        <h3 className="text-2xl text-slate-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-teal-600">{exp.company}</p>
                      </div>
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 transition-colors">
                        <Briefcase className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-start gap-2 md:justify-end">
                          <span className="text-teal-500 flex-shrink-0">•</span>
                          <span>{achievement}</span>
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
