import { Code2, Database, Layout, Server, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const skillCategories = [
  {
    titleKey: 'Frontend',
    icon: Layout,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    titleKey: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Python', 'Java', 'Spring Boot', 'Ruby on Rails', 'GraphQL', 'REST APIs']
  },
  {
    titleKey: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase']
  },
  {
    titleKey: 'DevOps',
    icon: Wrench,
    skills: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Vercel', 'Nginx', 'Jenkins', 'Cloudflare']
  },
  {
    titleKey: 'Tools',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Ruby', 'Bash', 'SQL']
  }
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-32 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <p className="text-teal-600 dark:text-teal-400 tracking-wider uppercase text-sm">{t('skills.title')}</p>
          <h2 className="text-5xl tracking-tight text-slate-900 dark:text-white transition-colors">
            {t('skills.subtitle')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto transition-colors">
            {t('skills.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.titleKey}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <Icon className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl text-slate-900 dark:text-white transition-colors">{t(`skills.categories.${category.titleKey}`)}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-lg text-sm border border-slate-200 dark:border-slate-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
