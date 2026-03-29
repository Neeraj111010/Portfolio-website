import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "ksneeraj204@gmail.com", href: "mailto:ksneeraj204@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/Neeraj111010", href: "https://github.com/Neeraj111010", external: true },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/ksneeraj", href: "https://www.linkedin.com/in/k-s-neeraj-5805322b8/", external: true },
];

const ContactSection = () => (
  <section id="contact" className="py-28 gradient-subtle relative overflow-hidden">
    <div className="absolute top-20 right-0 w-96 h-96 rounded-full gradient-bg opacity-[0.04] blur-3xl" />
    <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full gradient-bg opacity-[0.04] blur-3xl" />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <div className="section-heading mx-auto mb-6 cursor-default">
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">Let's talk</p>
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        </div>
        <p className="text-muted-foreground max-w-lg mx-auto">
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect — I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Left — CTA card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-card card-inset rounded-2xl p-8 flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-elevated">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Let's work together</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              I enjoy solving complex problems and building scalable systems. If you have an interesting project or opportunity, don't hesitate to reach out.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1.5 mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Available for remote work worldwide
            </p>
          </div>

          <motion.a
            href="mailto:ksneeraj204@egmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-elevated w-full"
          >
            <Send className="w-4 h-4" />
            Send me an email
          </motion.a>
        </motion.div>

        {/* Right — link cards */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              whileHover={{ x: 4 }}
              className="gradient-card card-inset rounded-xl p-5 hover:shadow-elevated transition-all duration-300 flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <link.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{link.label}</p>
                <p className="text-xs text-muted-foreground truncate">{link.value}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
            </motion.a>
          ))}

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="gradient-card card-inset rounded-xl p-5 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">Currently available</span>
            </div>
            <p className="text-xs text-muted-foreground">Open to full-time roles & freelance projects</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
