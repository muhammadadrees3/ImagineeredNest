// src/context/ThemeContext.tsx
'use client';
import { createContext, useContext, useEffect, useState, useMemo } from 'react';

type Theme = 'light' | 'dark';

const ThemeValueContext = createContext<Theme>('light');
const ThemeDispatchContext = createContext<() => void>(() => {});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = useMemo(() => () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
  }, []);

  return (
    <ThemeValueContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={toggleTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeValueContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeValueContext);
  const toggleTheme = useContext(ThemeDispatchContext);
  return { theme, toggleTheme };
};