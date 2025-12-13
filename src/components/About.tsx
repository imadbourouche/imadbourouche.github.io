import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500 rounded-2xl translate-x-4 translate-y-4"></div>
            <div className="relative overflow-hidden rounded-2xl border-4 border-slate-900">
              <ImageWithFallback
                src="/imad.webp"
                alt="Imad Bourouche"
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-teal-600 tracking-wider uppercase text-sm">About Me</p>
              <h3 className="text-3xl tracking-tight text-slate-900">
                Turning Complex Problems into Simple Solutions
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                I'm a passionate software engineer with over 3 years of experience in building robust, efficient systems using modern tech stacks. My journey in tech began with a fascination for problem-solving and has evolved into a career dedicated to creating innovative solutions.
              </p>
              <p>
                I specialize in backend development, cloud architecture, and agile development practices. Whether it's crafting elegant user interfaces or designing robust backend systems, I thrive on turning complex challenges into simple, beautiful solutions.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects or exploring the latest tech trends. I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
