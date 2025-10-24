import { ExternalLink, Github, ShoppingCart, Hotel, Users, Zap, FlaskConical, Factory } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Vrinda Store Project',
      description: 'Comprehensive sales dashboard for retail analytics, providing insights into sales trends, customer behavior, and product performance.',
      tags: ['Power BI', 'Sales Analytics', 'Dashboard'],
      color: 'from-blue-500 to-blue-600',
      icon: ShoppingCart
    },
    {
      title: 'Hotel Booking Analysis',
      description: 'Analyzed booking trends and agency performance using Pandas, delivering actionable insights for revenue optimization.',
      tags: ['Python', 'Pandas', 'Data Analysis'],
      color: 'from-green-500 to-green-600',
      icon: Hotel
    },
    {
      title: 'HR Analytics Dashboard',
      description: 'Interactive Power BI dashboard visualizing key HR metrics including employee turnover, satisfaction scores, and recruitment analytics.',
      tags: ['Power BI', 'HR Analytics', 'Visualization'],
      color: 'from-purple-500 to-purple-600',
      icon: Users
    },
    {
      title: '48-Hour Hackathon Sales Dashboard',
      description: 'Rapid development of a comprehensive sales dashboard under tight deadline, showcasing agile analytics capabilities.',
      tags: ['Power BI', 'Rapid Development', 'Sales'],
      color: 'from-orange-500 to-orange-600',
      icon: Zap
    },
    {
      title: 'A/B Test Project',
      description: 'Experimental design and statistical analysis for conversion optimization, including hypothesis testing and performance metrics.',
      tags: ['Python', 'Statistics', 'A/B Testing'],
      color: 'from-red-500 to-red-600',
      icon: FlaskConical
    },
    {
      title: 'Manufacturing Process Analysis',
      description: 'Applied cluster sampling methodology to study operational efficiency and product quality in manufacturing processes.',
      tags: ['Statistical Analysis', 'Quality Control', 'Python'],
      color: 'from-teal-500 to-teal-600',
      icon: Factory
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 text-blue-200 rounded-full text-sm font-bold mb-6 border-2 border-blue-400/50 backdrop-blur-md shadow-2xl shadow-blue-500/30 hover:scale-105 transition-transform duration-300">
            ✨ My Work
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
            Portfolio & Projects
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-16 h-1.5 bg-gradient-to-r from-transparent to-blue-400 rounded-full shadow-lg shadow-blue-500/50"></div>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full shadow-2xl shadow-cyan-500/50 animate-pulse"></div>
            <div className="w-16 h-1.5 bg-gradient-to-l from-transparent to-blue-400 rounded-full shadow-lg shadow-blue-500/50"></div>
          </div>
          <p className="text-slate-300 text-xl max-w-4xl mx-auto leading-relaxed font-light">
            A showcase of data analytics projects demonstrating expertise in business intelligence, statistical analysis, and data visualization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border border-slate-700/50 hover:border-cyan-400/50 backdrop-blur-xl"
              style={{
                transitionDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${project.color} flex items-center justify-center text-white overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 bg-white/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl border-2 border-white/40 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl sm:rounded-3xl"></div>
                    <ProjectIcon size={40} className="sm:hidden drop-shadow-2xl relative z-10" />
                    <ProjectIcon size={56} className="hidden sm:block drop-shadow-2xl relative z-10" />
                  </div>
                  <div className="text-base sm:text-xl font-bold text-center px-3 sm:px-4 drop-shadow-2xl leading-tight">
                    {project.title}
                  </div>
                </div>

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-4 py-2 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-2xl text-xs sm:text-sm font-bold shadow-2xl border-2 border-white/50 group-hover:scale-110 transition-transform duration-300">
                  #{index + 1}
                </div>
              </div>

              <div className="relative p-6 sm:p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-2xl"></div>

                <p className="text-slate-300 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed relative z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 text-blue-200 rounded-xl text-xs font-bold border border-blue-400/50 hover:from-blue-500/40 hover:to-cyan-500/40 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-5 sm:pt-6 border-t border-slate-700/50 relative z-10">
                  <button className="group/btn flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 text-blue-300 hover:text-blue-200 font-bold text-sm rounded-xl transition-all hover:scale-105 border border-blue-400/30 hover:border-blue-400/60 shadow-lg">
                    <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform" />
                    View Project
                  </button>
                  <button className="group/btn flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 hover:text-white font-bold text-sm rounded-xl transition-all hover:scale-105 border border-slate-600/50 hover:border-slate-500 shadow-lg">
                    <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <div className="mt-24 relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl border-2 border-cyan-400/40 hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-6 border-2 border-white/40 shadow-xl">
              💼 Let's Work Together
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-2xl">Interested in Collaboration?</h3>
            <p className="mb-12 max-w-3xl mx-auto text-lg md:text-2xl text-white/95 leading-relaxed font-light drop-shadow-lg">
              I'm always open to discussing new projects, analytics opportunities, or partnerships in data science and business intelligence.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-12 py-6 bg-white text-blue-600 rounded-2xl font-extrabold hover:bg-blue-50 transition-all transform hover:scale-110 shadow-2xl hover:shadow-white/50 text-xl border-4 border-white/50 hover:border-white relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
