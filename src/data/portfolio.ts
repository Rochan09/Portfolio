import { Experience, Project, Skill, Achievement, Certification, ContactInfo } from '../types';

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
      'Focused on Cyber Security and Web Technologies',
      'Performed security testing using Burp Suite and OWASP Top 10 guidelines.',
      'Worked on live secure web development projects'
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
      'Worked on hands-on Trailhead modules and real-world business scenarios.'
    ],
    certificateUrl: '/certificates/Salesforce Developer.pdf'
  },
  {
    id: '3',
    company: 'Lomaa IT Solutions, Visakhapatnam',
    title: 'Full Stack Developer Intern',
    period: 'July 2025 – Present',
    description: [
      'Collaborated in Agile teams of 4-6 members to design, develop, and deploy full-stack modules.',
      'Engage in weekly meetings with industry professionals to gain practical insights and enhance professional development.'
    ],
    certificateUrl: '/certificates/Looma.pdf'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'React Notes App',
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
    id: '5',
    title: 'Currency Converter',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/Currency Converter Thumbnail.png',
    githubUrl: 'https://github.com/Rochan09/CurrencyConverter',
    liveUrl: 'https://currencycircus.netlify.app/'
  },
  {
    id: '6',
    title: 'MovieBuddy',
    techStack: ['React', 'TypeScript', 'TMDB API', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/MovieBuddy Thumbnail.png',
    githubUrl: 'https://github.com/Rochan09/Movie-Buddy',
    liveUrl: 'https://movie-buddy-one.vercel.app/'
  },
  {
    id: '4',
    title: 'AI Tools Explorer',
    techStack: ['React', 'Tailwind CSS', 'JSON', 'Vercel'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
    githubUrl: 'https://github.com/Rochan09/AI-Tools-Projects',
    liveUrl: 'https://ai-tools-projects.vercel.app/'
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

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Core Java Specialization',
    issuer: 'Coursera',
    certificateUrl: '/certificates/core-java-certificate.pdf'
  },
  {
    id: '2',
    title: 'Introduction to Generative AI',
    issuer: 'Coursera',
    certificateUrl: '/certificates/generative-ai-certificate.pdf'
  },
  {
    id: '3',
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Coursera',
    certificateUrl: '/certificates/prompt-engineering-certificate.pdf'
  },
  {
    id: '4',
    title: 'AWS Academy Machine Learning Foundations',
    issuer: 'AWS Academy',
    certificateUrl: '/certificates/aws-ml-certificate.pdf'
  },
  {
    id: '5',
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Forage',
    certificateUrl: '/certificates/forage-advanced-software-eng-certificate.pdf'
  },
  {
    id: '6',
    title: 'SQL for Beginners',
    issuer: 'Scaler',
    certificateUrl: '/certificates/SQL for Beginners.pdf'
  },
  {
    id: '7',
    title: 'Programming in Python',
    issuer: 'Coursera',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/RD7Z5YSD52GC'
  },
  {
    id: '8',
    title: 'Python for Data Science, AI & Development',
    issuer: 'Coursera',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/0Z92CWUY6BPB'
  }
];

export const contactInfo: ContactInfo = {
  email: 'rochanvardhan2004@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rochan-vardhan-boddepalli',
  github: 'https://github.com/Rochan09',
  phone: '+91-9391870198',
  location: 'Srikakulam,Andhra Pradesh,India'
};
