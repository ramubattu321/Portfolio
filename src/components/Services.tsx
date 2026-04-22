import { BarChart3, Layout, TrendingUp, Database, TestTube, FileSpreadsheet } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analysis & Business Analytics',
      description: 'Transform raw data into actionable insights through comprehensive analysis and strategic recommendations.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Layout,
      title: 'Dashboard Creation & Automation',
      description: 'Design and automate interactive dashboards using Power BI and Tableau for real-time business monitoring.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileSpreadsheet,
      title: 'Financial Reporting & Forecasting',
      description: 'Deliver accurate financial reports and predictive models to support strategic planning and budgeting.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence & KPI Visualization',
      description: 'Create compelling visualizations of key performance indicators to drive data-driven decision making.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TestTube,
      title: 'A/B Testing & Conversion Optimization',
      description: 'Design and analyze experiments to optimize user experience and improve conversion rates.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Database,
      title: 'Database Management & ETL',
      description: 'Manage SQL databases and implement efficient ETL processes for data integration and quality assurance.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4 border border-blue-400/40 backdrop-blur-md shadow-lg">
            What I Offer
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Services</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/50 mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive analytics solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/60 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-3 border-2 border-slate-700/50 hover:border-blue-400 backdrop-blur-md"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
