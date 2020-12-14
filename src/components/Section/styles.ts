import styled from 'styled-components'

export const Title = styled.h1`
  margin: 0;

  &::after {
    content: '';

    display: inline-block;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.border};
    width: 100%;
    transform: translateY(-1.5rem);
  }
`
