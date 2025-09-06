import React from 'react';
import { Project } from '../data/cvData';
import { ExternalLinkIcon, GitHubIcon } from './Icons';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div 
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          {/* Project Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {project.name}
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
              {project.description}
            </p>
          </div>
          
          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                aria-label={`View live demo of ${project.name}`}
              >
                <ExternalLinkIcon />
                <span className="ml-2">Live Demo</span>
              </a>
            )}
            
            {project.sourceCode && (
              <a
                href={`https://github.com/${project.sourceCode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                aria-label={`View source code of ${project.name}`}
              >
                <GitHubIcon />
                <span className="ml-2">Source Code</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;