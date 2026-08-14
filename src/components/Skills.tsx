import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, LineChart, Users, Lightbulb, Target, Workflow } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const technicalSkills = [
  { category: 'Data Analysis & Reporting', skills: ['SQL', 'Advanced Excel', 'Pivot Tables', 'Power Query', 'VLOOKUP/XLOOKUP', 'Data Validation', 'Data Profiling', 'KPI Definition', 'Dashboarding', 'Ad-hoc Reporting', 'Trend Analysis'], gradient: 'from-blue-50 to-cyan-50', borderColor: 'hover:border-blue-200' },
  { category: 'Business Analysis & Requirements', skills: ['Requirements Elicitation', 'BRD', 'FRD', 'User Stories', 'Epics', 'Acceptance Criteria', 'Gap Analysis', 'Impact Analysis', 'Process Mapping (AS-IS / TO-BE)', 'Stakeholder Management', 'Workshop Facilitation', 'BPR', 'Root Cause Analysis', 'UAT Coordination'], gradient: 'from-teal-50 to-emerald-50', borderColor: 'hover:border-teal-200' },
  { category: 'Process & Methodologies', skills: ['Agile', 'Scrum', 'Kanban', 'Waterfall', 'SDLC', 'Scrum Ceremonies', 'Backlog Grooming', 'Sprint Planning'], gradient: 'from-amber-50 to-orange-50', borderColor: 'hover:border-amber-200' },
  { category: 'Tools & Collaboration', skills: ['Jira', 'Confluence', 'Azure DevOps', 'Microsoft Visio', 'Lucidchart', 'Miro', 'SharePoint', 'MS Office Suite', 'Figma (Wireframing)'], gradient: 'from-sky-50 to-blue-50', borderColor: 'hover:border-sky-200' },
  { category: 'Visualization & BI Tools', skills: ['Power BI', 'Tableau', 'Looker', 'Excel Dashboards', 'Report Automation'], gradient: 'from-rose-50 to-pink-50', borderColor: 'hover:border-rose-200' },
  { category: 'Data & Integration Concepts', skills: ['ETL Processes', 'Data Mapping', 'APIs (REST/SOAP Basics)', 'Data Warehousing Concepts', 'Data Governance', 'Data Quality Frameworks'], gradient: 'from-emerald-50 to-green-50', borderColor: 'hover:border-emerald-200' },
  { category: 'Enterprise Systems & Platforms', skills: ['Salesforce', 'ServiceNow', 'SAP', 'Oracle', 'Microsoft Dynamics 365', 'Workday'], gradient: 'from-indigo-50 to-blue-50', borderColor: 'hover:border-indigo-200' },
  { category: 'Testing & QA Support', skills: ['Test Planning', 'Test Case Design', 'Test Execution', 'Regression Testing', 'Defect Tracking', 'UAT Support'], gradient: 'from-slate-50 to-gray-50', borderColor: 'hover:border-slate-200' },
];

const softSkills = [
  { icon: LineChart, name: 'Data Storytelling', color: 'text-blue-500 bg-blue-50 border-blue-100' },
  { icon: Lightbulb, name: 'Problem Solving', color: 'text-amber-500 bg-amber-50 border-amber-100' },
  { icon: Target, name: 'Strategic Thinking', color: 'text-teal-500 bg-teal-50 border-teal-100' },
  { icon: Users, name: 'Stakeholder Collaboration', color: 'text-emerald-500 bg-emerald-50 border-emerald-100' },
  { icon: Database, name: 'Attention to Detail', color: 'text-rose-500 bg-rose-50 border-rose-100' },
  { icon: Workflow, name: 'Process Thinking', color: 'text-sky-500 bg-sky-50 border-sky-100' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-white relative overflow-hidden noise-overlay">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">My Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Skills & Expertise</h2>
        </AnimatedSection>

        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.map((cat, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className={`group h-full rounded-2xl p-6 bg-gradient-to-br ${cat.gradient} border border-gray-200/60 ${cat.borderColor} hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300`}>
                  <h4 className="font-display font-bold text-gray-900 text-[15px] mb-4">{cat.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={j}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="px-3 py-1.5 rounded-lg text-[13px] font-medium text-gray-700 bg-white/80 border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="mb-8">
          <h3 className="font-display text-xl font-bold text-gray-900">Soft Skills</h3>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {softSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl p-5 bg-white border border-gray-200/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300 text-center group cursor-default"
                >
                  <div className={`w-11 h-11 rounded-xl ${skill.color} border flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon size={18} />
                  </div>
                  <h4 className="font-medium text-gray-600 text-[13px]">{skill.name}</h4>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
