import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    const text = title.innerText;
    title.innerHTML = '';
    
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
      span.style.transitionDelay = `${i * 0.05}s`;
      
      title.appendChild(span);
      
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 100);
    });
  }, []);

  return (
    <section id="top" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-2/3 -right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center space-y-12 relative z-10">
        <div className="text-center max-w-4xl space-y-6">
          <div className="inline-block py-1 px-3 mb-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm">
            Software Engineer & Data Analytics
          </div>
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Abhishek G
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building seamless experiences with modern full-stack development and data analytics. 
            Passionate about solving complex problems and creating intuitive interfaces.
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
            >
              View My Work
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-5 mt-8">
          <a href="https://github.com" className="text-slate-600 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/abhishekk02" className="text-slate-600 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="mailto:agourishetty@albany.edu" className="text-slate-600 hover:text-blue-600 transition-colors">
            <Mail size={24} />
          </a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <FileText size={24} />
          </a>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-blue-500 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;