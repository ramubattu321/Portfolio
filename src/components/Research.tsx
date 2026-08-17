import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, FlaskConical, Calendar, Users, Award, CheckCircle, Clock } from 'lucide-react';

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
    status: 'accepted',
    statusLabel: 'Accepted · In Press',
    chapter: 'Chapter 16',
    title: 'Smart Building Technologies for Energy-Efficient Urban Ecosystems',
    book: 'Smart Technologies for Sustainable Development Goals: Clean Water and Sanitation',
    publisher: 'CRC Press, Taylor & Francis Group',
    date: 'May 18, 2026',
    editors: 'Dr. A. Jose Anand & Dr. Saravanan Krishnan',
    orcid: '0009-0005-2744-1804',
    tags: ['Smart Buildings', 'Energy Efficiency', 'Urban Systems', 'Sustainability'],
  },
  {
    status: 'inprogress',
    statusLabel: 'In Progress · Agreement Signed',
    chapter: null,
    title: 'Microgrid Systems',
    book: 'CRC Press Forthcoming Volume',
    publisher: 'CRC Press, Taylor & Francis Group',
    date: 'Forthcoming',
    editors: 'Dr. Jose Anand',
    orcid: null,
    tags: ['Microgrid', 'Power Systems', 'Energy Engineering'],
  },
];

const researchPoints = [
  {
    heading: 'Data Analysis',
    detail: 'Descriptive and inferential statistics applied to production datasets to surface patterns and anomalies.',
  },
  {
    heading: 'Predictive Modeling',
    detail: 'Regression and time series techniques — AR, MA, ARMA — used for production forecasting and trend analysis.',
  },
  {
    heading: 'Machine Learning',
    detail: 'SVM, PCA, kNN, k-means, decision trees, random forests, and gradient boosting for classification and segmentation tasks.',
  },
  {
    heading: 'Model Evaluation',
    detail: 'Rigorous performance assessment using R² and MAE metrics to validate predictive accuracy and generalizability.',
  },
];

export default function Research() {
  return (
    <section id="research" className="py-28 bg-zinc-950 relative overflow-hidden noise-overlay">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-400 uppercase tracking-wider mb-3">Academia</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">Research & Publications</h2>
          <p className="mt-4 text-gray-400 text-[16px] max-w-2xl leading-relaxed">
            Published researcher with CRC Press, Taylor & Francis Group, with graduate research focused on machine learning applications in production data analysis.
          </p>
        </AnimatedSection>

        {/* Publications */}
        <AnimatedSection className="mb-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/15 to-sky-500/15 rounded-xl flex items-center justify-center border border-blue-500/20 shadow-[0_2px_8px_rgba(59,130,246,0.15)]">
              <BookOpen className="text-blue-400" size={18} />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Publications</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/20 text-blue-400 text-[12px] font-semibold">CRC Press</span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {publications.map((pub, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group h-full bg-white/[0.03] backdrop-blur-sm rounded-2xl p-7 border border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_50px_rgba(59,130,246,0.1)] hover:border-blue-500/20 transition-all duration-400 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/20 text-blue-400 text-[11px] font-semibold">
                      <BookOpen size={10} />
                      Book Chapter
                    </span>
                    {pub.chapter && (
                      <span className="px-2.5 py-1 rounded-full bg-white/5 text-gray-400 text-[11px] font-semibold border border-white/10">{pub.chapter}</span>
                    )}
                  </div>
                  {pub.status === 'accepted' ? (
                    <span className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                      <CheckCircle size={10} />
                      {pub.statusLabel}
                    </span>
                  ) : (
                    <span className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/20 text-amber-400 text-[11px] font-semibold">
                      <Clock size={10} />
                      {pub.statusLabel}
                    </span>
                  )}
                </div>

                <h4 className="font-display font-bold text-white text-[16px] leading-snug mb-3 group-hover:text-blue-400 transition-colors">
                  {pub.title}
                </h4>

                <p className="text-[13px] text-blue-400 font-medium italic mb-4 leading-relaxed">{pub.book}</p>

                <div className="space-y-2 mb-5 flex-1">
                  <div className="flex items-center gap-2 text-[13px] text-gray-400">
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center flex-shrink-0">
                      <BookOpen size={9} className="text-white" />
                    </div>
                    <span className="font-medium text-gray-300">{pub.publisher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-gray-400">
                    <Calendar size={13} className="flex-shrink-0 text-gray-500" />
                    <span>{pub.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-gray-400">
                    <Users size={13} className="flex-shrink-0 text-gray-500" />
                    <span>Editors: {pub.editors}</span>
                  </div>
                  {pub.orcid && (
                    <div className="flex items-center gap-2 text-[13px] text-gray-400">
                      <Award size={13} className="flex-shrink-0 text-gray-500" />
                      <span>ORCID: <span className="font-mono text-[12px] text-gray-300">{pub.orcid}</span></span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {pub.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[12px] font-medium text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Graduate Research */}
        <AnimatedSection className="mb-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500/15 to-emerald-500/15 rounded-xl flex items-center justify-center border border-teal-500/20 shadow-[0_2px_8px_rgba(20,184,166,0.15)]">
              <FlaskConical className="text-teal-400" size={18} />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Graduate Research</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-teal-500/15 border border-teal-500/20 text-teal-400 text-[12px] font-semibold">MS Research</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_50px_rgba(20,184,166,0.1)] hover:border-teal-500/20 transition-all duration-400 overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-400" />
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h4 className="font-display font-bold text-white text-xl leading-snug mb-2">
                    Study on Machine Learning Algorithms used in Production Data Analysis
                  </h4>
                  <p className="text-[14px] text-teal-400 font-medium">Master's Research · California State University, Fresno</p>
                </div>
                <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/20 text-teal-400 text-[12px] font-semibold">
                  <CheckCircle size={12} />
                  Completed
                </span>
              </div>

              <p className="text-[15px] text-gray-400 leading-relaxed mb-8 max-w-3xl">
                Applied data analysis and machine learning techniques to extract actionable insights from production datasets and improve data-driven decision-making in manufacturing systems.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {researchPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="group flex gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-teal-500/5 hover:border-teal-500/20 transition-all"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-[0_2px_8px_rgba(20,184,166,0.3)]">
                      <span className="text-white text-[11px] font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white mb-0.5 group-hover:text-teal-400 transition-colors">{point.heading}</p>
                      <p className="text-[13px] text-gray-400 leading-relaxed">{point.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-white/10">
                <p className="text-[12px] text-gray-500 font-semibold uppercase tracking-wider mb-3">Methods & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {['SVM', 'PCA', 'kNN', 'k-Means', 'Decision Trees', 'Random Forests', 'Boosting', 'AR/MA/ARMA', 'Regression', 'R²', 'MAE'].map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-[12px] font-medium text-teal-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
