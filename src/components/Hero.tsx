import { ArrowRight, Linkedin, Mail, Github, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';

const HeroScene = lazy(() => import('./HeroScene'));

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const techBadges = ['SQL', 'Python', 'Power BI', 'Tableau', 'Excel'];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.08)_0%,_transparent_60%)]" />

      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-300 font-medium">Data & Business Analyst</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white"
            >
              Turning raw data into{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                clear business decisions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl"
            >
              I transform complex datasets into actionable insights through financial analysis, data storytelling, and business intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {techBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-sky-300 backdrop-blur-sm hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-slate-500 font-medium"
            >
              Master's Student at California State University, Fresno
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="https://drive.google.com/file/d/1nxVLeJKD__B8qmdPHxzCYlaAoLzkDb-j/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-7 py-3.5 bg-white/5 border border-white/15 text-white rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-all hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-3 pt-2"
            >
              {[
                { href: 'https://www.linkedin.com/in/ramu-battu-01a9a336a/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://github.com/ramubattu321', icon: Github, label: 'GitHub' },
                { href: 'mailto:ramuusa61@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 rounded-full blur-3xl" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-sky-500/10">
                <img
                  src="https://i.postimg.cc/0N5fkdwD/Whats-App-Image-2025-10-23-at-9-19-25-AM.jpg"
                  alt="Ramu Battu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-cyan-500/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
