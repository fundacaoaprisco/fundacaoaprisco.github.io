import styled from 'styled-components'

import vars from '@styles/variables'

import { Text } from '@atoms'

export const StyledContributeBar = styled.div`
  background-color: #fff;
  background-color: ${vars['color-primary']};
  width: 100%;
  padding: 1rem;
  margin: 2.5rem 0;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const StyledFlexGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const StyledImpactText = styled(Text)`
  margin-left: 0.5rem;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    text-align: center;
  }
`

export const StyledContributeText = styled(Text)`
  margin-right: 1rem;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
  }
`

export const StyledImage = styled.img`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 2rem;
`
