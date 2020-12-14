import styled from 'styled-components'

export const Options = styled.ul`
  width: 50%;
  padding: 0;
`

export const List = styled.li`
  list-style: none;
  font-size: 1.5em;
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.colors.border};
  padding: 5px 0 5px 20px;
  border: 1px solid ${({ theme }) => theme.colors.background};

  &:hover {
    color: ${({ theme }) => theme.colors['text-hover']};
    background: ${({ theme }) => theme.colors['background-hover']};
    border: 1px solid ${({ theme }) => theme.colors['border-hover']};
  }
`
