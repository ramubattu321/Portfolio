import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';

const roles = ['Data Scientist', 'Data Analyst', 'ML Engineer', 'BI Specialist'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-first lg:order-last"
          >
            <div className="relative">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
                <img
                  src="https://i.postimg.cc/cCZdhQ8z/image-606a6029.png"
                  alt="Ramu Battu"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3">
                <p className="text-xs text-gray-500 font-medium">Fresno, California</p>
                <p className="text-sm font-bold text-gray-900">CSU Fresno</p>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Available for Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
            >
              Hi, I'm a<br />
              <span className="relative inline-block">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-900"
                >
                  {roles[roleIdx]}
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg"
            >
              3 years building ML models, LLM/RAG pipelines, and data products that drive business decisions. Published researcher @ CRC Press.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
              >
                Contact Us
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="px-7 py-3.5 text-gray-900 rounded-full font-semibold transition-all hover:scale-105 border border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              >
                View Projects
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3"
            >
              {[
                { href: 'https://www.linkedin.com/in/ramu-battu-01a9a336a/', icon: Linkedin },
                { href: 'https://github.com/ramubattu321', icon: Github },
                { href: 'mailto:ramuusa61@gmail.com', icon: Mail },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-12 border-t border-gray-100"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '$250M+', label: 'Data Processed' },
            { value: '2', label: 'CRC Press Publications' },
            { value: '3', label: 'Research Presentations' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
