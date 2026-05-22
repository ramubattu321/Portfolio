import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
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

export default function About() {
  return (
    <section id="about" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get to Know Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-teal-400 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <AnimatedSection>
              <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-sky-500/40 pl-6">
                I'm a <span className="font-semibold text-sky-400">Data Scientist and Analytics Engineer</span> with 3 years of experience building ML models, ETL pipelines, LLM systems, and BI dashboards that drive real business decisions.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-slate-400 leading-relaxed">
                I processed <span className="font-semibold text-white">$250M+ in financial records</span> through automated Python/SQL pipelines, confirmed +15% CVR lift through A/B testing (p&lt;0.05) on 10,000+ users, and built demand forecasting models using Gradient Boosting (R&sup2;=0.89). My research on LLM fine-tuning and RAG systems was presented at the <span className="font-semibold text-white">California Central Valley Research Symposium (2026)</span> and accepted for publication with CRC Press.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-slate-400 leading-relaxed">
                Currently pursuing my <span className="font-semibold text-white">MS in Data Analytics at CSU Fresno (GPA 3.5, NRTW Scholar)</span>, I'm actively seeking Data Scientist, Data Analyst, Data Engineer, and Analytics Engineer roles across the United States.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15} className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800/50">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center border border-sky-500/20">
                <GraduationCap className="text-sky-400" size={20} />
              </div>
              Education
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-sky-500/30">
                <div className="absolute -left-[5px] top-1 w-2 h-2 bg-sky-400 rounded-full" />
                <h4 className="font-semibold text-white">MS, Data Analytics</h4>
                <p className="text-sky-400 text-sm font-medium">California State University, Fresno</p>
                <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
                  <Calendar size={12} /> Jan 2025 – Dec 2026 (Expected)
                </p>
                <p className="text-slate-400 text-sm mt-1">GPA: 3.5/4.0 · NRTW Scholar</p>
              </div>
              <div className="relative pl-6 border-l-2 border-slate-700">
                <div className="absolute -left-[5px] top-1 w-2 h-2 bg-teal-400 rounded-full" />
                <h4 className="font-semibold text-white">Bachelor of Engineering</h4>
                <p className="text-teal-400 text-sm font-medium">Matrusri Engineering College, Osmania University</p>
                <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
                  <MapPin size={12} /> Hyderabad, India · Jun 2024
                </p>
                <p className="text-slate-400 text-sm mt-1">GPA: 3.0/4.0</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="bg-slate-900/50 rounded-2xl p-8 md:p-10 border border-slate-800/50">
            <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center border border-sky-500/20">
                <Briefcase className="text-sky-400" size={20} />
              </div>
              Professional Experience
            </h3>

            <div className="relative space-y-10">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/40 via-teal-500/30 to-transparent hidden md:block" />

              {[
                {
                  title: 'Data Analyst',
                  company: 'TEXCEL INFOTECH',
                  period: 'Oct 2023 - Nov 2024',
                  type: 'Remote',
                  color: 'sky',
                  bullets: [
                    'Built interactive Power BI dashboards, reducing reporting time by 30% and improving KPI visibility',
                    'Analyzed eCommerce and CRM datasets using SQL and Python to identify customer behavior patterns',
                    'Conducted A/B testing on marketing campaigns using statistical analysis',
                    'Developed a Customer Lifetime Value (CLV) model for data-driven customer segmentation',
                    'Created predictive models for revenue forecasting and business planning',
                  ],
                },
                {
                  title: 'Account Executive Analyst',
                  company: 'Gautam Joshi & Co. LLP',
                  period: 'Apr 2021 - Dec 2022',
                  type: 'Hybrid',
                  location: 'Suryapet, India',
                  color: 'teal',
                  bullets: [
                    'Analyzed financial statements to evaluate company performance and financial health',
                    'Built Power BI dashboards to track budget vs actual performance',
                    'Extracted and transformed financial data from Tally ERP (XML) into structured datasets',
                    'Processed financial datasets exceeding $250M+, improving reporting efficiency',
                    'Supported internal and external audits by identifying anomalies',
                  ],
                },
              ].map((job, i) => (
                <AnimatedSection key={i} delay={0.1 + i * 0.15}>
                  <div className="relative md:pl-10">
                    <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 ${
                      job.color === 'sky' ? 'border-sky-500 bg-sky-500/20' : 'border-teal-500 bg-teal-500/20'
                    } hidden md:flex items-center justify-center`}>
                      <div className={`w-2 h-2 rounded-full ${job.color === 'sky' ? 'bg-sky-400' : 'bg-teal-400'}`} />
                    </div>

                    <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                        <p className={`${job.color === 'sky' ? 'text-sky-400' : 'text-teal-400'} font-medium`}>{job.company}</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-slate-400">{job.period}</p>
                        <span className={`inline-block px-2 py-0.5 mt-1 rounded text-xs font-medium ${
                          job.color === 'sky' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                        }`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${job.color === 'sky' ? 'bg-sky-500/60' : 'bg-teal-500/60'}`} />
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
