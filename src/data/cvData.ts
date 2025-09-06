// CV Data Structure
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface TechnicalSkill {
  category: string;
  skills: Array<{
    name: string;
    icon?: string;
  }>;
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  location: string;
  projects: Array<{
    name: string;
    description: string;
  }>;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  sourceCode?: string;
  liveDemo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
  description?: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  technicalSkills: TechnicalSkill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  languages: string[];
}

// Your actual CV data
export const cvData: CVData = {
  personalInfo: {
    name: "Mahmoud Ramadan",
    title: "Front-End Developer",
    email: "mahmoudramdan2000135@gmail.com",
    phone: "+201067958518",
    location: "Damietta, Egypt",
    linkedin: "https://linkedin.com/in/mahmoud-ramadan-aa4b322a5/",
    github: "https://github.com/mahmoud-ramadn",
    summary: "Experienced Frontend Developer skilled in building dynamic and interactive web applications using React and Vue.js. Proficient in developing modern applications with Nuxt.js, focusing on performance and user experience. Strong expertise in modern JavaScript, state management, and component-based architecture. Passionate about creating seamless user experiences and continuously learning to deliver cutting-edge solutions."
  },
  technicalSkills: [
    {
      category: "Core Technologies",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "ES6" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React.js" },
        { name: "Vue.js" },
        { name: "Nuxt.js" },
        { name: "Redux" },
        { name: "Redux Toolkit" },
        { name: "Zustand" },
        { name: "Pinia" }
      ]
    },
    {
      category: "Styling & UI",
      skills: [
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "Headless UI" },
        { name: "Shadcn/UI" },
        { name: "Framer Motion" }
      ]
    },
    {
      category: "Data & APIs",
      skills: [
        { name: "GraphQL" },
        { name: "REST API" },
        { name: "TanStack Query" },
        { name: "Apollo Client" },
        { name: "Axios" }
      ]
    },
    {
      category: "Validation & Forms",
      skills: [
        { name: "React Hook Form" },
        { name: "Yup" },
        { name: "VeeValidate" }
      ]
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "NPM" },
        { name: "React Router" }
      ]
    }
  ],
  experience: [
    {
      position: "Front-End Developer (Full-Time)",
      company: "Baianat",
      duration: "1/2024-2/2025",
      location: "On-site",
      projects: [
        {
          name: "Caterk – Restaurant Reservation Platform",
          description: "Contributed to the UI development of Caterk, a website for downloading the mobile app and managing restaurant reservations. Focused on creating a clean, user-friendly interface and ensuring a smooth user experience across different devices."
        },
        {
          name: "ClassesHub – Online Learning Platform",
          description: "Worked on the UI development, system integration, and dashboard features for ClassesHub, an e-learning platform. Focused on building a modern, responsive user interface and integrating the frontend with backend services to deliver a smooth learning experience for users and instructors."
        }
      ]
    }
  ],
  projects: [
    {
      name: "PetCARE",
      description: "Developed PetCart, an e-commerce web app for pet supplies using React, TypeScript, Tailwind CSS, and TanStack Query. Built dynamic product listing, filters, cart, and favorites with optimized data fetching and responsive UI. Utilized Shadcn/UI for clean, accessible, and reusable component design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "Shadcn/UI"],
      sourceCode: "petcare code",
      liveDemo: "https://pet-care-website-amber.vercel.app/"
    },
    {
      name: "Supergear E-commerce",
      description: "A web app for online shopping using React.js, TypeScript, styled with Tailwind CSS. Features state management with Zustand, routing with React Router, UI components with Headless UI, authentication with Firebase, and payment processing with Stripe.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Zustand", "React Router", "Headless UI", "Firebase", "Stripe"],
      sourceCode: "supergrea-code",
      liveDemo: "supegrea-live"
    },
    {
      name: "Advanced-Filtering-E-commerce",
      description: "A web app for buying shoes that allows filtering operations based on color, price, categories, and brand. Built using React.js with Vite and styled with pure CSS for advanced filtering functionality.",
      technologies: ["React.js", "Vite", "CSS"],
      sourceCode: "Advanced-Filtering-E-commerce-code",
      liveDemo: "Filter-code"
    },
    {
      name: "CRUD APP",
      description: "A web application that performs all CRUD operations, allowing users to add, read, edit, and delete posts. Built using React.js with Vite, styled with Bootstrap components, and utilizes Redux and Redux Toolkit for state management. Form validation handled using Formik with Yup for validation schemas.",
      technologies: ["React.js", "Vite", "Bootstrap", "Redux", "Redux Toolkit", "Formik", "Yup"],
      sourceCode: "CRUD-APP-CODE",
      liveDemo: "Crud-live"
    },
    {
      name: "OurEcom",
      description: "A scalable e-commerce website built with React.js, TypeScript, Bootstrap, and Redux Toolkit. Enhanced performance with code splitting and lazy loading using Suspense. Integrated react-loading-skeleton for loading indicators and LottieFiles for animations to improve user experience.",
      technologies: ["React.js", "TypeScript", "Bootstrap", "Redux Toolkit", "Suspense", "React Loading Skeleton", "LottieFiles"],
      sourceCode: "OurEcom-code",
      liveDemo: "OurEcom"
    },
    {
      name: "Google Maps Clone with Search Functionality",
      description: "Built an interactive map application using Nuxt.js, integrating the Google Maps API with a custom plugin and loader for efficient map rendering. Implemented a search feature to dynamically move markers to the searched location, with real-time updates on form submission. Focused on server-side rendering (SSR), reusable components, and responsive design.",
      technologies: ["Nuxt.js", "Google Maps API", "SSR", "Vue.js"],
      sourceCode: "google-map",
      liveDemo: "google-map"
    },
    {
      name: "SHOPE.CO",
      description: "Developed a responsive e-commerce platform using Vue.js and TypeScript, with state management handled by Pinia for efficient data flow. Designed three key pages: a landing homepage, a single product detail page, and a shopping cart page, ensuring a seamless user experience.",
      technologies: ["Vue.js", "TypeScript", "Pinia"],
      sourceCode: "shop.code",
      liveDemo: "shop-co-five.vercel.ap"
    },
    {
      name: "Furniro",
      description: "A modern web app for online shopping built with React.js and TypeScript, styled using Tailwind CSS. Managed state using Context API with React Router and implemented GraphQL queries and mutations using Apollo. Integrated Headless UI for components, Firebase for authentication, and Stripe for payment.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "GraphQL", "Apollo", "Firebase", "Stripe"],
      sourceCode: "mahmoud-ramadn/Furniro",
      liveDemo: "https://furniro-livid.vercel.app/"
    },
    {
      name: "Welcom",
      description: "Designed and developed a responsive, high-performance landing page using Next.js for server-side rendering and routing. Integrated Swiper.js to create smooth, touch-enabled sliders and implemented Framer Motion for modern, interactive animations.",
      technologies: ["Next.js", "Swiper.js", "Framer Motion", "Tailwind CSS"],
      sourceCode: "welcom-repo",
      liveDemo: "welcom.com"
    }
  ],
  education: [
    {
      degree: "Bachelor's degree in Heritage Site Management",
      institution: "Damietta University"
    },
    {
      degree: "Modern React with Redux",
      institution: "Udemy - Stephen Grider",
      description: "Learned how to build scalable React applications with Redux for state management. (Topics: React Hooks, Redux Toolkit, Middleware)"
    },
    {
      degree: "The Complete JavaScript Course: From Zero to Expert!",
      institution: "Udemy - Jonas Schmedtmann",
      description: "Comprehensive JavaScript course covering ES6+, asynchronous JavaScript, DOM manipulation, and modern development practices. (Topics: Closures, Prototypes, Async/Await, Promises)"
    },
    {
      degree: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      institution: "Udemy - Maximilian Schwarzmüller",
      description: "Advanced React development course covering hooks, context, routing, and state management. (Topics: Custom Hooks, Performance Optimization, Testing)"
    },
    {
      degree: "Vue.js - The Complete Guide (w/ Router, Vuex, Composition API)",
      institution: "Udemy - Maximilian Schwarzmüller",
      description: "Complete Vue.js course from basics to advanced concepts including Vuex and Composition API. (Topics: Vue Router, Vuex, Components, Directives)"
    },
    {
      degree: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      institution: "Udemy - Jonas Schmedtmann",
      description: "Master modern CSS techniques including Flexbox, Grid, animations, and Sass preprocessing. (Topics: CSS Architecture, Responsive Design, CSS Grid)"
    },
    {
      degree: "TypeScript for JavaScript Developers",
      institution: "Udemy - Stephen Grider",
      description: "Learn TypeScript from the ground up with practical examples and real-world applications. (Topics: Type Annotations, Interfaces, Generics, Decorators)"
    },
    {
      degree: "Next.js & React - The Complete Guide",
      institution: "Udemy - Maximilian Schwarzmüller",
      description: "Build full-stack React applications with Next.js including SSR, SSG, and API routes. (Topics: Server-Side Rendering, Static Generation, Authentication)"
    },
    {
      degree: "CS50's Introduction to Computer Science",
      institution: "Harvard University (edX)",
      year: "2023",
      description: "A rigorous introduction to computer science concepts, programming, and problem-solving. (Topics: Algorithms, Data Structures, C, Python, Web Development)"
    }
  ],
  languages: ["Arabic (Native)", "English (B2)"]
};