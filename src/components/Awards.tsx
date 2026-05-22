import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, ExternalLink } from 'lucide-react';

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
    <section id="awards" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-amber-600 uppercase tracking-wider mb-3">Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Awards & Achievements</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-lg mx-auto">
          <div className="rounded-2xl border border-gray-200/60 bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
            <div className="h-36 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.15),transparent_60%)]" />
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Trophy className="text-white drop-shadow-lg" size={52} />
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                View Award <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
