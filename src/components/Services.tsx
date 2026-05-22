import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, LayoutGrid as Layout, TrendingUp, Database, TestTube, FileSpreadsheet } from 'lucide-react';

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

const services = [
  { icon: BarChart3, title: 'Data Analysis & Business Analytics', description: 'Transform raw data into actionable insights through comprehensive analysis and strategic recommendations.' },
  { icon: Layout, title: 'Dashboard Creation & Automation', description: 'Design and automate interactive dashboards using Power BI and Tableau for real-time business monitoring.' },
  { icon: FileSpreadsheet, title: 'Financial Reporting & Forecasting', description: 'Deliver accurate financial reports and predictive models to support strategic planning and budgeting.' },
  { icon: TrendingUp, title: 'Business Intelligence & KPIs', description: 'Create compelling visualizations of key performance indicators to drive data-driven decisions.' },
  { icon: TestTube, title: 'A/B Testing & Optimization', description: 'Design and analyze experiments to optimize user experience and improve conversion rates.' },
  { icon: Database, title: 'Database Management & ETL', description: 'Manage SQL databases and implement efficient ETL processes for data integration and quality.' },
];

export default function Services() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">How Can I Assist You?</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="h-full rounded-2xl p-7 bg-[#fafafa] border border-gray-100/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                    <Icon className="text-gray-500 group-hover:text-teal-600 transition-colors duration-300" size={20} />
                  </div>
                  <h3 className="font-display text-[16px] font-semibold text-gray-900 mb-2.5">{service.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
