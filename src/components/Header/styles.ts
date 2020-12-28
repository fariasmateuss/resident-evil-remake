import styled from 'styled-components'

import { darken } from 'polished'

export const Wrapper = styled.a`
  display: flex;

  a {
    display: flex;
    align-items: center;
    position: absolute;
    align-items: center;
    right: 10%;

    &:hover {
      color: ${({ theme }) => darken(0.1, theme.colors.text)};
      transition: color 0.2s;
    }
  }
`
