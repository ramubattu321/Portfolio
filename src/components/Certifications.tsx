import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Google Data Analyst',
      issuer: 'Google',
      icon: '🎓',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Microsoft Office Specialist: Power BI',
      issuer: 'Microsoft',
      icon: '📊',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Microsoft Office Specialist: Excel',
      issuer: 'Microsoft',
      icon: '📈',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Data Analysis with Python',
      issuer: 'IBM',
      icon: '🐍',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'SQL Fundamentals of Database',
      issuer: 'IBM',
      icon: '💾',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 text-blue-200 rounded-full text-sm font-bold mb-6 border-2 border-blue-400/50 backdrop-blur-md shadow-2xl shadow-blue-500/30 hover:scale-105 transition-transform duration-300">
            🏆 Professional Credentials
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
            Certifications
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-16 h-1.5 bg-gradient-to-r from-transparent to-cyan-400 rounded-full shadow-lg shadow-cyan-500/50"></div>
            <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full shadow-2xl shadow-blue-500/50 animate-pulse"></div>
            <div className="w-16 h-1.5 bg-gradient-to-l from-transparent to-cyan-400 rounded-full shadow-lg shadow-cyan-500/50"></div>
          </div>
          <p className="text-slate-300 text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Professional certifications demonstrating expertise in data analysis, business intelligence, and technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-4 hover:rotate-1 backdrop-blur-xl"
              style={{
                transitionDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 sm:mb-8 text-4xl sm:text-5xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-white/20`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl sm:rounded-3xl"></div>
                  <span className="relative z-10 drop-shadow-2xl">{cert.icon}</span>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h3 className="font-bold text-white text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:text-cyan-300 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-slate-300 text-base sm:text-lg flex items-center gap-2 font-semibold">
                    <Award size={18} className="text-cyan-400 sm:w-[20px] sm:h-[20px]" />
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-slate-700/50">
                  <button className="group/btn w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 text-blue-300 hover:text-blue-200 text-sm font-bold flex items-center justify-center gap-2 rounded-xl transition-all hover:scale-105 border border-blue-400/30 hover:border-blue-400/60 shadow-lg">
                    View Certificate
                    <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24 text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-5 px-8 sm:px-12 py-6 sm:py-8 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl border-2 border-cyan-400/50 backdrop-blur-xl shadow-2xl hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <Award className="text-cyan-300 relative z-10 group-hover:rotate-12 transition-transform duration-500" size={32} />
            <p className="text-white font-bold text-lg sm:text-xl text-center relative z-10 drop-shadow-lg">
              Committed to continuous learning and professional development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
