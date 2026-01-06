import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cursor, useTypewriter } from "react-simple-typewriter";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
const [text] = useTypewriter({
    words: ["Let's Work Together"],
    loop: false,
    typeSpeed: 80,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP scroll-triggered animations
    gsap.fromTo(
      ".contact-content",
      {
        y: 50,
        opacity: 0,
      },
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(43, 238, 108, 0.3)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(43, 238, 108, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="w-full flex justify-center py-5 mb-20"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}>
      <div className="layout-content-container flex flex-col max-w-[980px] w-full ">
        <motion.div
          className="px-4 py-10 bg-surface-dark border border-border-dark rounded-2xl mx-4"
          variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <motion.div
              className="contact-content flex flex-col justify-center"
              variants={itemVariants}>
              <motion.h2
                className="text-primary text-[16px] font-bold leading-tight tracking-wide uppercase mb-2"
                variants={itemVariants}>
                Get in Touch
              </motion.h2>
              <motion.h3
                className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-4"
                variants={itemVariants}>
                {text}
                <Cursor cursorColor="#2bee6c" />
              </motion.h3>
              <motion.p
                className="text-text-secondary text-base mb-8"
                variants={itemVariants}>
                I'm currently available for freelance projects and full-time
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </motion.p>
              <motion.div
                className="flex flex-col gap-4"
                variants={containerVariants}>
                <motion.div
                  className="flex items-center gap-4 text-white"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}>
                  <motion.div
                    className="size-10 rounded-full bg-[#112217] border border-border-dark flex items-center justify-center text-primary"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      backgroundColor: "#2bee6c",
                    }}
                    transition={{ duration: 0.5 }}>
                    <span className="material-symbols-outlined">mail</span>
                  </motion.div>
                  <a
                    className="hover:text-primary transition-colors"
                    href="mailto:dipoldas182@gmail.com">
                    dipoldas182@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 text-white"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}>
                  <motion.div
                    className="size-10 rounded-full bg-[#112217] border border-border-dark flex items-center justify-center text-primary"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      backgroundColor: "#2bee6c",
                    }}
                    transition={{ duration: 0.5 }}>
                    <span className="material-symbols-outlined">
                      phone
                    </span>
                  </motion.div>
                  <span>+8801798571413</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 text-white"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}>
                  <motion.div
                    className="size-10 rounded-full bg-[#112217] border border-border-dark flex items-center justify-center text-primary"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      backgroundColor: "#2bee6c",
                    }}
                    transition={{ duration: 0.5 }}>
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </motion.div>
                  <span>Mymensingh, BD</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className=" flex flex-col gap-4 bg-[#112217] p-6 rounded-xl border border-border-dark "
              variants={formVariants}>
              <motion.div
                className="flex flex-col gap-1"
                variants={itemVariants}>
                <label className="text-white text-sm font-bold" htmlFor="name">
                  Name
                </label>
                <motion.input
                  className="h-12 w-full rounded-lg bg-surface-dark border border-border-dark px-4 text-white placeholder-text-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-1"
                variants={itemVariants}>
                <label className="text-white text-sm font-bold" htmlFor="email">
                  Email
                </label>
                <motion.input
                  className="h-12 w-full rounded-lg bg-surface-dark border border-border-dark px-4 text-white placeholder-text-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-1"
                variants={itemVariants}>
                <label
                  className="text-white text-sm font-bold"
                  htmlFor="message">
                  Message
                </label>
                <motion.textarea
                  className="w-full rounded-lg bg-surface-dark border border-border-dark p-4 text-white placeholder-text-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
              <motion.button
                className="mt-2 h-12 w-full rounded-lg bg-primary text-[#112217] font-bold hover:bg-[#25cc5c] transition-colors"
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap">
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
