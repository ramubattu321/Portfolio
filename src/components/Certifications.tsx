import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, CheckCircle2, ZoomIn, X } from 'lucide-react';

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

const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    platform: 'Coursera',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~E2XU0VP50XXP/CERTIFICATE_LANDING_PAGE~E2XU0VP50XXP.jpeg',
    logo: 'G',
    logoColor: 'bg-blue-500',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/E2XU0VP50XXP',
  },
  {
    title: 'Microsoft Office Specialist: Power BI Certification',
    issuer: 'Simplilearn',
    platform: 'Simplilearn',
    image: 'https://certificates.simplicdn.net/share/8778844_89786241755091431808.png',
    logo: 'PBI',
    logoColor: 'bg-emerald-500',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODc3ODg0NF84OTc4NjI0MTc1NTA5MTQzMTgwOC5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ',
  },
  {
    title: 'Microsoft Office Specialist: Excel Certification',
    issuer: 'Simplilearn',
    platform: 'Simplilearn',
    image: 'https://certificates.simplicdn.net/share/8606906_89786241752200070732.png',
    logo: 'XL',
    logoColor: 'bg-teal-500',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODYwNjkwNl84OTc4NjI0MTc1MjIwMDA3MDczMi5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ',
  },
  {
    title: 'Python for Data Analysis',
    issuer: 'IBM',
    platform: 'Cognitive Class',
    image: 'https://cognitiveclass.ai/certificate_thumbnails/course/d855787e10ef45aeb281146fee7a48b4',
    logo: 'IBM',
    logoColor: 'bg-blue-600',
    url: 'https://courses.cognitiveclass.ai/certificates/d855787e10ef45aeb281146fee7a48b4',
  },
  {
    title: 'SQL Fundamentals of Database',
    issuer: 'Simplilearn',
    platform: 'Simplilearn',
    image: 'https://certificates.simplicdn.net/share/8742424_89786241754428958744.png',
    logo: 'SQL',
    logoColor: 'bg-orange-500',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzI0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODc0MjQyNF84OTc4NjI0MTc1NDQyODk1ODc0NC5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ%3D%3D',
  },
];

export default function Certifications() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Certified expertise in data analysis, business intelligence, and technical skills
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all">
                <div className="relative">
                  <div
                    className="relative cursor-pointer overflow-hidden"
                    onClick={() => setLightbox(cert.image)}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto object-contain bg-gray-50"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <ZoomIn className="text-gray-700" size={20} />
                      </div>
                    </div>
                  </div>

                  <div className={`absolute top-3 left-3 ${cert.logoColor} px-2.5 py-1 rounded-lg shadow-lg`}>
                    <span className="text-white text-[10px] font-bold">{cert.logo}</span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200">
                    <CheckCircle2 className="text-emerald-500" size={12} />
                    <span className="text-emerald-600 text-[10px] font-semibold">VERIFIED</span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium text-gray-400 mb-1.5">{cert.platform}</p>
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-4">Issued by {cert.issuer}</p>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X size={24} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={lightbox}
            alt="Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
