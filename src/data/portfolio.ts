import { Experience, Project, Skill, Achievement, ContactInfo } from '../types';

export const personalInfo = {
  name: "Rochan Vardhan Boddepalli",
  title: "Aspiring Full-Stack Developer",
  tagline: "Turning ideas into reality, one line of code at a time.",
  about: "I am a motivated and detail-oriented Information Technology student with hands-on experience in Full-stack web development, Cloud technologies, and software security. Actively seeking opportunities to contribute as a Full-Stack Developer in innovative tech environments.",
  photoUrl: "" // Add your photo URL here in the future
};

export const experiences: Experience[] = [
  {
    id: '2',
    company: 'Krify Software Technologies, Kakinada',
    title: 'Software Trainee Intern ',
    period: 'June 2024 – July 2024',
    description: [
      'Performed security testing using Burp Suite and OWASP Top 10 guidelines to identify vulnerabilities.',
      'Contributed to the development of secure web applications, ensuring compliance with cybersecurity best practices.',
      'Gained hands-on experience in cybersecurity tools and modern web technologies.'
    ],
    certificateUrl: '/certificates/krify-certificate.pdf'
  },
  {
    id: 'sf1',
    company: 'Salesforce - Smart Bridge',
    title: 'Salesforce Virtual Internship',
    period: 'May 2025 – July 2025',
    description: [
      'Completed a virtual internship focused on Salesforce CRM, cloud solutions, and business process automation.',
      'Built and tested real-world business workflows using Salesforce Trailhead modules.',
      'Developed hands-on skills in cloud-based platforms, CRM systems, and automation tools.'
    ],
    certificateUrl: '/certificates/Salesforce Developer.pdf'
  },
  {
    id: '3',
    company: 'Lomaa IT Solutions, Visakhapatnam',
    title: 'Full Stack Developer Intern',
    period: 'July 2025 – Present',
    description: [
      'Collaborated in Agile teams of 4–6 to design, develop, and deploy full-stack modules using React, Node.js, and MongoDB.',
      'Built and optimized REST APIs, improving response time and application performance.',
      'Engaged in weekly sessions with industry experts to gain practical insights and enhance professional development.'
    ],
    certificateUrl: '/certificates/Looma.pdf'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Notes App',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    imageUrl: '/Notes App Thumbnail.png',
    githubUrl: 'https://github.com/Rochan09/Notes-App',
    liveUrl: 'https://notes-app-woad-nine.vercel.app'
  },
  {
    id: '3',
    title: 'My Portfolio',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageUrl: '/My Portfolio Thumbnail.png',
    githubUrl: 'https://github.com/Rochan09/Portfolio',
    liveUrl: 'https://rochanportfolio.vercel.app'
  },
  {
    id: '7',
    title: 'Fitintel',
    techStack: ['ML', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    imageUrl: '/Fitintel Thumbnail.png',
    githubUrl: 'https://github.com/Rochan09/FitIntel',
    liveUrl: 'https://fitintel.onrender.com/'
  },
  {
    id: '5',
    title: 'Currency Converter',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/Currency Converter Thumbnail.png',
    githubUrl: 'https://github.com/Rochan09/CurrencyConverter',
    liveUrl: 'https://currencycircus.netlify.app/'
  },
  {
    id: '6',
    title: 'MovieBuddy (Use VPN)',
    techStack: ['React', 'TypeScript', 'TMDB API', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/MovieBuddy Thumbnail.png',
    githubUrl: 'https://github.com/Rochan09/Movie-Buddy',
    liveUrl: 'https://movie-buddy-one.vercel.app/'
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Java', 'SQL', 'HTML5', 'CSS3', 'JavaScript'],
    icons: ['Code', 'Database']
  },
  {
    category: 'Frameworks',
    items: ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'RESTful APIs'],
    icons: ['Layout', 'Zap']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Visual Studio Code', 'Eclipse', 'Postman', 'Agile SDLC', 'CI/CD', 'Render', 'Vercel'],
    icons: ['Tool', 'Github']
  },
  {
    category: 'Databases & Cloud',
    items: ['MySQL', 'MongoDB Atlas', 'AWS'],
    icons: ['Database', 'Cloud']
  }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Research Paper Publication',
    description: 'Published "FitIntel: A Healthy Food & Exercise Recommendation Application Using Machine Learning" in IJRPR, Vol. 5, Issue 11, Nov 2024.',
    link: '/papers/FitIntel Term paper IJRPR35661.pdf',
    type: 'publication'
  }
];

export const contactInfo: ContactInfo = {
  email: 'rochanvardhan2004@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rochan-vardhan-boddepalli',
  github: 'https://github.com/Rochan09',
  phone: '+91-9391870198',
  location: 'Srikakulam,Andhra Pradesh,India'
};
