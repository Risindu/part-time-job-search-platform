import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Rocket, Sparkles } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SpaceShip from './components/SpaceShip';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <main>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-screen flex items-center justify-center relative"
        >
          <Canvas className="absolute inset-0">
            <OrbitControls enableZoom={false} />
            <Stars />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <SpaceShip />
          </Canvas>
          <div className="z-10 text-center">
            <motion.h1
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="text-6xl font-bold mb-4"
            >
              Welcome to the Future
            </motion.h1>
            <motion.p
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="text-xl"
            >
              Explore my futuristic portfolio
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
              className="mt-8"
            >
              <a
                href="#about"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
              >
                <Rocket className="mr-2" />
                Launch Journey
              </a>
            </motion.div>
          </div>
        </motion.section>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 py-4 text-center">
        <p>&copy; 2024 Futuristic Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;