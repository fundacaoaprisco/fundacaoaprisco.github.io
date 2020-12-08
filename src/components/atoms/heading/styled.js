import styled from 'styled-components'

import vars from '@styles/variables'

const heading = styled.span`
  font-family: ${vars['font-title']};
  color: ${({ white }) => (white ? '#fff' : vars['color-title'])};
  margin: 0;
  font-weight: 400;
`

export const StyledH1 = styled(heading)`
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 300;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`

export const StyledH2 = styled(heading)`
  font-size: 2rem;
  line-height: 2rem;
`

export const StyledH3 = styled(heading)`
  font-size: 1.25rem;
  line-height: 1.25rem;
`

export const StyledH4 = styled(heading)`
  font-size: 1rem;
  line-height: 1rem;
`
