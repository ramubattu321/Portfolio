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
  { category: 'Data Analysis & Reporting', skills: ['SQL', 'Advanced Excel', 'Pivot Tables', 'Power Query', 'VLOOKUP/XLOOKUP', 'Data Validation', 'Data Profiling', 'KPI Definition', 'Dashboarding', 'Ad-hoc Reporting', 'Trend Analysis'], gradient: 'from-blue-500/10 to-cyan-500/10', borderColor: 'hover:border-blue-500/30' },
  { category: 'Business Analysis & Requirements', skills: ['Requirements Elicitation', 'BRD', 'FRD', 'User Stories', 'Epics', 'Acceptance Criteria', 'Gap Analysis', 'Impact Analysis', 'Process Mapping (AS-IS / TO-BE)', 'Stakeholder Management', 'Workshop Facilitation', 'BPR', 'Root Cause Analysis', 'UAT Coordination'], gradient: 'from-teal-500/10 to-emerald-500/10', borderColor: 'hover:border-teal-500/30' },
  { category: 'Process & Methodologies', skills: ['Agile', 'Scrum', 'Kanban', 'Waterfall', 'SDLC', 'Scrum Ceremonies', 'Backlog Grooming', 'Sprint Planning'], gradient: 'from-amber-500/10 to-orange-500/10', borderColor: 'hover:border-amber-500/30' },
  { category: 'Tools & Collaboration', skills: ['Jira', 'Confluence', 'Azure DevOps', 'Microsoft Visio', 'Lucidchart', 'Miro', 'SharePoint', 'MS Office Suite', 'Figma (Wireframing)'], gradient: 'from-sky-500/10 to-blue-500/10', borderColor: 'hover:border-sky-500/30' },
  { category: 'Visualization & BI Tools', skills: ['Power BI', 'Tableau', 'Looker', 'Excel Dashboards', 'Report Automation'], gradient: 'from-rose-500/10 to-pink-500/10', borderColor: 'hover:border-rose-500/30' },
  { category: 'Data & Integration Concepts', skills: ['ETL Processes', 'Data Mapping', 'APIs (REST/SOAP Basics)', 'Data Warehousing Concepts', 'Data Governance', 'Data Quality Frameworks'], gradient: 'from-emerald-500/10 to-green-500/10', borderColor: 'hover:border-emerald-500/30' },
  { category: 'Enterprise Systems & Platforms', skills: ['Salesforce', 'ServiceNow', 'SAP', 'Oracle', 'Microsoft Dynamics 365', 'Workday'], gradient: 'from-indigo-500/10 to-blue-500/10', borderColor: 'hover:border-indigo-500/30' },
  { category: 'Testing & QA Support', skills: ['Test Planning', 'Test Case Design', 'Test Execution', 'Regression Testing', 'Defect Tracking', 'UAT Support'], gradient: 'from-slate-500/10 to-gray-500/10', borderColor: 'hover:border-slate-500/30' },
];

const softSkills = [
  { icon: LineChart, name: 'Data Storytelling', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  { icon: Lightbulb, name: 'Problem Solving', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { icon: Target, name: 'Strategic Thinking', color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' },
  { icon: Users, name: 'Stakeholder Collaboration', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  { icon: Database, name: 'Attention to Detail', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
  { icon: Workflow, name: 'Process Thinking', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-black relative overflow-hidden noise-overlay">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-400 uppercase tracking-wider mb-3">My Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">Skills & Expertise</h2>
        </AnimatedSection>

        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.map((cat, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className={`group h-full rounded-2xl p-6 bg-gradient-to-br ${cat.gradient} border border-white/10 ${cat.borderColor} hover:shadow-[0_10px_40px_rgba(20,184,166,0.08)] hover:-translate-y-0.5 transition-all duration-300`}>
                  <h4 className="font-display font-bold text-white text-[15px] mb-4">{cat.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={j}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="px-3 py-1.5 rounded-lg text-[13px] font-medium text-gray-300 bg-white/5 border border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.2)] cursor-default"
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
          <h3 className="font-display text-xl font-bold text-white">Soft Skills</h3>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {softSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl p-5 bg-white/[0.03] border border-white/10 hover:shadow-[0_12px_40px_rgba(20,184,166,0.08)] hover:border-white/20 transition-shadow duration-300 text-center group cursor-default"
                >
                  <div className={`w-11 h-11 rounded-xl ${skill.color} border flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon size={18} />
                  </div>
                  <h4 className="font-medium text-gray-400 text-[13px]">{skill.name}</h4>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
