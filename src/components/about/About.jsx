// src/pages/HomePage.js

const HomePage = () => {
  return (
    <>
      <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-4">About Me</h3>
      
      <p className="text-[#bebebe] text-base leading-relaxed mb-6">
        In my final year as a CSE student and Full Stack Developer, I have cultivated a passion for solving real-world problems through code.
        Targeting Fullstack Developer roles with an opportunity to grow and make a significant impact in the tech industry.
      </p>

      <h3 className="text-2xl font-bold mb-4 text-white">What I Do</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { title: "Data Structures & Algorithms", desc: "Enhancing problem-solving skills to find solutions for real-world problems in Tech." },
          { title: "Fullstack Development", desc: "Architecting robust server-side solutions for seamless and scalable applications." },
          { title: "DevOps", desc: "Architecting scalable and efficient system designs, harmonizing DevOps principles for seamless software deployment." },
          { title: "Web 3", desc: "Exploring blockchain technology and its applications in decentralized platforms." }
        ].map((item, index) => (
          <div key={index} className="bg-[#252525] p-6 rounded-lg shadow-md border border-[#444]">
            <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
            <p className="text-[#bebebe] text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;