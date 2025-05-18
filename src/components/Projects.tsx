import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, FileCode } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'CodeQuest',
      category: 'Full Stack Application',
      technologies: ['React JS', 'Express', 'Node JS', 'Supabase'],
      description: 'A full-stack DSA tracking platform for coders to monitor their learning progress, collaborate with peers, and improve their problem-solving skills.',
      features: [
        'Built with React, Node.js, Express, and Supabase',
        'Responsive dashboard for real-time progress analytics',
        'RESTful APIs for data management',
        'Secure PostgreSQL database storage',
        'Collaborative features including friend connections and solution sharing'
      ],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      links: {
        live: '#',
        repo: '#'
      }
    },
    {
      title: 'Full Stack Website',
      category: 'Web Development',
      technologies: ['React JS', 'Express', 'Node JS', 'MySQL'],
      description: 'A comprehensive website for VRGlobal Consulting that serves as both a client-facing platform and an internal management system.',
      features: [
        'Dynamic responsive interface built with React',
        'ISO certification services showcase',
        'Custom dashboard for content management',
        'MySQL database for secure data storage',
        'Transformed into a mini ERP system for client and administrative tasks'
      ],
      image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      links: {
        live: 'https://www.vrglobalconsulting.com/',
        repo: '#'
      }
    },
    {
      title: 'Hybrid Cryptography',
      category: 'Research Project',
      technologies: ['Python', 'AES', 'Blowfish'],
      description: 'A novel cryptographic algorithm that combines existing encryption methods with multiprocessing techniques for enhanced security and performance.',
      features: [
        'Utilizes multiple encryption algorithms in tandem',
        'Improved throughput by almost 60%',
        'Reduces encryption/decryption time by 30%',
        'Implemented with Python multiprocessing',
        'Published research paper on the innovative approach'
      ],
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      links: {
        paper: 'https://sifisheriessciences.com/journal/index.php/journal/article/view/600/583',
        repo: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2">
            <div className="h-px w-12 bg-blue-500"></div>
            <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">Projects</span>
            <div className="h-px w-12 bg-blue-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Featured Work</h2>
          <p className="text-slate-600 text-lg">
            A selection of my projects showcasing my skills in full-stack development, 
            research, and problem-solving.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activeProject === index 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-medium text-lg">{project.title}</div>
                  <div className={`text-sm ${activeProject === index ? 'text-blue-100' : 'text-slate-500'}`}>
                    {project.category}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{projects[activeProject].title}</h3>
                <p className="text-slate-600 mb-6">{projects[activeProject].description}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-slate-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {projects[activeProject].features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">
                          {index === 0 ? <Code size={16} /> : 
                           index === 1 ? <FileCode size={16} /> : 
                           index === 2 ? <Database size={16} /> : <Code size={16} />}
                        </span>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {projects[activeProject].links.live && (
                    <a 
                      href={projects[activeProject].links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </a>
                  )}
                  
                  {projects[activeProject].links.repo && (
                    <a 
                      href={projects[activeProject].links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-md font-medium hover:bg-slate-900 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  
                  {projects[activeProject].links.paper && (
                    <a 
                      href={projects[activeProject].links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-md font-medium hover:bg-slate-900 transition-colors"
                    >
                      <FileCode size={16} />
                      Read Paper
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;