import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-4">
            Get to Know Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-sky-500/30 pl-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a dedicated <span className="font-semibold text-sky-400">Data Analyst and Data Scientist</span> passionate about transforming complex data into strategic insights. My expertise spans financial data management, analytics, and collaborative problem-solving.
              </p>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed">
              Currently pursuing my <span className="font-medium text-slate-200">Master's degree at California State University, Fresno</span>, I bring a strong foundation in analytics, combined with hands-on experience in dashboard automation, financial analysis, and business intelligence.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              I thrive on leveraging tools like <span className="font-medium text-slate-200">Power BI, SQL, and Python</span> to drive data-driven decision-making and optimize business processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10">
                <GraduationCap className="text-sky-400" size={22} />
              </div>
              Education
            </h3>
            <div className="space-y-5">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white">Master's Degree</h4>
                  <span className="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 text-xs font-semibold">MS</span>
                </div>
                <p className="text-slate-300 text-sm font-medium">California State University, Fresno</p>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-2">
                  <Calendar size={12} />
                  Aug 2025 - Present
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white">Bachelor's Degree</h4>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-semibold">BS</span>
                </div>
                <p className="text-slate-300 text-sm font-medium">Matrusri Engineering College</p>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-2">
                  <MapPin size={12} />
                  Hyderabad, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10">
              <Briefcase className="text-sky-400" size={22} />
            </div>
            Professional Experience
          </h3>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/20 transition-colors duration-300"
            >
              <div className="flex flex-wrap justify-between items-start mb-5 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white">Data Analyst</h4>
                  <p className="text-sky-400 font-semibold">TEXCEL INFOTECH</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-400 font-medium">Oct 2023 - Nov 2024</p>
                  <span className="inline-block mt-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                    Remote
                  </span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Built interactive Power BI dashboards, reducing reporting time by 30% and improving KPI visibility for stakeholders',
                  'Analyzed eCommerce and CRM datasets using SQL and Python to identify customer behavior patterns and improve retention strategies',
                  'Conducted A/B testing on marketing campaigns, using statistical analysis to evaluate performance and optimize conversion rates',
                  'Developed a Customer Lifetime Value (CLV) model using Python, enabling data-driven customer segmentation and supporting targeted marketing strategies',
                  'Created predictive models to support revenue forecasting and business planning',
                  'Transformed raw datasets into actionable insights through dashboards and reports for cross-functional teams',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px] font-bold mt-0.5">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/20 transition-colors duration-300"
            >
              <div className="flex flex-wrap justify-between items-start mb-5 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white">Account Executive Analyst</h4>
                  <p className="text-sky-400 font-semibold">Gautam Joshi & Co. LLP, Chartered Accountants</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-400 font-medium">Apr 2021 - Dec 2022</p>
                  <div className="flex items-center justify-end gap-2 mt-1">
                    <span className="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 text-xs font-medium">
                      Hybrid
                    </span>
                    <span className="text-slate-500 text-xs flex items-center gap-1">
                      <MapPin size={11} />
                      Suryapet, India
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Analyzed financial statements (income, balance sheet, cash flow) to evaluate company performance and financial health',
                  'Built Power BI dashboards to track budget vs actual performance, improving financial visibility for stakeholders',
                  'Extracted, cleaned, and transformed financial data from Tally ERP (XML) into structured Excel and SQL-ready datasets',
                  'Designed data transformation workflows to convert unstructured XML financial data into analysis-ready formats, supporting reporting and audit processes',
                  'Supported internal and external audits by identifying anomalies and ensuring data accuracy',
                  'Processed and structured financial datasets exceeding $250M+, improving reporting efficiency and data consistency',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold mt-0.5">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
