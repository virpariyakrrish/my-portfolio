import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-900/30 border-t border-gray-800 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Education</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto perspective-1000">
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            whileHover={{ scale: 1.03, rotateX: 5 }}
            className="bg-gray-800/80 backdrop-blur p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-700 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 group hover:border-yellow-500/50 transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 group-hover:to-yellow-500/10 transition-colors duration-500"></div>
            
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-5 rounded-2xl text-white text-4xl flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10">
              <FaGraduationCap />
            </div>
            
            <div className="relative z-10 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                <h3 className="text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">Bachelor of Computer Applications</h3>
                <span className="inline-block px-4 py-1.5 bg-gray-900 border border-yellow-500/30 text-yellow-400 rounded-full text-sm font-bold mt-3 sm:mt-0 w-fit shadow-inner">2025 - 2028</span>
              </div>
              
              <h4 className="text-xl text-gray-400 mb-5 font-medium">Saurashtra University</h4>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Focusing on core computer science subjects, modern web development, and software engineering principles. Active member of the college coding club, consistently participating in tech fests and development bootcamps.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
