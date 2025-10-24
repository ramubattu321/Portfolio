import { GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full border-4 border-orange-200"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 text-indigo-200">
        <svg viewBox="0 0 100 100">
          <path d="M50,10 L90,90 L10,90 Z" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
            ABOUT ME
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Designing Solutions, Not Just Visuals
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Data Analyst with a passion for transforming complex data into strategic insights through analytics and business intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600">Academic background and qualifications</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-indigo-50 rounded-2xl p-5 border-l-4 border-indigo-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">Master's Degree</h4>
                    <p className="text-gray-700 font-medium text-sm">California State University, Fresno</p>
                    <p className="text-sm text-gray-500 mt-2">Aug 2025 – Present</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                    MS
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-gray-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">Bachelor's Degree</h4>
                    <p className="text-gray-700 font-medium text-sm">Matrusri Engineering College</p>
                    <p className="text-sm text-gray-500 mt-2">Hyderabad, India</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold text-sm">
                    BS
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Key Highlights</h3>
                <p className="text-gray-600">What makes me stand out</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">3+ Complete Project</h4>
                  <p className="text-sm text-gray-600">Delivered comprehensive analytics solutions across multiple domains</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">8+ Years of Experience</h4>
                  <p className="text-sm text-gray-600">Extensive expertise in data analysis, visualization, and business intelligence</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-full font-bold transition-all">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
              <Briefcase className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Professional Experience</h3>
              <p className="text-gray-600">My career journey and accomplishments</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border-l-4 border-indigo-600">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Data Analyst</h4>
                  <p className="text-indigo-600 font-semibold">TEXCEL INFOTECH</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-700 text-sm">Oct 2023 – Nov 2024</p>
                  <span className="inline-block px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium mt-1">
                    Remote
                  </span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Automated dashboard creation and reporting using Power BI, SQL, and Python</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Optimized conversion rates through data-driven analysis and A/B testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Developed predictive strategies leveraging Salesforce CRM analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border-l-4 border-orange-500">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Account Executive Analyst</h4>
                  <p className="text-orange-600 font-semibold">Gautam Joshi & Co. LLP</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-700 text-sm">Apr 2021 – Dec 2022</p>
                  <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium mt-1">
                    Hybrid
                  </span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Conducted comprehensive financial analysis, budgeting, and variance analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Created data visualizations using Power BI and Excel for executive reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
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
