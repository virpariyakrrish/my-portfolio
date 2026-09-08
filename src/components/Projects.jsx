import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CarWorld 🚗",
      description: "Responsive car showcase website with modern UI, filtering and interactive components. Browse a wide range of luxury and sports cars.",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React.js", "JavaScript"],
      live: "#",
      github: "#",
    },
    {
      id: 2,
      title: "E-Commerce Hub",
      description: "A full-fledged e-commerce frontend with a shopping cart, product details, and category filtering using Context API.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Bootstrap"],
      live: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application that fetches data from OpenWeatherMap API and displays 5-day forecasts with beautiful charts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "REST API", "Chart.js"],
      live: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A productivity app to manage daily tasks with drag-and-drop functionality, dark mode, and local storage persistence.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Framer Motion"],
      live: "#",
      github: "#",
    }
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section id="projects" ref={ref} className="py-24 bg-gray-900/40 border-y border-gray-800 relative">
      <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-1/3 h-full bg-pink-500/5 blur-[150px] pointer-events-none"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-1/3 h-full bg-orange-500/5 blur-[150px] pointer-events-none"></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Projects</span> 🔥</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 perspective-1000">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
              whileHover={{ 
                y: -15, 
                rotateX: 5, 
                rotateY: index % 2 === 0 ? 5 : -5,
                boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)" 
              }}
              className="bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md"></div>
              
              <div className="bg-gray-900 h-full w-full relative z-0 flex flex-col">
                <div className="relative overflow-hidden h-72">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  <motion.img 
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.7 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  

                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-1 text-lg leading-relaxed">{project.description}</p>
                  

                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
