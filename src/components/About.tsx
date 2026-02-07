import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 px-6 bg-slate-100 dark:bg-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500 rounded-2xl translate-x-4 translate-y-4"></div>
            <div className="relative overflow-hidden rounded-2xl border-4 border-slate-900 dark:border-white transition-colors">
              <ImageWithFallback
                src="/imad.webp"
                alt="Imad Bourouche"
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-teal-600 dark:text-teal-400 tracking-wider uppercase text-sm">{t('about.title')}</p>
              <h3 className="text-3xl tracking-tight text-slate-900 dark:text-white transition-colors">
                {t('about.subtitle')}
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed transition-colors">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
              <p>
                {t('about.p3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
