import { motion } from "framer-motion";
import ParallaxBlob from "./ParallaxBlob";
import { Code2, Layers, Database, BrainCircuit, FlaskConical, Wrench } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    iconBg: "from-blue-500 to-cyan-500",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    iconBg: "from-violet-500 to-purple-500",
    skills: ["Node.js", "Express.js", "FastAPI", "Nest.js", "React.js"],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    iconBg: "from-emerald-500 to-teal-500",
    skills: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Gen AI",
    icon: BrainCircuit,
    iconBg: "from-fuchsia-500 to-indigo-500",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Multi-Agent Systems",
      "Vector Databases",
      "LLM Evals",
      "Tool Calling",
      "MCP",
    ],
  },
  {
    title: "Testing",
    icon: FlaskConical,
    iconBg: "from-amber-500 to-orange-500",
    skills: ["Jest", "PyTest"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    iconBg: "from-rose-500 to-pink-500",
    skills: ["Git", "GitHub", "GitHub Actions", "Docker"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const SkillsSection = () => (
  <section id="skills" className="py-28 relative overflow-hidden aurora">
    <ParallaxBlob className="absolute top-40 right-0 w-96 h-96 rounded-full gradient-bg animate-blob opacity-[0.14] blur-3xl" />
    <ParallaxBlob className="absolute bottom-20 left-0 w-80 h-80 rounded-full gradient-bg animate-blob-slow opacity-[0.10] blur-3xl" />

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
            whileHover={{ y: -5 }}
            className="glass-card rounded-2xl p-6 group relative overflow-hidden"
          >
            {/* Gradient accent stripe on hover */}
            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${cat.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <cat.icon className="w-4.5 h-4.5 text-white" />
              </div>
              <h3 className="font-semibold text-sm text-foreground font-mono uppercase tracking-wider">
                {cat.title}
              </h3>
            </div>

            <motion.div
              className="flex flex-wrap gap-2"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {cat.skills.map((s) => (
                <motion.span
                  key={s}
                  variants={skillVariants}
                  className="glass-pill text-xs font-mono px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:-translate-y-0.5 cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;