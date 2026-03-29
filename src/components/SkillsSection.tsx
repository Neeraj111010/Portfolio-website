import { motion } from "framer-motion";
import { Code2, Layers, Database, FlaskConical, Wrench } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    accent: "from-blue-500/20 to-cyan-500/20",
    iconBg: "from-blue-500 to-cyan-500",
    hoverRing: "hover:ring-1 hover:ring-blue-400/25",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    accent: "from-violet-500/20 to-purple-500/20",
    iconBg: "from-violet-500 to-purple-500",
    hoverRing: "hover:ring-1 hover:ring-violet-400/25",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Nest.js", level: 75 },
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    accent: "from-emerald-500/20 to-teal-500/20",
    iconBg: "from-emerald-500 to-teal-500",
    hoverRing: "hover:ring-1 hover:ring-emerald-400/25",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 75 },
      { name: "Pub/Sub", level: 70 },
    ],
  },
  {
    title: "Testing",
    icon: FlaskConical,
    accent: "from-amber-500/20 to-orange-500/20",
    iconBg: "from-amber-500 to-orange-500",
    hoverRing: "hover:ring-1 hover:ring-amber-400/25",
    skills: [
      { name: "Jest", level: 80 },
      { name: "PyTest", level: 75 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    accent: "from-rose-500/20 to-pink-500/20",
    iconBg: "from-rose-500 to-pink-500",
    hoverRing: "hover:ring-1 hover:ring-rose-400/25",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "GitHub Actions", level: 80 },
      { name: "Docker", level: 75 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const skillVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const SkillsSection = () => (
  <section id="skills" className="py-28 relative overflow-hidden">
    <div className="absolute top-40 right-0 w-80 h-80 rounded-full gradient-bg opacity-[0.04] blur-3xl" />
    <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full gradient-bg opacity-[0.03] blur-3xl" />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <div className="section-heading cursor-default">
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">What I work with</p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="card-inset gradient-card rounded-xl p-6 hover:shadow-elevated transition-all duration-300 group relative overflow-hidden border border-border/10 dark:border-border/20"
          >
            {/* Card outline / ridge (soft border + outer glow) */}
            <span className="absolute inset-0 rounded-xl pointer-events-none card-outline" />
            {/* Subtle gradient accent on top */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                <cat.icon className="w-4.5 h-4.5 text-white" />
              </div>
              <h3 className="font-semibold text-sm text-foreground font-mono uppercase tracking-wider">
                {cat.title}
              </h3>
            </div>

            <motion.div
              className="space-y-3"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            >
              {/* Unified skill chips (no percentages) for all screen sizes to keep UI consistent */}
              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map((s) => (
                  <div key={s.name} className="min-h-[36px] flex items-center px-3">
                    <span className="text-sm text-foreground/90 dark:text-foreground">{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;