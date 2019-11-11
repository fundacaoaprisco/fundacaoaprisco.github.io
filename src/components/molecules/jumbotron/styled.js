import styled from 'styled-components'

import { Text } from '@atoms'

import vars from '@styles/variables'
import heroBg from '@images/hero-image.png'

export const StyledJumbotron = styled.div`
  border-radius: 4px;
  background-color: ${vars['color-primary']};
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  margin-bottom: 3rem;
  padding: 2rem;
`

export const JumbotronText = styled(Text)`
  margin: 24px 0;
  line-height: 2rem;
`
