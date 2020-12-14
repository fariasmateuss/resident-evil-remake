import React from 'react'

import { Options, List } from './styles'

type Props = {
  title: string
  changeCostume?: () => void
}

const Option: React.FC<Props> = ({ title, changeCostume }) => {
  return (
    <Options>
      <List onClick={changeCostume}>{title}</List>
    </Options>
  )
}

export default Option