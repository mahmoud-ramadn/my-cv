import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`mb-12 print-avoid-break animate-fade-in ${className}`}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-primary-500 pb-2 ats-friendly">
        {title}
      </h2>
      <div className="ats-friendly">
        {children}
      </div>
    </section>
  );
};

export default Section;