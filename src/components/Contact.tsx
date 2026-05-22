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
  { icon: Mail, label: 'Email', value: 'ramuusa61@gmail.com', href: 'mailto:ramuusa61@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+1 (413) 273-9688', href: 'tel:+14132739688' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ramu-battu', href: 'https://www.linkedin.com/in/ramu-battu-01a9a336a/', external: true },
  { icon: MapPin, label: 'Location', value: 'Fresno, California' },
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
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Let's Connect</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fafafa] border border-gray-100/80 hover:border-gray-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center flex-shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                    <Icon className="text-gray-500" size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="text-gray-900 font-medium text-[14px] mt-0.5">{item.value}</p>
                  </div>
                </div>
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
              <div className="mt-4 p-6 rounded-xl bg-teal-50/60 border border-teal-100/60">
                <h4 className="text-gray-900 font-semibold text-[15px] mb-2">Let's Connect!</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-2">
                  I'm always interested in new opportunities, collaborations, or connecting with fellow data enthusiasts.
                </p>
                <p className="text-teal-700 text-[13px] font-medium">Response time: Within 24 hours</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.1}>
            <div className="bg-[#fafafa] rounded-2xl p-7 border border-gray-100/80">
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: 'name', label: 'Your Name', type: 'text' },
                  { id: 'email', label: 'Email Address', type: 'email' },
                  { id: 'subject', label: 'Subject', type: 'text' },
                ].map(field => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-[13px] font-medium text-gray-500 mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white text-gray-900 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-[14px] placeholder:text-gray-300"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-gray-500 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white text-gray-900 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 outline-none transition-all resize-none text-[14px] placeholder:text-gray-300"
                    required
                    disabled={status === 'sending'}
                  />
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200/60 rounded-xl text-emerald-700 text-[13px]"
                  >
                    <CheckCircle size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-50 border border-red-200/60 rounded-xl text-red-700 text-[13px]"
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
                  className="w-full px-6 py-3.5 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2 text-[14px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.25)]"
                >
                  {status === 'sending' ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
