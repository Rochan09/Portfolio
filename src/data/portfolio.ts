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
    id: '1',
    title: 'Web Development Intern',
    company: 'Averixis Solutions',
    period: 'June 2025 – Present',
    description: [
      'Working on real-time projects using Google Cloud technologies',
      'Gaining full-stack experience with front-end and back-end logic'
    ],
    certificateUrl: '/certificates/averixis-certificate.pdf'
  },
  {
    id: '2',
    title: 'Software Trainee Intern',
    company: 'Krify Software Technologies',
    period: 'June 2024 – July 2024',
    description: [
      'Focused on Cyber Security and Web Technologies',
      'Worked on live secure web development projects'
    ],
    certificateUrl: '/certificates/krify-certificate.pdf'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'React Notes App',
    description: 'Full-stack notes application with JWT authentication and CRUD functionality.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    githubUrl: 'https://github.com/Rochan09'
  },
  {
    id: '2',
    title: 'Job Portal Web Application',
    description: 'Role-based job portal with separate interfaces for job seekers and employers. Deployed on Netlify with MongoDB Atlas backend.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Netlify'],
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    githubUrl: 'https://github.com/Rochan09'
  },
  {
    id: '3',
    title: 'My portfolio',
    description: 'Personal portfolio website showcasing my projects, skills, achievements, and experience. Built with React and TypeScript.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    githubUrl: 'https://github.com/Rochan09'
  }
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    icons: ['Code', 'Database']
  },
  {
    category: 'Frameworks',
    items: ['React', 'Angular', 'Django'],
    icons: ['Layout', 'Zap']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MongoDB Atlas'],
    icons: ['Database', 'Cloud']
  },
  {
    category: 'Tools & Technologies',
    items: ['REST API', 'GitHub', 'VS Code', 'Postman', 'JWT', 'Bcrypt'],
    icons: ['Tool', 'Github']
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'Teamwork', 'Problem Solving'],
    icons: ['Users', 'MessageSquare']
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
  }
];

export const contactInfo: ContactInfo = {
  email: 'rochanvardhan2004@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rochan-vardhan-boddepalli',
  github: 'https://github.com/Rochan09',
  phone: '+91 xxxxxxxxxx',
  location: 'Srikakulam,Andhra Pradesh,India'
};