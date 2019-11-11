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
  transition: all 200ms ease;
  align-items: center;
  display: flex;

  &:hover {
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
    background-color: ${({ white }) => (white ? '#efefef' : '#0a7d7d')};
  }
`
