import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Virtual Intern',
      company: 'Walmart Global Tech',
      period: 'Aug 2023 - Sep 2023',
      location: 'Remote',
      description: 'Advanced Software Engineering Job Simulation',
      achievements: [
        'Extracted insights by filtering and joining data in Excel',
        'Merged datasets to reveal valuable connections',
        'Leveraged Excel\'s tools for efficient analysis',
        'Transformed raw data into actionable insights',
        'Supported decision-making with clear Excel-based findings'
      ],
      tags: ['Data Analysis', 'Excel', 'Business Intelligence']
    },
    {
      title: 'Intern',
      company: 'Internshala',
      period: 'Jun 2022 - Aug 2022',
      location: 'Hyderabad',
      description: 'Full-Stack Development Internship',
      achievements: [
        'Developed a modern portfolio website using React.js for dynamic front-end functionality',
        'Utilized Bootstrap 5 (BS5) for sleek and responsive CSS design',
        'Implemented MySQL for robust database management, ensuring secure and efficient data storage',
        'Engineered RESTful APIs to facilitate seamless data transfer between the back-end and front-end systems',
        'Demonstrated proficiency in full-stack development, combining both front-end and back-end technologies'
      ],
      tags: ['React.js', 'MySQL', 'Bootstrap 5', 'RESTful API', 'HTML/CSS']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2">
            <div className="h-px w-12 bg-blue-500"></div>
            <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">Experience</span>
            <div className="h-px w-12 bg-blue-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Professional Journey</h2>
          <p className="text-slate-600 text-lg">
            Building real-world experience through challenging roles and projects that have
            enhanced my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-200"></div>
          
          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 relative flex items-center justify-center md:justify-end">
                  <div className={`z-10 bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-blue-500 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                    <h4 className="text-blue-600 font-semibold mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 font-medium mb-3">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                          <span className="text-slate-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 flex justify-center md:justify-start items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <Briefcase size={16} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;