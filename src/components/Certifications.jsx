import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    {
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "Tata / Forage",
      date: "August 2026",
      link: "https://drive.google.com/file/d/1jsH_QBX0YHaQiyq-7KfU4q6eMnlJI2Ho/view?usp=sharing"
    },
    {
      title: "Innovating with Google Cloud AI",
      issuer: "Simplilearn SkillUp",
      date: "July 2026",
      link: "https://drive.google.com/file/d/1JzTSeQ18CFm8lskcxfdJYVUEO4JdXS8t/view?usp=sharing"
    },
    {
      title: "FutureForward 2026",
      issuer: "Red & White Skill Education",
      date: "February 2026",
      link: "https://drive.google.com/file/d/1t-dn2GrE3Xvy-cjussnVUs7U-j2m3fDv/view?usp=sharing"
    },
    {
      title: "Gen AI Code generation using GitHub Copilot with Javascript",
      issuer: "Simplilearn SkillUp",
      date: "July 2026",
      link: "https://drive.google.com/file/d/1h8-TItdhpKyGUCrD9MAtukWIIHxQYR4_/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Certifications</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-1000">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ y: -10, rotateX: 5, rotateY: index % 2 === 0 ? 5 : -5 }}
              className="bg-gray-800/80 backdrop-blur p-6 sm:p-8 rounded-3xl border border-gray-700 flex flex-col items-center text-center group hover:border-cyan-500/50 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.3)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-5xl text-cyan-400 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 relative z-10">
                <FaCertificate />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors relative z-10">{cert.title}</h3>
              <p className="text-gray-400 text-lg mb-2 relative z-10">{cert.issuer}</p>
              <p className="text-sm text-gray-500 font-semibold mb-8 relative z-10">{cert.date}</p>
              
              <a 
                href={cert.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-3 bg-gray-900 border border-cyan-500/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-colors duration-300 flex items-center space-x-2 relative z-10 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              >
                <span>View Certificate</span>
                <FaExternalLinkAlt size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
