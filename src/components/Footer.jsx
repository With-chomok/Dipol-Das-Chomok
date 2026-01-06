import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // GSAP scroll-triggered animation for footer
    gsap.fromTo(
      footerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=100",
          end: "bottom bottom",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      ref={footerRef}
      className="bg-background-light dark:bg-[#0c1a11] border-t border-gray-200 dark:border-white/10 pt-16 pb-8 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}>
      {/* Abstract Decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            className="space-y-6 lg:col-span-1"
            variants={itemVariants}>
            <motion.a
              className="flex items-center gap-2 group"
              href="#"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}>
              <motion.div
                className="size-6 text-primary flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}>
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-background-dark font-bold text-2xl">
                  D
                </div>
              </motion.div>
              <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                Dipol
              </span>
            </motion.a>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Building the web, one component at a time. Specializing in
              scalable front-end architectures and immersive UI experiences.
            </p>
            <div className="flex gap-4">
              <motion.a
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-background-dark transition-all duration-300"
                href="https://github.com/With-chomok"
                variants={socialVariants}
                whileHover="hover">
                <span className="material-symbols-outlined">code</span>
              </motion.a>
              <motion.a
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-background-dark transition-all duration-300"
                href="https://www.linkedin.com/in/dipoldas/"
                variants={socialVariants}
                whileHover="hover">
                <span className="material-symbols-outlined">work</span>
              </motion.a>
              <motion.a
                aria-label="Twitter"
                className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-background-dark transition-all duration-300"
                href="https://x.com/dipol_das34765"
                variants={socialVariants}
                whileHover="hover">
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <motion.a
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 group"
                  href="#projects"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 group"
                  href="#about"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Me
                </motion.a>
              </li>
              
              <li>
                <motion.a
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 group"
                  href="#"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-6">
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <motion.a
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-start gap-3"
                  href="mailto:dipoldas182@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}>
                  <span className="material-symbols-outlined text-primary text-xl">
                    mail
                  </span>
                  <span>dipoldas182@gmail.com</span>
                </motion.a>
              </li>
              <li>
                <div className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    location_on
                  </span>
                  <span>Mymensingh, BD</span>
                </div>
              </li>
              <li>
                <motion.a
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-start gap-3"
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}>
                  <span className="material-symbols-outlined text-primary text-xl">
                    calendar_month
                  </span>
                  <span>Schedule a Call</span>
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Call to Action / Back to Top */}
          <motion.div
            className="lg:col-span-1 flex flex-col justify-between"
            variants={itemVariants}>
            <motion.div
              className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl border border-transparent dark:border-white/10 hover:border-primary/50 transition-colors"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(43, 238, 108, 0.1)",
              }}
              transition={{ duration: 0.3 }}>
              <h4 className="text-gray-900 dark:text-white font-bold mb-2">
                Have a project in mind?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                I'm currently available for freelance work.
              </p>
              <motion.a
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-background-dark font-bold rounded-lg hover:bg-primary/90 transition-all"
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}>
                Start a Project
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-gray-500 dark:text-gray-500">
            <span>© 2023 MERN stack Developer. All Rights Reserved.</span>
            <span className="hidden md:inline w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="flex items-center gap-1">
              Built BY <span className="text-primary font-semibold">Dipol</span>
              <span className="text-primary font-semibold">Das Chomok</span>
            </span>
          </div>

          {/* Back to Top Button */}
          <motion.a
            className="group flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            href="#"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}>
            Back to Top
            <span className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-white/5 group-hover:bg-primary group-hover:text-background-dark flex items-center justify-center transition-all">
              <span className="material-symbols-outlined text-lg">
                arrow_upward
              </span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
