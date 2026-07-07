import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Mic, ExternalLink, Calendar, MapPin, Users, Award } from 'lucide-react';

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
    title: 'Retrieval-Augmented Generation for Intelligent Data Analytics: Architectures, Benchmarks, and Enterprise Applications',
    publisher: 'CRC Press, Taylor & Francis Group',
    year: '2026',
    description: 'A comprehensive study of RAG pipeline architectures for enterprise analytics, covering vector database integration, LLM fine-tuning strategies, and performance benchmarking across domain-specific datasets.',
    tags: ['RAG', 'LLM', 'NLP', 'Enterprise Analytics'],
    status: 'Accepted',
  },
  {
    type: 'Book Chapter',
    title: 'Machine Learning-Driven Anomaly Detection in Financial Data Streams: A Comparative Analysis of Classical and Deep Learning Approaches',
    publisher: 'CRC Press, Taylor & Francis Group',
    year: '2026',
    description: 'Investigates supervised and unsupervised anomaly detection techniques applied to high-frequency financial transaction data, with emphasis on model interpretability and regulatory compliance.',
    tags: ['Machine Learning', 'Anomaly Detection', 'FinTech', 'Deep Learning'],
    status: 'Accepted',
  },
];

const presentations = [
  {
    title: 'Fine-Tuning Large Language Models for Domain-Specific Data Exploration and Conversational Reporting',
    event: 'California Central Valley Research Symposium (CCVRS)',
    location: 'California State University, Fresno',
    date: 'Spring 2026',
    description: 'Presented a novel framework for adapting open-source LLMs to structured enterprise data, enabling natural-language querying of BI dashboards and automated report narration.',
    tags: ['LLM Fine-Tuning', 'BI', 'NLP'],
  },
  {
    title: 'Scalable ETL Pipeline Design Using Apache Airflow and Snowflake for Real-Time Financial Reconciliation',
    event: 'California Central Valley Research Symposium (CCVRS)',
    location: 'California State University, Fresno',
    date: 'Spring 2026',
    description: 'Demonstrated a production-grade data engineering architecture integrating Airflow orchestration with Snowflake data warehousing to automate financial reconciliation workflows at scale.',
    tags: ['Data Engineering', 'Airflow', 'Snowflake', 'ETL'],
  },
  {
    title: 'Clustering-Based Customer Segmentation Using K-Means and HDBSCAN for Predictive Retail Analytics',
    event: 'California Central Valley Research Symposium (CCVRS)',
    location: 'California State University, Fresno',
    date: 'Spring 2026',
    description: 'Compared density-based and centroid-based clustering algorithms on large retail datasets, proposing a hybrid approach that improved segment cohesion and downstream campaign targeting accuracy.',
    tags: ['Clustering', 'ML', 'Retail Analytics', 'Python'],
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
            Published researcher with CRC Press, Taylor & Francis Group, and presenter at the California Central Valley Research Symposium (CCVRS 2026).
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
                className="group h-full bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.07)] hover:border-blue-200/60 transition-all duration-400"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[12px] font-semibold">
                    <BookOpen size={11} />
                    {pub.type}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[11px] font-semibold">
                    <Award size={10} />
                    {pub.status}
                  </span>
                </div>

                <h4 className="font-display font-bold text-gray-900 text-[15px] leading-snug mb-3 group-hover:text-blue-900 transition-colors">
                  {pub.title}
                </h4>

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center flex-shrink-0">
                    <BookOpen size={10} className="text-white" />
                  </div>
                  <p className="text-[13px] text-gray-500 font-medium">{pub.publisher} · {pub.year}</p>
                </div>

                <p className="text-[14px] text-gray-500 leading-relaxed mb-5">{pub.description}</p>

                <div className="flex flex-wrap gap-1.5">
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

        {/* Presentations */}
        <AnimatedSection className="mb-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl flex items-center justify-center border border-teal-100 shadow-[0_2px_8px_rgba(20,184,166,0.1)]">
              <Mic className="text-teal-600" size={18} />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-900">Conference Presentations</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-[12px] font-semibold">CCVRS 2026</span>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {presentations.map((pres, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 4 }}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-teal-200/60 transition-all duration-300 flex gap-5"
              >
                <div className="flex-shrink-0 pt-0.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 flex items-center justify-center text-teal-500 font-bold text-[13px] font-display shadow-sm">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-gray-900 text-[15px] leading-snug mb-2 group-hover:text-teal-800 transition-colors">
                    {pres.title}
                  </h4>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3">
                    <span className="flex items-center gap-1.5 text-[13px] text-teal-600 font-medium">
                      <Users size={12} />
                      {pres.event}
                    </span>
                    <span className="flex items-center gap-1.5 text-[13px] text-gray-400">
                      <MapPin size={11} />
                      {pres.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-[13px] text-gray-400">
                      <Calendar size={11} />
                      {pres.date}
                    </span>
                  </div>

                  <p className="text-[14px] text-gray-500 leading-relaxed mb-4">{pres.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {pres.tags.map((tag, j) => (
                      <span key={j} className="px-2.5 py-1 rounded-lg bg-teal-50/70 border border-teal-100 text-[12px] font-medium text-teal-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
