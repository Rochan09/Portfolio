export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  certificateUrl?: string;
  certificateLabel?: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
  icons: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  link?: string;
  type: 'publication' | 'award' | 'recognition';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  certificateUrl: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  phone: string;
  location: string;
}