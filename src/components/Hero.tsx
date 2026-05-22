import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, ArrowDown } from 'lucide-react';

const roles = ['Data Scientist', 'Data Analyst', 'ML Engineer', 'BI Specialist'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50/40 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex justify-center order-first lg:order-last lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-100/50 to-gray-100/50 rounded-[2rem] blur-2xl" />
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
                <img
                  src="https://i.postimg.cc/GmD2rJ1k/Gemini-Generated-Image-t3ye70t3ye70t3ye.png"
                  alt="Ramu Battu"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3"
              >
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-gray-900">Fresno, CA</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3"
              >
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Experience</p>
                <p className="text-sm font-semibold text-gray-900">3+ Years</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[13px] font-medium mb-8"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Available for Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.05] mb-6 tracking-tight"
            >
              Hi, I'm a<br />
              <span className="relative inline-block min-w-[280px]">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                >
                  {roles[roleIdx]}
                </motion.span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  key={`line-${roleIdx}`}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[17px] text-gray-500 leading-relaxed mb-10 max-w-lg"
            >
              3 years building ML models, LLM/RAG pipelines, and data products that drive business decisions. Published researcher @ CRC Press.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.25)]"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="px-7 py-3.5 text-gray-700 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03] active:scale-[0.97] border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              >
                View Projects
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-2"
            >
              {[
                { href: 'https://www.linkedin.com/in/ramu-battu-01a9a336a/', icon: Linkedin },
                { href: 'https://github.com/ramubattu321', icon: Github },
                { href: 'mailto:ramuusa61@gmail.com', icon: Mail },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-gray-200/80 text-gray-400 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-28 pt-12 border-t border-gray-100"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '$250M+', label: 'Data Processed' },
            { value: '2', label: 'CRC Press Publications' },
            { value: '3', label: 'Research Presentations' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-[13px] text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-gray-300 hover:text-gray-500 transition-colors"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
