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
    company: 'Krify Software Technologies',
    title: 'Software Trainee Intern ',
    period: 'June 2024 – July 2024',
    description: [
      'Focused on Cyber Security and Web Technologies',
      'Worked on live secure web development projects'
    ],
    certificateUrl: '/certificates/krify-certificate.pdf'
  },
  {
    id: '1',
    company: 'Averixis Solutions',
    title: 'Web Development Intern',
    period: 'May 2025 – July 2025',
    description: [
      'Completed internship working on real-time projects using Google Cloud technologies',
      'Gained full-stack experience with front-end and back-end logic'
    ],
    certificateUrl: '/certificates/averixis-certificate.pdf'
  },
  {
    id: '3',
    company: 'Lomaa IT Solutions',
    title: 'Full Stack Developer Intern',
    period: 'July 2025 – Present',
    description: [
      'Participating in comprehensive training across frontend and backend development, with subsequent integration into real-time projects upon completion.',
      'Engage in weekly meetings with industry professionals to gain practical insights and enhance professional development.'
    ],
    certificateUrl: '/certificates/Looma.pdf'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'React Notes App',
    description: 'Full-stack notes application with JWT authentication and CRUD functionality.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    imageUrl: '/Notes App Thumbnail.png',
    githubUrl: 'https://github.com/Rochan09/Notes-App',
    liveUrl: 'https://notes-app-woad-nine.vercel.app'
  },
  {
<<<<<<< HEAD
    id: '3',
=======
    id: '2',
>>>>>>> 034ec701927543df1100733b7814de70a71dbdad
    title: 'My Portfolio',
    description: 'Personal portfolio website showcasing my projects, skills, achievements, and experience. Built with React and TypeScript.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageUrl: '/My Portfolio Thumbnail.png',
    githubUrl: 'https://github.com/Rochan09/Portfolio',
    liveUrl: 'https://rochanportfolio.vercel.app'
  },
  {
<<<<<<< HEAD
    id: '5',
    title: 'Currency Converter',
    description: 'A simple and responsive currency converter built using HTML, CSS, and JavaScript.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/Currency Converter Thumbnail.png',
    githubUrl: 'https://github.com/Rochan09/CurrencyConverter',
    liveUrl: 'https://currencycircus.netlify.app/'
  },
  {
    id: '4',
=======
    id: '3',
>>>>>>> 034ec701927543df1100733b7814de70a71dbdad
    title: 'AI Tools Explorer',
    description: 'A fully responsive React web app showcasing 50+ AI tools with category filters and search functionality.',
    techStack: ['React', 'Tailwind CSS', 'JSON', 'Vercel'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
    githubUrl: 'https://github.com/Rochan09/AI-Tools-Projects',
    liveUrl: 'https://ai-tools-projects.vercel.app/'
  },
  {
<<<<<<< HEAD
    id: '2',
=======
    id: '4',
>>>>>>> 034ec701927543df1100733b7814de70a71dbdad
    title: 'Job Portal Web Application',
    description: 'Role-based job portal with separate interfaces for job seekers and employers. Deployed on Netlify with MongoDB Atlas backend.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Netlify'],
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    githubUrl: 'https://github.com/Rochan09/Job-Portal',
    liveUrl: 'https://github.com/Rochan09/Job-Portal/blob/main/README.md'
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
  },
  {
    id: '6',
    title: 'SQL for Beginners',
    issuer: 'Scaler',
    certificateUrl: '/certificates/SQL for Beginners.pdf'
  }
];

export const contactInfo: ContactInfo = {
  email: 'rochanvardhan2004@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rochan-vardhan-boddepalli',
  github: 'https://github.com/Rochan09',
  phone: '+91 xxxxxxxxxx',
  location: 'Srikakulam,Andhra Pradesh,India'
};
