import React from 'react'
import { useThemeContext } from '..'

interface Props {
  content: string
}

const Title: React.FC<Props> = ({ content }) => {
  const { theme } = useThemeContext()
  return <h1 style={theme}>{content}</h1>
}

export default Title
