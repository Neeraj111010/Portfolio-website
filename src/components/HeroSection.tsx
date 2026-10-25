import { motion } from "framer-motion";
import ParallaxBlob from "./ParallaxBlob";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-subtle">
    {/* Decorative drifting blobs */}
    <ParallaxBlob className="absolute top-20 left-10 w-72 h-72 rounded-full gradient-bg opacity-[0.18] blur-3xl animate-blob" />
    <ParallaxBlob className="absolute bottom-20 right-10 w-96 h-96 rounded-full gradient-bg opacity-[0.18] blur-3xl animate-blob-slow" />

    {/* Floating particles */}
    <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full gradient-bg opacity-60 animate-float" />
    <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full gradient-bg opacity-40 animate-float [animation-delay:-2s]" />
    <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full gradient-bg opacity-50 animate-float [animation-delay:-4s]" />


    <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
          Software Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 flex flex-wrap justify-center gap-x-[0.3em]">
          {[
            { t: "Hi," },
            { t: "I'm" },
            { t: "K" },
            { t: "S" },
            { t: "Neeraj", grad: true },
          ].map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: "easeOut" }}
              className={w.grad ? "gradient-text gradient-text-animated" : undefined}
            >
              {w.t}
            </motion.span>
          ))}
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
          <a href="https://github.com/Neeraj111010" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/k-s-neeraj-5805322b8/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:ksneeraj204@gmail.com" className="hover:text-primary transition-colors">
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
    {/* Animated waves at the bottom */}
    <svg className="wave-layer wave-1" viewBox="0 0 2880 120" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0,64 C240,24 480,104 720,64 C960,24 1200,104 1440,64 C1680,24 1920,104 2160,64 C2400,24 2640,104 2880,64 L2880,120 L0,120 Z"
        fill="hsl(var(--primary) / 0.08)"
      />
    </svg>
    <svg className="wave-layer wave-2" viewBox="0 0 2880 120" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0,80 C240,40 480,110 720,80 C960,40 1200,110 1440,80 C1680,40 1920,110 2160,80 C2400,40 2640,110 2880,80 L2880,120 L0,120 Z"
        fill="hsl(var(--accent) / 0.06)"
      />
    </svg>
  </section>
);

export default HeroSection;
