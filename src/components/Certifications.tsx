import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

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
    setTransform(`perspective(600px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale3d(1.02, 1.02, 1.02)`);
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
    platform: 'Coursera',
    color: 'sky',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    logo: 'G',
    logoColor: 'bg-sky-500',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/E2XU0VP50XXP',
  },
  {
    title: 'Microsoft Office Specialist: Power BI Certification',
    issuer: 'Simplilearn',
    platform: 'Simplilearn',
    color: 'emerald',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
    logo: 'PBI',
    logoColor: 'bg-emerald-500',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODc3ODg0NF84OTc4NjI0MTc1NTA5MTQzMTgwOC5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ',
  },
  {
    title: 'Microsoft Office Specialist: Excel Certification',
    issuer: 'Simplilearn',
    platform: 'Simplilearn',
    color: 'teal',
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=600',
    logo: 'XL',
    logoColor: 'bg-teal-500',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODYwNjkwNl84OTc4NjI0MTc1MjIwMDA3MDczMi5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ',
  },
  {
    title: 'Python for Data Analysis',
    issuer: 'IBM',
    platform: 'Cognitive Class',
    color: 'amber',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    logo: 'IBM',
    logoColor: 'bg-amber-500',
    url: 'https://courses.cognitiveclass.ai/certificates/d855787e10ef45aeb281146fee7a48b4',
  },
  {
    title: 'SQL Fundamentals of Database',
    issuer: 'Simplilearn',
    platform: 'Simplilearn',
    color: 'orange',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
    logo: 'SQL',
    logoColor: 'bg-orange-500',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzI0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODc0MjQyNF84OTc4NjI0MTc1NDQyODk1ODc0NC5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ%3D%3D',
  },
];

const colorMap: Record<string, { border: string; badge: string; text: string; glow: string }> = {
  sky: { border: 'border-sky-500/20 hover:border-sky-500/40', badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20', text: 'text-sky-400', glow: 'group-hover:shadow-sky-500/10' },
  emerald: { border: 'border-emerald-500/20 hover:border-emerald-500/40', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', text: 'text-emerald-400', glow: 'group-hover:shadow-emerald-500/10' },
  teal: { border: 'border-teal-500/20 hover:border-teal-500/40', badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20', text: 'text-teal-400', glow: 'group-hover:shadow-teal-500/10' },
  amber: { border: 'border-amber-500/20 hover:border-amber-500/40', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20', text: 'text-amber-400', glow: 'group-hover:shadow-amber-500/10' },
  orange: { border: 'border-orange-500/20 hover:border-orange-500/40', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', text: 'text-orange-400', glow: 'group-hover:shadow-orange-500/10' },
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
                <Card3D className={`group h-full rounded-2xl border ${c.border} bg-slate-900/50 overflow-hidden transition-shadow hover:shadow-xl ${c.glow}`}>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-950/40" />

                      <div className={`absolute top-4 left-4 ${cert.logoColor} w-10 h-10 rounded-xl flex items-center justify-center shadow-lg`}>
                        <span className="text-white text-xs font-bold">{cert.logo}</span>
                      </div>

                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30">
                        <CheckCircle2 className="text-emerald-400" size={12} />
                        <span className="text-emerald-400 text-[10px] font-semibold">VERIFIED</span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className={`text-xs font-medium ${c.text} mb-1`}>{cert.platform}</p>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-semibold text-white text-sm leading-snug mb-2 group-hover:text-sky-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-slate-500 text-xs mb-4">Issued by {cert.issuer}</p>

                      <div className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium border ${c.badge} group-hover:scale-105 transition-transform`}>
                        View Certificate <ExternalLink size={12} />
                      </div>
                    </div>
                  </a>
                </Card3D>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
