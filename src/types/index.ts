export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  role: string;
  tools: string[];
  tags: string[];
  image: string;
  desc: string;
  content: string;
}

export interface Tool {
  name: string;
  level: number;
}

export interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  type: 'education' | 'experience';
}
