import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, ExternalLink } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Awards & Achievements</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Notable honors and recognitions for academic and professional excellence
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-lg mx-auto">
          <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="h-32 bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center relative">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Trophy className="text-white" size={52} />
              </motion.div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Merit Scholarship</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Awarded for academic excellence in the Master's program. This scholarship recognizes outstanding academic performance and potential in graduate studies.
              </p>
              <a
                href="https://drive.google.com/file/d/1BPrLSc-tonRDX9JczdKc20fs6vpIl6OF/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                View Award <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
