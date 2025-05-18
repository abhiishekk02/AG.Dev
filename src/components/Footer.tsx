import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8">
          <div className="mb-4 md:mb-0">
            <a href="#top" className="text-xl font-bold tracking-tight group inline-flex items-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Abhishek</span>
              <span className="text-white ml-1">G</span>
            </a>
            <p className="text-slate-400 mt-2 text-sm">
              Software Engineer & Data Analyst
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="text-slate-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#education" className="text-slate-400 hover:text-white transition-colors">Education</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="flex items-center justify-center gap-5">
              <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/abhishekk02" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:agourishetty@albany.edu" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <FileText size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-slate-800">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Abhishek G. All rights reserved.
          </p>
          
          <a 
            href="#top" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;