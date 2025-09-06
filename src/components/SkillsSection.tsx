import React from 'react';
import { TechnicalSkill } from '../data/cvData';
import { 
  HtmlIcon,
  CssIcon,
  JavaScriptIcon, 
  TypeScriptIcon,
  Es6Icon,
  ReactIcon, 
  VueIcon,
  NextJsIcon,
  NuxtIcon,
  ReduxIcon,
  ReduxToolkitIcon,
  ZustandIcon,
  TailwindIcon,
  BootstrapIcon,
  HeadlessUIIcon,
  ShadcnUIIcon,
  FramerMotionIcon,
  GraphQLIcon,
  RestApiIcon,
  ApolloIcon,
  AxiosIcon,
  TanStackQueryIcon,
  GitIcon,
  GitHubIcon,
  NpmIcon,
  ReactRouterIcon,
  FirebaseIcon,
  StripeIcon,
  SwiperIcon,
  ReactHookFormIcon,
  YupIcon,
  VeeValidateIcon,
  FormikIcon,
  SuspenseIcon,
  LottieFilesIcon,
  GoogleMapsIcon
} from './Icons';

interface SkillsSectionProps {
  skills: TechnicalSkill[];
}

const getSkillIcon = (skillName: string) => {
  const name = skillName.toLowerCase();
  
  // Core Technologies
  if (name.includes('html')) return <HtmlIcon />;
  if (name.includes('css')) return <CssIcon />;
  if (name.includes('javascript')) return <JavaScriptIcon />;
  if (name.includes('typescript')) return <TypeScriptIcon />;
  if (name.includes('es6')) return <Es6Icon />;
  
  // Frameworks & Libraries
  if (name.includes('react')) return <ReactIcon />;
  if (name.includes('vue')) return <VueIcon />;
  if (name.includes('next')) return <NextJsIcon />;
  if (name.includes('nuxt')) return <NuxtIcon />;
  if (name.includes('redux toolkit')) return <ReduxToolkitIcon />;
  if (name.includes('redux')) return <ReduxIcon />;
  if (name.includes('zustand')) return <ZustandIcon />;
  if (name.includes('pinia')) return <VueIcon />; // Using Vue icon for Vue state management
  
  // Styling & UI
  if (name.includes('tailwind')) return <TailwindIcon />;
  if (name.includes('bootstrap')) return <BootstrapIcon />;
  if (name.includes('headless')) return <HeadlessUIIcon />;
  if (name.includes('shadcn') || name.includes('ui')) return <ShadcnUIIcon />;
  if (name.includes('framer')) return <FramerMotionIcon />;
  if (name.includes('tanstack') || name.includes('query')) return <TanStackQueryIcon />;
  if (name.includes('swiper')) return <SwiperIcon />;
  
  // Data & APIs
  if (name.includes('graphql')) return <GraphQLIcon />;
  if (name.includes('rest') || name.includes('api')) return <RestApiIcon />;
  if (name.includes('apollo')) return <ApolloIcon />;
  if (name.includes('axios')) return <AxiosIcon />;
  
  // Tools & Workflow
  if (name.includes('git') && !name.includes('hub')) return <GitIcon />;
  if (name.includes('github')) return <GitHubIcon />;
  if (name.includes('npm')) return <NpmIcon />;
  if (name.includes('router')) return <ReactRouterIcon />;
  
  // Backend Services
  if (name.includes('firebase')) return <FirebaseIcon />;
  if (name.includes('stripe')) return <StripeIcon />;
  
  // Validation & Forms
  if (name.includes('react hook form') || name.includes('hookform')) return <ReactHookFormIcon />;
  if (name.includes('yup')) return <YupIcon />;
  if (name.includes('veevalidate') || name.includes('vee-validate')) return <VeeValidateIcon />;
  if (name.includes('formik')) return <FormikIcon />;
  
  // Advanced Technologies
  if (name.includes('suspense')) return <SuspenseIcon />;
  if (name.includes('lottie') || name.includes('lottiefiles')) return <LottieFilesIcon />;
  if (name.includes('google maps') || name.includes('maps api')) return <GoogleMapsIcon />;
  if (name.includes('loading skeleton') || name.includes('skeleton')) return <SuspenseIcon />;
  
  // Default icon for other skills - using first letter in a circle
  return (
    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
      {skillName.charAt(0).toUpperCase()}
    </div>
  );
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skillCategory, categoryIndex) => (
        <div 
          key={categoryIndex}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
            {skillCategory.category}
          </h3>
          
          <div className="space-y-3">
            {skillCategory.skills.map((skill, skillIndex) => (
              <div 
                key={skillIndex}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex-shrink-0 text-primary-600 dark:text-primary-400">
                  {getSkillIcon(skill.name)}
                </div>
                
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;