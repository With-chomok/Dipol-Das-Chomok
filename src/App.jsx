import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground";
function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col  text-white overflow-hidden">
      <AnimatedBackground/>
      <CustomCursor />
      <Navigation />
      <main
        className="layout-container flex flex-col items-center w-full pt-20 relative z-10"
        style={{ pointerEvents: "auto" }}>
        <Hero />
        <About />
        <Skills />
        <div className="w-full flex justify-center py-5">
          <Education />
        </div>
        <Projects />
        <div className="mt-8 px-4 w-full flex justify-center">
          <div className="w-full max-w-[960px] h-px bg-gradient-to-r from-transparent via-[#23482f] to-transparent"></div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
