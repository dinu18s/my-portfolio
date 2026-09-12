import profileImage from '../assets/profile.jpg';

export const personalInfo = {
  name: "Matta Dinesh",
  title: "Software / Python Developer",
  tagline: "Focused on Python development, SQL database management, Web Fundamentals, and logical problem solving.",
  bio: "Software & Python Developer based in Medchal, Hyderabad. Specialized in Python programming, relational database queries with SQL, core Web Fundamentals (HTML, CSS), and analytical problem-solving through strong Aptitude and Logical Reasoning.",
  email: "mattadinu9704637774@gmail.com",
  phone: "9704637774",
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
    { name: "Web Fundamentals", level: 60, icon: "Globe", description: "DOM structure, HTTP standards, and web concepts" }
  ],
  tools: [
    { name: "Git & GitHub", level: 75, icon: "GitBranch", description: "Version control and code repository management" },
    { name: "SQL Database Tools", level: 70, icon: "HardDrive", description: "Database querying and table management tools" },
    { name: "VS Code", level: 85, icon: "Terminal", description: "Primary integrated development environment" }
  ]
};

// Single project entry: "Dinesh's Projects" redirecting directly to GitHub profile
export const projectsData = [
  {
    id: 1,
    name: "Dinesh's Projects",
    url: "https://github.com/dinu18s"
  }
];
