import { ReactNode } from 'react';

export interface Movement {
  title: string;
  law: string;
  gif: string;
  intro: string;
  how: string[];
  why?: string;
  level: string;
  dominantColor?: string;
}

export interface Project {
  year: string;
  title: string;
  description: string;
  detail: string;
  link: string | null;
  gif: string;
  dominantColor?: string;
}

