import React from 'react';
import { Education } from '../data/cvData';
import { GraduationCap } from 'lucide-react';

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div 
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {edu.degree}
            </h3>
            {edu.year && (
              <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full mt-2 sm:mt-0">
                {edu.year}
              </span>
            )}
          </div>
          
          <div className="flex items-center mb-3 text-primary-600 dark:text-primary-400">
            <GraduationCap className="w-5 h-5 mr-2" />
            <span className="font-semibold">{edu.institution}</span>
          </div>
          
          {edu.description && (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {edu.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationSection;