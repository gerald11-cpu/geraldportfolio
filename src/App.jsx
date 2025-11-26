import "./App.css";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  return (
    <>
      <div>
        <Navbar />
        <div className=" w-full h-screen bg-zinc-300 bg-fixed text-white flex item-center justify-center">
          <Hero />
        </div>
        <div className=" relative w-full  bg-zinc-900">
          <About />
        </div>
        <div className=" w-full  bg-zinc-300">
          <Projects />
        </div>
      </div>

      <div className="w-full  bg-zinc-900">
        <Skills />
      </div>
      <div className="w-full  bg-zinc-300">
        <Contact />
      </div>
      <div className=" w-full  bg-zinc-900 ">
        <Footer />
      </div>
    </>
  );
}

export default App;
