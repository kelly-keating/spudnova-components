import { useEffect } from "react"

interface Theme {
  primaryColor?: string;
  secondaryColor?: string;
  highlightColor?: string;
  textColor?: string;
  textAltColor?: string;
}

interface SetterProps {
  theme: Theme
}

function ThemeSetter ({ theme }: SetterProps) {
  useEffect(() => {
    const root = document.documentElement

    if (theme.primaryColor) root.style.setProperty("--theme-color-base", theme.primaryColor)
    if (theme.secondaryColor) root.style.setProperty("--theme-color-secondary", theme.secondaryColor)
    if (theme.highlightColor) root.style.setProperty("--theme-color-highlight", theme.highlightColor)
    if (theme.textColor) root.style.setProperty("--theme-text-color", theme.textColor)
    if (theme.textAltColor) root.style.setProperty("--theme-text-alt", theme.textAltColor)
  }, [theme])

  return null
}

export default ThemeSetter