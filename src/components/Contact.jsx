import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsLoading(true);
      try {
        const response = await fetch("https://formsubmit.co/ajax/krrishvirpariya51@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "Krrish Virpariya Portfolio - New Message",
            _template: "box"
          })
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          newErrors.message = 'Something went wrong. Please try again.';
          setErrors(newErrors);
        }
      } catch (error) {
        newErrors.message = 'Network error. Please try again later.';
        setErrors(newErrors);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
      
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
            className="flex justify-center space-x-3 text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {["Get", "In", "Touch"].map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } }
                }}
                className={index === 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" : ""}
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
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto perspective-1000">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:w-5/12 space-y-10"
          >
            <div 
              onMouseMove={handleMouseMove}
              className="bg-gray-800/80 backdrop-blur rounded-3xl p-6 sm:p-10 border border-gray-700 shadow-xl relative overflow-hidden group transition-colors duration-500 h-full"
            >
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      600px circle at ${mouseX}px ${mouseY}px,
                      rgba(59, 130, 246, 0.15),
                      transparent 40%
                    )
                  `,
                }}
              />
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      400px circle at ${mouseX}px ${mouseY}px,
                      rgba(168, 85, 247, 0.1),
                      transparent 40%
                    )
                  `,
                }}
              />
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
              
              <h3 className="text-3xl font-bold text-white mb-8 relative z-10">Contact Info</h3>
              
              <div className="space-y-6 sm:space-y-8 relative z-10">
                <a href="mailto:krrishvirpariya51@gmail.com" className="flex items-center space-x-4 sm:space-x-6 text-gray-300 hover:text-blue-400 transition-colors group/link">
                  <div className="bg-gray-900 p-3 sm:p-4 rounded-xl border border-gray-700 group-hover/link:border-blue-500 group-hover/link:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all flex-shrink-0">
                    <FaEnvelope size={20} className="sm:w-6 sm:h-6 group-hover/link:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-medium break-all">krrishvirpariya51@gmail.com</span>
                </a>
                
                <a href="https://www.linkedin.com/in/virpariya-krish-3bb220424" target="_blank" rel="noreferrer" className="flex items-center space-x-4 sm:space-x-6 text-gray-300 hover:text-blue-500 transition-colors group/link">
                  <div className="bg-gray-900 p-3 sm:p-4 rounded-xl border border-gray-700 group-hover/link:border-blue-500 group-hover/link:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all flex-shrink-0">
                    <FaLinkedin size={20} className="sm:w-6 sm:h-6 group-hover/link:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-medium break-all">linkedin.com/in/virpariya-krish-3bb220424</span>
                </a>
                
                <a href="https://github.com/virpariyakrrish" target="_blank" rel="noreferrer" className="flex items-center space-x-4 sm:space-x-6 text-gray-300 hover:text-white transition-colors group/link">
                  <div className="bg-gray-900 p-3 sm:p-4 rounded-xl border border-gray-700 group-hover/link:border-gray-400 group-hover/link:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all flex-shrink-0">
                    <FaGithub size={20} className="sm:w-6 sm:h-6 group-hover/link:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-medium break-all">github.com/virpariyakrrish</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/80 backdrop-blur p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                <div className="group relative">
                  <label htmlFor="name" className={`block text-sm font-bold mb-3 uppercase tracking-wider transition-colors ${errors.name ? 'text-red-400' : 'text-gray-400 group-focus-within:text-blue-400'}`}>Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-5 py-4 bg-gray-900 border rounded-xl focus:outline-none focus:ring-2 text-white transition-all text-lg ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500/20'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-2 flex items-center">
                      <FaExclamationCircle className="mr-1" /> {errors.name}
                    </motion.p>
                  )}
                </div>
                <div className="group relative">
                  <label htmlFor="email" className={`block text-sm font-bold mb-3 uppercase tracking-wider transition-colors ${errors.email ? 'text-red-400' : 'text-gray-400 group-focus-within:text-purple-400'}`}>Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-5 py-4 bg-gray-900 border rounded-xl focus:outline-none focus:ring-2 text-white transition-all text-lg ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-700 focus:border-purple-500 focus:ring-purple-500/20'}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-2 flex items-center">
                      <FaExclamationCircle className="mr-1" /> {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>
              
              <div className="mb-8 relative z-10 group">
                <label htmlFor="message" className={`block text-sm font-bold mb-3 uppercase tracking-wider transition-colors ${errors.message ? 'text-red-400' : 'text-gray-400 group-focus-within:text-pink-400'}`}>Your Message</label>
                <textarea 
                  id="message" 
                  rows="6" 
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-5 py-4 bg-gray-900 border rounded-xl focus:outline-none focus:ring-2 text-white transition-all resize-none text-lg ${errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-700 focus:border-pink-500 focus:ring-pink-500/20'}`}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-2 flex items-center">
                    <FaExclamationCircle className="mr-1" /> {errors.message}
                  </motion.p>
                )}
              </div>
              
              <div className="relative z-10">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full py-4 bg-green-500/20 border border-green-500 text-green-400 rounded-xl font-bold text-lg flex items-center justify-center space-x-3"
                  >
                    <FaCheckCircle size={20} />
                    <span>Message sent successfully!</span>
                  </motion.div>
                ) : (
                <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center space-x-3 group ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                    {!isLoading && <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />}
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
