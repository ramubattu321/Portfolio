import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Mail, Github, ArrowDown, Sparkles } from 'lucide-react';
import { useCountUp } from '../hooks/useAnimations';

const roles = ['Business Analyst', 'Data Analyst', 'BI Analyst', 'Reporting Analyst'];

function AnimatedStat({ value, label, suffix = '', delay }: { value: number; label: string; suffix?: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const count = useCountUp(value, 1800, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="text-center group cursor-default"
    >
      <div className="font-display text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-1 group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
        {count}{suffix}
      </div>
      <div className="text-[13px] text-gray-500 font-medium">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden noise-overlay">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[140px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
                className="absolute -inset-6 rounded-[2.5rem] border-2 border-dashed border-teal-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              <div className="absolute -inset-3 bg-gradient-to-br from-teal-500/20 via-blue-500/15 to-emerald-500/20 rounded-[2.2rem] blur-xl" />
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[2rem] overflow-hidden shadow-[0_25px_80px_-15px_rgba(20,184,166,0.25)] border-2 border-white/10">
                <img
                  src="https://i.postimg.cc/L4b1HymY/Chat-GPT-Image-Aug-14-2026-02-38-32-PM.png"
                  alt="Ramu Battu"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-white/5 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10 px-4 py-3"
              >
                <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Location</p>
                <p className="text-[13px] font-bold text-white">Fresno, CA</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-6 bg-white/5 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10 px-4 py-3"
              >
                <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Experience</p>
                <p className="text-[13px] font-bold text-white">4+ Years</p>
              </motion.div>

              {/* Floating accent dots */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/4 -right-10 w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.6)]"
              />
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/3 -left-8 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-400 text-[13px] font-medium mb-8 shadow-[0_2px_10px_rgba(16,185,129,0.1)]"
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
              className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
            >
              Hi, I'm a<br />
              <span className="relative inline-block min-w-[280px]">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent"
                >
                  Business Analyst
                </motion.span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"
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
              className="text-[17px] text-gray-400 leading-[1.7] mb-10 max-w-lg"
            >
              4+ years turning ambiguous business problems into clear requirements, actionable dashboards, and confident decisions. Published researcher @ CRC Press.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-7 py-3.5 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-semibold text-[15px] transition-colors shadow-[0_4px_25px_-4px_rgba(255,255,255,0.2)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                  Contact Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                onClick={() => scrollTo('portfolio')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group px-7 py-3.5 text-white rounded-full font-semibold text-[15px] transition-colors border border-white/15 hover:border-teal-400/40 hover:text-teal-400 hover:bg-teal-500/5"
              >
                View Projects
              </motion.button>
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
                { href: 'mailto:ramubattu999@gmail.com', icon: Mail },
              ].map(({ href, icon: Icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl border border-white/10 text-gray-400 hover:text-teal-400 hover:border-teal-400/30 hover:bg-teal-500/5 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-28 pt-12 border-t border-white/10"
        >
          <AnimatedStat value={4} suffix="+" label="Years Experience" delay={0.1} />
          <AnimatedStat value={250} suffix="M+" label="Data Processed" delay={0.2} />
          <AnimatedStat value={2} label="CRC Press Publications" delay={0.3} />
          <AnimatedStat value={3} label="Research Presentations" delay={0.4} />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2.5 text-gray-600 hover:text-teal-400 transition-colors rounded-full border border-white/10 hover:border-teal-400/30"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
