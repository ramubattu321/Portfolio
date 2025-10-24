import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      date: '2024',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      date: '2023',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2023',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Advanced SQL for Data Analysis',
      issuer: 'Coursera',
      date: '2023',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4 border border-blue-400/40 backdrop-blur-md shadow-lg">
            Professional Credentials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Certifications & Achievements</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/50 mb-6"></div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Certified expertise in data analysis, business intelligence, and technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-3 border-2 border-slate-700/50 hover:border-blue-400 backdrop-blur-md"
            >
              <div className={`h-32 bg-gradient-to-br ${cert.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <Award className="text-white" size={48} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-xs text-slate-400 font-semibold">{cert.date}</span>
                </div>

                <h3 className="font-bold text-white text-lg mb-2 leading-tight group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-blue-400 text-sm font-semibold mb-4">
                  {cert.issuer}
                </p>

                <button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30">
                  View Certificate
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-400/40 backdrop-blur-md shadow-xl">
            <Award className="text-blue-400" size={32} />
            <p className="text-white font-bold text-lg">
              Committed to continuous learning and professional development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
