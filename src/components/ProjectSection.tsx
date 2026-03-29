import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const projects = [
  {
    title: "Task Manager",
    desc: "Built a MERN stack task manager with JWT authentication and RBAC, featuring Jira-like task management (CRUD, assignment, priority, status tracking) and file uploads via Multer with optimized REST APIs",
    tech: ["Node.js", "Express", "MongoDB", "Multer"],
    color: "from-primary/10 to-accent/10",
    codeUrl: "https://github.com/Neeraj111010/Task-Manager",
    demoUrl: "https://mern-task-manager-pkfy.onrender.com",
  },
  {
    title: "Interview Platform",
    desc: "Developed a full-stack FastAPI interview platform with 1-on-1 video rooms, real-time chat, Monaco code editor, Clerk authentication, secure code execution with automated feedback, live dashboards, and optimized data handling using TanStack Query, deployed on Render",
    tech: ["FastAPI", "React", "Inngest", "Stream", "Clerk"],
    color: "from-accent/10 to-primary/10",
    codeUrl: "https://github.com/Neeraj111010/Interview-Platform",
    demoUrl: "https://farm-talent-iq.onrender.com",
  },
  {
    title: "AI Agent for Deep Research",
    desc: "A modern AI-powered agent application built with Next.js, TypeScript, and multiple AI APIs. It delivers intelligent content retrieval, AI-generated responses, code highlighting, and efficient state management — all in a slick, responsive interface.",
    tech: ["Next.js", "TypeScript", "Mistral API"],
    color: "from-accent/10 to-primary/10",
    codeUrl: "https://github.com/Neeraj111010/AI-Agent-for-Deep-Research",
    // demoUrl intentionally omitted for this project
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectsSection = () => (
  <section id="projects" className="py-28 relative overflow-hidden">
    <div className="absolute -bottom-32 left-1/2 w-[500px] h-[500px] rounded-full gradient-bg opacity-[0.03] blur-3xl" />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-heading mb-4 cursor-default">
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">What I've built</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>
        <p className="text-muted-foreground max-w-xl mb-12">
          A collection of projects that showcase my skills in backend development, system design, and full-stack engineering.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="gradient-card card-inset rounded-xl p-6 hover:shadow-elevated transition-all duration-300 group flex flex-col"
          >
            <div className="flex items-center justify-between mb-5">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center border border-border`}>
                <Folder className="w-5 h-5 text-primary" />
              </div>
              <div className="flex gap-3 text-muted-foreground">
                {p.codeUrl && (
                  <a
                    href={p.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover:-translate-y-0.5 duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover:-translate-y-0.5 duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200 flex items-center gap-1">
              {p.title}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-secondary text-muted-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;