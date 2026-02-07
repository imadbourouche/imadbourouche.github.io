import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg:white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full border border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            <span className="text-sm">{t('hero.available')}</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white transition-colors">
            {t('hero.greeting')} Imad Bourouche
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            {t('hero.description')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://drive.google.com/file/d/175JSzZgC5jUCJLrp5vtB-9HxdiD_nskT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-50 transition-all border-2 border-slate-900 flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border-white dark:hover:bg-slate-800"
          >
            <Download className="w-5 h-5" />
            {t('hero.cta')}
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com/imadbourouche"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/imadbourouche"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:imad.bourouche.pro@gmail.com"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
