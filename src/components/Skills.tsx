import { Database, LineChart, Code, Users, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const technicalSkills = [
  { category: 'Data Visualization', skills: ['Power BI', 'Tableau', 'Looker Studio', 'Excel'] },
  { category: 'Programming', skills: ['SQL', 'Python', 'Data Cleaning', 'ETL'] },
  { category: 'Business Tools', skills: ['Tally ERP', 'Salesforce CRM', 'Google Analytics'] },
  { category: 'Analysis', skills: ['Financial Analysis', 'Business Analysis', 'CRM Analytics'] },
];

const softSkills = [
  { icon: LineChart, name: 'Data Storytelling' },
  { icon: Lightbulb, name: 'Problem Solving' },
  { icon: Target, name: 'Strategic Decision Support' },
  { icon: Users, name: 'Collaboration' },
  { icon: Database, name: 'Attention to Detail' },
  { icon: Code, name: 'Project Management' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-4">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technicalSkills.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-sky-500/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                  <h4 className="font-semibold text-white">{cat.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-300 text-xs font-medium border border-sky-500/15 hover:bg-sky-500/20 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-8 text-center">Soft Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {softSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-sky-500/20 transition-colors duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/10 group-hover:bg-sky-500/15 transition-colors duration-300">
                    <Icon className="text-sky-400" size={22} />
                  </div>
                  <h4 className="font-semibold text-white text-sm">{skill.name}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
