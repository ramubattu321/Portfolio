import { Lightbulb, Target, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Business Planning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Target,
      title: 'Design Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Business',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'from-blue-600 to-cyan-500'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-4 h-4 bg-orange-300 rounded-full"></div>
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-indigo-200 rounded-full"></div>
      <svg className="absolute top-1/2 left-10 w-24 h-24 text-gray-200" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.3"/>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
            PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Working Process
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A systematic approach to delivering data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto shadow-xl`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-16 lg:-right-20 w-12 lg:w-16 h-0.5 bg-gradient-to-r from-indigo-300 to-transparent">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
