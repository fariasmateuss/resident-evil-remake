import React from 'react'

import { Options, List } from './styles'

interface Props {
  title: string
  changeCostume?: () => void
}

const Option: React.FC<Props> = ({ title, changeCostume }) => {
  return (
    <Options>
      <List onMouseOver={changeCostume}>{title}</List>
    </Options>
  )
}

export default Option
