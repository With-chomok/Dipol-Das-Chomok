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
    gsap.fromTo(
      ".project-card",
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const projectVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(43,238,108,0.18)",
    },
  };

  const projects = [
    {
      title: "Blood Donation Management System",
      description:
        "A web application to connect blood donors and recipients efficiently with search, dashboard and role-based access.",
      image: "https://i.ibb.co.com/h1hQpv5D/bloo.png",
      technologies: [
        "React",
        "Tailwind",
        "Node",
        "MongoDB",
        "Firebase",
      ],
      link: "https://blood-donation-project-client.vercel.app/",
      code: "https://github.com/With-chomok/Blood-Donation-Project-Client",
    },
    {
      title: "Artify – Artwork Sharing Platform",
      description:
        "A modern platform to explore, upload and manage artworks with authentication and favourites.",
      image: "https://i.ibb.co.com/KcnFdzHV/arti.png",
      technologies: ["React", "Tailwind", "Firebase", "MongoDB"],
      link: "https://artify-client-side.vercel.app/",
      code: "https://github.com/With-chomok/Artify-Store-Client",
    },
    {
      title: "AppGalaxy – Apps Store",
      description:
        "A React based app store with search, sorting, install feature and localStorage support.",
      image: "https://i.ibb.co.com/8LHG1273/app.png",
      technologies: ["React", "Tailwind", "JavaScript"],
      link: "https://io-apps-store.vercel.app/",
      code: "https://github.com/With-chomok/IO-Apps-Store",
    },
    {
      title: "Green Earth – Tree Plantation",
      description:
        "An eco-focused platform to promote sustainable tree plantation and green initiatives.",
      image: "https://i.ibb.co.com/1fzfYp5X/eart.png",
      technologies: ["React", "Tailwind"],
      link: "https://green-earth-indol.vercel.app/",
      code: "https://github.com/With-chomok/Green-Earth",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="w-full flex justify-center py-8 sm:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-[960px] w-full px-4">
        <h2 className="text-primary text-sm font-bold uppercase mb-2">
          Portfolio
        </h2>

        <h3 className="text-white text-2xl sm:text-3xl font-bold mb-8">
          {text}
          <Cursor cursorColor="#2bee6c" />
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-surface-dark border border-border-dark rounded-xl overflow-hidden flex flex-col"
              variants={projectVariants}
              whileHover="hover"
            >
              {/* Image */}
              <div
                className="w-full h-40 sm:h-44 md:h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {project.title}
                </h4>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-semibold rounded bg-[#23482f] text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm font-bold">
                  <a
                    href={project.link}
                    className="text-white hover:text-primary transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="text-white hover:text-primary transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
