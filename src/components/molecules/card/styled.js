import styled from 'styled-components'

import { Heading, Text } from '@atoms'

export const StyledCard = styled.div``

export const CardTitle = styled(Heading)`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-decoration: none;
`

export const CardText = styled(Text)`
  text-decoration: none;
  margin-bottom: 1.5rem;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  & img {
    width: 100%;
  }
`
