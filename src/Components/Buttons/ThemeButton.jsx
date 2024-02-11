import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import ButtonRounded from '@UI/Buttons/ButtonRounded';

export default function ThemeButton() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(() => (theme === 'light' ? 'dark' : 'light'));

  return (
    <ButtonRounded aria-label="change theme" onClick={toggleTheme}>
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </ButtonRounded>
  );
}
