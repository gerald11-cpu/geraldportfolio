import TiltedCard from "./TiltedCard";
function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-5">
      <div className="flex flex-col justify-center items-center text-center px-5">
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-600">
          <span className="text-zinc-900">Gerald Siriac</span>
        </h1>

        <p className="mt-3 text-lg text-gray-800">
          Building Fast, Modern & Scalable Web Apps
        </p>
        <a
          href="#projects"
          className="mt-6 bg-gray-800 hover:bg-gray-00 px-6 py-3 rounded-lg text-white"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
