import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Machine Learning Research Project',
    description: 'Advanced research in machine learning algorithms, neural networks, and deep learning applications with performance optimization and model interpretability analysis.',
    tags: ['Python', 'Deep Learning', 'TensorFlow', 'Research'],
    accent: 'sky',
    url: 'https://docs.google.com/presentation/d/1vmbymxcSdtZzmWCP03SMCH9m9QDe_eUq/edit?slide=id.p1#slide=id.p1',
  },
  {
    title: 'Financial Data ETL Pipeline & Analysis',
    description: 'Developed a Python-based ETL workflow to extract and transform semi-structured XML financial data into structured datasets. Processed financial transaction records exceeding $250M+, improving reporting accuracy and audit readiness.',
    tags: ['Python', 'ETL', 'XML', 'Data Pipeline'],
    accent: 'amber',
    url: 'https://github.com/ramubattu321/financial-data-analysis',
  },
  {
    title: 'HR Analytics Dashboard (Power BI)',
    description: 'Developed an interactive HR analytics dashboard using Power BI to analyze employee attrition, workforce demographics, and retention patterns. Used DAX to calculate key metrics such as attrition rate, employee count, average salary, and job satisfaction.',
    tags: ['Power BI', 'DAX', 'Power Query', 'HR Analytics', 'Attrition Analysis'],
    accent: 'cyan',
    url: 'https://github.com/ramubattu321/HR-Analytics-Dash-Board--Power-BI',
  },
  {
    title: 'Vrinda Store Sales Dashboard & Business Insights',
    description: 'Developed an interactive Excel dashboard to analyze retail sales data and generate business insights. Analyzed sales trends, customer demographics, and regional performance to identify key patterns affecting business growth.',
    tags: ['Excel', 'Pivot Tables', 'Data Visualization', 'Business Intelligence'],
    accent: 'blue',
    url: 'https://github.com/ramubattu321/Vrinda-Store-Sales-Dashboard-Business-Insights',
  },
  {
    title: 'Machine Learning for Production Optimization',
    description: 'Applied data analysis and machine learning techniques to analyze structured production data and identify patterns affecting system performance. Built and compared models including Random Forest, Gradient Boosting, SVM, and Regression.',
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Research'],
    accent: 'emerald',
    url: 'https://github.com/ramubattu321/Machine-Learning-Practice-using-python',
  },
  {
    title: 'A/B Testing Analysis using SQL and Python',
    description: 'Analyzed marketing campaign performance using A/B testing to compare control and test groups across key engagement and conversion metrics. Used SQL to calculate funnel metrics such as CTR, conversion rate, and revenue per user.',
    tags: ['SQL', 'Python', 'A/B Testing', 'Marketing Analytics'],
    accent: 'rose',
    url: 'https://github.com/ramubattu321/AB-Test-Case-Study',
  },
  {
    title: 'E-commerce Sales Dashboard \u2013 IEEE Hackathon',
    description: 'Developed an interactive e-commerce sales dashboard as part of IEEE Hackathon 2023 to analyze sales performance, profit trends, and return patterns. Created dynamic visualizations to identify top-performing regions and customer behavior patterns.',
    tags: ['Excel', 'Pivot Tables', 'Data Visualization'],
    accent: 'orange',
    url: 'https://github.com/ramubattu321/IEEE-Hackathon-2023',
  },
  {
    title: 'Manufacturing Process Analysis & Anomaly Detection (SPC)',
    description: 'Analyzed manufacturing process data using Python to monitor machine performance and detect anomalies using statistical process control (SPC) techniques. Implemented 3-sigma control charts for quality monitoring.',
    tags: ['Python', 'Pandas', 'Anomaly Detection', 'SPC'],
    accent: 'teal',
    url: 'https://github.com/ramubattu321/manufacturing-process-analysis-eda',
  },
  {
    title: 'Hotel Booking Data Wrangling & Platform Analysis',
    description: 'Cleaned and analyzed semi-structured hotel booking data using Python and Pandas to extract booking platform information and generate business insights. Performed platform-level analysis to compare booking distribution across channels.',
    tags: ['Python', 'Pandas', 'Data Wrangling', 'EDA'],
    accent: 'green',
    url: 'https://github.com/ramubattu321/Hotel-Booking-Data-Wrangling-Platform-Analysis',
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string; from: string; to: string }> = {
  sky:     { bg: 'bg-sky-500/10',     text: 'text-sky-400',     border: 'border-sky-500/20',     from: 'from-sky-500',     to: 'to-sky-600' },
  amber:   { bg: 'bg-amber-500/10',   text: 'text-amber-400',   border: 'border-amber-500/20',   from: 'from-amber-500',   to: 'to-amber-600' },
  cyan:    { bg: 'bg-cyan-500/10',    text: 'text-cyan-400',    border: 'border-cyan-500/20',    from: 'from-cyan-500',    to: 'to-cyan-600' },
  blue:    { bg: 'bg-blue-500/10',    text: 'text-blue-400',    border: 'border-blue-500/20',    from: 'from-blue-500',    to: 'to-blue-600' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', from: 'from-emerald-500', to: 'to-emerald-600' },
  rose:    { bg: 'bg-rose-500/10',    text: 'text-rose-400',    border: 'border-rose-500/20',    from: 'from-rose-500',    to: 'to-rose-600' },
  orange:  { bg: 'bg-orange-500/10',  text: 'text-orange-400',  border: 'border-orange-500/20',  from: 'from-orange-500',  to: 'to-orange-600' },
  teal:    { bg: 'bg-teal-500/10',    text: 'text-teal-400',    border: 'border-teal-500/20',    from: 'from-teal-500',    to: 'to-teal-600' },
  green:   { bg: 'bg-green-500/10',   text: 'text-green-400',   border: 'border-green-500/20',   from: 'from-green-500',   to: 'to-green-600' },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-4">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of data analytics projects demonstrating expertise in business intelligence, statistical analysis, and data visualization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const c = accentMap[project.accent] || accentMap.sky;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm overflow-hidden hover:border-sky-500/20 transition-all duration-300"
              >
                <div className={`relative h-44 bg-gradient-to-br ${c.from} ${c.to} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
                  <span className="relative z-10 text-6xl font-bold text-white/60 group-hover:text-white/80 group-hover:scale-110 transition-all duration-300">
                    {project.title.charAt(0)}
                  </span>
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-xs font-semibold text-white/90">
                    Project {index + 1}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md ${c.bg} ${c.text} text-[11px] font-medium border ${c.border}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 p-12 md:p-16 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in Collaboration?</h3>
            <p className="mb-8 max-w-2xl mx-auto text-lg text-sky-50/80">
              I'm always open to discussing new projects, analytics opportunities, or partnerships in data science and business intelligence.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-sky-600 rounded-xl font-semibold hover:bg-sky-50 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
