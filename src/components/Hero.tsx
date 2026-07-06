import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, ArrowDown, Sparkles } from 'lucide-react';

const roles = ['Data Analyst', 'Business Intelligence', 'Data Engineer', 'Analytics Engineer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden noise-overlay">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[80px] animate-blob" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex justify-center order-first lg:order-last lg:col-span-2"
          >
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                className="absolute -inset-6 rounded-[2.5rem] border-2 border-dashed border-teal-200/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              <div className="absolute -inset-3 bg-gradient-to-br from-teal-200/30 via-blue-100/20 to-emerald-100/30 rounded-[2.2rem] blur-xl" />
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[2rem] overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.12)] border-2 border-white/80">
                <img
                  src="https://i.postimg.cc/GmD2rJ1k/Gemini-Generated-Image-t3ye70t3ye70t3ye.png"
                  alt="Ramu Battu"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 px-4 py-3"
              >
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Location</p>
                <p className="text-[13px] font-bold text-gray-900">Charlotte, NC</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 px-4 py-3"
              >
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Experience</p>
                <p className="text-[13px] font-bold text-gray-900">4+ Years</p>
              </motion.div>

              {/* Floating accent dots */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/4 -right-10 w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.4)]"
              />
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/3 -left-8 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/60 text-emerald-700 text-[13px] font-medium mb-8 shadow-[0_2px_10px_rgba(16,185,129,0.08)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight"
            >
              Hi, I'm a<br />
              <span className="relative inline-block min-w-[280px]">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent"
                >
                  {roles[roleIdx]}
                </motion.span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '80%', opacity: 1 }}
                  key={`line-${roleIdx}`}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[17px] text-gray-500 leading-[1.7] mb-10 max-w-lg"
            >
              4+ years turning complex datasets into decision-ready insights through BI, data engineering, and analytics. Published researcher @ CRC Press.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo('contact')}
                className="group relative px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[0_4px_25px_-4px_rgba(0,0,0,0.3)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                  Contact Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="px-7 py-3.5 text-gray-700 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03] active:scale-[0.97] border border-gray-200 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50/50 hover:shadow-[0_4px_20px_rgba(20,184,166,0.1)]"
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
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl border border-gray-200/80 text-gray-400 hover:text-teal-600 hover:border-teal-200 hover:bg-teal-50/50 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <Icon size={18} />
                </motion.a>
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
              className="text-center group"
            >
              <div className="font-display text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1 group-hover:from-teal-600 group-hover:to-emerald-600 transition-all duration-300">{stat.value}</div>
              <div className="text-[13px] text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2.5 text-gray-300 hover:text-teal-500 transition-colors rounded-full border border-gray-200/50 hover:border-teal-200"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
