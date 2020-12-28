import React from 'react'

import { Title } from './styles'

interface SectionProps {
  title: string
  backToHome?: boolean
}

const Section: React.FC<SectionProps> = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  )
}

export default Section
