import React from 'react'

import Link from 'next/link'

import { FiChevronLeft } from 'react-icons/fi'

import { Wrapper } from './styles'

interface HeaderProps {
  returnToHome: boolean
}

const Header: React.FC<HeaderProps> = ({ returnToHome }) => {
  return (
    <Wrapper>
      {returnToHome && (
        <Link href="/">
          <a>
            <FiChevronLeft size={16} alignmentBaseline="inherit" />
            Return
          </a>
        </Link>
      )}
    </Wrapper>
  )
}

export default Header
