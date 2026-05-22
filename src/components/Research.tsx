import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Mic, FileText, ExternalLink } from 'lucide-react';

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

const publications = [
  {
    type: 'Book Chapter',
    status: 'Accepted, In Press',
    title: 'Smart Building Technologies for Energy-Efficient Urban Ecosystems',
    publisher: 'CRC Press, Taylor & Francis Group',
    year: '2026',
    orcid: '0009-0005-2744-1804',
    icon: BookOpen,
  },
  {
    type: 'Book Chapter',
    status: 'In Progress',
    title: 'Microgrid Systems',
    publisher: 'CRC Press, Taylor & Francis Group',
    year: 'Editor: Dr. Jose Anand',
    note: 'Contribution Agreement Signed',
    icon: FileText,
  },
];

const presentations = [
  { title: 'Applied AI & ML Research — LLM Fine-Tuning, RAG & NLP' },
  { title: 'Tokenization, Vector Embedding & Vector Database', coauthor: 'Prof. N.P. Mahalik, CSU Fresno' },
  { title: 'Some Machine Learning Algorithms Used in Data Analysis' },
];

export default function Research() {
  return (
    <section id="research" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Academic contributions in AI, machine learning, and data science
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {publications.map((pub, i) => {
            const Icon = pub.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                      <Icon className="text-gray-600" size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="text-sm font-medium text-gray-500">{pub.type}</span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100">
                          {pub.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 leading-snug">{pub.title}</h3>
                    </div>
                  </div>
                  <div className="ml-16 space-y-2">
                    <p className="text-gray-500 text-sm">{pub.publisher} &middot; {pub.year}</p>
                    {pub.orcid && (
                      <a
                        href={`https://orcid.org/${pub.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:underline"
                      >
                        ORCID: {pub.orcid} <ExternalLink size={12} />
                      </a>
                    )}
                    {pub.note && (
                      <p className="text-gray-400 text-sm italic">{pub.note}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.25}>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                <Mic className="text-gray-600" size={22} />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Conference Presentations</span>
                <h3 className="text-lg font-semibold text-gray-900">California Central Valley Research Symposium (2026)</h3>
              </div>
            </div>
            <div className="ml-16 space-y-4">
              {presentations.map((pres, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-gray-600">{i + 1}</span>
                  </span>
                  <div>
                    <p className="text-gray-700 text-sm font-medium">{pres.title}</p>
                    {pres.coauthor && (
                      <p className="text-gray-400 text-xs mt-1">Co-author: {pres.coauthor}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
