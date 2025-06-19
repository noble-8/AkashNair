import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Amazon',
      role: 'Software Developer Engineer',
      location: 'Seattle, WA',
      period: 'August 2023 - Present',
      type: 'Full-time',
      achievements: [
        'Enhanced sign-in security and user experience by implementing automatic passkey enrollment, projected to increase passkey usage by 113 basis points EOY',
        'Reduced SMS costs per month by 48.04% from $300k to $150k using ML models to filter fraudulent accounts',
        'Engineered the one time password workflow for Amazon.com\'s signin page, enabling efficient OTP generation and verification ensuring 99.99% availability',
      ],
      technologies: ['Java', 'AWS Lambda', 'DynamoDB', 'SNS', 'SQS', 'Machine Learning'],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      company: 'Sunny Day Fund',
      role: 'Full Stack Developer',
      location: 'Arlington, VA',
      period: 'March 2023 - August 2023',
      type: 'Full-time',
      achievements: [
        'Crafted employer-rewarded emergency savings designed to stabilize workers\' finances, leading to 33% less turnover (p<0.05) relative to overall turnover',
        'Utilized Node.js and PostgreSQL to build robust financial platform',
      ],
      technologies: ['Node.js', 'PostgreSQL', 'React', 'TypeScript'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      company: 'Amazon',
      role: 'Software Engineer Intern',
      location: 'Seattle, WA',
      period: 'May 2022 - August 2022',
      type: 'Internship',
      achievements: [
        'Devised a tool for running analytics on the sign-in workflow data processing 4 million queries per day',
        'Utilized Lambda, SQS, Redshift, and proprietary internal tools at Amazon',
        'Completed project with 100% line coverage using Mockito unit tests, Functional Tests, Load Tests, and Stress Tests',
      ],
      technologies: ['Java', 'AWS Lambda', 'SQS', 'Redshift', 'Mockito'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'Vizury',
      role: 'Backend Engineer',
      location: 'Bangalore, Karnataka',
      period: 'July 2019 - May 2021',
      type: 'Full-time',
      achievements: [
        'Increased client retention by decreasing customer churn-out rate by 15% through implementing Apache Druid to trace 80 million notifications daily',
        'Cut down wait time for campaign changes from 40 mins to 5 mins by refactoring legacy ETL pipeline code',
        'Implemented real-time bidding system with 5ms latency using Bloom Filters, Apache Kafka, Aerospike, Vertica, Redis',
        'Developed personalized push notification strategies across multiple channels, helping grow revenue by 3x',
        'Mentored 2 new joiners and 1 intern, providing guidance and environment setup',
      ],
      technologies: ['Java', 'Python', 'Apache Kafka', 'Aerospike', 'Vertica', 'Redis', 'Apache Druid'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Nvidia',
      role: 'Software Engineer Intern',
      location: 'Pune, Maharashtra',
      period: 'July 2017 - December 2017',
      type: 'Internship',
      achievements: [
        'Designed a scalable mobile app that could communicate with Nvidia Hardware',
        'Gained experience in hardware-software integration and mobile development',
      ],
      technologies: ['Mobile Development', 'Hardware Integration', 'Android'],
      color: 'from-green-600 to-green-400',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey through innovative companies, building scalable solutions and 
            driving meaningful impact across diverse technology stacks.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Header */}
                <div className={`bg-gradient-to-r ${exp.color} p-1`}>
                  <div className="bg-white m-1 rounded-xl p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                          <span>{exp.company}</span>
                          <ExternalLink size={16} className="opacity-60" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium w-fit">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:bg-primary-100 transition-colors duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;