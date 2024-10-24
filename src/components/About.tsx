import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Futuristic Portrait"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-6">
              I'm a visionary developer with a passion for creating immersive digital experiences. With expertise in cutting-edge technologies, I bring futuristic concepts to life through code.
            </p>
            <p className="text-lg mb-6">
              My journey in the world of technology has led me to explore the boundaries of what's possible in web development, 3D graphics, and interactive design.
            </p>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
            >
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
              >
                Explore My Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;