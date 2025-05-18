import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Masters, Information Science Data Analytics',
      institution: 'University at Albany',
      period: '2024-26',
      location: 'Albany',
      gpa: '3.52',
      courses: ['Data Mining', 'Machine Learning', 'Big Data Analytics', 'Statistical Methods', 'Database Management Systems']
    },
    {
      degree: 'B. Tech, ECE',
      institution: 'Vardhaman College of Engineering',
      period: '2019-23',
      location: 'Hyderabad',
      courses: ['Computer Programming', 'Data Structures', 'Database Systems', 'Web Technologies', 'Digital Signal Processing']
    }
  ];

  const certifications = [
    'iOS & Swift Development',
    'Full Stack Web Development',
    'AI for Everyone',
    'AWS Machine Learning',
    'Programming for Everyone'
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2">
            <div className="h-px w-12 bg-blue-500"></div>
            <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">Education</span>
            <div className="h-px w-12 bg-blue-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Academic Background</h2>
          <p className="text-slate-600 text-lg">
            My formal education and professional certifications that have built a strong
            foundation for my career in software engineering and data analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap size={24} className="text-blue-500" />
              Education
            </h3>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800">{edu.degree}</h4>
                      <h5 className="text-blue-600 font-medium">{edu.institution}</h5>
                    </div>
                    {edu.gpa && (
                      <div className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium">
                        CGPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-3 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <h6 className="font-medium text-slate-700 mb-2">Relevant Coursework</h6>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="bg-white text-slate-600 px-3 py-1 rounded-full text-sm border border-slate-200">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award size={24} className="text-blue-500" />
              Certifications
            </h3>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 shadow-md text-white">
              <h4 className="text-xl font-bold mb-6">Professional Development</h4>
              
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Award size={24} className="text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full hover:bg-white/20 transition-colors">
                      <span className="font-medium">{cert}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <h5 className="font-medium mb-3">Additional Skills</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors">
                    English
                  </span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors">
                    Hindi
                  </span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors">
                    Telugu
                  </span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors">
                    Git Version Control
                  </span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors">
                    Agile Methodology
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-slate-50 rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold mb-4 text-slate-800">Interests & Activities</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">•</span>
                  <span className="text-slate-600">Web Development and Open-Source Contributions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">•</span>
                  <span className="text-slate-600">Solving DSA problems and exploring AI/ML technologies</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">•</span>
                  <span className="text-slate-600">Strategic games like Chess and Formula 1 analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">•</span>
                  <span className="text-slate-600">Fitness, trekking, and outdoor activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;