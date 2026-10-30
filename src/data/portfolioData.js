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

// Projects list displaying QuizMaster and ChatZPT links opening in a new tab
export const projectsData = [
  {
    id: 1,
    name: "QuizMaster",
    tagline: "Interactive Quiz & Knowledge Testing Platform",
    description: "Dynamic web-based quiz application featuring categorized timed questions, real-time score tracking, responsive UI, and instant analytical feedback.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    url: "https://dinu18s.github.io/QuizMaster/",
    github: "https://github.com/dinu18s"
  },
  {
    id: 2,
    name: "ChatZPT",
    tagline: "AI-Powered Conversational Assistant",
    description: "Interactive modern chat application with real-time responsive messaging interface, conversational prompts, smooth animations, and clean state management.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    url: "https://chatzpt-18-project.vercel.app/",
    github: "https://github.com/dinu18s"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering (AIML)",
    institution: "Institute of Aeronautical Engineering (IARE)",
    location: "Hyderabad, India",
    period: "2022 - 2026",
    score: "Undergraduate",
    description: "Rigorous curriculum encompassing Python programming, Relational Databases (SQL), Core Web Technologies, Artificial Intelligence, Machine Learning algorithms, Data Structures, and Analytical Reasoning.",
    highlights: [
      "Specialized coursework in AI/ML, Python, and Database Management Systems",
      "Hands-on project work developing responsive applications and algorithmic solutions",
      "Active participant in technical workshops, hackathons, and problem-solving contests"
    ]
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "NPTEL Certification",
    issuer: "NPTEL & IITs",
    category: "Computer Science & Problem Solving",
    date: "Completed",
    description: "Nationally recognized certification demonstrating strong core programming logic, structured problem-solving, and algorithmic thinking."
  },
  {
    id: 2,
    title: "IARE (AIML) Technical Certification",
    issuer: "Institute of Aeronautical Engineering",
    category: "Artificial Intelligence & Machine Learning",
    date: "Certified",
    description: "Hands-on certification covering core machine learning paradigms, data exploration, predictive modeling, and intelligent software systems."
  },
  {
    id: 3,
    title: "Arm Robotic Systems Workshop",
    issuer: "Technical Training & Robotics Lab",
    category: "Hardware & Automation",
    date: "Certified",
    description: "Practical engineering training in robotic arm kinematics, microcontroller integration, sensor interfacing, and automated task execution."
  },
  {
    id: 4,
    title: "Web Development (100% Completed)",
    issuer: "Self-Paced Professional Learning",
    category: "Full Stack Fundamentals",
    date: "100% Mastered",
    description: "Comprehensive mastery of HTML5, CSS3, DOM manipulation, responsive layouts, web accessibility standards, and web application architecture."
  }
];

export const experienceData = [
  {
    id: 1,
    role: "B.Tech Undergrad — Computer Science (AIML)",
    company: "Institute of Aeronautical Engineering (IARE)",
    period: "2022 - Present",
    location: "Hyderabad, India",
    description: "Pursuing Bachelor of Technology with focus on Python scripting, SQL database design, web application development, and computational logic.",
    highlights: [
      "Engineered real-world applications including QuizMaster and ChatZPT",
      "Mastered 100% of Web Development fundamentals and front-end architectures",
      "Consistently solved algorithmic problem-solving challenges with strong logical reasoning"
    ]
  },
  {
    id: 2,
    role: "Independent Software & Python Developer",
    company: "Personal Projects & Open Source",
    period: "2023 - Present",
    location: "Medchal, Hyderabad",
    description: "Building production-grade web tools, interactive applications, and algorithmic automation scripts utilizing Python, SQL, and modern web technologies.",
    highlights: [
      "Architected QuizMaster: an interactive test evaluation platform with instant grading",
      "Developed ChatZPT: a reactive conversational UI hosted live on Vercel",
      "Authored clean, maintainable, modular code adhering to modern web performance standards"
    ]
  }
];
