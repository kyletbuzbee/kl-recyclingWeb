import React, { FC, useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  title?: string;
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({ value, suffix = "", prefix = "", duration = 2000, className = "", title = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          controls.start("visible");

          const startTime = Date.now();
          const startValue = 0;

          const updateCounter = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(startValue + (value - startValue) * easeOutQuart);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [value, duration, hasAnimated, controls]);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 0.6 } },
      }}
      className={`text-center ${className}`}
    >
      {title && <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-2">{title}</h3>}
      <motion.div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600" initial={{ scale: 0.5 }} animate={hasAnimated ? { scale: 1 } : { scale: 0.5 }} transition={{ duration: 0.8, delay: 0.2 }}>
        {prefix}
        {hasAnimated ? count.toLocaleString() : "0"}
        {suffix}
      </motion.div>
      <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full mt-2">
        <motion.div
          className="h-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            visible: {
              width: hasAnimated ? "100%" : "0%",
              transition: { duration: duration / 1000, delay: 0.4 },
            },
          }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
