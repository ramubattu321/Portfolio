import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,184,166,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              RB<span className="text-teal-400">.</span>
            </h3>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-5">
              Business Analyst | Published Researcher @ CRC Press | SQL, Power BI, Tableau, Jira | MS Industrial Technology @ CSU Fresno
            </p>
            <div className="flex gap-2">
              {[
                { href: 'https://www.linkedin.com/in/ramu-battu-01a9a336a/', icon: Linkedin },
                { href: 'mailto:ramubattu999@gmail.com', icon: Mail },
                { href: 'https://github.com/ramubattu321', icon: Github },
              ].map(({ href, icon: Icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-teal-500/40 hover:bg-teal-500/10 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-[13px] mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'About', 'Skills', 'Certifications', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item === 'Projects' ? 'portfolio' : item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-[13px]"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-[13px] mb-4">Services</h4>
            <ul className="space-y-2.5 text-gray-400 text-[13px]">
              <li>Requirements Elicitation</li>
              <li>Dashboard Development</li>
              <li>Financial Reporting</li>
              <li>Process Mapping</li>
              <li>UAT Coordination</li>
              <li>Stakeholder Collaboration</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-gray-500 text-[13px]">
            Ramu Battu {currentYear}. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -3 }}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-teal-500/40 text-gray-400 hover:text-teal-400 transition-all"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
