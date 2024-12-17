import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedText } from '../ui/AnimatedText';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFtm9xs98Vghw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732469875649?e=1740009600&v=beta&t=EUbqAOFMPD-9RKqeYgvpBFI5jwu-IBtoA0LapBkoj-0"
            alt="Hugo Vinicius"
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
          />
        </motion.div>
        
        <AnimatedText
          text="Hugo Vinicius | Frontend Developer"
          className="text-2xl md:text-5xl font-bold text-gray-900 mb-6"
          delay={2}
        />
        
        <AnimatedText
          text="Building exceptional user experiences with modern web technologies"
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          delay={4}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
          >
            <motion.div className="w-1 h-2 bg-gray-400 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}