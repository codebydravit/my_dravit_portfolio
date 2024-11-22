import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Neural Network Framework',
      description: 'A scalable framework for building and training neural networks',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'PyTorch', 'CUDA'],
      github: 'https://github.com/dravit/neural-framework',
      demo: 'https://neural-framework-demo.com',
    },
    {
      title: 'AI Model Deployment Platform',
      description: 'Cloud-native platform for deploying AI models at scale',
      image: 'https://images.unsplash.com/photo-1677442137010-f16935b6f3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tech: ['Kubernetes', 'TensorFlow Serving', 'Docker'],
      github: 'https://github.com/dravit/ai-deploy',
      demo: 'https://ai-deploy-demo.com',
    },
    {
      title: 'Distributed Training System',
      description: 'System for training large AI models across multiple GPUs',
      image: 'https://images.unsplash.com/photo-1677442136469-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tech: ['PyTorch', 'Horovod', 'NCCL'],
      github: 'https://github.com/dravit/distributed-training',
      demo: 'https://dist-train-demo.com',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            A collection of my work in AI architecture and system design
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-500">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}