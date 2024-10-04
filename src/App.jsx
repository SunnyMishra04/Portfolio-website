
// src/App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/Homepage';
import ContactPage from './pages/Contactpage';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        
        
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;