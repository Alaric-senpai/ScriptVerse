// components/ScriptVerseNavbar.jsx
import  { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react'; // Icons for mobile toggle

const ScriptVerseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-950 to-purple-950 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Site Logo/Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-indigo-300 hover:opacity-90 transition-opacity duration-200">
              ScriptVerse
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-sky-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            {/* <Link to="/useeffect" className="text-white hover:text-sky-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              React Hooks
            </Link>
            <Link to="/async-js" className="text-white hover:text-sky-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Async JS
            </Link>
            <Link to="/typescript-basics" className="text-white hover:text-sky-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              TypeScript
            </Link> */}
            {/* Add more links as you create more tutorial sections */}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:text-sky-300 hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Home
          </Link>
          {/* <Link to="/useeffect" onClick={() => setIsOpen(false)} className="block text-white hover:text-sky-300 hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            React Hooks
          </Link>
          <Link to="/async-js" onClick={() => setIsOpen(false)} className="block text-white hover:text-sky-300 hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Async JS
          </Link>
          <Link to="/typescript-basics" onClick={() => setIsOpen(false)} className="block text-white hover:text-sky-300 hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            TypeScript
          </Link> */}
          {/* Add more mobile links */}
        </div>
      </div>
    </nav>
  );
};

export default ScriptVerseNavbar;