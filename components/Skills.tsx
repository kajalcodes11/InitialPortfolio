const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB"
];

export default function Skills() {

  return (

    <section
      id="skills"
      className="bg-black text-white py-32"
    >

      <h1 className="text-5xl font-bold text-center mb-20">
        Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10">

        {skills.map((skill) => (

          <div
            key={skill}
            className="
              bg-gray-900
              p-8
              rounded-2xl
              text-center
              text-xl
              font-semibold
              hover:scale-105
              hover:bg-gray-800
              transition
            "
          >

            {skill}

          </div>

        ))}

      </div>

    </section>

  );
}