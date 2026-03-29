import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer",
    type: "Intern",
    company: "ModelSuite AI",
    period: "Aug 2025 – Nov 2025",
    location: "Remote",
    icon: Briefcase,
    bullets: [
      "Developed and maintained backend services and RESTful APIs using Node.js",
      "Designed database schemas with MongoDB and implemented Redis caching for improved latency",
      "Email bulk invitation for agency onboarding using nodemailer and redis and also used message queues for asynchronous processing of emails",
      "Wrote comprehensive unit and integration tests achieving high code coverage",
    ],
    tech: ["Node.js", "Redis", "Docker", "GitHub Actions","MongoDB"],
  },
];

const education = [
  {
    degree: "Bachelor's in Information Technology",
    school: "CMS College of Science and Commerce",
    period: "2022 – 2025",
    icon: GraduationCap,
    details: "Focused on software engineering, data structures, algorithms, and database systems.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-28 gradient-subtle relative overflow-hidden">
    <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full gradient-bg opacity-[0.04] blur-3xl" />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-heading mb-12 cursor-default">
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">My journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-10">
        {/* Work experience — main column */}
        <div>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-card z-10">
                      <exp.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1 gradient-card card-inset rounded-xl p-6 hover:shadow-elevated transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                      <span className="text-xs px-2.5 py-1 rounded-full gradient-bg text-primary-foreground font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="font-semibold text-primary mb-3">{exp.company}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-2.5 text-sm text-muted-foreground mb-5">
                      {exp.bullets.map((b, j) => (
                        <motion.li
                          key={j}
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + j * 0.06 }}
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-secondary text-muted-foreground border border-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education block (stacked under experiences) */}
        <motion.div
          className="space-y-6 mt-12"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-4">Education</h3>
          {education.map((edu) => (
            <div key={edu.school} className="gradient-card card-inset rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <edu.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
              <p className="text-sm text-primary font-medium mb-2">{edu.school}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 mb-3">
                <Calendar className="w-3 h-3" />
                {edu.period}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{edu.details}</p>
            </div>
          ))}

          {/* Extra CTA card */}
          <div className="gradient-card card-inset rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground mb-3">Want to know more about my journey?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors"
            >
              Let's connect
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;