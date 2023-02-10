import React from 'react'
import { useThemeContext } from '..'
import Text from './Text'
import ThemeSwitch from './ThemeSwitch'
import Title from './Title'

const Layout = () => {
  const { theme } = useThemeContext()
  return (
    <main style={theme}>
      <ThemeSwitch />
      <Title content="Provider" />
      <Text content="BEHOLD" />
    </main>
  )
}

export default Layout
