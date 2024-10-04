const Portfolio = () => {
  const projects = [
    {
      title: "Penfolio",
      desc: "A blog platform with user authentication and markdown support",
      tech: ["Node.js", "Express", "MongoDB", "React"],
    },
    {
      title: "Task Management App",
      desc: "A React-based task management application with drag-and-drop functionality",
      tech: ["React",  "Firebase"],
    },

    {
      title: "Coming Soon...",
      desc: "Coming Soon...",
      tech: ["Coming Soon..."],
    },
    {
      title: "Coming Soon...",
      desc: "Coming Soon...",
      tech: ["Coming Soon..."],
    },
  ];

  return (
    <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg border border-[#333] w-full">
      <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-4">
        Portfolio
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#252525] p-6 rounded-lg shadow-md border border-[#444]"
          >
            <h4 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h4>
            <p className="text-[#bebebe] mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-[#333] text-[#febf5f] px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
