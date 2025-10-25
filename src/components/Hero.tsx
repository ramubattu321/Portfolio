import { ArrowRight, Linkedin, Mail, Sparkles, TrendingUp, Database, Github, FileSpreadsheet, Download, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      ></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`text-white space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-xl border border-blue-400/30 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:border-blue-400/50">
              <Sparkles size={18} className="animate-pulse" />
              <span>Data Analyst & Business Analyst</span>
            </div>

            <div>
              <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-4 tracking-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Ramu Battu
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full"></span>
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
              Transforming data into{' '}
              <span className="relative inline-block">
                <span className="text-cyan-400 font-bold">actionable insights</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400/50"></span>
              </span>{' '}
              through financial analysis, data storytelling, and business intelligence.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl backdrop-blur-xl border border-slate-700/50 shadow-lg hover:shadow-green-500/20 hover:scale-105 hover:border-green-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-200">Power BI Expert</span>
              </div>
              <div className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl backdrop-blur-xl border border-slate-700/50 shadow-lg hover:shadow-blue-500/20 hover:scale-105 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Database size={20} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-200">SQL & Python</span>
              </div>
              <div className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl backdrop-blur-xl border border-slate-700/50 shadow-lg hover:shadow-emerald-500/20 hover:scale-105 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                  <FileSpreadsheet size={20} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-200">Excel</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/30 backdrop-blur-xl w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
              </span>
              <span className="text-sm font-medium text-slate-200">Master's Student at California State University, Fresno</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <span className="relative">View Projects</span>
                <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center gap-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-2xl font-bold backdrop-blur-xl transition-all border-2 border-slate-600/50 hover:border-slate-500 shadow-lg hover:scale-105"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/ramu-battu-01a9a336a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:from-blue-600 hover:to-blue-700 rounded-2xl backdrop-blur-xl transition-all transform hover:scale-110 border border-slate-700/50 hover:border-blue-500 shadow-lg hover:shadow-blue-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/20 transition-all duration-300"></div>
                <Linkedin size={22} className="relative group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/ramubattu321"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:from-slate-700 hover:to-slate-800 rounded-2xl backdrop-blur-xl transition-all transform hover:scale-110 border border-slate-700/50 hover:border-slate-500 shadow-lg hover:shadow-slate-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400/0 to-slate-600/0 group-hover:from-slate-400/10 group-hover:to-slate-600/10 transition-all duration-300"></div>
                <Github size={22} className="relative group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:ramuusa61@gmail.com"
                className="group relative p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:from-cyan-600 hover:to-cyan-700 rounded-2xl backdrop-blur-xl transition-all transform hover:scale-110 border border-slate-700/50 hover:border-cyan-500 shadow-lg hover:shadow-cyan-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-600/0 group-hover:from-cyan-400/20 group-hover:to-cyan-600/20 transition-all duration-300"></div>
                <Mail size={22} className="relative group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className={`flex justify-center relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400 rounded-full blur-2xl opacity-40 animate-float"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400 rounded-full blur-2xl opacity-40 animate-float" style={{ animationDelay: '0.5s' }}></div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-[2rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>

              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-slate-700/50 group-hover:border-blue-400/50 transition-all duration-500 backdrop-blur-xl bg-slate-800/30">
                <img
                  src="https://i.postimg.cc/0N5fkdwD/Whats-App-Image-2025-10-23-at-9-19-25-AM.jpg"
                  alt="Ramu Battu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-16 border-t border-slate-700/50">
          {[
            { value: '3+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
            { value: '20+', label: 'Projects Completed', color: 'from-green-500 to-emerald-500' },
            { value: '5+', label: 'Certifications', color: 'from-orange-500 to-yellow-500' },
            { value: '100%', label: 'Client Satisfaction', color: 'from-cyan-500 to-blue-500' }
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-all animate-bounce hover:animate-none"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
