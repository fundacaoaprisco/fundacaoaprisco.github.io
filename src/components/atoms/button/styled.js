import styled from 'styled-components'

import vars from '@styles/variables'

export const StyledButton = styled.button`
  font-family: ${vars['font-text']};
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 2px;
  border: none;
  color: ${({ white }) => (white ? vars['color-primary'] : '#fff')};
  cursor: pointer;

  background-color: ${({ white }) => (white ? '#fff' : vars['color-primary'])};
`
