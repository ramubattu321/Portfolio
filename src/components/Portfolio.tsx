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
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4 border border-blue-400/40 backdrop-blur-md shadow-lg">
            My Work
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Portfolio & Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/50 mb-6"></div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of data analytics projects demonstrating expertise in business intelligence, statistical analysis, and data visualization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
            <div
              key={index}
              className="group bg-slate-800/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-3 border-2 border-slate-700/50 hover:border-blue-400 backdrop-blur-md"
            >
              <div className={`relative h-56 bg-gradient-to-br ${project.color} flex items-center justify-center text-white overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

                <div className="relative z-10 flex flex-col items-center justify-center gap-4 transform group-hover:scale-110 transition-all duration-300">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/30 group-hover:rotate-6 transition-transform duration-300">
                    <ProjectIcon size={48} className="drop-shadow-2xl" />
                  </div>
                  <div className="text-xl font-bold text-center px-4 drop-shadow-lg">
                    {project.title}
                  </div>
                </div>

                <div className="absolute top-5 right-5 px-4 py-2 bg-white/30 backdrop-blur-md rounded-xl text-sm font-bold shadow-lg border border-white/40">
                  Project {index + 1}
                </div>
              </div>

              <div className="p-7">
                <p className="text-slate-300 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-lg text-xs font-semibold border border-blue-400/40 hover:from-blue-500/30 hover:to-cyan-500/30 hover:scale-105 transition-all duration-200 cursor-default shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-5 border-t-2 border-slate-700/50">
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-all hover:gap-3 hover:scale-105">
                    <ExternalLink size={16} />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-slate-300 font-semibold text-sm transition-all hover:gap-3 hover:scale-105">
                    <Github size={16} />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <div className="mt-20 relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl border-2 border-blue-400/30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjE1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Interested in Collaboration?</h3>
            <p className="mb-10 max-w-3xl mx-auto text-lg md:text-xl text-blue-50 leading-relaxed">
              I'm always open to discussing new projects, analytics opportunities, or partnerships in data science and business intelligence.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-white/30 text-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
