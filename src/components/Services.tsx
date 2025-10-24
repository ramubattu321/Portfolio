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
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Comprehensive analytics solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-700 hover:border-blue-400 backdrop-blur-sm"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
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
