import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle, XCircle, Loader2, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'ramubattu999@gmail.com', href: 'mailto:ramubattu999@gmail.com', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  { icon: Phone, label: 'Phone', value: '+1 (559) 455-7335', href: 'tel:+15594557335', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ramu-battu', href: 'https://www.linkedin.com/in/ramu-battu-01a9a336a/', external: true, color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
  { icon: MapPin, label: 'Location', value: 'Fresno, California', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
];

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

  return (
    <section id="contact" className="py-28 bg-black relative overflow-hidden noise-overlay">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[120px] translate-y-1/3 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-400 uppercase tracking-wider mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">Let's Connect</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:shadow-[0_4px_20px_rgba(20,184,166,0.08)] transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl ${item.color} border flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium text-[14px] mt-0.5">{item.value}</p>
                  </div>
                </motion.div>
              );

              return (
                <AnimatedSection key={i} delay={i * 0.06}>
                  {item.href ? (
                    <a href={item.href} target={item.external ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                      {content}
                    </a>
                  ) : content}
                </AnimatedSection>
              );
            })}

            <AnimatedSection delay={0.3}>
              <div className="mt-4 p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-emerald-500/5 border border-teal-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/15 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h4 className="relative text-white font-bold text-[15px] mb-2">Let's Connect!</h4>
                <p className="relative text-gray-400 text-[13px] leading-relaxed mb-2">
                  I'm always interested in new opportunities, collaborations, or connecting with fellow data enthusiasts.
                </p>
                <p className="relative text-teal-400 text-[13px] font-semibold">Response time: Within 24 hours</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.1}>
            <div className="bg-white/[0.03] rounded-2xl p-7 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 opacity-80" />

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Project inquiry' },
                ].map(field => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-[13px] font-medium text-gray-400 mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-[14px] placeholder:text-gray-600 shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-gray-400 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none text-[14px] placeholder:text-gray-600 shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                    required
                    disabled={status === 'sending'}
                  />
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-[13px]"
                  >
                    <CheckCircle size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-[13px]"
                  >
                    <XCircle size={16} />
                    {errorMessage}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full px-6 py-3.5 bg-white hover:bg-gray-100 disabled:bg-gray-700 disabled:cursor-not-allowed text-gray-900 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-[14px] shadow-[0_4px_20px_-4px_rgba(255,255,255,0.15)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {status === 'sending' ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Send Message</>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
