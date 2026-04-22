import { BarChart3, Layout, TrendingUp, Database, TestTube, FileSpreadsheet } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: BarChart3,
    title: 'Data Analysis & Business Analytics',
    description: 'Transform raw data into actionable insights through comprehensive analysis and strategic recommendations.',
  },
  {
    icon: Layout,
    title: 'Dashboard Creation & Automation',
    description: 'Design and automate interactive dashboards using Power BI and Tableau for real-time business monitoring.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Financial Reporting & Forecasting',
    description: 'Deliver accurate financial reports and predictive models to support strategic planning and budgeting.',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence & KPI Visualization',
    description: 'Create compelling visualizations of key performance indicators to drive data-driven decision making.',
  },
  {
    icon: TestTube,
    title: 'A/B Testing & Conversion Optimization',
    description: 'Design and analyze experiments to optimize user experience and improve conversion rates.',
  },
  {
    icon: Database,
    title: 'Database Management & ETL',
    description: 'Manage SQL databases and implement efficient ETL processes for data integration and quality assurance.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(6,182,212,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-4">
            What I Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive analytics solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-sky-500/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-sky-500/10 inline-flex mb-4 group-hover:bg-sky-500/15 transition-colors">
                  <Icon className="text-sky-400" size={22} />
                </div>
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
