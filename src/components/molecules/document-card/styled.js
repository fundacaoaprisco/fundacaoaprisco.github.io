import styled from 'styled-components'

import vars from '@styles/variables'

import { Heading } from '@atoms'

export const StyledCard = styled.div`
  border: 1px solid ${vars['color-border']};
  border-radius: 0.5rem;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border-color: ${vars['color-primary']};
  }
`

export const CardTitle = styled(Heading)`
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
`
export const IconWrapper = styled.div``
