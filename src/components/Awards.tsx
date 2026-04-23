import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, ExternalLink } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Awards & Achievements</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Notable honors and recognitions for academic and professional excellence
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-lg mx-auto">
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="rounded-2xl border border-amber-500/20 bg-slate-900/50 overflow-hidden hover:shadow-xl hover:shadow-amber-500/5 transition-shadow"
            style={{ perspective: '800px' }}
          >
            <div className="h-32 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Trophy className="text-white" size={52} />
              </motion.div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-white mb-3">Academic Merit Scholarship</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Awarded for academic excellence in the Master's program. This scholarship recognizes outstanding academic performance and potential in graduate studies.
              </p>
              <a
                href="https://drive.google.com/file/d/1BPrLSc-tonRDX9JczdKc20fs6vpIl6OF/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:scale-105 transition-transform"
              >
                View Award <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
