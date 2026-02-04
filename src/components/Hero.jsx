import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "react-typewriter-effect";
import dipol from "/dipo.png"
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // GSAP scroll-triggered animations for background elements
    gsap.fromTo(
      ".hero-bg-element",
      { scale: 0.8, opacity: 0.3 },
      {
        scale: 1.2,
        opacity: 0.6,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Animate floating particles
    particlesRef.current.forEach((particle, index) => {
      if (particle) {
        gsap.to(particle, {
          y: -20,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.3,
        });
      }
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(43, 238, 108, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      boxShadow: "0 5px 15px rgba(43, 238, 108, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={heroRef}
      className="w-full flex justify-center py-5"
      id="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-bg-element absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="hero-bg-element absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="hero-bg-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={(el) => (particlesRef.current[0] = el)}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"></div>
        <div
          ref={(el) => (particlesRef.current[1] = el)}
          className="absolute top-3/4 left-3/4 w-1 h-1 bg-primary/40 rounded-full"></div>
        <div
          ref={(el) => (particlesRef.current[2] = el)}
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full"></div>
      </div>

      <div className="layout-content-container flex flex-col max-w-[960px] w-full flex-1 relative z-10">
        <div className="@container">
          <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row items-center">
            {/* Left Column - Profile Card */}
            <motion.div
              className="lg:col-span-4 lg:sticky lg:top-28"
              variants={itemVariants}>
              <motion.div
                className="relative group"
                variants={cardVariants}
                whileHover="hover">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

                {/* Main Card */}
                <div className="relative md:mt-16 md:w-[500px] bg-gradient-to-br from-surface-dark/80 to-surface-dark/40 backdrop-blur-xl border border-border-dark/50 rounded-2xl p-6 lg:p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:border-primary/30 flex flex-col items-center text-center">
                  {/* Profile Image */}
                  <motion.div
                    className="relative mb-6 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}>
                    <div className="relative group/img">
                      {/* Animated Ring */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full opacity-20 group-hover/img:opacity-40 transition-all duration-700 animate-spin-slow"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full blur opacity-30 group-hover/img:opacity-60 transition-all duration-500"></div>

                      {/* Image Container */}
                      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 group-hover/img:border-primary/40 transition-all duration-500">
                        <img
                          alt="Profile portrait of Alex Dev, a smiling developer wearing glasses"
                          className="w-full h-full object-cover transform transition-all duration-700 group-hover/img:scale-110"
                          src={dipol}
                        />
                      </div>

                      {/* Status Indicator */}
                      <motion.div
                        className="absolute bottom-8 right-2 w-6 h-6 bg-primary rounded-full border-4 border-surface-dark flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Profile Info */}
                  <motion.h1
                    className="text-2xl font-bold text-white mb-2"
                    variants={itemVariants}>
                    Dipol Das
                  </motion.h1>
                  <motion.p
                    className="text-primary font-medium mb-1"
                    variants={itemVariants}>
                    MERN Stack Developer
                  </motion.p>
                  <motion.p
                    className="text-white/60 text-sm mb-6 flex items-center gap-1 justify-center"
                    variants={itemVariants}>
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>
                    Mymensngh, BD
                  </motion.p>

                  {/* Social Actions */}
                  <motion.div
                    className="flex gap-3 mb-8 justify-center w-full"
                    variants={itemVariants}>
                    {[
                      { icon: "code", url: "https://github.com/With-chomok", title: "GitHub" },
                      { icon: "work",url: "https://www.linkedin.com/in/dipoldas/", title: "LinkedIn" },
                      { icon: "flutter_dash",url: "https://x.com/dipol_das34765", title: "Twitter" },
                      { icon: "brush", title: "Dribbble" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        className="w-10 h-10 rounded-full bg-[#23482f] hover:bg-primary hover:text-[#112217] flex items-center justify-center transition-all group"
                         href={social.url}
                        title={social.title}
                        variants={socialVariants}
                        whileHover="hover">
                        <span className="material-symbols-outlined text-[20px] text-white group-hover:text-[#112217]">
                          {social.icon}
                        </span>
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* Stats Grid */}
                  <motion.div
                    className="w-full grid grid-cols-2 gap-3 mb-6"
                    variants={itemVariants}>
                    {[
                      { number: "1+", label: "Years Exp." },
                      { number: "40+", label: "Projects" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#112217] rounded-lg p-3 text-center border border-[#23482f] hover:border-primary/30 transition-all duration-300 group/stat"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 5px 15px rgba(43, 238, 108, 0.2)",
                        }}>
                        <span className="block text-2xl font-bold text-white group-hover/stat:text-primary transition-colors">
                          {stat.number}
                        </span>
                        <span className="text-xs text-white/50 uppercase tracking-wider">
                          {stat.label}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Download CV Button */}
                  <motion.a
                  href="https://drive.google.com/file/d/1zZrpc9PfA1YnpFXVjRPN-jXJ8AikUPFl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary hover:to-primary/80 border border-primary/30 hover:border-primary rounded-lg py-3 px-4 text-primary hover:text-[#112217] font-bold transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 text-sm"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap">
                    <span className="material-symbols-outlined  group-hover/btn:animate-bounce ">
                      download
                    </span>
                    <span className="relative z-10">Download CV</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Main Content */}
            <motion.div
              className="flex flex-col mt-10 gap-6 @[480px]:min-w-[300px] @[480px]:gap-8 justify-center w-full"
              variants={itemVariants}>
              {/* Greeting Badge */}
              <motion.div
                className="flex justify-center @[864px]:justify-start mb-2"
                variants={itemVariants}>
                <motion.div
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(43, 238, 108, 0.3)",
                  }}>
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-primary text-sm font-medium">
                    Available for work
                  </span>
                </motion.div>
              </motion.div>

              {/* Main Heading with Typewriter */}
              <motion.div
                className="flex flex-col gap-2 text-center @[864px]:text-left"
                variants={itemVariants}>
                <div className="text-white text-xl font-black leading-tight tracking-[-0.033em] @[480px]:text-2xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] hero-title">
                  <Typewriter
                    textStyle={{
                      color: "#ffffff",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      lineHeight: "inherit",
                      letterSpacing: "inherit",
                    }}
                    startDelay={400}
                    cursorColor="#2bee6c"
                    multiText={["Building Scalable Professional Applications","Building Scalable Professional Applications","Building Scalable Professional Applications","Building Scalable Professional Applications","Building Scalable Professional Applications","Building Scalable Professional Applications"]}
                    typeSpeed={100}
                    loop= {true }
                  />
                </div>
                <motion.h2
                  className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal opacity-90 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3, duration: 0.8 }}>
                  Hi, I'm a passionate React.js developer focused on creating
                  <span className="text-primary font-medium"> interactive</span>
                  ,<span className="text-primary font-medium"> accessible</span>
                  , and
                  <span className="text-primary font-medium">
                    {" "}
                    responsive
                  </span>{" "}
                  <Typewriter extStyle={{
                      color: "#ffffff",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      lineHeight: "inherit",
                      letterSpacing: "inherit",
                    }}
                    startDelay={400}
                    cursorColor="#2bee6c"
                    multiText={["web experiences that make a difference." ,"web experiences that make a difference.","web experiences that make a difference." ,"web experiences that make a difference.","web experiences that make a difference.","web experiences that make a difference.","web experiences that make a difference."]}
                    typeSpeed={100}
                    loop= {true }/>
                </motion.h2>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex-wrap gap-3 flex justify-center @[864px]:justify-start"
                variants={itemVariants}>
                <motion.a
                  className="group relative overflow-hidden flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-[#112217] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#25cc5c] transition-all duration-300"
                  href="#projects"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap">
                  <span className="truncate relative z-10">View My Work</span>
                  <span className="material-symbols-outlined ml-2 relative z-10 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.a>
                <motion.a
                  className="group relative overflow-hidden flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-transparent hover:bg-surface-dark border-2 border-primary/30 hover:border-primary text-white hover:text-primary text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-all duration-300"
                  href="#contact"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap">
                  <span className="material-symbols-outlined mr-2 group-hover:animate-pulse">
                    mail
                  </span>
                  <span className="truncate">Let's Talk</span>
                </motion.a>
              </motion.div>

              {/* Tech Stack Preview */}
              <motion.div
                className="flex flex-wrap justify-center @[864px]:justify-start gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 mt-4"
                variants={itemVariants}>
                {["React.js", "Next.js", "TypeScript", "Tailwind CSS"].map(
                  (tech, index) => (
                    <motion.div
                      key={tech}
                      className="flex items-center gap-2 bg-surface-dark/30 border border-border-dark/30 rounded-full px-3 py-1.5 cursor-pointer hover:bg-surface-dark text-sm text-white/70 animation transparent-all duration-700"
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(43, 238, 108, 0.3)",
                        color: "rgba(255, 255, 255, 0.9)",
                        
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 3.5 + index * 0.1, duration: 0.5 }}>
                      <motion.span
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                      {tech}
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
