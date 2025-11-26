import { useRef } from "react";
import VariableProximity from "./VariableProximity";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
} from "react-icons/si";

function Skills() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://javascript.info",
    },
    {
      node: <SiHtml5 />,
      title: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      node: <SiCss3 />,
      title: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiBootstrap />,
      title: "Bootstrap",
      href: "https://getbootstrap.com",
    },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  ];
  const imageLogos = [
    {
      src: "/logos/company1.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "/logos/company2.png",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "/logos/company3.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
  ];
  const containerRef = useRef(null);
  const skills = [
    "React",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Git",
  ];

  return (
    <div>
      <section
        id="skills"
        className="max-w-9xl mx-auto px-1 py-20 bg-zinc-900 rounded-xl shadow-lg"
      >
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="text-center"
        >
          <VariableProximity
            label={"Skills"}
            className={
              "variable-proximity-demo text-6xl font-bold text-zinc-200"
            }
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <br />

        <div
          className="bg-zinc-500 "
          style={{
            height: "200px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={190}
            direction="left"
            logoHeight={100}
            gap={80}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
            className="my-9"
          />

          {/* Vertical loop with deceleration on hover */}
          {/* <LogoLoop
            logos={techLogos}
            speed={80}
            direction="up"
            logoHeight={48}
            gap={40}
            hoverSpeed={20}
            fadeOut
          /> */}
        </div>
        {/* <div className="mt-6 flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
              bg-zinc-700 text-white px-5 py-3 rounded-2xl
              shadow-md hover:shadow-zinc-300/50
              transform transition duration-300 hover:-translate-y-1 hover:scale-105
              text-sm sm:text-base
            "
            >
              {skill}
            </span>
          ))}
        </div> */}
      </section>
    </div>
  );
}

export default Skills;
