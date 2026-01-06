import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cursor, useTypewriter } from "react-simple-typewriter";
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const sectionRef = useRef(null);

  const [text] = useTypewriter({
    words: ["Technical Skills"],
    loop: false,
    typeSpeed: 80,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });

  useEffect(() => {
    // GSAP scroll-triggered animations for skill cards
    gsap.fromTo(
      ".skill-card",
      {
        scale: 0.8,
        opacity: 0,
        rotationY: 45,
      },
      {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
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
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      y: -10,
      rotateY: 10,
      boxShadow: "0 10px 30px rgba(43, 238, 108, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    { icon: "javascript", name: "JavaScript" },
    { icon: "data_object", name: "React" },
    { icon: "html", name: "HTML5" },
    { icon: "css", name: "CSS3" },
    { icon: "devices", name: "Responsive" },
    { icon: "terminal", name: "Command Line" },
    { icon: "api", name: "REST API" },
    { icon: "deployed_code", name: "Git" },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="w-full flex justify-center py-5"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}>
      <div className="layout-content-container flex flex-col max-w-[960px] w-full flex-1">
        <div className="px-4 pb-3 pt-5">
          <motion.h2
            className="text-primary text-[16px] font-bold leading-tight tracking-wide uppercase mb-2"
            variants={itemVariants}>
            Expertise
          </motion.h2>
          <motion.h3
            className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8"
            variants={itemVariants}>
            {text}
            <Cursor cursorColor="#2bee6c" />
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={containerVariants}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card flex flex-col items-center justify-center p-6 rounded-lg bg-surface-dark border border-border-dark hover:border-primary transition-all duration-300 group"
                variants={skillVariants}
                whileHover="hover"
                custom={index}>
                <motion.span
                  className="material-symbols-outlined text-4xl text-white group-hover:text-primary mb-3 transition-colors"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.5 }}>
                  {skill.icon}
                </motion.span>
                <motion.span
                  className="font-bold text-white group-hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}>
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
