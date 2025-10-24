import { GraduationCap, Briefcase, MapPin, Calendar, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-400/30">
            Get to Know Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              <p className="text-lg text-slate-300 leading-relaxed pl-4">
                I'm a dedicated <span className="font-semibold text-blue-400">Data Analyst and Business Analyst</span> with a passion for transforming complex data into strategic insights. My expertise spans financial data management, analytics, and collaborative problem-solving.
              </p>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently pursuing my <span className="font-semibold text-white">Master's degree at California State University, Fresno</span>, I bring a strong foundation in analytics, combined with hands-on experience in dashboard automation, financial analysis, and business intelligence.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I thrive on leveraging tools like <span className="font-semibold text-white">Power BI, SQL, and Python</span> to drive data-driven decision-making and optimize business processes.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-400/30 backdrop-blur-sm">
                <Target className="text-blue-400 mb-2" size={28} />
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="text-sm text-slate-400">Projects</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30 backdrop-blur-sm">
                <Award className="text-green-400 mb-2" size={28} />
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-sm text-slate-400">Certifications</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              Education
            </h3>
            <div className="space-y-6">
              <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-5 border-l-4 border-blue-400 backdrop-blur-sm">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center border border-blue-400/30">
                  <span className="text-blue-300 font-bold text-sm">MS</span>
                </div>
                <h4 className="font-bold text-white mb-1">Master's Degree</h4>
                <p className="text-slate-300 font-medium">California State University, Fresno</p>
                <p className="text-sm text-slate-400 flex items-center gap-2 mt-2">
                  <Calendar size={16} className="text-blue-400" />
                  Aug 2025 – Present
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-slate-700/50 to-blue-500/20 rounded-xl p-5 border-l-4 border-cyan-400 backdrop-blur-sm">
                <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-500/30 rounded-full flex items-center justify-center border border-cyan-400/30">
                  <span className="text-cyan-300 font-bold text-sm">BS</span>
                </div>
                <h4 className="font-bold text-white mb-1">Bachelor's Degree</h4>
                <p className="text-slate-300 font-medium">Matrusri Engineering College</p>
                <p className="text-sm text-slate-400 flex items-center gap-2 mt-2">
                  <MapPin size={16} className="text-cyan-400" />
                  Hyderabad, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 md:p-10 shadow-lg border border-slate-700 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={20} />
            </div>
            Professional Experience
          </h3>

          <div className="relative space-y-8">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 hidden md:block"></div>

            <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 md:pl-20 shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-400/30 backdrop-blur-sm">
              <div className="absolute left-6 top-6 w-5 h-5 bg-blue-400 rounded-full border-4 border-slate-800 shadow-lg hidden md:block"></div>

              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Data Analyst</h4>
                  <p className="text-blue-400 font-semibold text-lg">TEXCEL INFOTECH</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold text-slate-300">Oct 2023 – Nov 2024</p>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium mt-1 border border-green-400/30">
                    Remote
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span>Automated dashboard creation and reporting using Power BI, SQL, and Python</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span>Optimized conversion rates through data-driven analysis and A/B testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span>Developed predictive strategies leveraging Salesforce CRM analytics</span>
                </li>
              </ul>
            </div>

            <div className="relative bg-gradient-to-br from-slate-700/50 to-blue-500/20 rounded-xl p-6 md:pl-20 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-600 backdrop-blur-sm">
              <div className="absolute left-6 top-6 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-800 shadow-lg hidden md:block"></div>

              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Account Executive Analyst</h4>
                  <p className="text-blue-400 font-semibold text-lg">Gautam Joshi & Co. LLP</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold text-slate-300">Apr 2021 – Dec 2022</p>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium mt-1 border border-blue-400/30">
                    Hybrid
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span>Conducted comprehensive financial analysis, budgeting, and variance analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span>Created data visualizations using Power BI and Excel for executive reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span>Managed SQL databases and performed auditing for financial compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
