import React from 'react'

import { Options, List } from './styles'

interface OptionProps {
  title: string
  changeCostume?: () => void
}

const Option: React.FC<OptionProps> = ({ title, changeCostume }) => {
  return (
    <Options>
      <List onMouseOver={changeCostume}>{title}</List>
    </Options>
  )
}

export default Option
