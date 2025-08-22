export interface Section {
  id: string;
  title: string;
  description?: string;
  content?: string;
  subsections?: Subsection[];
  order: number; // For navigation order
}

export interface Subsection {
  id: string;
  title: string;
  content: string;
  type?: 'text' | 'table' | 'list' | 'diagram' | 'icons';
}

export interface ELCClassification {
  code: 'E0' | 'E1' | 'E2' | 'E3';
  label: string;
  description: string;
  machineInvolvement: string;
  icon: string;
}

export interface FLCClassification {
  code: 'F-A' | 'F-B' | 'F-C';
  label: string;
  definition: string;
  icon: string;
}

export interface NavigationItem {
  id: string;
  number: string; // Navigation number (00, 01, 02, etc.)
  type: 'main' | 'subsection';
  level: number;
} 