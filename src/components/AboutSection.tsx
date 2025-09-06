import React from 'react';
import { PersonalInfo } from '../data/cvData';
import { EmailIcon, LinkedInIcon, GitHubIcon, PhoneIcon, LocationIcon } from './Icons';

interface AboutSectionProps {
  personalInfo: PersonalInfo;
}

const AboutSection: React.FC<AboutSectionProps> = ({ personalInfo }) => {
  return (
    <div className="mb-8">
      {/* Header with name and title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-up">
          {personalInfo.name}
        </h1>
        <p className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 font-semibold mb-4">
          {personalInfo.title}
        </p>
        
        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label={`Email ${personalInfo.name}`}
          >
            <EmailIcon />
            <span className="ml-2">{personalInfo.email}</span>
          </a>
          
          <span className="flex items-center">
            <PhoneIcon />
            <span className="ml-2">{personalInfo.phone}</span>
          </span>
          
          <span className="flex items-center">
            <LocationIcon />
            <span className="ml-2">{personalInfo.location}</span>
          </span>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
            <span className="ml-2 text-sm">LinkedIn</span>
          </a>
          
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
            <span className="ml-2 text-sm">GitHub</span>
          </a>
        </div>
      </div>
      
      {/* Summary */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Summary</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          {personalInfo.summary}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;