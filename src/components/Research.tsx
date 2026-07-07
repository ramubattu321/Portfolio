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
    <section id="research" className="py-28 bg-gray-50/50 relative overflow-hidden noise-overlay">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-50/30 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">Academia</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Research & Publications</h2>
          <p className="mt-4 text-gray-500 text-[16px] max-w-2xl leading-relaxed">
            Published researcher with CRC Press, Taylor & Francis Group, with graduate research focused on machine learning applications in production data analysis.
          </p>
        </AnimatedSection>

        {/* Publications */}
        <AnimatedSection className="mb-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl flex items-center justify-center border border-blue-100 shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
              <BookOpen className="text-blue-600" size={18} />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-900">Publications</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[12px] font-semibold">CRC Press</span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {publications.map((pub, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group h-full bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.07)] hover:border-blue-200/60 transition-all duration-400 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-semibold">
                      <BookOpen size={10} />
                      Book Chapter
                    </span>
                    {pub.chapter && (
                      <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-[11px] font-semibold">{pub.chapter}</span>
                    )}
                  </div>
                  {pub.status === 'accepted' ? (
                    <span className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[11px] font-semibold">
                      <CheckCircle size={10} />
                      {pub.statusLabel}
                    </span>
                  ) : (
                    <span className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-[11px] font-semibold">
                      <Clock size={10} />
                      {pub.statusLabel}
                    </span>
                  )}
                </div>

                <h4 className="font-display font-bold text-gray-900 text-[16px] leading-snug mb-3 group-hover:text-blue-900 transition-colors">
                  {pub.title}
                </h4>

                <p className="text-[13px] text-blue-700 font-medium italic mb-4 leading-relaxed">{pub.book}</p>

                <div className="space-y-2 mb-5 flex-1">
                  <div className="flex items-center gap-2 text-[13px] text-gray-500">
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center flex-shrink-0">
                      <BookOpen size={9} className="text-white" />
                    </div>
                    <span className="font-medium text-gray-700">{pub.publisher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-gray-500">
                    <Calendar size={13} className="flex-shrink-0 text-gray-400" />
                    <span>{pub.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-gray-500">
                    <Users size={13} className="flex-shrink-0 text-gray-400" />
                    <span>Editors: {pub.editors}</span>
                  </div>
                  {pub.orcid && (
                    <div className="flex items-center gap-2 text-[13px] text-gray-500">
                      <Award size={13} className="flex-shrink-0 text-gray-400" />
                      <span>ORCID: <span className="font-mono text-[12px] text-gray-600">{pub.orcid}</span></span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                  {pub.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200/80 text-[12px] font-medium text-gray-600">
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
            <div className="w-10 h-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl flex items-center justify-center border border-teal-100 shadow-[0_2px_8px_rgba(20,184,166,0.1)]">
              <FlaskConical className="text-teal-600" size={18} />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-900">Graduate Research</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-[12px] font-semibold">MS Research</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.07)] hover:border-teal-200/60 transition-all duration-400 overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-400" />
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-xl leading-snug mb-2">
                    Study on Machine Learning Algorithms used in Production Data Analysis
                  </h4>
                  <p className="text-[14px] text-teal-600 font-medium">Master's Research · California State University, Fresno</p>
                </div>
                <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[12px] font-semibold">
                  <CheckCircle size={12} />
                  Completed
                </span>
              </div>

              <p className="text-[15px] text-gray-500 leading-relaxed mb-8 max-w-3xl">
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
                    className="group flex gap-3 p-4 rounded-xl bg-gray-50/80 border border-gray-100 hover:bg-teal-50/50 hover:border-teal-100 transition-all"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-[0_2px_8px_rgba(20,184,166,0.25)]">
                      <span className="text-white text-[11px] font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-gray-800 mb-0.5 group-hover:text-teal-800 transition-colors">{point.heading}</p>
                      <p className="text-[13px] text-gray-500 leading-relaxed">{point.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-gray-100">
                <p className="text-[12px] text-gray-400 font-semibold uppercase tracking-wider mb-3">Methods & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {['SVM', 'PCA', 'kNN', 'k-Means', 'Decision Trees', 'Random Forests', 'Boosting', 'AR/MA/ARMA', 'Regression', 'R²', 'MAE'].map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-teal-50/70 border border-teal-100 text-[12px] font-medium text-teal-700">
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
