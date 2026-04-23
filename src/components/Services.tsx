import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BarChart3, Layout, TrendingUp, Database, TestTube, FileSpreadsheet } from 'lucide-react';

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

function Card3D({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [transform, setTransform] = useState('');
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale3d(1.02, 1.02, 1.02)`);
  };
  return (
    <div className={className} style={{ transform, transition: 'transform 0.15s ease-out' }}
      onMouseMove={handleMove} onMouseLeave={() => setTransform('')}>
      {children}
    </div>
  );
}

const services = [
  { icon: BarChart3, title: 'Data Analysis & Business Analytics', description: 'Transform raw data into actionable insights through comprehensive analysis and strategic recommendations.', color: 'sky' },
  { icon: Layout, title: 'Dashboard Creation & Automation', description: 'Design and automate interactive dashboards using Power BI and Tableau for real-time business monitoring.', color: 'teal' },
  { icon: FileSpreadsheet, title: 'Financial Reporting & Forecasting', description: 'Deliver accurate financial reports and predictive models to support strategic planning and budgeting.', color: 'emerald' },
  { icon: TrendingUp, title: 'Business Intelligence & KPI Visualization', description: 'Create compelling visualizations of key performance indicators to drive data-driven decisions.', color: 'amber' },
  { icon: TestTube, title: 'A/B Testing & Conversion Optimization', description: 'Design and analyze experiments to optimize user experience and improve conversion rates.', color: 'rose' },
  { icon: Database, title: 'Database Management & ETL', description: 'Manage SQL databases and implement efficient ETL processes for data integration and quality assurance.', color: 'sky' },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400' },
};

export default function Services() {
  return (
    <section className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-teal-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive analytics solutions tailored to your business needs
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const c = colorMap[service.color];
            const Icon = service.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Card3D className={`h-full rounded-2xl p-7 border ${c.border} ${c.bg} backdrop-blur-sm group cursor-default`}>
                  <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={c.text} size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-sky-300 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </Card3D>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
