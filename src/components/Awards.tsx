import { Trophy, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const awards = [
  {
    title: 'Academic Merit Scholarship',
    description: 'Awarded for academic excellence in the Master\'s program. This scholarship recognizes outstanding academic performance and potential in graduate studies.',
    url: 'https://drive.google.com/file/d/1BPrLSc-tonRDX9JczdKc20fs6vpIl6OF/view',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.04)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-4">
            Recognition
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Awards & Achievements</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-lg mx-auto">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-amber-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-amber-500/10">
                  <Trophy className="text-amber-400" size={24} />
                </div>
                <h3 className="font-bold text-white text-lg group-hover:text-amber-300 transition-colors">
                  {award.title}
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {award.description}
              </p>
              <a
                href={award.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 text-amber-400 rounded-xl text-sm font-medium hover:bg-amber-500/20 transition-colors border border-amber-500/20"
              >
                <ExternalLink size={14} />
                View Award
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
