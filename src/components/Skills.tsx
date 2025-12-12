import { Code2, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Python', 'Java', 'Spring Boot','Ruby on Rails', 'GraphQL', 'REST APIs']
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase']
  },
  {
    title: 'DevOps',
    icon: Wrench,
    skills: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Vercel', 'Nginx', 'Jenkins', 'Cloudflare']
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Ruby', 'Bash','SQL']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <p className="text-teal-600 tracking-wider uppercase text-sm">Technical Expertise</p>
          <h2 className="text-5xl tracking-tight text-slate-900">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl text-slate-900">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-50 text-slate-700 rounded-lg text-sm border border-slate-200"
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
