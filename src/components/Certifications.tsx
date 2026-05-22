import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, CheckCircle2, ZoomIn, X } from 'lucide-react';

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
    <section id="certifications" className="py-28 bg-[#fafafa] relative overflow-hidden noise-overlay">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[100px] translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">Credentials</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Certifications</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group h-full rounded-2xl border border-gray-200/60 bg-white overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300"
              >
                <div className="relative">
                  <div
                    className="relative cursor-pointer overflow-hidden"
                    onClick={() => setLightbox(cert.image)}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto object-contain bg-gray-50 group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg scale-75 group-hover:scale-100">
                        <ZoomIn className="text-gray-700" size={18} />
                      </div>
                    </div>
                  </div>

                  <div className={`absolute top-3 left-3 ${cert.logoColor} px-2.5 py-1 rounded-lg shadow-md`}>
                    <span className="text-white text-[10px] font-bold">{cert.logo}</span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200/60 shadow-sm">
                    <CheckCircle2 className="text-emerald-500" size={11} />
                    <span className="text-emerald-600 text-[10px] font-bold">VERIFIED</span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">{cert.platform}</p>
                  <h3 className="font-semibold text-gray-900 text-[14px] leading-snug mb-2 group-hover:text-teal-700 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-[12px] mb-4">Issued by {cert.issuer}</p>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-[12px] font-medium text-gray-600 bg-gray-50 border border-gray-200/80 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-all"
                  >
                    View Certificate <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
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
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={22} />
          </button>
          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={lightbox}
            alt="Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
