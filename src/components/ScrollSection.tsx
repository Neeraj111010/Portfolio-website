import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/** Scroll-linked entrance and exit: content rises, scales up and sharpens as it enters, then eases back as it leaves. */
const ScrollSection = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.9, 1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0, 1, 1, 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.25], [80, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.22], [10, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  if (reduced) return <div>{children}</div>;

  return (
    <motion.div ref={ref} style={{ scale, opacity, y, filter }} className="origin-top will-change-transform">
      {children}
    </motion.div>
  );
};

export default ScrollSection;