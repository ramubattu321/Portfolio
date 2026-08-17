import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, LayoutGrid as Layout, TrendingUp, ClipboardList, TestTube, FileSpreadsheet } from 'lucide-react';

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
  { icon: BarChart3, title: 'Data Analysis & Business Analytics', description: 'Transform raw data into actionable insights through comprehensive analysis and strategic recommendations.', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Layout, title: 'Dashboard Creation & Automation', description: 'Design and automate interactive dashboards using Power BI and Tableau for real-time business monitoring.', gradient: 'from-teal-500 to-emerald-500' },
  { icon: FileSpreadsheet, title: 'Financial Reporting & Forecasting', description: 'Deliver accurate financial reports and predictive models to support strategic planning and budgeting.', gradient: 'from-amber-500 to-orange-500' },
  { icon: TrendingUp, title: 'Business Intelligence & KPIs', description: 'Create compelling visualizations of key performance indicators to drive data-driven decisions.', gradient: 'from-emerald-500 to-green-500' },
  { icon: TestTube, title: 'A/B Testing & Optimization', description: 'Design and analyze experiments to optimize user experience and improve conversion rates.', gradient: 'from-rose-500 to-pink-500' },
  { icon: ClipboardList, title: 'Requirements Elicitation & BRD/FRD', description: 'Gather, document, and trace business requirements from stakeholder interviews into clear user stories, acceptance criteria, and functional specs.', gradient: 'from-sky-500 to-blue-500' },
];

export default function Services() {
  return (
    <section className="py-28 bg-zinc-950 relative overflow-hidden noise-overlay">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-400 uppercase tracking-wider mb-3">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">How Can I Assist You?</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
            };
            return (
              <AnimatedSection key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  onMouseMove={onMove}
                  className="spotlight-card group h-full rounded-2xl p-7 bg-white/[0.03] border border-white/10 hover:shadow-[0_12px_40px_rgba(20,184,166,0.1)] hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full -translate-y-1/3 translate-x-1/3`} />

                  <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(20,184,166,0.3)] transition-all duration-300`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="relative font-display text-[16px] font-bold text-white mb-2.5 group-hover:text-teal-400 transition-colors">{service.title}</h3>
                  <p className="relative text-gray-400 text-[14px] leading-relaxed">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
