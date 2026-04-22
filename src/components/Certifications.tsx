import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/E2XU0VP50XXP?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button',
  },
  {
    title: 'Microsoft Office Specialist: Power BI Certification',
    issuer: 'Simplilearn',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODc3ODg0NF84OTc4NjI0MTc1NTA5MTQzMTgwOC5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8778844_89786241755091431808.png&_branch_match_id=1423135744260828079&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1g82iiiK9A5w9wtLsq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwBQWBW8PwAAAA%3D%3D',
  },
  {
    title: 'Microsoft Office Specialist: Excel Certification',
    issuer: 'Simplilearn',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODYwNjkwNl84OTc4NjI0MTc1MjIwMDA3MDczMi5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8606906_89786241752200070732.png&_branch_match_id=1423135744260828079&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1i9yL%2FLNi%2FKwCAlNsq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwCAradFPwAAAA%3D%3D',
  },
  {
    title: 'Python for Data Analysis',
    issuer: 'IBM',
    url: 'https://courses.cognitiveclass.ai/certificates/d855787e10ef45aeb281146fee7a48b4',
  },
  {
    title: 'SQL Fundamental of Data base',
    issuer: 'Simplilearn',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzI0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODc0MjQyNF84OTc4NjI0MTc1NDQyODk1ODc0NC5wbmciLCJ1c2VybmFtZSI6IlJBTVUgQkFUVFUifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6127%2FFundamentals-of-Database-%3A-What-is-SQL%253F%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1423135744260828079&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT3bK8%2FIILgp3DEuyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAJtq%2FYdBAAAA',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-4">
            Professional Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Certified expertise in data analysis, business intelligence, and technical skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-sky-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-sky-500/10 flex-shrink-0">
                  <Award className="text-sky-400" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-sky-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sky-400/70 text-xs font-medium mt-1">{cert.issuer}</p>
                </div>
                <CheckCircle2 className="text-emerald-400/60 flex-shrink-0" size={18} />
              </div>
              <div className="mt-auto pt-4 border-t border-white/[0.06]">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 text-xs font-medium transition-colors"
                >
                  <ExternalLink size={12} />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
