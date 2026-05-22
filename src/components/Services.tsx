import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, LayoutGrid as Layout, TrendingUp, Database, TestTube, FileSpreadsheet } from 'lucide-react';

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

const services = [
  { icon: BarChart3, title: 'Data Analysis & Business Analytics', description: 'Transform raw data into actionable insights through comprehensive analysis and strategic recommendations.' },
  { icon: Layout, title: 'Dashboard Creation & Automation', description: 'Design and automate interactive dashboards using Power BI and Tableau for real-time business monitoring.' },
  { icon: FileSpreadsheet, title: 'Financial Reporting & Forecasting', description: 'Deliver accurate financial reports and predictive models to support strategic planning and budgeting.' },
  { icon: TrendingUp, title: 'Business Intelligence & KPI Visualization', description: 'Create compelling visualizations of key performance indicators to drive data-driven decisions.' },
  { icon: TestTube, title: 'A/B Testing & Conversion Optimization', description: 'Design and analyze experiments to optimize user experience and improve conversion rates.' },
  { icon: Database, title: 'Database Management & ETL', description: 'Manage SQL databases and implement efficient ETL processes for data integration and quality assurance.' },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Can I Assist You?</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Comprehensive analytics solutions tailored to your business needs
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="h-full rounded-2xl p-7 bg-gray-50 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="text-gray-700" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
