import TiltedCard from "./TiltedCard";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";

function Hero() {
  const containerRef = useRef(null);

  return (
    <div>
      <section className="h-screen flex flex-col justify-center items-center text-center px-5">
        <div className="flex flex-col justify-center items-center text-center px-5">
          <div ref={containerRef} style={{ position: "relative" }}>
            <VariableProximity
              label={"Gerald Siriac"}
              className={
                "variable-proximity-demo text-8xl font-bold text-zinc-900"
              }
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
            <br />
            <VariableProximity
              label={"Building Fast, Modern & Scalable Web Apps"}
              className={
                "variable-proximity-demo text-3xl text-lg text-gray-900 m-3"
              }
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
            <br />
            <br />
            <a
              href="#projects"
              className="mt-6 bg-gray-800 hover:bg-gray-00 px-6 py-3 rounded-lg text-white"
            >
              <VariableProximity
                label={"View My Projects"}
                className={"variable-proximity-demo text-2xl text-lg "}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
