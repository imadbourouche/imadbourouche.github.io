import { Briefcase, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export function Experience() {
  const { t } = useTranslation();
  const experiences = t('experience.jobs', { returnObjects: true }) as ExperienceItem[];

  return (
    <section id="experience" className="py-32 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <p className="text-teal-600 dark:text-teal-400 tracking-wider uppercase text-sm">{t('experience.title')}</p>
          <h2 className="text-5xl tracking-tight text-slate-900 dark:text-white transition-colors">
            {t('experience.subtitle')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto transition-colors">
            {t('experience.description')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? '' : 'md:col-start-2'}>
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 transition-colors">
                        <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-2xl text-slate-900 dark:text-white mb-1 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-teal-600 dark:text-teal-400">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-left transition-colors">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2 transition-colors">
                          <span className="text-teal-500 dark:text-teal-400 flex-shrink-0">•</span>
                          <span className="text-left">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
