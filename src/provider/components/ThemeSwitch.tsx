import React, { useContext } from 'react'

import { useThemeContext } from '..'

const ThemeSwitch = () => {
  const { toggleTheme } = useThemeContext()
  return <button onClick={toggleTheme}>TOGGLE THEME</button>
}

export default ThemeSwitch
