import { Mail, Linkedin, MapPin, Send, CheckCircle, XCircle, Loader2, Phone } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_r1bqb8e',
        'template_cjep10u',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '_Kh3AsYkPumlxqOGY'
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email directly.');
      console.error('EmailJS error:', error);

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Let's discuss how I can help with your data analytics and business intelligence needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg shadow-sm border border-slate-700 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email</h4>
                    <a href="mailto:ramuusa61@gmail.com" className="text-blue-400 hover:underline">
                      ramuusa61@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg shadow-sm border border-slate-700 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                    <Phone className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone</h4>
                    <a href="tel:+14132739688" className="text-blue-400 hover:underline">
                      +1 (413) 273-9688
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg shadow-sm border border-slate-700 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                    <Linkedin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/ramu-battu-01a9a336a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      linkedin.com/in/ramu-battu-01a9a336a
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg shadow-sm border border-slate-700 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Location</h4>
                    <p className="text-slate-300">Fresno, California</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-xl p-6 text-white border border-blue-400/30 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-3">Let's Connect!</h4>
              <p className="mb-4 text-slate-300">
                I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow data enthusiasts.
              </p>
              <p className="text-blue-300">
                Response time: Within 24 hours
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl shadow-lg p-8 border border-slate-700 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all resize-none"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  <CheckCircle size={20} />
                  <p className="font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  <XCircle size={20} />
                  <p className="font-medium">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
