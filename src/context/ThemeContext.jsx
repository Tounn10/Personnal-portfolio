import { useEffect, useMemo, useState } from 'react'

import ThemeContext from './themeContext.js'

const STORAGE_KEY = 'theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved

  return 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const value = useMemo(() => {
    const toggleTheme = () => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return {
      theme,
      setTheme,
      toggleTheme,
      isDark: theme === 'dark',
    }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
