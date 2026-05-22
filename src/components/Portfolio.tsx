import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
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

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  };

  const colorClasses: Record<string, { accent: string; badge: string; border: string; bg: string }> = {
    sky: { accent: 'text-sky-400', badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20', border: 'border-sky-500/20 hover:border-sky-500/40', bg: 'from-sky-500/20' },
    teal: { accent: 'text-teal-400', badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20', border: 'border-teal-500/20 hover:border-teal-500/40', bg: 'from-teal-500/20' },
    emerald: { accent: 'text-emerald-400', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', border: 'border-emerald-500/20 hover:border-emerald-500/40', bg: 'from-emerald-500/20' },
    amber: { accent: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20', border: 'border-amber-500/20 hover:border-amber-500/40', bg: 'from-amber-500/20' },
    rose: { accent: 'text-rose-400', badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20', border: 'border-rose-500/20 hover:border-rose-500/40', bg: 'from-rose-500/20' },
    cyan: { accent: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', border: 'border-cyan-500/20 hover:border-cyan-500/40', bg: 'from-cyan-500/20' },
    orange: { accent: 'text-orange-400', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', border: 'border-orange-500/20 hover:border-orange-500/40', bg: 'from-orange-500/20' },
    green: { accent: 'text-green-400', badge: 'bg-green-500/10 text-green-400 border-green-500/20', border: 'border-green-500/20 hover:border-green-500/40', bg: 'from-green-500/20' },
  };

  const c = colorClasses[project.color] || colorClasses.sky;

  return (
    <AnimatedSection delay={index * 0.08}>
      <div
        className={`group h-full rounded-2xl border ${c.border} bg-slate-900/50 overflow-hidden transition-shadow hover:shadow-xl hover:shadow-slate-950/50`}
        style={{ transform, transition: 'transform 0.15s ease-out' }}
        onMouseMove={handleMove}
        onMouseLeave={() => setTransform('')}
      >
        <div className={`relative h-40 bg-gradient-to-br ${c.bg} to-slate-900/80 flex items-center justify-center overflow-hidden`}>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, white, transparent 60%)`,
            }}
          />
          <span className={`text-6xl font-bold ${c.accent} opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 transform duration-300`}>
            {project.title.charAt(0)}
          </span>
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-semibold border ${c.badge}`}>
            Project {index + 1}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag, j) => (
              <span key={j} className={`px-2.5 py-1 rounded-md text-xs font-medium border ${c.badge}`}>
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium ${c.accent} hover:underline`}
          >
            <ExternalLink size={14} />
            View Project
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

const projects = [
  {
    title: 'E-Commerce Intelligence Platform',
    description: 'Architected AWS data lake (S3 + Glue + Athena) on 100K+ e-commerce orders. Trained and compared 6 ML models — Gradient Boosting won at R²=0.89. K-Means segmentation (k=4) identified 10x spend gap between Champions ($485) and Hibernating ($45) customers. Confirmed +15% CVR lift from A/B test (p-value 0.05).',
    tags: ['AWS', 'Python', 'Scikit-learn', 'A/B Testing'],
    color: 'sky',
    url: 'https://github.com/ramubattu321/Ecommerce-AWS-Intelligence',
  },
  {
    title: 'Financial Data ETL Pipeline & Analysis',
    description: 'Developed a Python-based ETL workflow to extract and transform semi-structured XML financial data into structured datasets. Processed financial records exceeding $250M+.',
    tags: ['Python', 'ETL', 'XML', 'Data Pipeline'],
    color: 'amber',
    url: 'https://github.com/ramubattu321/financial-data-analysis',
  },
  {
    title: 'HR Analytics Dashboard (Power BI)',
    description: 'Interactive HR analytics dashboard analyzing employee attrition, workforce demographics, and retention patterns with DAX-calculated key metrics.',
    tags: ['Power BI', 'DAX', 'Power Query', 'HR Analytics'],
    color: 'teal',
    url: 'https://github.com/ramubattu321/HR-Analytics-Dash-Board--Power-BI',
  },
  {
    title: 'Vrinda Store Sales Dashboard',
    description: 'Interactive Excel dashboard analyzing retail sales data with Pivot Tables, dynamic visualizations, and regional performance analysis for business insights.',
    tags: ['Excel', 'Pivot Tables', 'Data Visualization'],
    color: 'emerald',
    url: 'https://github.com/ramubattu321/Vrinda-Store-Sales-Dashboard-Business-Insights',
  },
  {
    title: 'Applied AI & ML Research: LLM Fine-Tuning, RAG & NLP',
    description: 'Implemented ACTD fine-tuning across 4 LLM architectures — outperformed iterative RAG (Iter-RetGen) in every case. Built FAISS/HNSW vector databases for semantic search. Benchmarked Word2Vec, GloVe, BERT across 5 NLP datasets. Built 2-layer LSTM (perplexity 30). Presented at California Central Valley Research Symposium (2026). Accepted for publication with CRC Press.',
    tags: ['PyTorch', 'RAG', 'FAISS', 'BERT', 'LLM Fine-Tuning'],
    color: 'green',
    url: 'https://github.com/ramubattu321/Machine-Learning-Practice-using-python',
  },
  {
    title: 'A/B Testing Analysis',
    description: 'Analyzed marketing campaign performance using SQL and Python. Calculated funnel metrics including CTR, conversion rate, and revenue per user with statistical significance testing.',
    tags: ['SQL', 'Python', 'A/B Testing', 'Statistics'],
    color: 'rose',
    url: 'https://github.com/ramubattu321/AB-Test-Case-Study',
  },
  {
    title: 'E-commerce Sales Dashboard - IEEE Hackathon',
    description: 'Interactive e-commerce sales dashboard for IEEE Hackathon 2023 analyzing sales performance, profit trends, and return patterns with dynamic pivot table visualizations.',
    tags: ['Excel', 'Pivot Tables', 'Data Visualization'],
    color: 'orange',
    url: 'https://github.com/ramubattu321/IEEE-Hackathon-2023',
  },
  {
    title: 'Manufacturing Process Analysis & SPC',
    description: 'Analyzed manufacturing process data using Python to monitor machine performance. Implemented 3-sigma control charts with UCL/LCL for anomaly detection.',
    tags: ['Python', 'Pandas', 'Anomaly Detection', 'SPC'],
    color: 'cyan',
    url: 'https://github.com/ramubattu321/manufacturing-process-analysis-eda',
  },
  {
    title: 'Hotel Booking Data Wrangling',
    description: 'Cleaned and analyzed semi-structured hotel booking data using Python and Pandas. Applied data wrangling techniques for platform-level booking analysis.',
    tags: ['Python', 'Pandas', 'Data Wrangling', 'EDA'],
    color: 'emerald',
    url: 'https://github.com/ramubattu321/Hotel-Booking-Data-Wrangling-Platform-Analysis',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-teal-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of data analytics projects demonstrating expertise in business intelligence, statistical analysis, and visualization
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-20">
          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-teal-500/10 to-sky-500/10" />
            <div className="relative p-12 md:p-16 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in Collaboration?</h3>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
                I'm always open to discussing new projects, analytics opportunities, or partnerships.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-sky-500/25"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
