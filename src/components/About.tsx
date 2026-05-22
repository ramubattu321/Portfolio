import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

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
    <section id="about" className="py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Get to Know Me
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <AnimatedSection>
              <div className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300">
                <p className="text-gray-600 leading-[1.7] text-[15px]">
                  I'm a <span className="font-semibold text-gray-900">Data Scientist and Analytics Engineer</span> with 3 years of experience building ML models, ETL pipelines, LLM systems, and BI dashboards that drive real business decisions.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <div className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300">
                <p className="text-gray-500 leading-[1.7] text-[15px]">
                  I processed <span className="font-semibold text-gray-900">$250M+ in financial records</span> through automated Python/SQL pipelines, confirmed +15% CVR lift through A/B testing (p&lt;0.05) on 10,000+ users, and built demand forecasting models using Gradient Boosting (R²=0.89).
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.16}>
              <div className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300">
                <p className="text-gray-500 leading-[1.7] text-[15px]">
                  Currently pursuing my <span className="font-semibold text-gray-900">MS in Data Analytics at CSU Fresno (GPA 3.5, NRTW Scholar)</span>, I'm actively seeking Data Scientist, Data Analyst, Data Engineer, and Analytics Engineer roles across the United States.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100">
                  <GraduationCap className="text-teal-600" size={18} />
                </div>
                Education
              </h3>
              <div className="space-y-7">
                <div className="relative pl-6 border-l-2 border-teal-200">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-teal-500 rounded-full" />
                  <h4 className="font-semibold text-gray-900 text-[15px]">MS, Data Analytics</h4>
                  <p className="text-teal-600 text-sm font-medium mt-0.5">California State University, Fresno</p>
                  <p className="text-gray-400 text-[13px] mt-1.5 flex items-center gap-1.5">
                    <Calendar size={12} /> Jan 2025 - Dec 2026 (Expected)
                  </p>
                  <p className="text-gray-500 text-[13px] mt-1">GPA: 3.5/4.0 - NRTW Scholar</p>
                </div>
                <div className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-gray-300 rounded-full" />
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
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-lg font-bold text-gray-900 mb-10 flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100">
                <Briefcase className="text-teal-600" size={18} />
              </div>
              Professional Experience
            </h3>

            <div className="relative space-y-10">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-200 via-gray-200 to-transparent hidden md:block" />

              {[
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
                    } hidden md:flex items-center justify-center`}>
                      <div className={`w-2 h-2 rounded-full ${job.primary ? 'bg-teal-500' : 'bg-gray-300'}`} />
                    </div>

                    <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-[16px] font-semibold text-gray-900">{job.title}</h4>
                        <p className={`${job.primary ? 'text-teal-600' : 'text-gray-500'} font-medium text-sm`}>{job.company}</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-gray-400 text-[13px]">{job.period}</p>
                        <span className="inline-block px-2.5 py-0.5 mt-1 rounded-full text-[11px] font-medium bg-gray-100 text-gray-500">
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
