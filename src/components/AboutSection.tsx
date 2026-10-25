import { motion } from "framer-motion";
import ParallaxBlob from "./ParallaxBlob";
import { Server, Database, Zap, GitBranch, Cpu } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Dev", desc: "Node.js, FastAPI, NestJS — building robust APIs and microservices" },
  { icon: Cpu, label: "AI Engineering", desc: "LangGraph, LangChain — building multi-agent pipelines, RAG, and tool execution" },
  { icon: Database, label: "Databases", desc: "PostgreSQL, MongoDB, Redis — designing schemas and optimizing queries" },
  { icon: Zap, label: "Performance", desc: "Caching, pub/sub, and scalable architecture patterns" },
  { icon: GitBranch, label: "DevOps", desc: "Docker, CI/CD, GitHub Actions — automating deployments" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutSection = () => (
  <section id="about" className="py-28 gradient-subtle aurora relative overflow-hidden">
    <ParallaxBlob className="absolute -top-32 -right-32 w-96 h-96 rounded-full gradient-bg animate-blob opacity-[0.14] blur-3xl" />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="section-heading cursor-default">
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Left column — text */}
        <motion.div
          className="lg:col-span-2 space-y-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm a software developer with hands-on experience building backend services and APIs. I focus on
            writing clean, testable code, designing systems that scale, and architecting intelligent, agentic
            AI pipelines using LangGraph and LLMs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My internship at <span className="text-primary font-medium">ModelSuite AI</span> sharpened 
            my skills in real-world production environments — from database design and caching strategies 
            to CI/CD pipelines and agile workflows.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm passionate about developer experience, open-source tools, and continuously learning 
            new technologies to solve complex problems.
          </p>
        </motion.div>

        {/* Right column — highlight cards in 2-col grid with breathing room */}
        <motion.div
          className="lg:col-span-3 grid sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <h.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{h.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;