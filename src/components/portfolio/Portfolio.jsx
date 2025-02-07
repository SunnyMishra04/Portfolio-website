// const Portfolio = () => {
//   const projects = [
//     {
//       title: "Penfolio",
//       desc: "A blog platform with user authentication and markdown support",
//       tech: ["Node.js", "Express", "MongoDB", "React"],
//     },
//     {
//       title: "Portfolio Website",
//       desc: "A React and TailwindCSS based portfolio website ",
//       tech: ["React" , "TailwindCSS"],
//     },

//     {
//       title: "Plant Disease identification using CNN",
//       desc: "Streamlit web app to identify plant diseases using Convolutional Neural Networks through a user-uploaded image",
//       tech: ["Python" , "Jupyter Notebook", "Tensorflow", "Pandas", "Numpy",  "CNN" , "Streamlit"],
//     },
//     {
//       title: "Coming Soon...",
//       desc: "Coming Soon...",
//       tech: ["Coming Soon..."],
//     },
//   ];

//   return (
//     <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg border border-[#333] w-full">
//       <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-4">
//         Portfolio
//       </h3>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-[#252525] p-6 rounded-lg shadow-md border border-[#444]"
//           >
//             <h4 className="text-xl font-bold text-white mb-2">
//               {project.title}
//             </h4>
//             <p className="text-[#bebebe] mb-4">{project.desc}</p>
//             <div className="flex flex-wrap gap-2">
//               {project.tech.map((tech, techIndex) => (
//                 <span
//                   key={techIndex}
//                   className="bg-[#333] text-[#febf5f] px-2 py-1 rounded text-xs"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
const Portfolio = () => {
  const projects = [
    {
      title: "Penfolio",
      desc: "A blog platform with user authentication and markdown support",
      tech: ["Node.js", "Express", "MongoDB", "React"],
      link: "https://github.com/SunnyMishra04/Penfolio_MERNBlogApp", // Add the project URL here
    },
    {
      title: "Portfolio Website",
      desc: "A React and TailwindCSS based portfolio website ",
      tech: ["React", "TailwindCSS"],
      link: "https://github.com/SunnyMishra04/Portfolio-website", // Change this to the actual portfolio URL
    },
    {
      title: "Plant Disease Identification using CNN",
      desc: "Streamlit web app to identify plant diseases using Convolutional Neural Networks through a user-uploaded image",
      tech: [
        "Python",
        "Jupyter Notebook",
        "Tensorflow",
        "Pandas",
        "Numpy",
        "CNN",
        "Streamlit",
      ],
      link: "https://github.com/SunnyMishra04/Plant_Disease_Identification_CNN", // Add the project link
    },
    {
      title: "Coming Soon...",
      desc: "Coming Soon...",
      tech: ["Coming Soon..."],
      link: "#", // No redirection for "Coming Soon"
    },
  ];

  return (
    <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg border border-[#333] w-full">
      <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-4">
        Portfolio
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link} // Navigate to the project link
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            className="block"
          >
            <div className="bg-[#252525] p-6 rounded-lg shadow-md border border-[#444] transition-transform transform hover:scale-105 hover:border-[#febf5f] duration-300">
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
