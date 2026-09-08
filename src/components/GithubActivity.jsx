import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const GithubActivity = () => {
  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gray-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Activity</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full shadow-[0_0_10px_rgba(156,163,175,0.5)]"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
          className="max-w-5xl mx-auto bg-gray-800/80 backdrop-blur p-4 sm:p-8 md:p-10 rounded-3xl border border-gray-700 shadow-2xl overflow-x-auto group hover:border-gray-500 transition-colors duration-500"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            <motion.div whileHover={{ scale: 1.02 }} className="w-full lg:w-1/2 h-[195px] rounded-xl overflow-hidden shadow-lg border border-gray-700/50 flex flex-col items-center justify-center bg-[#111827]">
              <FaGithub size={80} className="text-gray-300 mb-3" />
              <p className="text-gray-400 font-medium text-lg">@virpariyakrrish</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg border border-gray-700/50">
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=virpariyakrrish&theme=react&hide_border=true&background=111827" 
                alt="Krish's GitHub Streak" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/virpariyakrrish" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-gray-100 hover:bg-white text-gray-900 rounded-xl transition-all font-bold text-lg flex items-center space-x-3"
            >
              <FaGithub size={24} />
              <span>Explore My GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
