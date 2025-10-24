import { ArrowRight, Linkedin, Mail, Sparkles, TrendingUp, Database, Github } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-yellow-400 to-orange-400 opacity-90"></div>

      <div className="absolute top-20 right-20 w-32 h-32 rounded-full border-4 border-white/30"></div>
      <div className="absolute top-40 right-60 w-4 h-4 bg-yellow-300 rounded-full"></div>
      <div className="absolute bottom-40 right-32 w-6 h-6 bg-white/40 rounded-full"></div>

      <svg className="absolute top-32 right-1/4 w-24 h-24 text-white/20" viewBox="0 0 100 100">
        <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="3"/>
      </svg>
      <svg className="absolute bottom-32 left-1/4 w-32 h-32 text-white/15" viewBox="0 0 100 100">
        <path d="M20,80 Q40,20 60,80" fill="none" stroke="currentColor" strokeWidth="2"/>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hello, I'm
            </h1>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ramu Battu An
            </h2>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Data Analyst
            </h2>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              Transforming data into actionable insights through financial analysis, data storytelling, and business intelligence.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-indigo-900 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="flex items-center gap-3 px-6 py-4 text-white font-semibold transition-all hover:scale-105"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight size={20} />
                </div>
                Watch Intro
              </button>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-80"></div>

            <div className="absolute top-16 left-16 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute top-32 right-24 w-20 h-20 rounded-full border-2 border-white/30"></div>
            <div className="absolute bottom-32 right-16 w-4 h-4 bg-yellow-200 rounded-full"></div>

            <div className="relative group z-10">
              <div className="absolute top-8 right-8 bg-white px-6 py-3 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-indigo-600">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>

              <div className="relative w-80 h-80 rounded-full shadow-2xl overflow-hidden border-8 border-white">
                <img
                  src="https://i.postimg.cc/0N5fkdwD/Whats-App-Image-2025-10-23-at-9-19-25-AM.jpg"
                  alt="Ramu Battu"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-xl shadow-xl flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700 ml-2">Best Customer</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
