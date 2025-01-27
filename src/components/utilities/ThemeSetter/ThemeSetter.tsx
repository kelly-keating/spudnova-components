import { useEffect } from 'react';

interface Theme {
  bgMain?: string;
  bgLight?: string;
  bgDark?: string;
  textLight?: string;
  textDark?: string;
  highlight?: string;
  highlightAlternative?: string;
}

interface SetterProps {
  theme: Theme;
}

function ThemeSetter({ theme }: SetterProps) {
  useEffect(() => {
    const root = document.documentElement;

    if (theme.bgMain) root.style.setProperty('--theme-bg-main', theme.bgMain);
    if (theme.bgLight)
      root.style.setProperty('--theme-bg-light', theme.bgLight);
    if (theme.bgDark) root.style.setProperty('--theme-bg-dark', theme.bgDark);
    if (theme.textLight)
      root.style.setProperty('--theme-text-light', theme.textLight);
    if (theme.textDark)
      root.style.setProperty('--theme-text-dark', theme.textDark);
    if (theme.highlight)
      root.style.setProperty('--theme-highlight', theme.highlight);
    if (theme.highlightAlternative)
      root.style.setProperty(
        '--theme-highlight-alt',
        theme.highlightAlternative
      );
  }, [theme]);

  return null;
}

export default ThemeSetter;
