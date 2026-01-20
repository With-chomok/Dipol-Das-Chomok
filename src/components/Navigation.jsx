import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll values for background opacity and shadow
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const shadowOpacity = useTransform(scrollY, [0, 100], [0, 0.2]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#2bee6c",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(43, 238, 108, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-50 border-b border-solid border-b-[#23482f] transition-all duration-300"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      style={{
        backgroundColor: `rgba(17, 34, 23, ${backgroundOpacity.get()})`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: `0 4px 20px rgba(0, 0, 0, ${shadowOpacity.get()})`,
      }}>
      <div className="layout-container flex w-full justify-center">
        <div className="w-full max-w-[960px] px-4 md:px-10 py-3 flex items-center justify-between whitespace-nowrap">
          <motion.div
            className="flex items-center gap-4 text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <motion.a
              className="size-6 text-primary flex items-center justify-center"
              href="#hero"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}>
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-background-dark font-bold text-2xl">
                D
              </div>
            </motion.a>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              DIPOL DAS
            </h2>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-6 lg:gap-9">
              {[
                { href: "#hero", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#education", label: "Education" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
                  href={item.href}
                  variants={linkVariants}
                  whileHover="hover">
                  {item.label}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="https://drive.google.com/file/d/1Edv3quFdQ1S978etb6oqc8uAUDRG78hC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#112217] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#25cc5c] transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap">
              <span className="truncate">Hire Me</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <motion.span
              className="material-symbols-outlined"
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}>
              {isMenuOpen ? "close" : "menu"}
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-[#112217] border-t border-[#23482f]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}>
            <div className="px-4 py-4 space-y-4">
              {[
                { href: "#hero", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#education", label: "Education" },
                { href: "#contact", label: "Contact" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  className="block text-white hover:text-primary transition-colors text-sm font-medium"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  variants={mobileItemVariants}
                  whileHover={{ x: 10, color: "#2bee6c" }}
                  transition={{ duration: 0.3 }}>
                  {item.label}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="https://drive.google.com/file/d/1Edv3quFdQ1S978etb6oqc8uAUDRG78hC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary text-[#112217] rounded-lg font-bold text-sm hover:bg-[#25cc5c] transition-colors"
              variants={mobileItemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navigation;
