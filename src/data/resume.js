export const personalInfo = {
  name: 'Irtaza Nadeem',
  firstName: 'Irtaza',
  lastName: 'Nadeem',
  title: 'Senior Full-Stack Developer',
  tagline: 'Whoever said the sky is the limit didn\'t know about the universe.',
  intro:
    'Your friendly neighborhood Full Stack Developer. I spend my days turning complex business problems into scalable, production-ready systems — from patient portals to e-commerce platforms — using **C#**, **.NET Core**, and modern **JavaScript** frameworks.',
  email: 'irtazashah39@gmail.com',
  phone: '+92 335 9875527',
  location: 'Islamabad, Pakistan',
  linkedin: 'https://www.linkedin.com/in/irtaza-nadeem-12a4b4225/',
  github: 'https://github.com/irtaza173',
  resumeUrl: '/resume.html',
};

export const summary = `Full Stack Developer with 5+ years of experience building scalable web applications using C#, .NET Core, ASP.NET MVC, and modern JavaScript frameworks (React.js, Angular). Strong expertise in REST APIs, microservices, and Azure cloud solutions. Focused on performance optimization, clean architecture, and delivering high-quality production systems.`;

export const aboutSections = [
  `I am a results-driven Full Stack Software Developer with a strong focus on building reliable, high-performance applications. My career spans healthcare, e-commerce, and enterprise platforms — always with an emphasis on clean architecture and customer satisfaction.`,
  `Possessing solid expertise in C#/.NET ecosystems alongside React.js and Angular, I design and integrate complex software solutions — from JWT-secured REST APIs to microservices deployed on Azure with Docker and Kubernetes.`,
  `I am passionate about architecting software that delivers tangible value. Whether optimizing Entity Framework queries, building modular UI components, or integrating third-party services, I strive for excellence in every layer of the stack.`,
  `Outside of work, I stay current with the latest in cloud-native development and continuously upskill through certifications and hands-on project work.`,
];

export const skills = {
  frontend: {
    title: 'frontend',
    description:
      'I develop responsive, dynamic client-side applications with modern SPA architecture and best practices for performance and maintainability, using technologies like HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, React.js, Angular, Material UI, Bootstrap, and unit testing with Jest and Jasmine.',
    technologies: [
      'React.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'TailwindCSS',
      'Material UI',
      'Bootstrap',
      'Jest',
      'Jasmine',
    ],
  },
  backend: {
    title: 'backend',
    description:
      'I build scalable and maintainable backend applications using C#, .NET Core, ASP.NET MVC, Node.js, and Express.js — designing RESTful APIs, microservices, and event-driven architectures with RabbitMQ and webhooks.',
    technologies: [
      'C#',
      '.NET Core',
      'ASP.NET MVC',
      'Node.js',
      'Express.js',
      'REST API',
      'Microservices',
      'RabbitMQ',
      'Webhooks',
    ],
  },
  database: {
    title: 'database & cloud',
    description:
      'I work with relational and NoSQL databases including MySQL, MariaDB, MongoDB, and Firebase, using Entity Framework as ORM. I deploy and manage applications on Microsoft Azure with Docker, Kubernetes, Helm, and CI/CD pipelines.',
    technologies: [
      'MySQL',
      'MariaDB',
      'MongoDB',
      'Firebase',
      'Supabase',
      'Entity Framework',
      'Azure',
      'Docker',
      'Kubernetes',
    ],
  },
};

export const experience = [
  {
    title: 'Full Stack Developer',
    company: 'Islamabad Diagnostic Centre',
    location: 'Islamabad',
    period: 'Feb 2025 – Present',
    highlights: [
      'Designed and developed the MYIDC Patient Portal for secure medical report access, appointment booking, and profile management.',
      'Built scalable RESTful APIs using .NET Core supporting high-volume data transactions.',
      'Implemented JWT-based authentication and authorization for sensitive patient data.',
      'Optimized backend performance through query refactoring and improved Entity Framework usage.',
      'Integrated third-party lab systems and reporting services for real-time data synchronization.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Embrace IT',
    location: 'Denmark',
    period: 'Mar 2023 – Jan 2025',
    highlights: [
      'Developed the Hello Retail Commerce App — a full-stack e-commerce platform with product management, cart, and checkout.',
      'Built scalable backend services using .NET Core and RESTful APIs.',
      'Created modular UI components with React.js and Angular for faster feature development.',
      'Implemented JWT-based authentication for user sessions and protected routes.',
      'Optimized performance by reducing API calls and improving rendering efficiency.',
    ],
  },
  {
    title: 'Full Stack Developer (Remote)',
    company: 'Ultimus',
    location: 'New York City',
    period: 'Nov 2023 – Apr 2024',
    highlights: [
      'Designed scalable microservices architecture using .NET Core for modular, independently deployable services.',
      'Built enterprise-grade RESTful APIs for internal and external client integrations.',
      'Developed responsive UIs with React.js across devices.',
      'Integrated multiple third-party APIs for real-time data exchange.',
      'Optimized API response times and reduced system bottlenecks.',
    ],
  },
  {
    title: 'Back End Developer',
    company: 'App In Snap',
    location: 'Islamabad',
    period: 'Mar 2021 – Jan 2023',
    highlights: [
      'Developed robust backend systems and RESTful APIs using ASP.NET MVC and .NET Core.',
      'Implemented data access layers with Entity Framework for efficient database interactions.',
      'Built scalable modules for authentication, business logic, and data processing.',
      'Wrote and maintained unit tests to increase code reliability.',
      'Debugged and resolved complex production issues.',
    ],
  },
];

export const projects = {
  web: [
    {
      name: 'MyIDC Patient Portal',
      company: 'Islamabad Diagnostic Centre',
      description:
        'A healthcare web application enabling patients to securely access medical reports, book appointments, and manage profiles — improving operational efficiency for clinics.',
      tags: ['.NET Core', 'React.js', 'JWT', 'Entity Framework', 'Azure'],
      color: 'from-emerald-500/20 to-teal-500/20',
      accent: 'text-emerald-400',
    },
    {
      name: 'Hello Retail Commerce App',
      company: 'Embrace IT',
      description:
        'A full-featured e-commerce platform supporting product browsing, shopping cart management, and secure checkout workflows.',
      tags: ['.NET Core', 'React.js', 'Angular', 'REST API', 'JWT'],
      color: 'from-indigo-500/20 to-purple-500/20',
      accent: 'text-indigo-400',
    },
    {
      name: 'Ultimus Enterprise Platform',
      company: 'Ultimus',
      description:
        'Microservices-based enterprise platform with modular REST APIs, third-party integrations, and high-performance React.js frontends.',
      tags: ['.NET Core', 'Microservices', 'React.js', 'Docker', 'Kubernetes'],
      color: 'from-blue-500/20 to-cyan-500/20',
      accent: 'text-blue-400',
    },
  ],
};

export const education = {
  degree: 'Bachelor of Computer Science',
  institution: 'Szabist',
  location: 'Islamabad, Pakistan',
  period: '2017 – 2021',
};

export const certifications = [
  {
    title: 'Building an App with .Net Core & React.js',
    issuer: 'Udemy',
  },
  {
    title: 'Building an App with .Net Core & Angular',
    issuer: 'Udemy',
  },
];

export const languages = ['English', 'Urdu'];

export const techStack = [
  'JavaScript',
  'React.js',
  'Angular',
  'C#',
  '.NET Core',
  'Node.js',
  'TypeScript',
  'REST API',
  'RabbitMQ',
  'Express.js',
  'MySQL',
  'MongoDB',
  'Firebase',
  'Entity Framework',
  'TailwindCSS',
  'Material UI',
  'Docker',
  'Kubernetes',
  'Azure',
  'Git',
  'Jest',
  'Postman',
  'CI/CD',
  'Microservices',
];
