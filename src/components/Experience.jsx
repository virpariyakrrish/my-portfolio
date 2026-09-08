import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">& Internship</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-400 to-teal-500 mx-auto rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto perspective-1000">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateX: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            whileHover={{ scale: 1.02, x: 10 }}
            className="relative border-l-4 border-green-500 pl-8 py-4 group"
          >
            <div className="absolute w-6 h-6 bg-green-500 rounded-full -left-[15px] top-8 border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.8)]"></div>
            
            <div className="bg-gray-800/80 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700 group-hover:border-green-500/50 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">IT & Web Development Intern</h3>
                <span className="inline-block px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-bold border border-green-500/30 mt-3 md:mt-0">6 Months</span>
              </div>
              
              <h4 className="text-xl text-gray-400 mb-6 font-medium relative z-10">Amit Ege Solution</h4>
              
              <ul className="space-y-3 text-gray-300 relative z-10">
                {[
                  "Developed and maintained various websites (Website Development).",
                  "Performed website testing to ensure high quality and bug-free performance.",
                  "Designed user-friendly interfaces and improved UI/UX experiences.",
                  "Worked on IT management and project handling.",
                  "Created and edited multimedia content using Photoshop and Video Editing tools.",
                  "Assisted in digital IT marketing campaigns."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">▹</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
