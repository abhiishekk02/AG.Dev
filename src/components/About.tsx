import React from 'react';
import profilePhoto from '../assets/ProfilePhoto.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 relative">
            <div className="aspect-square  rounded-2xl shadow-xl overflow-hidden">
              <img
                src={profilePhoto}
                alt="Abhishek Gourishetty"
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-lg -z-10"></div>
          </div>
          
          <div className="w-full md:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <div className="h-px w-12 bg-blue-500"></div>
              <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">Building digital experiences with code & creativity</h2>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              I'm a software engineer and data analyst with a passion for creating intuitive, user-friendly applications that solve real-world problems.
              Currently pursuing my Master's in Information Science with a focus on Data Analytics at the University at Albany.
            </p>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              With experience in full-stack development and data analysis, I bring a holistic approach to projects, 
              understanding both the technical constraints and user needs. I believe in clean code, continuous learning, 
              and leveraging modern technologies to create efficient solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-slate-100 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-slate-600">Years Coding</div>
              </div>
              <div className="bg-slate-100 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-slate-600">Projects</div>
              </div>
              <div className="bg-slate-100 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-slate-600">Certifications</div>
              </div>
              <div className="bg-slate-100 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-slate-600">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;