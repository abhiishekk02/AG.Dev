import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });
  
    const serviceID = 'service_zhmk2ax';
    const templateID = 'template_gwe3tok';
    const userID = 'RIHEnoO9FWqXIWQ1D'; // OR use public key
  
    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true });
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2">
            <div className="h-px w-12 bg-blue-400"></div>
            <span className="text-blue-400 font-medium uppercase tracking-wider text-sm">Contact</span>
            <div className="h-px w-12 bg-blue-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Get In Touch</h2>
          <p className="text-slate-300 text-lg">
            Have a project in mind or interested in working together? I'd love to hear from you.
            Feel free to reach out using the form or direct contact methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send Me A Message</h3>
            
            {formStatus.isSubmitted ? (
              <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-400/20 rounded-full mb-4">
                  <Send className="text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h4>
                <p className="text-slate-300">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
                  className="mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Your Mail"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="I'd like to discuss a project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    formStatus.isSubmitting
                      ? 'bg-blue-400/50 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-blue-600 rounded-xl p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-100">Email Address</h4>
                    <a href="mailto:agourishetty@albany.edu" className="text-white hover:text-blue-200 transition-colors">
                      agourishetty@albany.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-100">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/abhishekk02/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                      linkedin.com/in/abhishekk02
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                    <Github size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-100">GitHub</h4>
                    <a href="https://github.com/abhiishekk02" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                    https://github.com/abhiishekk02
                    </a>
                  </div>
                </div>
                
              
                   
             
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-100">Location</h4>
                    <p className="text-white">
                       New York
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-slate-300 mb-4">
                I'm always open to discussing product design, development work, and partnership opportunities.
              </p>
              
              <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                <h4 className="font-medium text-blue-400 mb-2">Currently Available For</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span className="text-slate-300">Full-time positions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span className="text-slate-300">Freelance projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span className="text-slate-300">Collaboration opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;