import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Mail, Github, ChevronDown } from 'lucide-react';

function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        o: Math.random() * 0.5 + 0.1,
      });
    }

    let frame: number;
    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.o})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}

const roles = ['Data Scientist', 'Data Analyst', 'ML Engineer', 'BI Specialist'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <FloatingParticles />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available for Opportunities
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
                Ramu{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
                    Battu
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-10 mb-6 overflow-hidden"
            >
              <motion.p
                key={roleIdx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-sky-400"
              >
                {roles[roleIdx]}
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              3 years building ML models, LLM/RAG pipelines, and data products that drive business decisions. Published researcher @ CRC Press · MS Data Analytics, CSU Fresno · Python · SQL · AWS · LLM/RAG
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => scrollTo('portfolio')}
                className="group flex items-center gap-2 px-7 py-3.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-sky-500/25"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 text-white rounded-xl font-semibold transition-all hover:scale-105 border border-slate-700 hover:border-sky-500/50 hover:bg-sky-500/5"
              >
                Contact Me
              </button>
              <a
                href="https://drive.google.com/drive/u/3/my-drive"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 text-sky-400 rounded-xl font-semibold transition-all hover:scale-105 border border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/5"
              >
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
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
                  className="p-3 rounded-xl border border-slate-800 hover:border-sky-500/50 text-slate-400 hover:text-sky-400 transition-all hover:scale-110 hover:bg-sky-500/5"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center order-first lg:order-last"
          >
            <div className="relative" style={{ perspective: '1000px' }}>
              <motion.div
                animate={{ rotateY: [0, 5, -5, 0], rotateX: [0, -3, 3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-teal-500/20 to-sky-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-sky-500/30 shadow-2xl shadow-sky-500/20">
                  <img
                    src="https://i.postimg.cc/cCZdhQ8z/image-606a6029.png"
                    alt="Ramu Battu"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-teal-500/10" />
                </div>
              </motion.div>

              {[
                { label: '3+ Yrs', x: -60, y: 40, delay: 1.2 },
                { label: '20+ Projects', x: 60, y: -30, delay: 1.5 },
                { label: '5+ Certs', x: 70, y: 60, delay: 1.8 },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { delay: badge.delay },
                    scale: { delay: badge.delay },
                    y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
                  }}
                  className="absolute hidden lg:block px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-sky-500/30 rounded-xl text-sm font-semibold text-sky-400 shadow-lg"
                  style={{ left: `calc(50% + ${badge.x}px)`, top: `calc(50% + ${badge.y}px)`, transform: 'translate(-50%, -50%)' }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-12 border-t border-slate-800/50"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '$250M+', label: 'Data Processed' },
            { value: '2', label: 'CRC Press Publications' },
            { value: '3', label: 'Research Presentations' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
