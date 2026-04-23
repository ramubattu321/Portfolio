import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

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

function Card3D({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [transform, setTransform] = useState('');
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale3d(1.02, 1.02, 1.02)`);
  };
  return (
    <div className={className} style={{ transform, transition: 'transform 0.15s ease-out' }}
      onMouseMove={handleMove} onMouseLeave={() => setTransform('')}>
      {children}
    </div>
  );
}

const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    color: 'sky',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/E2XU0VP50XXP',
  },
  {
    title: 'Microsoft Office Specialist: Power BI Certification',
    issuer: 'Simplilearn',
    color: 'emerald',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODc3ODg0NF84OTc4NjI0MTc1NTA5MTQzMTgwOC5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ',
  },
  {
    title: 'Microsoft Office Specialist: Excel Certification',
    issuer: 'Simplilearn',
    color: 'teal',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODYwNjkwNl84OTc4NjI0MTc1MjIwMDA3MDczMi5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ',
  },
  {
    title: 'Python for Data Analysis',
    issuer: 'IBM',
    color: 'amber',
    url: 'https://courses.cognitiveclass.ai/certificates/d855787e10ef45aeb281146fee7a48b4',
  },
  {
    title: 'SQL Fundamentals of Database',
    issuer: 'Simplilearn',
    color: 'orange',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzI0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODc0MjQyNF84OTc4NjI0MTc1NDQyODk1ODc0NC5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ%3D%3D',
  },
];

const colorMap: Record<string, { gradFrom: string; badge: string; border: string; iconBg: string }> = {
  sky: { gradFrom: 'from-sky-500', badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20', border: 'border-sky-500/20 hover:border-sky-500/40', iconBg: 'bg-sky-500/10' },
  emerald: { gradFrom: 'from-emerald-500', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', border: 'border-emerald-500/20 hover:border-emerald-500/40', iconBg: 'bg-emerald-500/10' },
  teal: { gradFrom: 'from-teal-500', badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20', border: 'border-teal-500/20 hover:border-teal-500/40', iconBg: 'bg-teal-500/10' },
  amber: { gradFrom: 'from-amber-500', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20', border: 'border-amber-500/20 hover:border-amber-500/40', iconBg: 'bg-amber-500/10' },
  orange: { gradFrom: 'from-orange-500', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', border: 'border-orange-500/20 hover:border-orange-500/40', iconBg: 'bg-orange-500/10' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            Professional Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-teal-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Certified expertise in data analysis, business intelligence, and technical skills
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const c = colorMap[cert.color];
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Card3D className={`h-full rounded-2xl border ${c.border} bg-slate-900/50 overflow-hidden transition-shadow hover:shadow-xl hover:shadow-slate-950/50`}>
                  <div className={`h-24 bg-gradient-to-br ${c.gradFrom} to-slate-900 flex items-center justify-center relative`}>
                    <div className={`w-14 h-14 rounded-xl ${c.iconBg} flex items-center justify-center backdrop-blur-sm border border-white/10`}>
                      <Award className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={16} />
                      <span className="text-emerald-400 text-xs font-medium">Verified</span>
                    </div>
                    <h3 className="font-semibold text-white mb-1 leading-tight">{cert.title}</h3>
                    <p className="text-sky-400 text-sm font-medium mb-5">{cert.issuer}</p>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border ${c.badge} hover:scale-105 transition-transform`}
                    >
                      View Certificate <ExternalLink size={14} />
                    </a>
                  </div>
                </Card3D>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
