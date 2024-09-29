// src/pages/HomePage.js
import  { useState } from 'react';
import About from '../components/about/About';
import Resume from '../components/resume/Resume';
import Portfolio from '../components/portfolio/Portfolio';
import Contactpage from '../pages/Contactpage';
const HomePage = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
        case 'contact':
        return <Contactpage />;
      default:
        return <About />;
    }
  };

  return (
    <div className="justify-items-end">
      <nav className="flex justify-center space-x-4 mb-8">
        <button 
          onClick={() => setActiveSection('about')}
          className={`px-4 py-2 hover:text-[#febf5f] transition duration-200 ${activeSection === 'about' ? ' text-[#febf5f]' : 'text-white'}`}
        >
          About
        </button>
        <button 
          onClick={() => setActiveSection('resume')}
          className={`px-4 py-2 hover:text-[#febf5f] transition duration-200 ${activeSection === 'resume' ? ' text-[#febf5f]' : 'text-white'}`}
        >
          Resume
        </button>
        <button 
          onClick={() => setActiveSection('portfolio')}
          className={`px-4 py-2 hover:text-[#febf5f] transition duration-200 ${activeSection === 'portfolio' ? ' text-[#febf5f]'  : 'text-white'}`}
        >
          Portfolio
        </button>
        <button 
          onClick={() => setActiveSection('contact')}
          className={`px-4 py-2 hover:text-[#febf5f] transition duration-200 ${activeSection === 'contact' ? ' text-[#febf5f]' : 'text-white'}`}
        >
          Contact
        </button>
      </nav>
      {renderSection()}
    </div>
  );
};

export default HomePage;