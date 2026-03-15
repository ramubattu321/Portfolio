import { Trophy, ExternalLink } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      title: 'Academic Merit Scholarship',
      description: 'Awarded for academic excellence in the Master\'s program. This scholarship recognizes outstanding academic performance and potential in graduate studies.',
      color: 'from-amber-500 to-amber-600',
      url: 'https://drive.google.com/file/d/1BPrLSc-tonRDX9JczdKc20fs6vpIl6OF/view'
    }
  ];

  return (
    <section id="awards" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute top-20 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 rounded-full text-sm font-semibold mb-4 border border-amber-400/40 backdrop-blur-md shadow-lg">
            Recognition
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">Awards & Achievements</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 mx-auto rounded-full shadow-lg shadow-amber-500/50 mb-6"></div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Notable honors and recognitions for academic and professional excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-3 border-2 border-slate-700/50 hover:border-amber-400 backdrop-blur-md"
            >
              <div className={`h-32 bg-gradient-to-br ${award.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <Trophy className="text-white" size={48} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start mb-3">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                </div>

                <h3 className="font-bold text-white text-lg mb-3 leading-tight group-hover:text-amber-300 transition-colors">
                  {award.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {award.description}
                </p>

                <a
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/30"
                >
                  View Award
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl border border-amber-400/40 backdrop-blur-md shadow-xl">
            <Trophy className="text-amber-400" size={32} />
            <p className="text-white font-bold text-lg">
              Dedicated to achieving excellence and recognition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
