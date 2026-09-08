import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    "Cricket Championship Winner",
    "Kho-Kho Tournament Winner",
    "Innovation & Creativity Award",
    "Problem Solver Recognition"
  ];

  return (
    <section id="achievements" className="py-24 bg-gray-900/30 border-y border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight"><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Achievements</span> & Awards</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto perspective-1000">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.3)"
                }}
                className="bg-gray-800/80 backdrop-blur p-6 rounded-2xl flex items-center space-x-5 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 group cursor-default"
              >
                <div className="bg-gradient-to-br from-amber-400 to-yellow-600 p-4 rounded-full text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <FaTrophy size={24} />
                </div>
                <p className="text-gray-200 text-lg font-medium group-hover:text-amber-300 transition-colors">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
