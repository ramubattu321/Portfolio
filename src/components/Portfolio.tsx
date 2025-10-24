import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Vrinda Store Project',
      description: 'Comprehensive sales dashboard for retail analytics, providing insights into sales trends, customer behavior, and product performance.',
      tags: ['Power BI', 'Sales Analytics', 'Dashboard'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Hotel Booking Analysis',
      description: 'Analyzed booking trends and agency performance using Pandas, delivering actionable insights for revenue optimization.',
      tags: ['Python', 'Pandas', 'Data Analysis'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'HR Analytics Dashboard',
      description: 'Interactive Power BI dashboard visualizing key HR metrics including employee turnover, satisfaction scores, and recruitment analytics.',
      tags: ['Power BI', 'HR Analytics', 'Visualization'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: '48-Hour Hackathon Sales Dashboard',
      description: 'Rapid development of a comprehensive sales dashboard under tight deadline, showcasing agile analytics capabilities.',
      tags: ['Power BI', 'Rapid Development', 'Sales'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'A/B Test Project',
      description: 'Experimental design and statistical analysis for conversion optimization, including hypothesis testing and performance metrics.',
      tags: ['Python', 'Statistics', 'A/B Testing'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Manufacturing Process Analysis',
      description: 'Applied cluster sampling methodology to study operational efficiency and product quality in manufacturing processes.',
      tags: ['Statistical Analysis', 'Quality Control', 'Python'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-24 h-24 text-indigo-200">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" opacity="0.3"/>
          <circle cx="50" cy="50" r="25" opacity="0.5"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-32 h-32 text-orange-200">
        <svg viewBox="0 0 100 100">
          <path d="M50,10 L90,90 L10,90 Z" fill="currentColor" opacity="0.2"/>
        </svg>
      </div>
      <svg className="absolute top-1/3 right-1/4 w-20 h-20 text-gray-200" viewBox="0 0 100 100">
        <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="3"/>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
            PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digital Product Showcases
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of data analytics projects demonstrating expertise in business intelligence, statistical analysis, and data visualization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">{project.title.charAt(0)}</div>
                    <div className="text-sm font-semibold text-gray-500">Project Preview</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    {project.title}
                  </h3>
                  <button className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
