import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Food Menu Recommendation OS',
      desc: 'An intelligent recommendation system for restaurant menus utilizing Collaborative Filtering. Built with Laravel backend.',
      tech: ['React', 'Laravel', 'SQLite', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
      link: '#',
      github: '#'
    },
    {
      title: 'E-Commerce Mobile App',
      desc: 'Clone e-commerce rexus official store',
      tech: ['Flutter', 'Firebase', 'Supabase'],
      image: 'https://sogxjoqhbxxxqbmcbptk.supabase.co/storage/v1/object/public/img/rexus%20daiva.webp',
      link: 'https://app-uas-e4559.web.app/',
      github: '#'
    },
    {
      title: 'Pondok Modern Darul Hijroh',
      desc: 'Official Website Pondok Pesantren Modern Darul Hijroh',
      tech: ['Wordpress'],
      image: 'https://darulhijroh.ponpes.id/wp-content/uploads/elementor/thumbs/PONPES-MODERN-rj2xh396yxnaoo63j1dabg7zyvdspls3ye8zhrfbvk.jpg',
      link: 'https://darulhijroh.ponpes.id/',

    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center"
          >
            Selected Works
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-accent rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-primary border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 text-text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex items-center gap-4">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
