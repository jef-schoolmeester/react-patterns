import React, {
  createContext,
  CSSProperties,
  useContext,
  useState,
} from 'react'
import Layout from './components/Layout'

const themes: Record<'light' | 'dark', CSSProperties> = {
  light: {
    color: '#343434',
    backgroundColor: '#ababab',
  },
  dark: {
    color: '#ababab',
    backgroundColor: '#343434',
  },
}

const defaultTheme = themes['light']

const ThemeContext = createContext<{
  theme: CSSProperties
  toggleTheme: () => void
}>({
  theme: defaultTheme,
  toggleTheme: () => null,
})

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

const Provider = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={providerValue}>
      <Layout />
    </ThemeContext.Provider>
  )
}

export default Provider
