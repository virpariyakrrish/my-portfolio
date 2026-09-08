import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-950 pt-16 pb-8 border-t border-gray-800 relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-16"
        >
          

          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }} className="text-center lg:text-left">
            <a href="#home" className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block mb-4">
              Krish
            </a>
            <p className="text-gray-400 leading-relaxed mx-auto lg:mx-0 mb-6">
              Building modern, scalable, and beautiful digital experiences. Let's create something amazing together.
            </p>
          </motion.div>


          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }} className="text-center lg:text-left">
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>


          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }} className="text-center lg:text-left">
            <h4 className="text-xl font-bold text-white mb-6">Contact Info</h4>
            <div className="flex flex-col space-y-4 items-center lg:items-start text-gray-400">
              <a href="mailto:krrishvirpariya51@gmail.com" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                <FaEnvelope className="text-blue-500" />
                <span className="text-sm">krrishvirpariya51@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-500" />
                <span className="text-sm">+91 9427385972</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <span className="text-sm">Gujarat, India</span>
              </div>
            </div>
          </motion.div>


          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }} className="text-center lg:text-right flex flex-col items-center lg:items-end">
            <h4 className="text-xl font-bold text-white mb-6">Connect With Me</h4>
            <div className="flex space-x-4 mb-8">
              <motion.a 
                whileHover={{ y: -5, scale: 1.1, color: '#fff', backgroundColor: '#333' }}
                href="https://github.com/virpariyakrrish" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 bg-gray-900 border border-gray-700 text-gray-400 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                <FaGithub size={22} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1, color: '#fff', backgroundColor: '#0077b5', borderColor: '#0077b5' }}
                href="https://www.linkedin.com/in/virpariya-krish-3bb220424" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 bg-gray-900 border border-gray-700 text-gray-400 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,119,181,0.5)]"
              >
                <FaLinkedin size={22} />
              </motion.a>

              <motion.a 
                whileHover={{ y: -5, scale: 1.1, color: '#fff', backgroundImage: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
                href="https://www.instagram.com/kriish_virpariyaa_?stkn=MXhtZ2IzYzBxNGdoMg==" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 bg-gray-900 border border-gray-700 text-gray-400 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:border-transparent hover:shadow-[0_0_15px_rgba(220,39,67,0.5)]"
              >
                <FaInstagram size={22} />
              </motion.a>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59,130,246,0.6)" }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="px-6 py-3 bg-gray-800 border border-gray-700 hover:bg-blue-600 hover:border-blue-500 text-white rounded-full font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <span>Back to Top</span>
              <FaArrowUp className="animate-bounce mt-1" size={14} />
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Krish Virpariya. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
