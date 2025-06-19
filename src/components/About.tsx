import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Chrome Extension Users', value: '10K+' },
    { icon: GraduationCap, label: 'Degrees', value: '2' },
    { icon: MapPin, label: 'Location', value: 'Seattle, WA' },
  ];

  const highlights = [
    'Enhanced sign-in security at Amazon with automatic passkey enrollment',
    'Reduced SMS costs by 48% using ML models to filter fraudulent accounts',
    'Built scalable analytics tool processing 4M queries per day',
    'Increased client retention by 15% through innovative database solutions',
    'Chrome extension with 10,000+ active users',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate software engineer with expertise in full-stack development, 
            cloud technologies, and building scalable systems that impact millions of users.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Currently working as a Software Engineer at Amazon, I specialize in authentication 
                systems and security solutions. My journey spans from mobile behavioral retargeting 
                at Vizury to building emergency savings platforms at Sunny Day Fund.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                I hold a Master's in Computer Science from the University of Virginia and a 
                Bachelor's in Electrical and Electronics Engineering from BITS Pilani. My passion 
                lies in creating innovative solutions that solve real-world problems and enhance 
                user experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary-100 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;