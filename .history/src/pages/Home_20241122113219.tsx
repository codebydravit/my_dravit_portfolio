import React from 'react';
import { Brain, Code, Database, Bot, Server, Globe } from 'lucide-react';
import dravitphot from "../assets/Images/bg.png";

export default function Home() {
  const expertise = [
    {
      title: 'AI Development',
      description: 'LLMs, Voice Models, and Chatbots',
      icon: Brain,
    },
    {
      title: 'Full Stack Development',
      description: 'Node.js, React.js, REST APIs',
      icon: Code,
    },
    {
      title: 'Database Management',
      description: 'MySQL, Vector Databases',
      icon: Database,
    },
    {
      title: 'Chatbot Integration',
      description: 'Voice Recognition & NLP',
      icon: Bot,
    },
    {
      title: 'Backend Architecture',
      description: 'API Design & System Architecture',
      icon: Server,
    },
    {
      title: 'Web Development',
      description: 'Responsive & Modern Web Apps',
      icon: Globe,
    },
  ];

  const experiences = [
    {
      company: 'IPPO Sales',
      role: 'AI Developer',
      period: 'Present',
      highlights: [
        'AI-driven sales automation',
        'REST API development',
        'Voice-enabled chatbots',
      ],
    },
    {
      company: 'Hello Kisan',
      role: 'Project Developer',
      period: 'Previous',
      highlights: [
        'Agricultural insights platform',
        'RESTful API design',
        'Full-stack development',
      ],
    },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">AI Developer & Architect</span>
            <span className="block text-indigo-600">Building Intelligent Solutions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Specializing in AI development, chatbots, and full-stack solutions that drive innovation
            and transform user experiences.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/projects"
              className="btn"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 hover:bg-indigo-50"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Professional Summary
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Results-driven AI Developer with extensive experience in Python, REST API development
              using Node.js, and front-end technologies such as React.js. Proficient in chatbot
              development with voice integration, database management, and leveraging various LLM
              models. Committed to delivering innovative solutions and enhancing user experience.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="btn"
              >
                Let's Connect
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="AI visualization"
            />
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-indigo-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mr-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}