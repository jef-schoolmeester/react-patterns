import React from 'react'
import { useThemeContext } from '..'

interface Props {
  content: string
}

const Text: React.FC<Props> = ({ content }) => {
  const { theme } = useThemeContext()
  return <p style={theme}>{content}</p>
}

export default Text
