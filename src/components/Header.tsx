import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md"
    >
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center"
              >
                <Sparkles className="mr-1 h-4 w-4" />
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;