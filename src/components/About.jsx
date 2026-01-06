import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTypewriter, Cursor } from "react-simple-typewriter";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  const [text] = useTypewriter({
    words: ["My Journey"],
    loop: false,
    typeSpeed: 80,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });

  useEffect(() => {
    gsap.fromTo(
      ".about-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
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
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="w-full flex justify-center py-5"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="layout-content-container flex flex-col max-w-[960px] w-full flex-1">
        <div className="flex flex-col gap-10 px-4 py-10">
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <motion.h2
              className="text-primary text-[16px] font-bold leading-tight tracking-wide uppercase"
              variants={itemVariants}
            >
              About Me
            </motion.h2>

            {/* TYPEWRITER ADDED HERE */}
            <motion.h1
              className="text-white tracking-light text-[32px] font-bold leading-tight max-w-[720px]"
              variants={itemVariants}
            >
              {text}
              <Cursor cursorColor="#2bee6c" />
            </motion.h1>

            <motion.p
              className="text-white text-base font-normal leading-relaxed max-w-[720px] opacity-90"
              variants={itemVariants}
            >
              I am currently pursuing a Diploma in Computer Science and
              Technology. I am passionate about frontend web development and
              modern UI design. I enjoy working with HTML, Tailwind CSS,
              JavaScript, React, and Next.js. My goal is to become a
              professional frontend developer and build clean, user-friendly web
              applications.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-0"
            variants={containerVariants}
          >
            {[
              {
                icon: "code",
                title: "Frontend Architecture",
                description:
                  "Designing robust component structures using React, Next.js, and Redux for scalable apps.",
              },
              {
                icon: "brush",
                title: "UI/UX Collaboration",
                description:
                  "Working closely with designers to implement pixel-perfect, accessible interfaces.",
              },
              {
                icon: "bolt",
                title: "Performance Optimization",
                description:
                  "Ensuring applications load fast and run smoothly on all devices through code-splitting and optimization.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="about-card flex flex-1 gap-3 rounded-lg border border-border-dark bg-surface-dark p-6 flex-col hover:border-primary/50 transition-colors duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="text-primary mb-2"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="material-symbols-outlined text-[32px]">
                    {feature.icon}
                  </span>
                </motion.div>
                <div className="flex flex-col gap-2">
                  <motion.h2
                    className="text-white text-lg font-bold leading-tight"
                    whileHover={{ color: "#2bee6c" }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h2>
                  <p className="text-text-secondary text-sm font-normal leading-normal">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
