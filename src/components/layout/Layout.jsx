// src/components/Layout/Layout.js
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex justify-center p-4">
      <div className="w-full max-w-6xl">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-6">
          <Sidebar />
          <main className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg border border-[#333] w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default Layout;