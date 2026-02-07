import { Mail, Linkedin, Github, Twitter, Send, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  // NOTE: We are removing useState, handleChange, and handleSubmit
  // as the form submission is now handled by the browser's native POST
  // action pointing to FormSubmit.co

  return (
    <section id="contact" className="py-32 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <p className="text-teal-600 dark:text-teal-400 tracking-wider uppercase text-sm">{t('contact.title')}</p>
          <h2 className="text-5xl tracking-tight text-slate-900 dark:text-white transition-colors">
            {t('contact.subtitle')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto transition-colors">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl text-slate-900 dark:text-white mb-6 transition-colors">
                {t('contact.info_title')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{t('contact.email')}</p>
                    <a href="mailto:imad.bourouche.pro@gmail.com" className="text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      imad.bourouche.pro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{t('contact.location')}</p>
                    <p className="text-slate-900 dark:text-white transition-colors">{t('contact.location_val')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-slate-900 dark:text-white mb-4 transition-colors">
                {t('contact.social')}
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/imadbourouche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center hover:bg-teal-600 dark:hover:bg-slate-200 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/imad-bourouche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center hover:bg-teal-600 dark:hover:bg-slate-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/imadeddine1337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center hover:bg-teal-600 dark:hover:bg-slate-200 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            {/* 🔑 KEY CHANGE: Set action and method to point to FormSubmit and your email */}
            <form action="https://formsubmit.co/imad.bourouche.pro@gmail.com" method="POST" className="space-y-6">

              {/* Optional: Hidden field to set a default subject for the email you receive */}
              <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />

              {/* Optional: Hidden field to redirect to a "thank you" page after submission */}
              {/* If you don't use this, FormSubmit will show its default "Thank You" page. */}
              {/* <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou.html" /> */}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-900 dark:text-white mb-2 transition-colors">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" // IMPORTANT: The `name` attribute is what FormSubmit uses
                    required
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    placeholder={t('contact.form.name_ph')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-900 dark:text-white mb-2 transition-colors">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // IMPORTANT
                    required
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    placeholder={t('contact.form.email_ph')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-900 dark:text-white mb-2 transition-colors">
                  {t('contact.form.subject')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject" // IMPORTANT
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder={t('contact.form.subject_ph')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-900 dark:text-white mb-2 transition-colors">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message" // IMPORTANT
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder={t('contact.form.message_ph')}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl hover:bg-teal-600 dark:hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {t('contact.form.send')}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-32 pt-12 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="text-center text-slate-600 dark:text-slate-400 transition-colors">
          <p>{t('contact.footer')}</p>
        </div>
      </div>
    </section>
  );
}