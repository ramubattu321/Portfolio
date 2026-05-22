import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Mic, FileText, ExternalLink } from 'lucide-react';

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

const publications = [
  {
    type: 'Book Chapter',
    status: 'Accepted, In Press',
    title: 'Smart Building Technologies for Energy-Efficient Urban Ecosystems',
    publisher: 'CRC Press, Taylor & Francis Group',
    year: '2026',
    orcid: '0009-0005-2744-1804',
    icon: BookOpen,
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    type: 'Book Chapter',
    status: 'In Progress',
    title: 'Microgrid Systems',
    publisher: 'CRC Press, Taylor & Francis Group',
    year: 'Editor: Dr. Jose Anand',
    note: 'Contribution Agreement Signed',
    icon: FileText,
    gradient: 'from-blue-500 to-cyan-500',
  },
];

const presentations = [
  { title: 'Applied AI & ML Research — LLM Fine-Tuning, RAG & NLP' },
  { title: 'Tokenization, Vector Embedding & Vector Database', coauthor: 'Prof. N.P. Mahalik, CSU Fresno' },
  { title: 'Some Machine Learning Algorithms Used in Data Analysis' },
];

export default function Research() {
  return (
    <section id="research" className="py-28 bg-gray-50/50 relative overflow-hidden noise-overlay">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">Academic</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Research & Publications</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          {publications.map((pub, i) => {
            const Icon = pub.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-gray-200/60 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${pub.gradient} opacity-[0.03] rounded-full -translate-y-1/3 translate-x-1/3 group-hover:opacity-[0.06] group-hover:scale-150 transition-all duration-700`} />

                  <div className="relative flex items-start gap-4 mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${pub.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                        <span className="text-[13px] font-medium text-gray-400">{pub.type}</span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-50 text-teal-700 border border-teal-100">
                          {pub.status}
                        </span>
                      </div>
                      <h3 className="text-[16px] font-bold text-gray-900 leading-snug">{pub.title}</h3>
                    </div>
                  </div>
                  <div className="relative ml-[60px] space-y-2">
                    <p className="text-gray-400 text-[13px]">{pub.publisher} &middot; {pub.year}</p>
                    {pub.orcid && (
                      <a
                        href={`https://orcid.org/${pub.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-600 hover:text-teal-700 hover:underline"
                      >
                        ORCID: {pub.orcid} <ExternalLink size={11} />
                      </a>
                    )}
                    {pub.note && (
                      <p className="text-gray-400 text-[13px] italic">{pub.note}</p>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl border border-gray-200/60 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 opacity-40" />

            <div className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0 shadow-sm">
                <Mic className="text-white" size={20} />
              </div>
              <div>
                <span className="text-[13px] font-medium text-gray-400">Conference Presentations</span>
                <h3 className="text-[16px] font-bold text-gray-900">California Central Valley Research Symposium (2026)</h3>
              </div>
            </div>
            <div className="ml-[60px] space-y-3.5">
              {presentations.map((pres, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <span className="text-[11px] font-bold text-white">{i + 1}</span>
                  </span>
                  <div>
                    <p className="text-gray-700 text-[14px] font-medium">{pres.title}</p>
                    {pres.coauthor && (
                      <p className="text-gray-400 text-[12px] mt-0.5">Co-author: {pres.coauthor}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
