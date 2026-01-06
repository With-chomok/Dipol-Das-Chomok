import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cursor, useTypewriter } from "react-simple-typewriter";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
const [text] = useTypewriter({
    words: ["Academic Background"],
    loop: false,
    typeSpeed: 80,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });
  useEffect(() => {
    // GSAP scroll-triggered animations
    gsap.fromTo(
      ".education-card",
      {
        x: -100,
        opacity: 0,
        scale: 0.9,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { x: -100, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      x: 10,
      boxShadow: "0 20px 40px rgba(43, 238, 108, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="w-full flex justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}>
      <div className="layout-content-container flex flex-col max-w-[960px] w-full">
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-12 text-center sm:text-left"
          variants={itemVariants}>
          <motion.div
            className="flex items-center justify-center sm:justify-start gap-3 mb-4"
            variants={itemVariants}>
            <motion.span
              className="material-symbols-outlined text-primary text-xl sm:text-2xl"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}>
              school
            </motion.span>
            <span className="text-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
              Education
            </span>
          </motion.div>
          <motion.h2
            className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4"
            variants={itemVariants}>
            {text}
            <Cursor cursorColor="#2bee6c" />
          </motion.h2>
          <motion.p
            className="text-[#92c9a4] text-base sm:text-lg max-w-2xl mx-auto sm:mx-0"
            variants={itemVariants}>
            My formal education in engineering and technology.
          </motion.p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-6"
          variants={containerVariants}>
          <motion.div
            className="education-card group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 rounded-xl border border-[#23482f] bg-[#1a2e22] p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,108,0.15)]"
            variants={cardVariants}
            whileHover="hover">
            {/* Main Content */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full lg:w-auto">
              {/* Icon */}
              <motion.div
                className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-lg bg-[#23482f] text-primary mx-auto sm:mx-0"
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}>
                <span className="material-symbols-outlined text-2xl sm:text-3xl lg:text-4xl">
                  engineering
                </span>
              </motion.div>

              {/* Text Content */}
              <div className="text-center sm:text-left w-full sm:w-auto">
                <motion.h3
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}>
                  Diploma in Engineering
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg text-[#92c9a4] font-medium mb-1"
                  variants={itemVariants}>
                  Mymensingh Polytechnic Institute
                </motion.p>
                <motion.p
                  className="text-[#6d967a] text-sm sm:text-base"
                  variants={itemVariants}>
                  Dept: Computer Science and Technology
                </motion.p>
              </div>
            </div>

            {/* Session Badge */}
            <motion.div
              className="flex items-center gap-2 rounded-full bg-[#23482f] px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-[#92c9a4] border border-primary/20 mx-auto lg:mx-0 mt-4 lg:mt-0"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#2bee6c",
                color: "#112217",
              }}
              transition={{ duration: 0.3 }}>
              <span className="material-symbols-outlined text-sm">
                calendar_month
              </span>
              <span className="whitespace-nowrap">Session: 21-22</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
