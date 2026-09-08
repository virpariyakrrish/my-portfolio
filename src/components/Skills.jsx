import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaCode } from 'react-icons/fa';
import { SiJavascript, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, color: "group-hover:shadow-[#E34F26]" },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, color: "group-hover:shadow-[#1572B6]" },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, color: "group-hover:shadow-[#F7DF1E]" },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, color: "group-hover:shadow-[#61DAFB]" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" />, color: "group-hover:shadow-[#7952B3]" },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, color: "group-hover:shadow-[#F05032]" },
    { name: "GitHub", icon: <FaGithub className="text-white" />, color: "group-hover:shadow-white" },
    { name: "VS Code", icon: <FaCode className="text-[#007ACC]" />, color: "group-hover:shadow-[#007ACC]" },
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const SkillCard = ({ title, skills, themeColor }) => (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-700 hover:border-gray-500 transition-colors duration-300 h-full">
      <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${themeColor} mb-8 text-center uppercase tracking-wider`}>
        {title}
      </h3>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            className={`group flex flex-col items-center justify-center p-4 bg-gray-900 rounded-2xl border border-gray-700 transition-all duration-300 shadow-lg ${skill.color}`}
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-5xl mb-4 filter drop-shadow-md group-hover:drop-shadow-xl transition-all"
            >
              {skill.icon}
            </motion.div>
            <span className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Skills</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 perspective-1000 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, rotateY: -15, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
            className="h-full"
          >
            <SkillCard title="Frontend" skills={frontendSkills} themeColor="from-blue-400 to-cyan-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, z: -100 }}
            whileInView={{ opacity: 1, y: 0, z: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ rotateY: 0, rotateX: 10, scale: 1.02 }}
            className="h-full"
          >
            <SkillCard title="Tools" skills={tools} themeColor="from-orange-400 to-red-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
