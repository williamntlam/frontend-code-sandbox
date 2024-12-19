export interface Project {
  framework: string; // The framework name (e.g., React, Angular)
  creator: string; // The creator's name (e.g., Facebook, Google)
  dateCreated: string; // The date the framework was created (ISO format string)
  title: string; // The title or description of the framework
}

interface CardComponentProps {
  projects: Project[];
  gradient: string;
}
