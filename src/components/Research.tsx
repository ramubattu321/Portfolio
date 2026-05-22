import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Mic, FileText, ExternalLink } from 'lucide-react';

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

const publications = [
  {
    type: 'Book Chapter',
    status: 'Accepted, In Press',
    title: 'Smart Building Technologies for Energy-Efficient Urban Ecosystems',
    publisher: 'CRC Press, Taylor & Francis Group',
    year: '2026',
    orcid: '0009-0005-2744-1804',
    icon: BookOpen,
    color: 'sky',
  },
  {
    type: 'Book Chapter',
    status: 'In Progress',
    title: 'Microgrid Systems',
    publisher: 'CRC Press, Taylor & Francis Group',
    year: 'Editor: Dr. Jose Anand',
    note: 'Contribution Agreement Signed',
    icon: FileText,
    color: 'teal',
  },
];

const presentations = [
  {
    title: 'Applied AI & ML Research — LLM Fine-Tuning, RAG & NLP',
  },
  {
    title: 'Tokenization, Vector Embedding & Vector Database',
    coauthor: 'Prof. N.P. Mahalik, CSU Fresno',
  },
  {
    title: 'Some Machine Learning Algorithms Used in Data Analysis',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', dot: 'bg-sky-400' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400', dot: 'bg-teal-400' },
};

export default function Research() {
  return (
    <section id="research" className="py-28 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            Academic Contributions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Research & Publications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-teal-400 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {publications.map((pub, i) => {
            const c = colorMap[pub.color];
            const Icon = pub.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`h-full rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm p-8 hover:shadow-xl hover:shadow-sky-500/5 transition-shadow`}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
                      <Icon className={c.text} size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-sm font-medium ${c.text}`}>{pub.type}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>
                          {pub.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white leading-snug">{pub.title}</h3>
                    </div>
                  </div>
                  <div className="ml-16 space-y-2">
                    <p className="text-slate-400 text-sm">{pub.publisher} &middot; {pub.year}</p>
                    {pub.orcid && (
                      <a
                        href={`https://orcid.org/${pub.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-medium ${c.text} hover:underline`}
                      >
                        ORCID: {pub.orcid} <ExternalLink size={12} />
                      </a>
                    )}
                    {pub.note && (
                      <p className="text-slate-500 text-sm italic">{pub.note}</p>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="rounded-2xl border border-teal-500/20 bg-teal-500/10 backdrop-blur-sm p-8 hover:shadow-xl hover:shadow-teal-500/5 transition-shadow"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                <Mic className="text-teal-400" size={22} />
              </div>
              <div>
                <span className="text-sm font-medium text-teal-400">Conference Presentations</span>
                <h3 className="text-lg font-semibold text-white">California Central Valley Research Symposium (2026)</h3>
              </div>
            </div>
            <div className="ml-16 space-y-4">
              {presentations.map((pres, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-800 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-teal-400">{i + 1}</span>
                  </span>
                  <div>
                    <p className="text-slate-200 text-sm font-medium">{pres.title}</p>
                    {pres.coauthor && (
                      <p className="text-slate-500 text-xs mt-1">Co-author: {pres.coauthor}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
