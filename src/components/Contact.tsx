import { Mail, Linkedin, Github, Twitter, Send, MapPin } from 'lucide-react';

export function Contact() {
  // NOTE: We are removing useState, handleChange, and handleSubmit
  // as the form submission is now handled by the browser's native POST
  // action pointing to FormSubmit.co

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <p className="text-teal-600 tracking-wider uppercase text-sm">Get In Touch</p>
          <h2 className="text-5xl tracking-tight text-slate-900">
            Let's Work Together
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl text-slate-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm mb-1">Email</p>
                    <a href="mailto:imad.bourouche.pro@gmail.com" className="text-slate-900 hover:text-teal-600 transition-colors">
                      imad.bourouche.pro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm mb-1">Location</p>
                    <p className="text-slate-900">Montpellier, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-slate-900 mb-4">
                Social Links
              </h3>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/imadbourouche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/imad-bourouche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/imadeddine1337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-teal-600 transition-colors"
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
                  <label htmlFor="name" className="block text-slate-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" // IMPORTANT: The `name` attribute is what FormSubmit uses
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // IMPORTANT
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject" // IMPORTANT
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message" // IMPORTANT
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-teal-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-32 pt-12 border-t border-slate-200">
        <div className="text-center text-slate-600">
          <p>© 2025 Imad Bourouche. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}