import { Database, LineChart, Code, Users, Lightbulb, Target } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    { category: 'Data Visualization', skills: ['Power BI', 'Tableau', 'Looker Studio', 'Excel'] },
    { category: 'Programming', skills: ['SQL', 'Python', 'Data Cleaning', 'ETL'] },
    { category: 'Business Tools', skills: ['Tally ERP', 'Salesforce CRM', 'Google Analytics'] },
    { category: 'Analysis', skills: ['Financial Analysis', 'Business Analysis', 'CRM Analytics'] }
  ];

  const softSkills = [
    { icon: LineChart, name: 'Data Storytelling', color: 'from-blue-500 to-blue-600' },
    { icon: Lightbulb, name: 'Problem Solving', color: 'from-green-500 to-green-600' },
    { icon: Target, name: 'Strategic Decision Support', color: 'from-purple-500 to-purple-600' },
    { icon: Users, name: 'Collaboration', color: 'from-orange-500 to-orange-600' },
    { icon: Database, name: 'Attention to Detail', color: 'from-red-500 to-red-600' },
    { icon: Code, name: 'Project Management', color: 'from-teal-500 to-teal-600' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-400/30">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => (
              <div key={index} className="group bg-slate-800/50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-700 hover:border-blue-400 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
                  <h4 className="font-bold text-white text-lg">{category.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-medium hover:from-blue-500/30 hover:to-cyan-500/30 transition-colors cursor-default border border-blue-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-800/50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-2 border-slate-700 hover:border-blue-400 backdrop-blur-sm"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="text-white" size={26} />
                  </div>
                  <h4 className="font-bold text-white text-lg">{skill.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
