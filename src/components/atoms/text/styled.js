import styled from 'styled-components'

import vars from '@styles/variables'

export const StyledText = styled.p`
  font-family: ${vars['font-text']};
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ white }) => (white ? '#fff' : vars['color-text'])};
  margin: 0;
`

export const StyledSubTitle = styled(StyledText)`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 300;
`
