'use client';
import { ThemeProvider } from 'next-themes';

export default function ThemeCom({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="text-gray-800 dark:text-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
