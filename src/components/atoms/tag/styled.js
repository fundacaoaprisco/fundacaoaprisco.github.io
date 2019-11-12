import styled from 'styled-components'

import vars from '@styles/variables'

export const StyledTag = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: ${({ type }) =>
    type === 'primary' ? vars['color-primary'] : vars['color-gray']};
  border-radius: 0.5rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 1px;
`
