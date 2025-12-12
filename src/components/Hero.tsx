import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full border border-teal-200">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            <span className="text-sm">Available for new opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900">
            Alex Martinez
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
            Full Stack Software Engineer specializing in building exceptional digital experiences
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-50 transition-all border-2 border-slate-900"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:alex@example.com"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
