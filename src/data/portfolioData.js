import profileImage from '../assets/profile.jpg';

export const personalInfo = {
  name: "Matta Dinesh",
  title: "Software / Python Developer",
  tagline: "Focused on Python development, SQL database management, Web Fundamentals, and logical problem solving.",
  bio: "Software & Python Developer based in Medchal, Hyderabad. Specialized in Python programming, relational database queries with SQL, core Web Fundamentals (HTML, CSS), and analytical problem-solving through strong Aptitude and Logical Reasoning.",
  email: "mattadinu9704637774@gmail.com",
  phone: "9704637774",
  whatsappUrl: "https://wa.me/919704637774",
  location: "Medchal, Hyderabad, India",
  mapsUrl: "https://www.google.com/maps/place/Sri+Lakshmi+Narasimha+transport/@17.6285878,78.4872244,19.17z/data=!4m6!3m5!1s0x3bcb87002d9022b5:0x50d7d46fabb033e9!8m2!3d17.6285836!4d78.4872076!16s%2Fg%2F11x7cvxc_v?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  github: "https://github.com/dinu18s",
  linkedin: "https://www.linkedin.com/in/dinesh-matta-10242b372/",
  profileImage: profileImage,
  availableForHire: true
};

export const coreTech = [
  { label: "Programming Language", value: "Python" },
  { label: "Database", value: "SQL" },
  { label: "Web Fundamentals", value: "HTML, CSS" },
  { label: "Core Competencies", value: "Aptitude and Logical Reasoning" }
];

export const skillsData = {
  languages: [
    { name: "Python", level: 50, icon: "Code2", description: "Core Python programming, data structures, and script development" },
    { name: "HTML & CSS", level: 60, icon: "Layout", description: "Web page structure, layout formatting, and styling fundamentals" },
    { name: "SQL", level: 65, icon: "Database", description: "Relational database queries, table creation, and data filtering" }
  ],
  frameworks: [
    { name: "Python Web Frameworks", level: 55, icon: "Server", description: "Backend web application development fundamentals" },
    { name: "Web Development", level: 100, icon: "Globe", description: "DOM structure, HTTP standards, and modern web application development" }
  ],
  tools: [
    { name: "Git & GitHub", level: 75, icon: "GitBranch", description: "Version control and code repository management" },
    { name: "SQL Database Tools", level: 70, icon: "HardDrive", description: "Database querying and table management tools" },
    { name: "VS Code", level: 85, icon: "Terminal", description: "Primary integrated development environment" }
  ]
};

// Projects list: Chronosmatch first, followed by QuizMaster and ChatZPT
export const projectsData = [
  {
    id: 1,
    name: "Chronosmatch",
    tagline: "Real-Time Virtual Paper Trading & Matching Terminal",
    description: "High-performance paper trading terminal and zero-copy electronic matching engine with real-time order books, virtual portfolio execution, and performance analytics.",
    url: "https://dinu18s.github.io/ChronosMatch/",
    github: "https://github.com/dinu18s/ChronosMatch",
    actionLabel: "View Project"
  },
  {
    id: 2,
    name: "QuizMaster",
    tagline: "Interactive Quiz & Knowledge Testing Platform",
    description: "Dynamic web-based quiz application featuring categorized timed questions, real-time score tracking, responsive UI, and instant analytical feedback.",
    url: "https://dinu18s.github.io/QuizMaster/",
    github: "https://github.com/dinu18s",
    actionLabel: "Launch Live Quiz"
  },
  {
    id: 3,
    name: "ChatZPT",
    tagline: "AI-Powered Conversational Assistant",
    description: "Interactive modern chat application with real-time responsive messaging interface, conversational prompts, smooth animations, and clean state management.",
    url: "https://chatzpt-18-project.vercel.app/",
    github: "https://github.com/dinu18s",
    actionLabel: "View Project"
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Python Developer Intern",
    organization: "Infotact Solutions",
    duration: "3 Months",
    workMode: "Remote",
    year: "2026",
    status: "Ongoing",
    description: "Working as a Python Developer Intern, developing practical programming and backend development skills through technical assignments and project-based learning.",
    areasOfWork: [
      "Python Programming",
      "Backend Development",
      "Data Analysis",
      "API Integration",
      "Automation",
      "Technical Documentation"
    ]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "B.Tech – Computer Science and Engineering (AI)",
    institution: "NIAT × Mallareddy Vishwavidhyapeeth",
    duration: "2025–2029",
    status: "2nd Year – Currently Pursuing",
    isPursuing: true
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "Narayana Junior College, Vijayawada",
    duration: "2023–2025",
    score: "87.6%",
    isPursuing: false
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Karunya High School, Narsipatnam",
    duration: "2022–2023",
    score: "87.6%",
    isPursuing: false
  }
];

export const certificationsData = [];
