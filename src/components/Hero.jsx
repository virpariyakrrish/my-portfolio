import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaNodeJs } from 'react-icons/fa';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);


  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { damping: 30, stiffness: 200 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden perspective-1000">

      <motion.div style={{ y: y1, opacity }} className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></motion.div>
      <motion.div style={{ y: y2, opacity }} className="absolute top-40 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></motion.div>
      <motion.div style={{ y: y3, opacity }} className="absolute -bottom-10 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold mb-4 tracking-wide">
                Hello, I'm
              </h2>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-white"
            >
              Krish Virpariya <motion.span 
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                className="inline-block origin-bottom-right"
              >👋</motion.span>
            </motion.h1>
            
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold mb-8"
            >
              Frontend Web Developer
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              I build modern, responsive and interactive websites using React, JavaScript and modern web technologies. Turning ideas into beautiful digital experiences.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold text-lg transition-all w-full sm:w-auto text-center"
              >
                View My Work
              </motion.a>

            </motion.div>
          </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="lg:w-1/2 mt-12 lg:mt-0 relative"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto" style={{ transform: "translateZ(50px)" }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                
                <motion.div 
                  animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 md:top-4 md:-left-8 bg-gray-900 border border-gray-700 p-4 rounded-2xl shadow-xl z-20 text-blue-400"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <FaReact size={32} />
                </motion.div>

                <motion.div 
                  animate={{ y: [15, -15, 15], rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/4 -right-6 md:top-1/3 md:-right-12 bg-gray-900 border border-gray-700 p-3 rounded-2xl shadow-xl z-20 text-yellow-400"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <FaJs size={28} />
                </motion.div>

                <motion.div 
                  animate={{ x: [-10, 10, -10], y: [10, -10, 10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-4 -left-2 md:bottom-10 md:-left-4 bg-gray-900 border border-gray-700 p-3 rounded-2xl shadow-xl z-20 text-orange-500"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <FaHtml5 size={28} />
                </motion.div>

                <motion.div 
                  animate={{ y: [-12, 12, -12], x: [-5, 5, -5] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-8 right-10 md:-bottom-4 md:right-16 bg-gray-900 border border-gray-700 p-4 rounded-2xl shadow-xl z-20 text-green-500"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <FaNodeJs size={32} />
                </motion.div>


                <div className="relative w-full h-full rounded-full border-4 border-gray-800 bg-gray-900 overflow-hidden shadow-2xl flex items-center justify-center">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187871.png" 
                    alt="Krish Virpariya" 
                    className="w-full h-full object-contain z-0 scale-110"
                    style={{ transform: "translateZ(20px)" }}
                  />
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
