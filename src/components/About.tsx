import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
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

export default function About() {
  return (
    <section id="about" className="py-28 bg-gray-50/50 relative overflow-hidden noise-overlay">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-600 uppercase tracking-wider mb-3">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Get to Know Me
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="space-y-4">
            {[
              {
                content: <>I'm a <span className="font-semibold text-gray-900">Business Analyst</span> with <span className="font-semibold text-gray-900">4+ years of experience</span> across banking, healthcare, and consulting. I like taking messy, complicated requirements and turning them into something a team can actually build and test.</>,
                delay: 0,
              },
              {
                content: <>At <span className="font-semibold text-gray-900">Bank of America</span>, I worked on payments and fraud/AML requirements — writing user stories, mapping data flows, and running UAT so releases went out with fewer surprises. Before that, I did similar work in healthcare at <span className="font-semibold text-gray-900">Cognizant</span> and in consulting at <span className="font-semibold text-gray-900">Gautam Joshi & Co.</span>, primarily focused on requirements gathering, stakeholder workshops, and reporting.</>,
                delay: 0.08,
              },
              {
                content: <>Tools I use day to day: <span className="font-semibold text-gray-900">Jira, Confluence, SQL, Power BI, Tableau, Salesforce, and Visio</span>. I'm comfortable working in Agile, Scrum, and Waterfall environments, and I've also published research with <span className="font-semibold text-gray-900">CRC Press</span>.</>,
                delay: 0.16,
              },
              {
                content: <>I hold a <span className="font-semibold text-gray-900">Master's in Industrial Technology from California State University, Fresno</span>, and I'm certified in Google Data Analytics and GA4. Open to full-time Business Analyst roles — happy to connect.</>,
                delay: 0.24,
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={item.delay}>
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-gray-600 leading-[1.7] text-[15px]">{item.content}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.1}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-50 to-transparent rounded-full -translate-y-1/3 translate-x-1/3" />
              <h3 className="relative font-display text-lg font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl flex items-center justify-center border border-teal-100 shadow-[0_2px_8px_rgba(20,184,166,0.1)]">
                  <GraduationCap className="text-teal-600" size={18} />
                </div>
                Education
              </h3>
              <div className="relative space-y-7">
                <div className="relative pl-6 border-l-2 border-teal-200">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-teal-500 rounded-full ring-4 ring-teal-50" />
                  <h4 className="font-semibold text-gray-900 text-[15px]">Master's Degree, Industrial Technology</h4>
                  <p className="text-teal-600 text-sm font-medium mt-0.5">California State University, Fresno</p>
                  <p className="text-gray-400 text-[13px] mt-1.5 flex items-center gap-1.5">
                    <Calendar size={12} /> Dec 2026
                  </p>
                  <p className="text-gray-500 text-[13px] mt-1">GPA: 3.77/4.0 - NRTW Scholar</p>
                  <p className="text-gray-500 text-[13px] mt-1.5"><span className="font-medium text-gray-600">Focus:</span> Business Analysis, Requirements Engineering, Data Analytics, Process Improvement, Reporting</p>
                  <p className="text-gray-500 text-[13px] mt-1.5">Published researcher — CRC Press, Taylor & Francis Group.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-gray-300 rounded-full ring-4 ring-gray-50" />
                  <h4 className="font-semibold text-gray-900 text-[15px]">Bachelor of Engineering</h4>
                  <p className="text-gray-600 text-sm font-medium mt-0.5">Matrusri Engineering College, Osmania University</p>
                  <p className="text-gray-400 text-[13px] mt-1.5 flex items-center gap-1.5">
                    <MapPin size={12} /> Hyderabad, India - Dec 2024
                  </p>
                  <p className="text-gray-500 text-[13px] mt-1">GPA: 3.0/4.0</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-50/50 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />

            <h3 className="relative font-display text-lg font-bold text-gray-900 mb-10 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl flex items-center justify-center border border-teal-100 shadow-[0_2px_8px_rgba(20,184,166,0.1)]">
                <Briefcase className="text-teal-600" size={18} />
              </div>
              Professional Experience
            </h3>

            <div className="relative space-y-10">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-300 via-teal-200 to-transparent hidden md:block" />

              {[
                {
                  title: 'Business Analyst',
                  company: 'Bank of America',
                  period: 'Jan 2026 - July 2026',
                  type: 'Charlotte, NC',
                  primary: true,
                  bullets: [
                    'Gathered and documented requirements for payments and fraud/AML initiatives, translating business needs into user stories, acceptance criteria, and process flows in Jira and Confluence.',
                    'Mapped end-to-end data flows and system interactions in Visio, giving stakeholders a clear picture of upstream and downstream impacts before development began.',
                    'Coordinated UAT cycles across business and tech teams, writing test cases, tracking defects, and validating that releases met acceptance criteria before go-live.',
                    'Partnered with developers, QA, and compliance stakeholders to resolve requirement gaps early, reducing rework and keeping releases on schedule with fewer production surprises.',
                  ],
                },
                {
                  title: 'Business Analyst',
                  company: 'Cognizant',
                  period: 'Jan 2023 - Dec 2024',
                  type: 'Hyderabad, India',
                  primary: true,
                  bullets: [
                    'Led requirements gathering sessions and stakeholder workshops for healthcare clients, capturing business needs and translating them into functional specifications and user stories.',
                    'Authored BRDs, FRDs, and process flow diagrams in Visio and Confluence, giving development teams clear, traceable requirements that reduced ambiguity and rework.',
                    'Built Power BI and Tableau dashboards to support reporting needs, working with SQL to validate data and ensure KPIs matched stakeholder definitions.',
                    'Facilitated backlog grooming and sprint planning in Jira, prioritizing user stories with product owners and tracking delivery against sprint commitments.',
                  ],
                },
                {
                  title: 'Business Analyst',
                  company: 'Gautam Joshi & Co. LLP',
                  period: 'Apr 2021 - Dec 2022',
                  type: 'Hybrid',
                  primary: false,
                  bullets: [
                    'Gathered requirements from partners and auditors, documenting financial reporting workflows and translating them into actionable specifications for the delivery team.',
                    'Conducted stakeholder workshops to align on KPI definitions, reporting cadences, and exception-handling rules across accounting engagements.',
                    'Built Power BI dashboards tracking budget vs. actual financial KPIs, giving leadership real-time visibility into engagement performance.',
                    'Documented business rules and data lineage in Confluence, ensuring audit-ready output and clear traceability from source records to final reports.',
                  ],
                },
              ].map((job, i) => (
                <AnimatedSection key={i} delay={0.05 + i * 0.12}>
                  <div className="relative md:pl-10">
                    <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 ${
                      job.primary ? 'border-teal-500 bg-teal-50' : 'border-gray-300 bg-gray-50'
                    } hidden md:flex items-center justify-center shadow-sm`}>
                      <div className={`w-2 h-2 rounded-full ${job.primary ? 'bg-teal-500' : 'bg-gray-300'}`} />
                    </div>

                    <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-[16px] font-semibold text-gray-900 flex items-center gap-2">
                          {job.title}
                          {job.primary && <ArrowRight size={14} className="text-teal-500" />}
                        </h4>
                        <p className={`${job.primary ? 'text-teal-600' : 'text-gray-500'} font-medium text-sm`}>{job.company}</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-gray-400 text-[13px]">{job.period}</p>
                        <span className={`inline-block px-2.5 py-0.5 mt-1 rounded-full text-[11px] font-medium ${
                          job.primary ? 'bg-teal-50 text-teal-600 border border-teal-100' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-gray-500 text-[14px] leading-relaxed">
                          <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${job.primary ? 'bg-teal-400' : 'bg-gray-300'}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {'image' in job && job.image && (
                      <motion.a
                        href={job.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="inline-block mt-5 max-w-[220px] rounded-xl overflow-hidden border border-gray-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 bg-gray-50 group"
                      >
                        <img
                          src={job.image}
                          alt={'imageAlt' in job ? (job.imageAlt as string) : ''}
                          loading="lazy"
                          className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </motion.a>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
