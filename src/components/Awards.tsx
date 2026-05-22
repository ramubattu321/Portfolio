import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, ExternalLink, Star } from 'lucide-react';

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

export default function Awards() {
  return (
    <section id="awards" className="py-28 bg-white relative overflow-hidden noise-overlay">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-50/30 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-amber-600 uppercase tracking-wider mb-3">Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Awards & Achievements</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-lg mx-auto">
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-gray-200/60 bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            <div className="h-40 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.2),transparent_60%)]" />

              {/* Floating stars */}
              <motion.div animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="absolute top-6 left-10">
                <Star size={14} className="text-white/40 fill-white/40" />
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0], rotate: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-12">
                <Star size={10} className="text-white/30 fill-white/30" />
              </motion.div>
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} className="absolute bottom-8 right-20">
                <Star size={12} className="text-white/35 fill-white/35" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Trophy className="text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]" size={56} />
              </motion.div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Academic Merit Scholarship</h3>
              <p className="text-gray-500 leading-relaxed text-[15px] mb-6">
                Awarded for academic excellence in the Master's program. Recognizes outstanding academic performance and potential in graduate studies.
              </p>
              <a
                href="https://drive.google.com/file/d/1BPrLSc-tonRDX9JczdKc20fs6vpIl6OF/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold bg-gray-900 text-white hover:bg-amber-600 transition-all hover:scale-[1.03] active:scale-[0.97] shadow-sm"
              >
                View Award <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
