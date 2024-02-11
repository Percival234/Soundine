import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import AppProvider from '@Providers/AppProvider';
import AuthProvider from '@Providers/AuthProvider';

export default function App() {
  const [theme] = useState(
    localStorage.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.theme = theme;
  }, [theme]);

  return (
    <AppProvider>
      <AuthProvider>
        <div className="min-h-screen min-w-[320px] flex bg-white text-zinc-800 max-w-screen duration-400 dark:bg-zinc-800 dark:text-white selection:bg-main selection:text-white isolate">
          <Outlet />
        </div>
      </AuthProvider>
    </AppProvider>
  );
}
