import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Star, Download, BookOpen } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Browser Fingerprint Spoofing',
      description: 'A Chrome extension that spoofs browser fingerprints to maintain user anonymity. Features random generation of navigator properties, hardware configuration, screen size, and canvas elements.',
      image: '/images/browser_fingerprinting.png',
      technologies: ['JavaScript', 'Chrome Extension API', 'Web APIs', 'Privacy Tech'],
      stats: [
        { icon: Users, label: 'Active Users', value: '10,000+' },
        { icon: Download, label: 'Downloads', value: '25,000+' },
        { icon: Star, label: 'Rating', value: '4.8/5' },
      ],
      links: {
        github: 'https://github.com/noble-8/browserFingerPrintSpoofing',
        live: 'https://chrome.google.com/webstore/detail/fingerprint-spoofer/facgnnelgcipeopfbjcajpaibhhdjgcp',
      },
      featured: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Physics Tutor AI',
      description: 'A sophisticated AI-powered physics tutoring application built with React, TypeScript, and OpenAI GPT models. Features adaptive learning, Socratic questioning, misconception detection, and personalized education with comprehensive analytics.',
      image: '/images/physics_tutor_thumbnail.png',
      technologies: ['React', 'TypeScript', 'OpenAI GPT', 'Supabase', 'Tailwind CSS', 'Vite'],
      stats: [
        { icon: Star, label: 'AI Model', value: 'GPT-3.5' },
        { icon: Users, label: 'Learning Modes', value: '5+' },
        { icon: Download, label: 'Analytics', value: 'Real-time' },
      ],
      links: {
        github: 'https://github.com/noble-8/Ai_powered_physics-tutor',
        live: 'https://ai-physics-tutor-cha-3vzl.bolt.host/',
      },
      featured: true,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Real-time Analytics Solution',
      description: `Architected and implemented a real-time data ingestion and aggregation system using Druid and Kafka to monitor 90 million daily notifications. \\n
      Reduced debugging time for Ops by eliminating manual log analysis and enabled automatic, real-time client reporting on notification yield, successfully scaling a pre-existing system which struggled with real-time demands. \\n
      \n Expanded this Database to track user journeys, DAUs, and MAUs`,
      image: '/images/druid.png',
      technologies: ['Java', 'Apache Kafka', 'Aerospike', 'Bloom Filters', 'Redis'],
      stats: [
        { icon: Users, label: 'Latency', value: '5ms' },
        { icon: Star, label: 'Throughput', value: '10K/s' },
      ],
      links: {
        medium: 'https://medium.com/@nairindebonair/using-druid-to-track-notification-yeild-12924f5d1686',
      },
      featured: false,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions and impactful projects that demonstrate 
            technical expertise and problem-solving capabilities.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group ${project.featured ? 'lg:grid-cols-2' : ''} grid gap-8 items-center`}
            >
              <div className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 ${project.featured ? 'lg:col-span-2' : ''}`}>
                {project.featured && (
                  <div className={`bg-gradient-to-r ${project.color} p-1`}>
                    <div className="bg-white m-1 rounded-xl overflow-hidden">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                              Featured Project
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {project.title}
                          </h3>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {project.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="text-center">
                                <div className="flex justify-center mb-2">
                                  <stat.icon className="w-5 h-5 text-primary-600" />
                                </div>
                                <div className="text-lg font-bold text-gray-900">
                                  {stat.value}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Links */}
                          <div className="flex gap-4">
                            {project.links.github && (
                              <motion.a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              >
                                <Github size={18} />
                                Code
                              </motion.a>
                            )}
                            {project.links.live && (
                              <motion.a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                              >
                                <ExternalLink size={18} />
                                Live Demo
                              </motion.a>
                            )}
                            {project.links.medium && (
                              <motion.a
                                href={project.links.medium}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                              >
                                <BookOpen size={18} />
                                Article
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!project.featured && (
                  <div className="p-6">
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {project.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="flex justify-center mb-1">
                            <stat.icon className="w-4 h-4 text-primary-600" />
                          </div>
                          <div className="text-sm font-bold text-gray-900">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-1 px-3 py-2 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Github size={14} />
                          Code
                        </motion.a>
                      )}
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-1 px-3 py-2 bg-primary-600 text-white rounded text-sm hover:bg-primary-700 transition-colors duration-200"
                        >
                          <ExternalLink size={14} />
                          Demo
                        </motion.a>
                      )}
                      {project.links.medium && (
                        <motion.a
                          href={project.links.medium}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors duration-200"
                        >
                          <BookOpen size={14} />
                          Article
                        </motion.a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;