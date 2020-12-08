import styled from 'styled-components'

import { Heading, Text, Tag } from '@atoms'

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
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  & img {
    width: 100%;
    max-height: 216px;
    object-fit: cover;
    filter: ${({ disabled }) => disabled && `grayscale(1);`};
  }
`

export const CardTag = styled(Tag)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`
