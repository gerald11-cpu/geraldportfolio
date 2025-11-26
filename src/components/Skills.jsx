function Skills() {
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
    <section
      id="skills"
      className="max-w-5xl mx-auto px-5 py-20 bg-zinc-900 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-zinc-200 mb-6 text-center">
        Skills
      </h2>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
}

export default Skills;
