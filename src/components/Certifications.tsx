import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      icon: '📊',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      icon: '💡',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      icon: '🐍',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Advanced SQL for Data Analysis',
      issuer: 'Coursera',
      icon: '🗄️',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford Online',
      icon: '🤖',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Statistics and Probability',
      issuer: 'Khan Academy',
      icon: '📈',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-24 h-24 text-indigo-200">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 w-32 h-32 text-orange-200">
        <svg viewBox="0 0 100 100">
          <path d="M50,10 L90,90 L10,90 Z" fill="currentColor" opacity="0.2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
            CREDENTIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Certifications
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Certified expertise in data analysis, business intelligence, and technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`h-32 bg-gradient-to-br ${cert.color} flex items-center justify-center text-6xl`}>
                {cert.icon}
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm flex items-center gap-2 mb-4">
                  <Award size={16} className="text-indigo-600" />
                  {cert.issuer}
                </p>

                <button className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                  View Certificate
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-indigo-50 to-orange-50 rounded-3xl border-2 border-indigo-100 shadow-lg">
            <Award className="text-indigo-600" size={32} />
            <p className="text-gray-900 font-bold text-lg">
              Committed to continuous learning and professional development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
