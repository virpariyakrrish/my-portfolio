import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const highlights = [
    "Responsive Web Design",
    "Modern UI/UX",
    "React Development",
    "Clean & reusable code",
    "Performance optimization"
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="about" ref={ref} className="py-24 bg-gray-900/40 border-y border-gray-800 relative overflow-hidden">

      <motion.div style={{ y: yBackground }} className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="flex justify-center space-x-2 text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {["About", "Me"].map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } }
                }}
                className={index === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] mb-6"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 perspective-1000">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
            className="lg:w-1/2 flex"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group border border-gray-700 w-full hover:border-blue-500/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-[2.5] duration-700 blur-xl"></div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-500 mr-4 rounded-full"></span>
                Who am I?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg relative z-10">
                I am a passionate <span className="text-blue-400 font-semibold drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">Frontend Web Developer</span> with a keen eye for modern UI/UX design. I love transforming complex problems into simple, beautiful, and intuitive interface designs.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                My web development journey started with a curiosity about how websites work. Since then, I've been continuously learning and building projects using React.js and other modern technologies, always focusing on delivering high-quality, performant applications.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-1 bg-cyan-500 mr-4 rounded-full"></span>
              Development Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 20px -10px rgba(6, 182, 212, 0.5)" 
                  }}
                  className="bg-gray-800/80 p-5 rounded-xl flex items-center space-x-4 border border-gray-700 hover:border-cyan-500 transition-all duration-300 cursor-default"
                >
                  <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-200 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
