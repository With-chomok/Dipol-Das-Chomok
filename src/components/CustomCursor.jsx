import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const interactiveElementsRef = useRef([]);
  const scrollTimeoutRef = useRef(null);

  // Move cursor without React state (direct motionValue)
  const moveCursor = useCallback((e) => {
    cursorX.set(e.clientX - 16);
    cursorY.set(e.clientY - 16);
  }, [cursorX, cursorY]);

  // Hover effect
  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  // Scroll effect
  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 200);
  }, []);

  // Update interactive elements
  const updateInteractiveElements = useCallback(() => {
    interactiveElementsRef.current.forEach((el) => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    });

    const elements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, .cursor-pointer, [data-cursor='pointer']"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter, { passive: true });
      el.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    });

    interactiveElementsRef.current = Array.from(elements);
  }, [handleMouseEnter, handleMouseLeave]);

  useEffect(() => {
    // Hide system cursor
    document.body.style.cursor = "none";

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    updateInteractiveElements();

    const observer = new MutationObserver(() => updateInteractiveElements());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      observer.disconnect();
    };
  }, [moveCursor, handleScroll, updateInteractiveElements]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 1.5 : isScrolling ? 0.8 : 1,
          opacity: isScrolling ? 0.7 : 1,
        }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/30 blur-sm"
          animate={{ scale: isHovering ? 1.2 : 1 }}
          transition={{ duration: 0.2 }}
        />
        {/* Inner cursor */}
        <motion.div
          className="absolute inset-2 rounded-full border border-primary/50"
          animate={{
            scale: isHovering ? 0.8 : 1,
            backgroundColor: isHovering ? "#ffffff" : "#2bee6c",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9998] rounded-full bg-primary/60 blur-[1px]"
        style={{ x: cursorX, y: cursorY }}
        animate={{ opacity: isScrolling ? 0.5 : 0.8 }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </>
  );
};

export default CustomCursor;
