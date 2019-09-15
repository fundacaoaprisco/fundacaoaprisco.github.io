import styled from 'styled-components'

import { Text } from '@atoms'

import vars from '@styles/variables'

export const StyledJumbotron = styled.div`
  border-radius: 4px;
  background-color: ${vars['color-primary']};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  margin-bottom: 2rem;
`

export const JumbotronText = styled(Text)`
  margin: 24px 0;
  line-height: 2rem;
`
