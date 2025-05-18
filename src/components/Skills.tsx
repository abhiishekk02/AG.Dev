import React, { useState } from 'react';
import { Code, Database, LineChart, PenTool, Monitor, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('programming');

  const tabs = [
    { id: 'programming', label: 'Programming', icon: <Code size={18} /> },
    { id: 'database', label: 'Database', icon: <Database size={18} /> },
    { id: 'analytics', label: 'Analytics', icon: <LineChart size={18} /> },
    { id: 'webdev', label: 'Web Dev', icon: <Monitor size={18} /> },
    { id: 'design', label: 'Design', icon: <PenTool size={18} /> },
    { id: 'aitools', label: 'AI Tools', icon: <BrainCircuit size={18} /> },
  ];

  const skillsData = {
    programming: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React JS', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'C#', level: 70 },
      { name: 'Spring Boot', level: 65 },
      { name: 'Next JS', level: 60 },
    ],
    database: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Oracle SQL', level: 70 },
      { name: 'Supabase', level: 65 },
    ],
    analytics: [
      { name: 'Excel', level: 90 },
      { name: 'Pandas', level: 85 },
      { name: 'Power BI', level: 80 },
      { name: 'Tableau', level: 75 },
      { name: 'NumPy', level: 75 },
      { name: 'Scikit-learn', level: 70 },
      { name: 'Matplotlib', level: 65 },
      { name: 'Seaborn', level: 65 },
    ],
    webdev: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'Node JS', level: 75 },
    ],
    design: [
      { name: 'Figma', level: 70 },
    ],
    aitools: [
      { name: 'ChatGPT', level: 85 },
      { name: 'OpenAI API', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'Jupyter Notebook', level: 85 },
    ],
  };

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2">
            <div className="h-px w-12 bg-blue-500"></div>
            <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">My Skills</span>
            <div className="h-px w-12 bg-blue-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Technical Expertise</h2>
          <p className="text-slate-600 text-lg">
            Proficient in a wide range of technologies with experience in full-stack development, 
            data analytics, and modern development tools.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData[activeTab as keyof typeof skillsData].map((skill) => (
              <div key={skill.name} className="p-4 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-slate-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-cyan-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;