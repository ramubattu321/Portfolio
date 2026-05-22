import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
              RB<span className="text-teal-600">.</span>
            </h3>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-5">
              Data Scientist | Published Researcher @ CRC Press | Python, SQL, AWS, LLM/RAG | MS Data Analytics @ CSU Fresno
            </p>
            <div className="flex gap-2">
              {[
                { href: 'https://www.linkedin.com/in/ramu-battu-01a9a336a/', icon: Linkedin },
                { href: 'mailto:ramuusa61@gmail.com', icon: Mail },
                { href: 'https://github.com/ramubattu321', icon: Github },
              ].map(({ href, icon: Icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200/80 hover:border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-[13px] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Certifications', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item === 'Projects' ? 'portfolio' : item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-gray-700 transition-colors text-[13px]"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-[13px] mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-[13px]">
              <li>Data Analysis</li>
              <li>Business Intelligence</li>
              <li>Dashboard Development</li>
              <li>Financial Reporting</li>
              <li>A/B Testing</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200/60 gap-4">
          <p className="text-gray-400 text-[13px]">
            Ramu Battu {currentYear}. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-2.5 rounded-full bg-white border border-gray-200/80 hover:border-gray-300 text-gray-400 hover:text-gray-700 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
