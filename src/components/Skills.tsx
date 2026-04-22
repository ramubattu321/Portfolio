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
    { icon: Target, name: 'Strategic Decision Support', color: 'from-cyan-500 to-cyan-600' },
    { icon: Users, name: 'Collaboration', color: 'from-orange-500 to-orange-600' },
    { icon: Database, name: 'Attention to Detail', color: 'from-red-500 to-red-600' },
    { icon: Code, name: 'Project Management', color: 'from-teal-500 to-teal-600' }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4 border border-blue-400/40 backdrop-blur-md shadow-lg">
            My Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Skills & Expertise</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/50"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => (
              <div key={index} className="group bg-slate-800/60 rounded-2xl p-7 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-3 border-2 border-slate-700/50 hover:border-blue-400 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:animate-pulse shadow-lg shadow-blue-500/50"></div>
                  <h4 className="font-bold text-white text-xl">{category.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-lg text-sm font-semibold hover:from-blue-500/40 hover:to-cyan-500/40 hover:scale-105 transition-all duration-300 cursor-default border border-blue-400/40 shadow-md"
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
                  className="group bg-slate-800/60 rounded-2xl p-7 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:-translate-y-3 duration-300 border-2 border-slate-700/50 hover:border-blue-400 backdrop-blur-md"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h4 className="font-bold text-white text-xl">{skill.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
