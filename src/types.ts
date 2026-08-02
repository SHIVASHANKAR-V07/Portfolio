export interface EducationItem {
  institution: string;
  period: string;
  score: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  overview: string;
  highlights: string[];
  platforms: string[];
}

export interface InternshipResponsibility {
  category?: string;
  detail: string;
}

export interface InternshipExperience {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  overview: string;
  responsibilities: InternshipResponsibility[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectExperience {
  id: string;
  title: string;
  type: string;
  brief: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  huggingFaceUrl?: string;
  liveUrl?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  url?: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export type SectionKey = 'home' | 'experience' | 'certification' | 'contact';
