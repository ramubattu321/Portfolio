import { Mail, Linkedin, MapPin, Send, CheckCircle, XCircle, Loader2, Phone, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send('service_r1bqb8e', 'template_cjep10u', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, '_Kh3AsYkPumlxqOGY');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email directly.');
      console.error('EmailJS error:', error);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ramuusa61@gmail.com', href: 'mailto:ramuusa61@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+1 (413) 273-9688', href: 'tel:+14132739688' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ramu-battu', href: 'https://www.linkedin.com/in/ramu-battu-01a9a336a/' },
    { icon: MapPin, label: 'Location', value: 'Fresno, California', href: undefined },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(14,165,233,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's build something useful with data
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Let's discuss how I can help with your data analytics and business intelligence needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/20 transition-colors duration-300">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 flex-shrink-0">
                    <Icon className="text-sky-400" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                    <p className="text-sm text-slate-200 font-medium truncate">{item.value}</p>
                  </div>
                  {item.href && <ArrowUpRight size={14} className="text-slate-500 flex-shrink-0 ml-auto" />}
                </div>
              );

              return item.href ? (
                <a key={i} href={item.href} target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? undefined : '_blank'} rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}

            <div className="p-5 rounded-xl bg-gradient-to-br from-sky-500/10 to-cyan-500/10 border border-sky-500/15 mt-2">
              <p className="text-sm text-slate-300 font-medium mb-1">Open to opportunities</p>
              <p className="text-xs text-slate-400">Response time: Within 24 hours</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm placeholder-slate-500 focus:border-sky-500/40 focus:ring-1 focus:ring-sky-500/20 outline-none transition-all"
                    required disabled={status === 'sending'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm placeholder-slate-500 focus:border-sky-500/40 focus:ring-1 focus:ring-sky-500/20 outline-none transition-all"
                    required disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-2">Subject</label>
                <input
                  type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm placeholder-slate-500 focus:border-sky-500/40 focus:ring-1 focus:ring-sky-500/20 outline-none transition-all"
                  required disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm placeholder-slate-500 focus:border-sky-500/40 focus:ring-1 focus:ring-sky-500/20 outline-none transition-all resize-none"
                  required disabled={status === 'sending'}
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm">
                  <CheckCircle size={16} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-sm">
                  <XCircle size={16} />
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-sky-500/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
