import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500 rounded-2xl translate-x-4 translate-y-4"></div>
            <div className="relative overflow-hidden rounded-2xl border-4 border-slate-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTUyNDUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Alex Martinez"
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-teal-600 tracking-wider uppercase text-sm">About Me</p>
              <h2 className="text-5xl tracking-tight text-slate-900">
                Building the future, one line at a time
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                I'm a passionate software engineer with over 5 years of experience in building scalable web applications and user-centric digital products. My journey in tech began with a fascination for problem-solving and has evolved into a career dedicated to creating innovative solutions.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, cloud architecture, and agile development practices. Whether it's crafting elegant user interfaces or designing robust backend systems, I thrive on turning complex challenges into simple, beautiful solutions.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, mentoring aspiring developers, or exploring the latest tech trends. I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
