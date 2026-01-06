import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cursor, useTypewriter } from "react-simple-typewriter";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [text] = useTypewriter({
    words: ["Featured Projects"],
    loop: false,
    typeSpeed: 80,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });
  useEffect(() => {
    // GSAP scroll-triggered animations for project cards
    gsap.fromTo(
      ".project-card",
      {
        y: 100,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
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

  const projectVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.9 },
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
      y: -15,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(43, 238, 108, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      title: "Blood Donation Management System",
      description:
        "The Blood Donation Management System is a web-based application designed to connect blood donors with recipients efficiently. The system allows donors to create donation requests, search for donors based on blood group and location, and manage donation activities through a role-based dashboard.",
      image:
        "https://i.ibb.co.com/h1hQpv5D/bloo.png",
      technologies: ["React Js", "Tailwind css","HTML5", "Node.js", "MongoDB", "Express", "Firebase", "Daisy UI"],
      link: "https://blood-donation-project-client.vercel.app/",
      code: "https://github.com/With-chomok/Blood-Donation-Project-Client",
    },
    {
      title: "Artify - Artwork Sharing Platform",
      description:
        "A responsive art gallery platform where users can explore artworks, upload their creations, manage galleries, save favourites, and interact with a modern UI.",
      image: "https://i.ibb.co.com/KcnFdzHV/arti.png",
      technologies: ["JavaScript", "React Js", "Tailwind CSS", "HTML5", "DaisyUI", "Firebase", "Node.js", "Express.js", "MongoDB"],
      link: "https://artify-client-side.vercel.app/",
      code: "https://github.com/With-chomok/Artify-Store-Client?tab=readme-ov-file",
    },
    {
      title: "Apps Store - AppGalaxy",
      description:
        "A modern React-based web application where users can explore, search, and install trending apps in one place. It features real-time search, sorting, dynamic loading animations, and persistent installations using localStorage — all wrapped in a clean and responsive design powered by Tailwind CSS and React Router.",
      image: "https://i.ibb.co.com/8LHG1273/app.png",
      technologies: ["JavaScript", "React Js", "Tailwind CSS", "HTML5", "Daisy Ui"],
      link: "https://io-apps-store.vercel.app/",
      code: "https://github.com/With-chomok/IO-Apps-Store",
    },
    {
      title: "Green Earth – Sustainable Tree Plantation Platform",
      description:
        "A mission-driven web application designed to simplify the process of reforestation and plant management. Users can browse a diverse inventory of trees, place orders for specific locations, and receive professional care guides to ensure growth and sustainability. This project bridges the gap between environmental activism and modern e-commerce.",
      image: "https://i.ibb.co.com/1fzfYp5X/eart.png",
      technologies: ["JavaScript", "React Js", "Tailwind CSS", "HTML5"],
      link: "https://green-earth-indol.vercel.app/",
      code: "https://github.com/With-chomok/Green-Earth",
    },
    {
      title: "Emergency Hotline – Quick Access to Essential Services",
      description:
        "A responsive web portal developed to assist citizens in accessing emergency hotlines within seconds. This project highlights my ability to create user-centric layouts where functionality and quick navigation are the top priorities",
      image: "https://i.ibb.co.com/jFMkTJb/hot.png",
      technologies: ["JavaScript", "HTML5", "Tailwind CSS"],
      link: "https://with-chomok.github.io/Emergency-Hotline/",
      code: "https://github.com/With-chomok/Emergency-Hotline",
    },
    {
      title: "Influencer Gears – Tech Gadget Landing Page",
      description:
        "A sleek and responsive landing page designed for an e-commerce platform specializing in influencer equipment. The project features a curated collection of gadgets like cameras, microphones, and lighting kits. It focuses on clean typography, attractive product grids, and a seamless user experience to drive sales and engagement.",
      image: "https://i.ibb.co.com/xqdD0SwH/ifo.png",
      technologies: ["HTML5", "CSS3", "API"],
      link: "https://with-chomok.github.io/Influencer-Gears_Projects/",
      code: "https://github.com/With-chomok/Influencer-Gears_Projects",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="w-full flex justify-center py-5"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}>
      <div className="layout-content-container flex flex-col max-w-[960px] w-full flex-1">
        <div className="px-4 py-10">
          <motion.h2
            className="text-primary text-[16px] font-bold leading-tight tracking-wide uppercase mb-2"
            variants={itemVariants}>
            Portfolio
          </motion.h2>
          <motion.h3
            className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8"
            variants={itemVariants}>
            {text}
            <Cursor cursorColor="#2bee6c" />
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card group flex flex-col rounded-xl overflow-hidden bg-surface-dark border border-border-dark hover:border-primary transition-all duration-300 shadow-lg"
                variants={projectVariants}
                whileHover="hover">
                <motion.div
                  className="h-48 w-full bg-cover bg-center overflow-hidden relative"
                  style={{ backgroundImage: `url('${project.image}')` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}>
                  <div className="absolute inset-0 bg-[#112217]/60 group-hover:bg-[#112217]/30 transition-all duration-300"></div>
                </motion.div>
                <div className="p-6 flex flex-col flex-1">
                  <motion.h4
                    className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}>
                    {project.title}
                  </motion.h4>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6 mt-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-[#23482f] text-primary text-xs font-bold rounded"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#2bee6c",
                          color: "#112217",
                        }}
                        transition={{ duration: 0.2 }}>
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="flex gap-4">
                    <motion.a
                      className="flex items-center gap-1 text-sm font-bold text-white hover:text-primary transition-colors"
                      href={project.link}
                      whileHover={{ x: 5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}>
                      <span className="material-symbols-outlined text-lg">
                        open_in_new
                      </span>
                      Live Demo
                    </motion.a>
                    <motion.a
                      className="flex items-center gap-1 text-sm font-bold text-white hover:text-primary transition-colors"
                      href={project.code}
                      whileHover={{ x: 5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}>
                      <span className="material-symbols-outlined text-lg">
                        code
                      </span>
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
