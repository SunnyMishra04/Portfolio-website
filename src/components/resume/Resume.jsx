
const Resume = () => {
  return (
    <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg border border-[#333] w-full">
      <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Resume</h3>
      
      <div className="mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">Education</h4>
        <div className="bg-[#252525] p-6 rounded-lg shadow-md border border-[#444] mb-4">
        <h5 className="text-lg font-bold text-white">Dr.APJ Abdul Kalam Technical University</h5>
          <div className="justify-between flex" > 
            <p className="text-[#febf5f]">B.Tech in Computer Science</p>
             <p className="text-[#febf5f]">2021 - 2025</p>    
                 </div>
                 <p className="text-[#bebebe] mt-2">Relevant coursework: Data Structures, Algorithms, Web Development, Database Management</p>
 
          </div>
          <div className="bg-[#252525] p-6 rounded-lg shadow-md border border-[#444] mb-4">
        <h5 className="text-lg font-bold text-white">Marigold Public School</h5>
          <div className="justify-between flex" > 
            <p className="text-[#febf5f]">Intermediate</p>
             <p className="text-[#febf5f]">2019 - 2021</p>    
                 </div>
                 <p className="text-[#bebebe] mt-2">PCM</p>
 
          </div>
      </div>

      <div className="mb-8">
        <h4 className="text-2xl font-bold text-white mb-4">Work Experience</h4>
        <div className="bg-[#252525] p-6 rounded-lg shadow-md border border-[#444] mb-4">
          <h5 className="text-lg font-bold text-white">Oasis InfoByte</h5>
          <div className="justify-between flex" > 
            <p className="text-[#febf5f]">Web Developer Intern</p>
             <p className="text-[#febf5f]">Sep 2023 - Oct 2023</p>    
                 </div>
          <ul className="list-disc list-inside text-[#bebebe] mt-2">
            <li>Developed and maintained web applications using React and Node.js</li>
            <li>Collaborated with the team to implement new features and improve existing ones</li>
            <li>Participated in code reviews and contributed to the company best practices</li>
          </ul>
        </div>
      </div>

      <div>
        <h4 className="text-2xl font-bold text-white mb-4">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'React', 'Node.js', 'MongoDB', 'Java', 'SQL', 'Git', 'Express', 'Docker'].map((skill, index) => (
            <span key={index} className="bg-[#333] text-[#febf5f] px-3 py-1 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;