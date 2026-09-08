import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'top-4' : 'top-0'}`}
    >
      <div className={`mx-auto transition-all duration-500 ${isScrolled ? 'max-w-5xl px-4' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-full px-6 py-3 shadow-[0_0_30px_rgba(59,130,246,0.15)]' 
            : 'bg-transparent py-6'
        }`}>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-300 to-blue-400 animate-shine bg-clip-text text-transparent transition-all">
              Krish
            </a>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  whileTap={{ scale: 0.9 }}
                  href={`#${link.toLowerCase()}`}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-5 flex flex-col justify-between items-center">
                <span className={`h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl overflow-hidden bg-gray-900/95 backdrop-blur-xl border border-gray-700 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
