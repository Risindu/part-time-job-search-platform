import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="mr-4 text-blue-500" />
                <span>contact@futuristicportfolio.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-4 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-4 text-blue-500" />
                <span>Neo Tokyo, Cyberpunk District</span>
              </li>
            </ul>
          </motion.div>
          <motion.form
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;