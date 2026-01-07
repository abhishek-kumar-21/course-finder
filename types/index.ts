export interface SearchResult {
  title: string;
  link: string;
  snippet: string;
  source?: string;
}

export interface Course {
  title: string;
  platform: string;
  instructor: string;
  description: string;
  url: string;
  skills?: string[];
  duration?: string;
  language?: string;
  certificate?: "Free" | "Paid" | "No";
  thumbnail?: string; 
  type?: string; 
}