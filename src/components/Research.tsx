import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Mic, ExternalLink, Calendar, MapPin } from 'lucide-react';

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

const presentations = [
  'Applied AI and ML Research',
  'Tokenization and Vector Embedding',
  'ML Algorithms in Data Analysis: Decision Trees and Regression',
];

const publications = [
  {
    status: 'Accepted, In Press, 2026',
    title: 'Smart Building Technologies for Energy-Efficient Urban Ecosystems',
    publisher: 'CRC Press, Taylor & Francis Group',
    statusColor: 'bg-teal-50 text-teal-700 border-teal-100',
  },
  {
    status: 'In Progress',
    title: 'Microgrid Systems',
    publisher: 'CRC Press · Editor: Dr. Jose Anand',
    statusColor: 'bg-amber-50 text-amber-700 border-amber-100',
  },
];

export default function Research() {
  return (
    <section id="research" className="py-28 bg-gray-50/50 relative overflow-hidden noise-overlay">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">Academic</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Research Experience</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-5">
          <AnimatedSection delay={0}>
            <motion.div
              whileHover={{ y: -4 }}
              className="h-full rounded-2xl border border-gray-200/60 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500 to-emerald-500 opacity-[0.03] rounded-full -translate-y-1/3 translate-x-1/3 group-hover:opacity-[0.06] group-hover:scale-150 transition-all duration-700" />

              <div className="relative flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shrink-0 shadow-sm">
                  <Mic className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <span className="text-[13px] font-medium text-gray-400">CCVRS 2026 Presentations</span>
                  <h3 className="text-[17px] font-bold text-gray-900 leading-snug mt-0.5">Student Researcher</h3>
                </div>
              </div>

              <div className="relative ml-[60px] space-y-3 mb-5">
                <div className="flex items-center gap-4 text-[13px] text-gray-500 flex-wrap">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-teal-600" />
                    California State University, Fresno
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} className="text-teal-600" />
                    Aug 2025 – Apr 2026
                  </span>
                </div>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Presented 3 sessions at CCVRS 2026. Co-authored with Prof. N.P. Mahalik.
                </p>
              </div>

              <div className="relative ml-[60px] space-y-2.5">
                {presentations.map((title, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <span className="text-[11px] font-bold text-white">{i + 1}</span>
                    </span>
                    <p className="text-gray-700 text-[14px] font-medium leading-snug">{title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="h-full rounded-2xl border border-gray-200/60 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden group flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500 to-cyan-500 opacity-[0.03] rounded-full -translate-y-1/3 translate-x-1/3 group-hover:opacity-[0.06] group-hover:scale-150 transition-all duration-700" />

              <div className="relative flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-sm">
                  <BookOpen className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <span className="text-[13px] font-medium text-gray-400">Book Chapters</span>
                  <h3 className="text-[17px] font-bold text-gray-900 leading-snug mt-0.5">CRC Press, Taylor & Francis</h3>
                </div>
              </div>

              <div className="relative ml-[60px] space-y-4 flex-1">
                {publications.map((pub, i) => (
                  <div key={i} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${pub.statusColor} mb-2`}>
                      {pub.status}
                    </span>
                    <h4 className="text-[15px] font-semibold text-gray-900 leading-snug mb-1">{pub.title}</h4>
                    <p className="text-gray-500 text-[13px]">{pub.publisher}</p>
                  </div>
                ))}
              </div>

              <div className="relative ml-[60px] mt-5">
                <a
                  href="https://orcid.org/0009-0005-2744-1804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white text-[13px] font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  View ORCID Profile
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
