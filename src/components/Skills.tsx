import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, Brain, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Bash', level: 80 },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Redis', level: 92 },
        { name: 'DynamoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Apache Druid', level: 82 },
        { name: 'Aerospike', level: 80 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Lambda', level: 92 },
        { name: 'EC2', level: 90 },
        { name: 'S3', level: 88 },
        { name: 'SQS', level: 85 },
        { name: 'Azure', level: 75 },
      ],
    },
    {
      title: 'Tools & Frameworks',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Apache Kafka', level: 90 },
        { name: 'Spring Boot', level: 88 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 85 },
        { name: 'Jenkins', level: 82 },
        { name: 'Maven', level: 80 },
      ],
    },
    {
      title: 'Specializations',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Microservices', level: 92 },
        { name: 'System Design', level: 90 },
        { name: 'Machine Learning', level: 85 },
        { name: 'Security', level: 88 },
        { name: 'Performance Optimization', level: 87 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Leadership', level: 90 },
        { name: 'Mentoring', level: 88 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Communication', level: 85 },
        { name: 'Team Collaboration', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience 
            in building scalable, high-performance systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Header */}
                <div className={`bg-gradient-to-r ${category.color} p-1`}>
                  <div className="bg-white m-1 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              viewport={{ once: true }}
                              className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Real-time Systems',
                'High-Performance Computing',
                'Data Analytics',
                'API Design',
                'Testing & QA',
                'Agile Methodologies',
                'Code Review',
                'Technical Documentation',
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border border-primary-100 text-primary-700 font-medium hover:shadow-md transition-all duration-200"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;