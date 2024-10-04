// src/components/Layout/Sidebar.js

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineCalendarToday } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-[#333] w-full">
      <div className="flex flex-col items-center">
        <img
          src="/githubPfDeadpool.png"
          alt="profile"
          className="rounded-lg w-32 h-32 mb-4 border-2 border-[#FF4500] shadow-lg"
        />
        <h2 className="text-2xl font-bold mb-1 text-white">Sunny Mishra</h2>
        <p className="text-sm text-[#febf5f] mb-3">Software Developer</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2 text-xs text-gray-400 mb-4">
          <span className="bg-[#333] text-white px-2 py-1 rounded">Java</span>
          <span className="bg-[#333] text-white px-2 py-1 rounded">DevOps</span>
          <span className="bg-[#333] text-white px-2 py-1 rounded">AWS</span>
        </div>

        <div className="mt-4 space-y-4 w-full">
          <div className="flex items-center space-x-2 text-sm text-white">
            <HiOutlineMail className="text-[#febf5f]" />
            <p className="truncate">sunnymishra30012004@gmail.com</p>
          </div>

          <div className="flex items-center space-x-2 text-sm text-white">
            <MdOutlineCalendarToday className="text-[#febf5f]" />
            <p>Jan 30, 2004</p>
          </div>

          <div className="flex items-center space-x-2 text-sm text-white">
            <FiMapPin className="text-[#febf5f]" />
            <p>Noida, U.P, India</p>
          </div>
        </div>

        <div className="flex justify-center mt-6 w-full space-x-4">
          <a href="https://www.linkedin.com/in/sunny-mishra-288412239/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition duration-200">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/SunnyMishra04" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition duration-200">
            <FaGithub size={20} />
          </a>
          <a href="https://x.com/sunnymi56845782" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-200">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;