import { Star } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'Power BI', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Excel', level: 95 },
    { name: 'Tableau', level: 80 },
    { name: 'Financial Analysis', level: 90 }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full border-4 border-indigo-200"></div>
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-yellow-300 rounded-full"></div>
      <svg className="absolute top-1/3 right-10 w-24 h-24 text-orange-200" viewBox="0 0 100 100">
        <path d="M50,10 L90,90 L10,90 Z" fill="currentColor" opacity="0.2"/>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What People Say's About Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by clients for delivering exceptional data analytics solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus elit. Morbi pretium non.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Dianne Russell</h4>
                  <p className="text-sm text-gray-500">CEO</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="font-bold text-indigo-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
