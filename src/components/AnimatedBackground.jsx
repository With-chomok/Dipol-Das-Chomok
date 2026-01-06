import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rand = (min, max) => Math.random() * (max - min) + min;

const generateBubble = (x = null, y = null, small = false) => {
  const size = small ? rand(10, 25) : rand(25, 120);

  return {
    id: crypto.randomUUID(),
    size,
    x: x ?? rand(0, window.innerWidth),
    y: y ?? window.innerHeight + size,
    duration: rand(25, 55),
    wobble: rand(-80, 80),
    opacity: rand(0.12, 0.28),
    small,
  };
};

const AnimatedBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  // 🔁 CONTINUOUS BACKGROUND BUBBLES
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => [
        ...prev.slice(-80), // limit bubbles (performance)
        generateBubble(),
      ]);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  // 🖱 CLICK BUBBLING
  const handleClick = (e) => {
    const burst = Array.from({ length: rand(6, 12) }).map(() =>
      generateBubble(e.clientX, e.clientY, true)
    );

    setBubbles((prev) => [...prev, ...burst]);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0f3d2a 0%, #001f14 100%)",
      }}
    >
      <AnimatePresence>
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            initial={{
              x: b.x,
              y: b.y,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              y: -b.size,
              x: b.x + b.wobble,
              opacity: b.opacity,
              scale: [0.9, 1.05, 0.95],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: b.duration,
              ease: "linear",
            }}
            onAnimationComplete={() =>
              setBubbles((prev) => prev.filter((x) => x.id !== b.id))
            }
            className="absolute rounded-full pointer-events-none"
            style={{
              width: b.size,
              height: b.size,
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(43,238,108,0.18), rgba(15,61,42,0.05))",
              filter: "blur(1.2px)",
              boxShadow:
                "inset 0 0 10px rgba(255,255,255,0.35), 0 0 20px rgba(43,238,108,0.25)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBackground;
