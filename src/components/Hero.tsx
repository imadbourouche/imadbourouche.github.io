import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full border border-teal-200">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            <span className="text-sm">Available for new opportunities</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900">
            Imad Bourouche
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
            I'm a Software Engineer with a strong focus on backend and full-stack development. Skilled in creating robust, efficient systems using modern tech stacks.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://drive.google.com/file/d/1s15QmrdCogBKwVEsP8El4WBwgNrCGtk7/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-50 transition-all border-2 border-slate-900 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com/imadbourouche"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/imadbourouche"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:imad.bourouche.pro@gmail.com"
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
