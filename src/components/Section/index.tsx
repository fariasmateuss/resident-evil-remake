import React from 'react'

import { Title } from './styles'

type Props = {
  title: string
}

const Section: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  )
}

export default Section
