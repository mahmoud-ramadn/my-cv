import React from 'react';
import { Experience } from '../data/cvData';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <div 
          key={index}
          className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
        >
          {/* Experience Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {experience.position}
            </h3>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  {experience.company}
                </span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2m-6 0V7" />
                </svg>
                <span>{experience.duration}</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
          
          {/* Projects */}
          <div className="space-y-4">
            {experience.projects.map((project, projectIndex) => (
              <div key={projectIndex} className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;