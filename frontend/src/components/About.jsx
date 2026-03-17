import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, Database } from 'lucide-react';

const About = () => {
  const skills = [
    {
      title: 'Frontend Development',
      icon: <Code2 size={32} className="text-blue-400" />,
      desc: 'Building modern, responsive user interfaces with React, Vite, and Tailwind CSS. Focusing on performance and pixel-perfect design.'
    },
    {
      title: 'Backend Engineering',
      icon: <Server size={32} className="text-red-500" />,
      desc: 'Developing robust API architectures using Laravel ecosystem. Ensuring secure, performant, and scalable data processing.'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={32} className="text-sky-400" />,
      desc: 'Creating cross-platform mobile applications using Flutter. Delivering native-like experiences on both iOS and Android.'
    },
    {
      title: 'Database & Cloud',
      icon: <Database size={32} className="text-orange-400" />,
      desc: 'Integrating real-time features with Firebase. Managing complex schemas in MySQL and SQLite databases.'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Text Content */}
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Who I Am
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-12 h-1 bg-accent mb-6 rounded-full"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-text-muted leading-relaxed"
            >
              I'm Irshan Swandi Restu Adie, a dedicated software engineer specializing in full-stack web and mobile application development. My journey is fueled by a passion for solving complex problems and creating seamless digital experiences. With a strong foundation in modern frameworks, I bring ideas to life from database schema visualization to interactive front-end designs.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 md:mt-0">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="p-8 rounded-2xl bg-secondary/50 border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="mb-4 p-3 bg-white/5 inline-block rounded-xl group-hover:bg-white/10 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
