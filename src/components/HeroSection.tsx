import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-subtle">
    {/* Decorative blobs */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full gradient-bg opacity-10 blur-3xl" />
    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full gradient-bg opacity-10 blur-3xl" />

    <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
          Software Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm{" "}
          <span className="gradient-text">K S Neeraj</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          I build robust, scalable backend systems.
          Passionate about clean architecture, performance, and developer experience.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-elevated"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="border border-border bg-card px-6 py-3 rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors"
          >
            View Projects
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 text-muted-foreground">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce block">
          <ArrowDown className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;