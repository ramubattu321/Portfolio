import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, LineChart, Code, Users, Lightbulb, Target } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
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
  { icon: Target, name: 'Strategic Decision Support' },
  { icon: Users, name: 'Collaboration' },
  { icon: Database, name: 'Attention to Detail' },
  { icon: Code, name: 'Project Management' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Technical and soft skills developed across 3+ years of hands-on experience
          </p>
        </AnimatedSection>

        <div className="mb-16">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Technical Skills</h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalSkills.map((cat, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="h-full rounded-2xl p-6 bg-gray-50 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all">
                  <h4 className="font-semibold text-gray-900 mb-4">{cat.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 bg-white border border-gray-200"
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
          <h3 className="text-2xl font-bold text-gray-900 text-center">Soft Skills</h3>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {softSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="rounded-2xl p-5 bg-gray-50 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all text-center group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="text-gray-600" size={20} />
                  </div>
                  <h4 className="font-medium text-gray-700 text-sm">{skill.name}</h4>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
