import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight, Github } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    title: 'E-Commerce Intelligence Platform',
    description: 'Architected AWS data lake (S3 + Glue + Athena) on 100K+ e-commerce orders. Gradient Boosting won at R²=0.89. K-Means segmentation identified 10x spend gap. Confirmed +15% CVR lift from A/B test.',
    tags: ['AWS', 'Python', 'Scikit-learn', 'A/B Testing'],
    url: 'https://github.com/ramubattu321/Ecommerce-AWS-Intelligence',
    featured: true,
  },
  {
    title: 'Applied AI & ML Research',
    description: 'ACTD fine-tuning across 4 LLM architectures outperformed iterative RAG. Built FAISS/HNSW vector databases. Presented at California Central Valley Research Symposium. Published with CRC Press.',
    tags: ['PyTorch', 'RAG', 'FAISS', 'BERT', 'LLM'],
    url: 'https://github.com/ramubattu321/Machine-Learning-Practice-using-python',
    featured: true,
  },
  {
    title: 'Financial Data ETL Pipeline',
    description: 'Python-based ETL workflow extracting and transforming semi-structured XML financial data. Processed $250M+ in financial records.',
    tags: ['Python', 'ETL', 'XML', 'Data Pipeline'],
    url: 'https://github.com/ramubattu321/financial-data-analysis',
    featured: false,
  },
  {
    title: 'HR Analytics Dashboard',
    description: 'Interactive Power BI dashboard analyzing employee attrition, workforce demographics, and retention patterns.',
    tags: ['Power BI', 'DAX', 'Power Query'],
    url: 'https://github.com/ramubattu321/HR-Analytics-Dash-Board--Power-BI',
    featured: false,
  },
  {
    title: 'Vrinda Store Sales Dashboard',
    description: 'Interactive Excel dashboard with Pivot Tables, dynamic visualizations, and regional performance analysis.',
    tags: ['Excel', 'Pivot Tables', 'Visualization'],
    url: 'https://github.com/ramubattu321/Vrinda-Store-Sales-Dashboard-Business-Insights',
    featured: false,
  },
  {
    title: 'A/B Testing Analysis',
    description: 'Marketing campaign analysis with funnel metrics including CTR, conversion rate, and revenue per user.',
    tags: ['SQL', 'Python', 'A/B Testing', 'Statistics'],
    url: 'https://github.com/ramubattu321/AB-Test-Case-Study',
    featured: false,
  },
  {
    title: 'IEEE Hackathon Dashboard',
    description: 'E-commerce sales dashboard analyzing sales performance, profit trends, and return patterns.',
    tags: ['Excel', 'Pivot Tables', 'Visualization'],
    url: 'https://github.com/ramubattu321/IEEE-Hackathon-2023',
    featured: false,
  },
  {
    title: 'Manufacturing Process & SPC',
    description: 'Manufacturing process monitoring with 3-sigma control charts for anomaly detection.',
    tags: ['Python', 'Pandas', 'Anomaly Detection'],
    url: 'https://github.com/ramubattu321/manufacturing-process-analysis-eda',
    featured: false,
  },
  {
    title: 'Hotel Booking Data Wrangling',
    description: 'Semi-structured hotel booking data cleaning and platform-level booking analysis.',
    tags: ['Python', 'Pandas', 'Data Wrangling'],
    url: 'https://github.com/ramubattu321/Hotel-Booking-Data-Wrangling-Platform-Analysis',
    featured: false,
  },
];

function FeaturedCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <div className="h-full rounded-2xl bg-white border border-gray-100 p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:border-gray-200 relative overflow-hidden">
          <div className="flex items-start justify-between mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold">
              Featured
            </span>
            <span className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-400 group-hover:text-gray-900 group-hover:bg-gray-100 transition-all">
              <ArrowUpRight size={16} />
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, j) => (
              <span
                key={j}
                className="px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-xs font-medium border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </AnimatedSection>
  );
}

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <AnimatedSection delay={index * 0.06}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center">
            <Github size={18} className="text-gray-400 group-hover:text-gray-700 transition-colors" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-gray-900 font-semibold text-[15px] sm:text-base group-hover:text-teal-700 transition-colors truncate">
              {project.title}
            </h4>
            <p className="text-gray-400 text-sm mt-0.5 hidden sm:block truncate">
              {project.description}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            {project.tags.slice(0, 3).map((tag, j) => (
              <span
                key={j}
                className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-500 text-xs font-medium border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="flex-shrink-0 p-2 rounded-lg text-gray-400 group-hover:text-gray-700 transition-colors">
            <ExternalLink size={16} />
          </span>
        </div>
      </a>
    </AnimatedSection>
  );
}

export default function Portfolio() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Wanna see<br />my work?
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm text-[15px] leading-relaxed">
              Data science and analytics projects spanning ML, ETL pipelines, dashboards, and research.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map((project, i) => (
            <FeaturedCard key={i} project={project} index={i} />
          ))}
        </div>

        <div className="space-y-3">
          {others.map((project, i) => (
            <ProjectRow key={i} project={project} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-16">
          <div className="rounded-2xl bg-white border border-gray-100 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Interested in collaboration?
              </h3>
              <p className="text-gray-500 text-[15px]">
                I'm always open to discussing new projects and opportunities.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-shrink-0 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold transition-all hover:scale-105 hover:bg-gray-800 text-sm"
            >
              Get In Touch
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
