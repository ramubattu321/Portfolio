import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight, Github, Sparkles } from 'lucide-react';

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

const projects = [
  {
    title: 'AI/ML Solution Evaluation & Research Analysis',
    description: 'Led comparative analysis of fine-tuning across 4 LLM architectures vs iterative RAG. Built FAISS/HNSW vector databases. Benchmarked Word2Vec, GloVe, BERT across 5 datasets. Evaluated 2-layer LSTM (perplexity 30). Presented at California Central Valley Research Symposium (2026); accepted for publication with CRC Press.',
    tags: ['LLM', 'RAG', 'FAISS', 'BERT', 'NLP'],
    url: 'https://github.com/ramubattu321/Machine-Learning-Practice-using-python',
    featured: true,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'E-Commerce Analytics & Requirements Platform',
    description: 'Defined reporting and analytics requirements for an e-commerce data platform. Partnered on AWS data lake (S3 + Glue + Athena) covering 100K+ orders. Gradient Boosting selected (R\u00B2=0.89). K-Means segmentation identified 10x spend gap. Validated +15% CVR lift via A/B testing (p<0.05). Delivered Flask REST API (3 endpoints).',
    tags: ['AWS', 'Python', 'A/B Testing', 'SQL', 'Requirements'],
    url: 'https://github.com/ramubattu321/Ecommerce-AWS-Intelligence',
    featured: true,
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'Financial Reporting & Data Requirements Analysis',
    description: 'Defined data requirements and designed a 3-table schema supporting financial reporting across $250M+ in ERP records. Built automated validation (null checks, anomaly detection via 1.5x average CTE thresholds). Delivered SQL analytics for P&L rollup, quarterly aggregation, and annual scorecard reporting.',
    tags: ['SQL', 'Requirements', 'Data Quality', 'Reporting'],
    url: 'https://github.com/ramubattu321/financial-data-analysis',
    featured: false,
  },
  {
    title: 'HR Analytics Requirements & Dashboard Delivery',
    description: 'Gathered reporting requirements from HR and people ops stakeholders. Delivered end-to-end analytics dashboard tracking headcount, attrition, compensation distribution, and workforce KPIs \u2014 supporting workforce planning and data-driven HR decisions.',
    tags: ['Power BI', 'Requirements', 'KPIs', 'Dashboarding'],
    url: 'https://github.com/ramubattu321/HR-Analytics-Dash-Board--Power-BI',
    featured: false,
  },
  {
    title: 'Marketing Campaign Requirements & Performance Analysis',
    description: 'Partnered on analysis requirements to evaluate marketing campaign performance via A/B testing. Defined and calculated funnel metrics (CTR, add-to-cart rate, conversion rate, revenue per user) in SQL. Segmented by device and region. Applied statistical hypothesis testing in Python for go/no-go recommendations.',
    tags: ['SQL', 'Python', 'A/B Testing', 'Statistics'],
    url: 'https://github.com/ramubattu321/AB-Test-Case-Study',
    featured: false,
  },
];

function FeaturedCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
        <motion.div
          whileHover={{ y: -6 }}
          className="h-full rounded-2xl bg-white/[0.03] border border-white/10 p-8 md:p-9 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(20,184,166,0.1)] hover:border-white/20 relative overflow-hidden"
        >
          <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${project.gradient} opacity-[0.05] rounded-full -translate-y-1/3 translate-x-1/3 group-hover:opacity-[0.12] group-hover:scale-150 transition-all duration-700`} />
          <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-[0.06] rounded-full translate-y-1/2 -translate-x-1/4 transition-all duration-700`} />

          <div className="relative">
            <div className="flex items-start justify-between mb-6">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-[11px] font-semibold uppercase tracking-wider shadow-sm`}>
                <Sparkles size={10} />
                Featured
              </span>
              <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-500 group-hover:text-white group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all duration-300 group-hover:shadow-lg">
                <ArrowUpRight size={15} />
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-7 text-[14px]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 text-[12px] font-medium border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </a>
    </AnimatedSection>
  );
}

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <AnimatedSection delay={index * 0.04}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
        <motion.div
          whileHover={{ x: 4 }}
          className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-teal-500/30 hover:shadow-[0_4px_20px_rgba(20,184,166,0.08)] transition-all duration-300"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/10 group-hover:border-teal-500/20 transition-colors">
            <Github size={16} className="text-gray-500 group-hover:text-teal-400 transition-colors" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold text-[14px] group-hover:text-teal-400 transition-colors truncate">
              {project.title}
            </h4>
            <p className="text-gray-500 text-[13px] mt-0.5 hidden sm:block truncate">
              {project.description}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
            {project.tags.slice(0, 3).map((tag, j) => (
              <span
                key={j}
                className="px-2.5 py-1 rounded-md bg-white/5 text-gray-400 text-[11px] font-medium border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="flex-shrink-0 p-2 rounded-lg text-gray-600 group-hover:text-teal-400 transition-colors">
            <ExternalLink size={15} />
          </span>
        </motion.div>
      </a>
    </AnimatedSection>
  );
}

export default function Portfolio() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="portfolio" className="py-28 bg-zinc-950 relative overflow-hidden noise-overlay">
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-teal-500/8 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[13px] font-semibold text-teal-400 uppercase tracking-wider mb-3">Projects</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Wanna see<br />my work?
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm text-[14px] leading-relaxed">
              Business analysis projects spanning requirements definition, data validation, dashboarding, and research.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featured.map((project, i) => (
            <FeaturedCard key={i} project={project} index={i} />
          ))}
        </div>

        <div className="space-y-2.5">
          {others.map((project, i) => (
            <ProjectRow key={i} project={project} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.15} className="mt-16">
          <div className="rounded-2xl bg-gradient-to-br from-white/[0.06] via-white/[0.04] to-white/[0.02] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.15),transparent_60%)]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]" />

            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Interested in collaboration?
              </h3>
              <p className="text-gray-400 text-[15px]">
                I'm always open to discussing new projects and opportunities.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative flex-shrink-0 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold transition-all hover:scale-[1.03] active:scale-[0.97] text-[14px] shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
            >
              Get In Touch
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
