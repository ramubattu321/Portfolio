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
    <section id="about" className="py-28 bg-zinc-950 relative overflow-hidden noise-overlay">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-[13px] font-semibold text-teal-400 uppercase tracking-wider mb-3">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get to Know Me
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="space-y-4">
            {[
              {
                content: <>I'm a <span className="font-semibold text-white">Business Analyst</span> with <span className="font-semibold text-white">4+ years of experience</span> across banking, healthcare, and consulting. I like taking messy, complicated requirements and turning them into something a team can actually build and test.</>,
                delay: 0,
              },
              {
                content: <>At <span className="font-semibold text-white">Bank of America</span>, I worked on payments and fraud/AML requirements — writing user stories, mapping data flows, and running UAT so releases went out with fewer surprises. Before that, I did similar work in healthcare at <span className="font-semibold text-white">Cognizant</span> and in consulting at <span className="font-semibold text-white">Gautam Joshi & Co.</span>, primarily focused on requirements gathering, stakeholder workshops, and reporting.</>,
                delay: 0.08,
              },
              {
                content: <>Tools I use day to day: <span className="font-semibold text-white">Jira, Confluence, SQL, Power BI, Tableau, Salesforce, and Visio</span>. I'm comfortable working in Agile, Scrum, and Waterfall environments, and I've also published research with <span className="font-semibold text-white">CRC Press</span>.</>,
                delay: 0.16,
              },
              {
                content: <>I hold a <span className="font-semibold text-white">Master's in Industrial Technology from California State University, Fresno</span>, and I'm certified in Google Data Analytics and GA4. Open to full-time Business Analyst roles — happy to connect.</>,
                delay: 0.24,
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={item.delay}>
                <div className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_rgba(20,184,166,0.08)] hover:border-teal-500/20 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-gray-400 leading-[1.7] text-[15px]">{item.content}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.1}>
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.2)] h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/15 to-transparent rounded-full -translate-y-1/3 translate-x-1/3" />
              <h3 className="relative font-display text-lg font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500/15 to-emerald-500/15 rounded-xl flex items-center justify-center border border-teal-500/20 shadow-[0_2px_8px_rgba(20,184,166,0.15)]">
                  <GraduationCap className="text-teal-400" size={18} />
                </div>
                Education
              </h3>
              <div className="relative space-y-7">
                <div className="relative pl-6 border-l-2 border-teal-500/30">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-teal-400 rounded-full ring-4 ring-teal-500/10" />
                  <h4 className="font-semibold text-white text-[15px]">Master's Degree, Industrial Technology</h4>
                  <p className="text-teal-400 text-sm font-medium mt-0.5">California State University, Fresno</p>
                  <p className="text-gray-500 text-[13px] mt-1.5 flex items-center gap-1.5">
                    <Calendar size={12} /> Dec 2026
                  </p>
                  <p className="text-gray-500 text-[13px] mt-1">GPA: 3.77/4.0 - NRTW Scholar</p>
                  <p className="text-gray-500 text-[13px] mt-1.5"><span className="font-medium text-gray-400">Focus:</span> Business Analysis, Requirements Engineering, Data Analytics, Process Improvement, Reporting</p>
                  <p className="text-gray-500 text-[13px] mt-1.5">Published researcher — CRC Press, Taylor & Francis Group.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-white/15">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-gray-600 rounded-full ring-4 ring-white/5" />
                  <h4 className="font-semibold text-white text-[15px]">Bachelor of Engineering</h4>
                  <p className="text-gray-400 text-sm font-medium mt-0.5">Matrusri Engineering College, Osmania University</p>
                  <p className="text-gray-500 text-[13px] mt-1.5 flex items-center gap-1.5">
                    <MapPin size={12} /> Hyderabad, India - Dec 2024
                  </p>
                  <p className="text-gray-500 text-[13px] mt-1">GPA: 3.0/4.0</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.2)] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />

            <h3 className="relative font-display text-lg font-bold text-white mb-10 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500/15 to-emerald-500/15 rounded-xl flex items-center justify-center border border-teal-500/20 shadow-[0_2px_8px_rgba(20,184,166,0.15)]">
                <Briefcase className="text-teal-400" size={18} />
              </div>
              Professional Experience
            </h3>

            <div className="relative space-y-10">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-500/40 via-teal-500/20 to-transparent hidden md:block" />

              {[
                {
                  title: 'Business Analyst · Internship',
                  company: 'Bank of America',
                  period: 'Jan 2026 - Sept 2026',
                  type: 'Charlotte, NC · On-site',
                  primary: true,
                  bullets: [
                    'Analyzed payments workflows with SQL and Visio, documenting data flows, controls, and exceptions that strengthened banking compliance reviews and improved operational readiness for stakeholders.',
                    'Refined fraud and AML requirements in Jira, aligning user stories, acceptance criteria, and risk rules to accelerate sprint planning and QA validation cycles reliably.',
                    'Documented regulatory reporting processes in Confluence, mapping KYC data needs and reconciliation steps that enhanced traceability for audit preparation teams and release approvals consistently.',
                    'Validated UAT scenarios and dashboards with Excel and Power BI, improving defect resolution, stakeholder sign-off, and release confidence across financial platforms during implementation cycles.',
                  ],
                },
                {
                  title: 'Business Analyst · Full-time',
                  company: 'Cognizant',
                  period: 'Jan 2023 - Dec 2024',
                  type: 'Hyderabad, India · Hybrid',
                  primary: true,
                  bullets: [
                    'Analyzed clinical claims workflows with SQL and process mapping, uncovering requirement gaps and improving reimbursement, compliance, and operational decision readiness for healthcare stakeholders consistently.',
                    'Documented business requirements, user stories, and acceptance criteria in Jira, enabling QA teams to validate healthcare solutions against prioritized stakeholder needs during iterative delivery.',
                    'Translated HIPAA, EMR, and payer mix requirements into Confluence documentation, strengthening clinical reporting traceability and reducing ambiguity across delivery teams for implementation readiness outcomes.',
                    'Validated UAT scenarios, test plans, and data quality checks with Excel, improving defect triage and supporting reliable reimbursement process adoption for healthcare operations teams.',
                  ],
                },
                {
                  title: 'Business Analyst · Self-employed',
                  company: 'Gautam Joshi & Co. LLP, Chartered Accountants',
                  period: 'Apr 2021 - Dec 2022',
                  type: 'Suryapet, India · Remote',
                  primary: false,
                  bullets: [
                    'Facilitated stakeholder interviews and workshops with Jira and Miro, converting cross-functional needs into actionable user stories for enterprise implementation teams and measurable delivery alignment.',
                    'Optimized ERP and CRM requirement traceability with Salesforce and SAP documentation, improving solution design clarity and reducing rework across consulting engagements for client stakeholders.',
                    'Automated reporting workflows with Power BI, Tableau, and Power Query, enhancing KPI visibility and enabling faster data-driven decisions across operations teams during transformation initiatives.',
                    'Integrated change management, user training, and validation planning with SDLC practices, improving adoption readiness and strengthening post-implementation support outcomes for distributed consulting client teams.',
                  ],
                },
              ].map((job, i) => (
                <AnimatedSection key={i} delay={0.05 + i * 0.12}>
                  <div className="relative md:pl-10">
                    <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 ${
                      job.primary ? 'border-teal-400 bg-teal-500/10' : 'border-gray-600 bg-white/5'
                    } hidden md:flex items-center justify-center shadow-sm`}>
                      <div className={`w-2 h-2 rounded-full ${job.primary ? 'bg-teal-400' : 'bg-gray-600'}`} />
                    </div>

                    <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-[16px] font-semibold text-white flex items-center gap-2">
                          {job.title}
                          {job.primary && <ArrowRight size={14} className="text-teal-400" />}
                        </h4>
                        <p className={`${job.primary ? 'text-teal-400' : 'text-gray-400'} font-medium text-sm`}>{job.company}</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-gray-500 text-[13px]">{job.period}</p>
                        <span className={`inline-block px-2.5 py-0.5 mt-1 rounded-full text-[11px] font-medium ${
                          job.primary ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-white/5 text-gray-400 border border-white/10'
                        }`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-gray-400 text-[14px] leading-relaxed">
                          <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${job.primary ? 'bg-teal-400' : 'bg-gray-600'}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
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
