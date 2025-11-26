import TiltedCard from "./TiltedCard";
import gs from "../assets/gs.JPG";
function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 text-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Column */}
        <div className="flex flex-col" style={{ marginLeft: "-150px" }}>
          <h2 className="text-4xl text-center md:text-left font-bold mb-6 text-zinc-200">
            About Me
          </h2>

          <p className="leading-relaxed text-lg bg-zinc-950/40 p-6 rounded-2xl shadow-lg backdrop-blur">
            I'm a passionate MERN Stack Developer with hands-on experience in
            React, MongoDB, Tailwind, Bootstrap, and Git. I enjoy building
            clean, fast, and modern web applications that focus on great user
            experiences. I love learning new technologies and continuously
            improving my craft as a developer.
          </p>
        </div>

        {/* Image Column */}
        <div className="ml-5">
          <TiltedCard
            imageSrc={gs}
            altText="Gerald Siriac"
            captionText="Gerald Siriac"
            containerHeight="400px"
            containerWidth="400px"
            imageHeight="400px"
            imageWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Gerald Siriac</p>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default About;
