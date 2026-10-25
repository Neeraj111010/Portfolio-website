import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  className: string;
  speed?: number;
};

/** A background orb that drifts at a different speed than the page while scrolling. */
const ParallaxBlob = ({ className, speed = 60 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return <motion.div ref={ref} style={{ y }} className={className} aria-hidden="true" />;
};

export default ParallaxBlob;
