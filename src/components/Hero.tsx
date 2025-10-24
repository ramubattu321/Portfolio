import { ArrowRight, Linkedin, Mail, Sparkles, TrendingUp, Database, Github } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm border border-blue-400/30">
              <Sparkles size={16} className="animate-pulse" />
              Data Analyst & Business Analyst
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Ramu Battu
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Transforming data into{' '}
              <span className="text-cyan-400 font-semibold">actionable insights</span>{' '}
              through financial analysis, data storytelling, and business intelligence.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <TrendingUp size={20} className="text-green-400" />
                <span className="text-sm text-slate-300">Power BI Expert</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <Database size={20} className="text-blue-400" />
                <span className="text-sm text-slate-300">SQL & Python</span>
              </div>
            </div>

            <p className="text-base text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Master's Student at California State University, Fresno
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-medium transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                View Portfolio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium backdrop-blur-sm transition-all border border-white/20 hover:border-white/40"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/ramu-battu-01a9a336a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 hover:bg-blue-600 rounded-xl backdrop-blur-sm transition-all transform hover:scale-110 border border-white/20 hover:border-blue-500"
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/ramubattu321"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 hover:bg-blue-600 rounded-xl backdrop-blur-sm transition-all transform hover:scale-110 border border-white/20 hover:border-blue-500"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:ramuusa61@gmail.com"
                className="group p-4 bg-white/10 hover:bg-blue-600 rounded-xl backdrop-blur-sm transition-all transform hover:scale-110 border border-white/20 hover:border-blue-500"
              >
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-400 rounded-full blur-2xl opacity-40 animate-bounce"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-300 rounded-full blur-xl opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }}></div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>

              <div className="relative w-80 h-80 rounded-full shadow-2xl overflow-hidden border-4 border-white/20">
                <img
                  src="https://i.postimg.cc/0N5fkdwD/Whats-App-Image-2025-10-23-at-9-19-25-AM.jpg"
                  alt="Ramu Battu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none"></div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white rounded-full shadow-xl">
                <p className="text-slate-800 font-bold text-sm">Available for Projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">3+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-sm text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-sm text-slate-400">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-slate-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
