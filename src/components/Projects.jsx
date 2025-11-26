import ama from "../assets/amazon.jpg";
import bmi from "../assets/bmi.jpg";
import canon from "../assets/canon.jpg";
import ele from "../assets/e-learning.jpg";
import sayip from "../assets/sayip.jpg";
import stepup from "../assets/stepup.jpg";
import watch from "../assets/watch.jpg";
import whether from "../assets/whether.jpg";
import { useRef } from "react";
import ai from "../assets/Ai_Companion.jpg";
import sur from "../assets/al-ser.jpeg";
import VariableProximity from "./VariableProximity";

function Projects() {
  const containerRef = useRef(null);
  const projects = [
    {
      name: "EduSphere– E-Learning Platform",
      desc: "A web platform where teachers can upload courses in different subjects, and students can enroll and learn. Built using React, Firebase, and Tailwind, it supports multiple teachers, multiple students, and real-time course updates.",
      img: ele,
      link: "https://calm-pasca-562b83.netlify.app/",
    },
    {
      name: "Canon, The Eyes we all need",
      desc: "A modern parallax-based web project designed as a Canon store where users can explore and purchase cameras, lenses, and accessories. Smooth scrolling, dynamic visuals, and clean UI enhance the shopping experience, giving the feel of a premium photography brand.",
      img: canon,
      link: "https://parallax-roan-beta.vercel.app/",
    },
    {
      name: "Chrono – Modern Watch Website",
      desc: "A sleek and responsive Watch Website built using HTML, CSS, JavaScript, and Tailwind CSS.This project helped me explore utility-first styling, clean UI layouts, modern color palettes, and minimal design principles. It improved my frontend workflow and taught me how to build fast, aesthetic, and user-friendly interfaces.",
      img: watch,
      link: "https://lnkd.in/g2jNJYRt",
    },
    {
      name: "StepUp",
      desc: "A dynamic Shoes-themed website built using HTML, CSS, JavaScript, and GSAP.This project uses smooth animations and motion effects to create an engaging, interactive UI while helping me understand how GSAP enhances modern web design.",
      img: stepup,
      link: "https://lnkd.in/g7ikusVZ",
    },
    {
      name: "Amazon",
      desc: "A clean frontend replica of the Amazon homepage built using HTML, CSS, JavaScript, and Bootstrap.This project helped me practice layout design, responsiveness, and modern UI styling.",
      img: ama,
      link: "https://lnkd.in/ghXsXkQb",
    },
    {
      name: "Portfolio Website – Sayip OP",
      desc: "Created a modern and creative portfolio website for one of my favorite gamers, Sayip OP.This project helped me experiment with unique layouts and sharpen my web design skills.",
      img: sayip,
      link: "https://lnkd.in/giV7sEU5",
    },
    {
      name: "Weather App",
      desc: "A simple app using JavaScript + OpenWeatherMap API to fetch real-time weather for any city.",
      img: whether,
      link: "https://lnkd.in/dXDfp7U6",
    },
    {
      name: "BMI Calculator",
      desc: "A quick and interactive BMI Calculator built using DOM manipulation and localStorage.",
      img: bmi,
      link: "https://lnkd.in/dXzn_7ud",
    },
    {
      name: "AI Enhanced Surveillance System",
      desc: "YOLO + Blockchain Clips + Flask Dashboard",
      img: sur,
      link: "/aes.pdf", // Will download from public folder
    },

    {
      name: "Companion App",
      desc: "WebSocket-based chat with live status",
      img: ai,
      link: "smc.pdf",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 py-20 text-center">
      <div ref={containerRef} style={{ position: "relative" }}>
        <VariableProximity
          label={"Projects"}
          className={
            "variable-proximity-demo text-6xl font-bold text-zinc-900 text-center"
          }
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      </div>
      <br />
      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {projects.map((p, index) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block 
              break-inside-avoid 
              bg-gray-900 
              rounded-xl 
              border border-gray-800 
              overflow-hidden 
              group
              transform 
              transition 
              duration-300 
              hover:-translate-y-2 
              hover:shadow-xl 
              hover:shadow-blue-500/20
            "
          >
            {/* Random Image Height + Animation */}
            <img
              src={p.img}
              alt={p.name}
              className="
                w-full 
                object-cover 
                transition 
                duration-500 
                group-hover:scale-105 
                group-hover:brightness-110
              "
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
