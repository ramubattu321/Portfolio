import { ExternalLink, Github } from 'lucide-react';

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
    <section id="portfolio" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-400/30">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio & Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A showcase of data analytics projects demonstrating expertise in business intelligence, statistical analysis, and data visualization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-slate-700 backdrop-blur-sm"
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-6xl font-bold overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {project.title.charAt(0)}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                  Project {index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-slate-700/50 to-blue-500/20 text-slate-300 rounded-full text-xs font-medium border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-all hover:gap-3">
                    <ExternalLink size={16} />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-slate-300 font-medium text-sm transition-all hover:gap-3">
                    <Github size={16} />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-2xl p-10 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="mb-8 max-w-2xl mx-auto text-lg text-blue-50">
              I'm always open to discussing new projects, analytics opportunities, or partnerships in data science and business intelligence.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
