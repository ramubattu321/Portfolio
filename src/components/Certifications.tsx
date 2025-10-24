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
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in data analysis, business intelligence, and technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 border-2 border-slate-700 rounded-xl p-6 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 text-3xl`}>
                {cert.icon}
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-300 text-sm flex items-center gap-2">
                  <Award size={16} className="text-blue-400" />
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <button className="text-blue-400 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  View Certificate <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-blue-500/20 rounded-lg border border-blue-400/30 backdrop-blur-sm">
            <Award className="text-blue-400" size={24} />
            <p className="text-slate-300 font-medium">
              Committed to continuous learning and professional development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
