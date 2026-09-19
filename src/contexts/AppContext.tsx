import React, { createContext, useContext, useState, useCallback } from 'react';
import { Movement, Project } from '../types';

interface AppContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  movements: Movement[];
  projects: Project[];
  isLoadingMovements: boolean;
  activeManual: Movement | null;
  setActiveManual: (m: Movement | null) => void;
  activeProject: Project | null;
  setActiveProject: (p: Project | null) => void;
  dominantColor: string | null;
  setDominantColor: (c: string | null) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeManual, setActiveManual] = useState<Movement | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [dominantColor, setDominantColor] = useState<string | null>(null);

  const [movements] = useState<Movement[]>([]);
  const [projects] = useState<Project[]>([]);
  const [isLoadingMovements] = useState(false);

  const toggleTheme = useCallback(() => setTheme(prev => prev === 'light' ? 'dark' : 'light'), []);

  return (
    <AppContext.Provider value={{
      theme, toggleTheme,
      movements, projects, isLoadingMovements,
      activeManual, setActiveManual,
      activeProject, setActiveProject,
      dominantColor, setDominantColor
    }}>
      {children}
    </AppContext.Provider>
  );
};
