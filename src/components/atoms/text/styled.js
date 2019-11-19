import styled from 'styled-components'

import vars from '@styles/variables'

export const StyledText = styled.p`
  font-family: ${vars['font-text']};
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ white }) => (white ? '#fff' : vars['color-text'])};
  margin: 0;
  font-weight: 300;
`

export const StyledSubTitle = styled(StyledText)`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 300;
`

export const Quote = styled.p`
  font-family: ${vars['font-title']};
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${vars['color-text']};
  margin: 0;
  font-weight: 300;
  font-size: 2rem;
  line-height: 2.5rem;
  font-style: italic;
  margin: 4rem;
`
