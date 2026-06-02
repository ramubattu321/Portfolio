import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
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

export default function About() {
  return (
    <section id="about" className="py-28 bg-gray-50/50 relative overflow-hidden noise-overlay">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Get to Know Me
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="space-y-4">
            {[
              {
                content: <>I'm a <span className="font-semibold text-gray-900">Data Analyst and Data Professional</span> with 3+ years of experience building ML models, ETL pipelines, LLM systems, and BI dashboards that drive real business decisions.</>,
                delay: 0,
              },
              {
                content: <>I processed <span className="font-semibold text-gray-900">$250M+ in financial records</span> through automated Python/SQL pipelines, confirmed +15% CVR lift through A/B testing (p&lt;0.05) on 10,000+ users, and built demand forecasting models using Gradient Boosting (R²=0.89). I also architected an AWS data lake on 100K+ e-commerce orders, automated 3-sigma SPC anomaly detection flagging 270 anomalies in real time, and built production Tableau and Power BI dashboards for KPI monitoring and customer segmentation.</>,
                delay: 0.08,
              },
              {
                content: <>As a <span className="font-semibold text-gray-900">Student Researcher at California State University, Fresno</span>, I presented applied ML research at the California Central Valley Research Symposium (CCVRS 2026) across three sessions covering LLM Fine-Tuning and RAG, Tokenization and Vector Embedding, and ML Algorithms in Data Analysis including Decision Trees, Regression, and Clustering. My research on Smart Building Technologies for Energy-Efficient Urban Ecosystems is accepted for publication with CRC Press, Taylor and Francis Group (2026), with a second chapter on Microgrid Systems currently in progress.</>,
                delay: 0.16,
              },
              {
                content: <>Currently pursuing <span className="font-semibold text-gray-900">MS Industrial Technology (Data Analytics and AI) at California State University, Fresno</span> — GPA 3.71, NRTW Scholar.</>,
                delay: 0.24,
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={item.delay}>
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-gray-600 leading-[1.7] text-[15px]">{item.content}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.1}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-50 to-transparent rounded-full -translate-y-1/3 translate-x-1/3" />
              <h3 className="relative font-display text-lg font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl flex items-center justify-center border border-teal-100 shadow-[0_2px_8px_rgba(20,184,166,0.1)]">
                  <GraduationCap className="text-teal-600" size={18} />
                </div>
                Education
              </h3>
              <div className="relative space-y-7">
                <div className="relative pl-6 border-l-2 border-teal-200">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-teal-500 rounded-full ring-4 ring-teal-50" />
                  <h4 className="font-semibold text-gray-900 text-[15px]">Master's Degree, Industrial Technology</h4>
                  <p className="text-teal-600 text-sm font-medium mt-0.5">California State University, Fresno</p>
                  <p className="text-gray-400 text-[13px] mt-1.5 flex items-center gap-1.5">
                    <Calendar size={12} /> Jan 2025 - Dec 2026 (Expected)
                  </p>
                  <p className="text-gray-500 text-[13px] mt-1">GPA: 3.71/4.0 - NRTW Scholar</p>
                  <p className="text-gray-500 text-[13px] mt-1.5"><span className="font-medium text-gray-600">Coursework:</span> Numerical Mathematics, Statistical Learning & Data Mining, Probability Theory, Machine Learning, Data Intensive Computing, Data Models Query Language, Python Programming</p>
                  <p className="text-gray-500 text-[13px] mt-1.5">3 research presentations at the California Central Valley Research Symposium (2026). Published researcher — CRC Press, Taylor & Francis Group.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-gray-300 rounded-full ring-4 ring-gray-50" />
                  <h4 className="font-semibold text-gray-900 text-[15px]">Bachelor of Engineering</h4>
                  <p className="text-gray-600 text-sm font-medium mt-0.5">Matrusri Engineering College, Osmania University</p>
                  <p className="text-gray-400 text-[13px] mt-1.5 flex items-center gap-1.5">
                    <MapPin size={12} /> Hyderabad, India - Jun 2024
                  </p>
                  <p className="text-gray-500 text-[13px] mt-1">GPA: 3.0/4.0</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-50/50 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />

            <h3 className="relative font-display text-lg font-bold text-gray-900 mb-10 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl flex items-center justify-center border border-teal-100 shadow-[0_2px_8px_rgba(20,184,166,0.1)]">
                <Briefcase className="text-teal-600" size={18} />
              </div>
              Professional Experience
            </h3>

            <div className="relative space-y-10">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-300 via-teal-200 to-transparent hidden md:block" />

              {[
                {
                  title: 'Student Researcher',
                  company: 'California State University, Fresno',
                  period: 'Aug 2025 - Apr 2026',
                  type: 'Research',
                  primary: true,
                  image: 'https://i.postimg.cc/T5qshCFr/Screenshot-2026-06-02-161819.png',
                  imageAlt: 'CCVRS 2026 research presentation at California State University, Fresno',
                  bullets: [
                    'Presented 3 sessions at CCVRS 2026 on Applied AI & ML Research, Tokenization & Vector Embedding, and ML Algorithms in Data Analysis (Decision Trees, Regression). Co-authored with Prof. N.P. Mahalik',
                    'Book Chapter (Accepted, In Press, 2026): "Smart Building Technologies for Energy-Efficient Urban Ecosystems" — CRC Press, Taylor & Francis Group',
                    'Book Chapter (In Progress): Microgrid Systems — CRC Press, edited by Dr. Jose Anand',
                    'ORCID: 0009-0005-2744-1804',
                  ],
                },
                {
                  title: 'Data Analyst',
                  company: 'TEXCEL INFOTECH',
                  period: 'Oct 2023 - Nov 2024',
                  type: 'Remote',
                  primary: true,
                  bullets: [
                    'Built Python/SQL ETL pipeline on 500K+ row datasets — cut 3 days of manual work to under 2 hours',
                    'Confirmed +15% CVR lift and +14% revenue lift via A/B testing (p-value 0.05)',
                    'Built CLV model segmenting 10,000+ customers into 4 value tiers',
                    'Wrote production SQL (CTEs, window functions) powering KPI dashboards',
                    'Built Tableau and Power BI dashboards enabling self-serve analytics',
                  ],
                },
                {
                  title: 'Account Executive Analyst',
                  company: 'Gautam Joshi & Co. LLP',
                  period: 'Apr 2021 - Dec 2022',
                  type: 'Hybrid',
                  primary: false,
                  bullets: [
                    'Processed $250M+ in Tally ERP financial records through automated Python/SQL pipeline',
                    'Built automated anomaly detection flagging 15+ irregularities per quarter',
                    'Built Power BI dashboards tracking budget vs actual financial KPIs',
                    'Documented data lineage and transformation logic for audit-ready output',
                  ],
                },
              ].map((job, i) => (
                <AnimatedSection key={i} delay={0.05 + i * 0.12}>
                  <div className="relative md:pl-10">
                    <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 ${
                      job.primary ? 'border-teal-500 bg-teal-50' : 'border-gray-300 bg-gray-50'
                    } hidden md:flex items-center justify-center shadow-sm`}>
                      <div className={`w-2 h-2 rounded-full ${job.primary ? 'bg-teal-500' : 'bg-gray-300'}`} />
                    </div>

                    <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-[16px] font-semibold text-gray-900 flex items-center gap-2">
                          {job.title}
                          {job.primary && <ArrowRight size={14} className="text-teal-500" />}
                        </h4>
                        <p className={`${job.primary ? 'text-teal-600' : 'text-gray-500'} font-medium text-sm`}>{job.company}</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-gray-400 text-[13px]">{job.period}</p>
                        <span className={`inline-block px-2.5 py-0.5 mt-1 rounded-full text-[11px] font-medium ${
                          job.primary ? 'bg-teal-50 text-teal-600 border border-teal-100' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-gray-500 text-[14px] leading-relaxed">
                          <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${job.primary ? 'bg-teal-400' : 'bg-gray-300'}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {'image' in job && job.image && (
                      <motion.a
                        href={job.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="inline-block mt-5 max-w-[220px] rounded-xl overflow-hidden border border-gray-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 bg-gray-50 group"
                      >
                        <img
                          src={job.image}
                          alt={'imageAlt' in job ? (job.imageAlt as string) : ''}
                          loading="lazy"
                          className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </motion.a>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
