export interface ProjectPlan {
  title: string;
  image: string;
  description?: string;
}

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface ProjectMaterial {
  name: string;
  color?: string; // Hex code or label
  image?: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Interior' | 'Master Planning';
  location: string;
  year: string;
  client: string;
  services: string[];
  description: string;
  concept: string;
  heroImage: string;
  gallery: string[];
  plans?: ProjectPlan[];
  diagrams?: string[];
  materials?: ProjectMaterial[];
  credits: ProjectCredit[];
  stats?: ProjectStat[];
}

export interface ServiceWorkflow {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  heroImage: string;
  description: string;
  details: string[];
  workflow: ServiceWorkflow[];
  gallery: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Award {
  year: string;
  title: string;
  project?: string;
  organization: string;
}
