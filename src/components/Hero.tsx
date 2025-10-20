import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Linkedin } from 'lucide-react';
import resumePdf from '../resources/Akash_Nair.pdf';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Akash Nair</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Software Engineer at Amazon
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-500 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Passionate about building scalable systems, enhancing user experiences, and solving complex problems with innovative solutions. Currently working on authentication systems and security at Amazon.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Connect with me on LinkedIn for opportunities and collaborations
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://linkedin.com/in/nair-akash"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 group"
              >
                Connect on LinkedIn
                <Linkedin size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200 flex items-center gap-2 group"
              >
                Download Resume
                <Download size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-500 left-1/2 transform -translate-x-1/2 text-center"
          >
            <motion.button
              onClick={scrollToNext}
              whileHover={{ y: -2 }}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-600 transition-colors duration-200 group"
              aria-label="Scroll to next section"
            >
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={20} />
              </motion.div>
              <span className="text-xs font-medium group-hover:text-primary-600 transition-colors duration-200">
                Learn More
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;