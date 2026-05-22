import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, LineChart, Code, Users, Lightbulb, Target } from 'lucide-react';

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
  { category: 'Data Visualization', skills: ['Power BI', 'Tableau', 'Looker Studio', 'Excel'] },
  { category: 'Programming', skills: ['SQL', 'Python', 'Data Cleaning', 'ETL'] },
  { category: 'Business Tools', skills: ['Tally ERP', 'Salesforce CRM', 'Google Analytics'] },
  { category: 'Analysis', skills: ['Financial Analysis', 'Business Analysis', 'CRM Analytics'] },
  { category: 'AI & LLM', skills: ['PyTorch', 'TensorFlow', 'BERT', 'LLM Fine-Tuning', 'RAG Pipelines', 'FAISS', 'HNSW', 'Hugging Face', 'Prompt Engineering'] },
  { category: 'Cloud & Infrastructure', skills: ['AWS S3', 'AWS Glue', 'AWS Athena', 'EC2', 'Boto3', 'Git'] },
  { category: 'ML & Statistics', skills: ['Scikit-learn', 'Gradient Boosting', 'K-Means', 'Regression', 'A/B Testing', 'Hypothesis Testing', 'SPC', 'Feature Engineering'] },
];

const softSkills = [
  { icon: LineChart, name: 'Data Storytelling' },
  { icon: Lightbulb, name: 'Problem Solving' },
  { icon: Target, name: 'Strategic Thinking' },
  { icon: Users, name: 'Collaboration' },
  { icon: Database, name: 'Attention to Detail' },
  { icon: Code, name: 'Project Management' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">My Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Skills & Expertise</h2>
        </AnimatedSection>

        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.map((cat, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="h-full rounded-2xl p-6 bg-[#fafafa] border border-gray-100/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-200 transition-all duration-300">
                  <h4 className="font-display font-semibold text-gray-900 text-[15px] mb-4">{cat.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-lg text-[13px] font-medium text-gray-600 bg-white border border-gray-200/80 hover:border-gray-300 transition-colors"
                      >
                        {skill}
                      </span>
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
                <div className="rounded-2xl p-5 bg-[#fafafa] border border-gray-100/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-200 transition-all duration-300 text-center group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center mb-3 mx-auto group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                    <Icon className="text-gray-500 group-hover:text-teal-600 transition-colors" size={18} />
                  </div>
                  <h4 className="font-medium text-gray-600 text-[13px]">{skill.name}</h4>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
