const projects = [

  {
    title: "Portfolio Website",
    description: "Modern animated portfolio website."
  },

  {
    title: "AI Resume Analyzer",
    description: "AI-powered resume analysis platform."
  },

  {
    title: "Expense Tracker",
    description: "Track expenses with analytics dashboard."
  }

];

export default function Projects() {

  return (

    <section
      id="projects"
      className="bg-gray-950 text-white py-32"
    >

      <h1 className="text-5xl font-bold text-center mb-20">
        Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-10 px-10">

        {projects.map((project) => (

          <div
            key={project.title}
            className="
              bg-black
              p-8
              rounded-2xl
              hover:scale-105
              transition
            "
          >

            <h2 className="text-3xl font-bold">
              {project.title}
            </h2>

            <p className="mt-6 text-lg">
              {project.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}