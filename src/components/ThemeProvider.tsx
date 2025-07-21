// src/components/ThemeProvider.tsx
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { PropsWithChildren } from 'react';

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const { theme } = useSelector((state: any) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out bg-primary text-primary">
      {children}
    </div>
  );
}
