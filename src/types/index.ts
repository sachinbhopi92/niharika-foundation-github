// Common types used across the application

export interface CourseData {
  title: string;
  description: string;
  imageSrc: string[];
  duration: string;
  students: number;
  link?: string;
}

export interface ProgramData {
  title: string;
  description: string;
  images: string[];
  videoUrl?: string; // Optional video embed URL
  date?: string; // Optional date for the program
  location?: string; // Optional location
  participants?: string; // Optional participant info
}

export interface Staff {
  name: string;
  role: string;
  photo: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export interface AchievementStat {
  year: string;
  enrollment: number;
  trained: number;
  dropouts: number;
  placement: string;
}

export interface HistoryEvent {
  year: string;
  text: string;
}
