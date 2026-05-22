import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Database, LineChart, Code, Users, Lightbulb, Target } from 'lucide-react';

function Card3D({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [transform, setTransform] = useState('');

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  return (
    <div
      className={className}
      style={{ transform, transition: 'transform 0.15s ease-out' }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform('')}
    >
      {children}
    </div>
  );
}

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const technicalSkills = [
  { category: 'Data Visualization', skills: ['Power BI', 'Tableau', 'Looker Studio', 'Excel'], color: 'sky' },
  { category: 'Programming', skills: ['SQL', 'Python', 'Data Cleaning', 'ETL'], color: 'teal' },
  { category: 'Business Tools', skills: ['Tally ERP', 'Salesforce CRM', 'Google Analytics'], color: 'emerald' },
  { category: 'Analysis', skills: ['Financial Analysis', 'Business Analysis', 'CRM Analytics'], color: 'amber' },
  { category: 'AI & LLM', skills: ['PyTorch', 'TensorFlow', 'BERT', 'LLM Fine-Tuning', 'RAG Pipelines', 'FAISS', 'HNSW', 'Hugging Face', 'Prompt Engineering'], color: 'rose' },
  { category: 'Cloud & Infrastructure', skills: ['AWS S3', 'AWS Glue', 'AWS Athena', 'EC2', 'Boto3', 'Git'], color: 'sky' },
  { category: 'ML & Statistics', skills: ['Scikit-learn', 'Gradient Boosting', 'K-Means', 'Regression', 'A/B Testing', 'Hypothesis Testing', 'SPC', 'Feature Engineering'], color: 'teal' },
];

const softSkills = [
  { icon: LineChart, name: 'Data Storytelling', color: 'sky' },
  { icon: Lightbulb, name: 'Problem Solving', color: 'emerald' },
  { icon: Target, name: 'Strategic Decision Support', color: 'teal' },
  { icon: Users, name: 'Collaboration', color: 'amber' },
  { icon: Database, name: 'Attention to Detail', color: 'rose' },
  { icon: Code, name: 'Project Management', color: 'sky' },
];

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', dot: 'bg-sky-400' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400', dot: 'bg-teal-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', dot: 'bg-amber-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', dot: 'bg-rose-400' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-teal-400 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="mb-16">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-white text-center">Technical Skills</h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((cat, i) => {
              const c = colorMap[cat.color];
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <Card3D className={`h-full rounded-2xl p-6 border ${c.border} ${c.bg} backdrop-blur-sm`}>
                    <div className="flex items-center gap-2 mb-5">
                      <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                      <h4 className="font-semibold text-white">{cat.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, j) => (
                        <span
                          key={j}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium ${c.text} bg-slate-950/60 border ${c.border} hover:scale-105 transition-transform cursor-default`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card3D>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        <AnimatedSection className="mb-8">
          <h3 className="text-2xl font-bold text-white text-center">Soft Skills</h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, i) => {
            const c = colorMap[skill.color];
            const Icon = skill.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Card3D className={`rounded-2xl p-6 border ${c.border} ${c.bg} backdrop-blur-sm group cursor-default`}>
                  <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={c.text} size={22} />
                  </div>
                  <h4 className="font-semibold text-white">{skill.name}</h4>
                </Card3D>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
