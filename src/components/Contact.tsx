import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/nair-akash',
      primary: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'akash7nair@gmail.com',
      href: 'mailto:akash7nair@gmail.com',
      primary: false,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (434) 466-0925',
      href: 'tel:+14344660925',
      primary: false,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Seattle, WA',
      href: '#',
      primary: false,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/noble-8/',
      color: 'hover:text-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nair-akash',
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and innovation.
          </p>
          <p className="text-lg text-blue-600 font-medium mt-4">
            Preferred contact method: LinkedIn
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you're looking to hire, collaborate on a project, or just want to 
                chat about the latest in tech, I'd love to hear from you. LinkedIn is my 
                preferred platform for professional connections.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-6 rounded-xl transition-all duration-200 ${
                      info.primary 
                        ? 'bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300' 
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`p-3 rounded-xl transition-colors duration-200 ${
                      info.primary 
                        ? 'bg-blue-100 group-hover:bg-blue-200' 
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <info.icon className={`w-6 h-6 ${
                        info.primary ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm font-medium ${
                        info.primary ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        {info.label}
                        {info.primary && ' (Preferred)'}
                      </div>
                      <div className="text-gray-900 font-semibold">
                        {info.value}
                      </div>
                    </div>
                    {info.href.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    )}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Follow Me
              </h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-gray-100 rounded-xl text-gray-600 ${social.color} transition-all duration-200 hover:shadow-md`}
                    aria-label={social.label}
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;