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
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4 border border-blue-400/40 backdrop-blur-md shadow-lg">
            Professional Credentials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Certifications</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/50 mb-6"></div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Professional certifications demonstrating expertise in data analysis, business intelligence, and technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 border-2 border-slate-700/50 rounded-2xl p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-3 backdrop-blur-md"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 text-4xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {cert.icon}
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-white text-xl mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-slate-300 text-base flex items-center gap-2 font-medium">
                  <Award size={18} className="text-blue-400" />
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-5 border-t-2 border-slate-700/50">
                <button className="text-blue-400 text-sm font-semibold flex items-center gap-2 hover:gap-3 hover:text-blue-300 transition-all hover:scale-105">
                  View Certificate <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border-2 border-blue-400/40 backdrop-blur-md shadow-xl hover:scale-105 transition-transform duration-300">
            <Award className="text-blue-400" size={28} />
            <p className="text-slate-200 font-semibold text-lg">
              Committed to continuous learning and professional development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
