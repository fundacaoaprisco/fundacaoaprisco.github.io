import styled from 'styled-components'

import { Text } from '@atoms'

export const StyledJumbotron = styled.div`
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.65);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  margin-top: 2rem;
  padding: 2rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const JumbotronText = styled(Text)`
  margin: 24px 0;
  line-height: 2rem;
  max-width: 560px;

  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 1rem;
  }
`

export const SlideImage = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
  height: 100%;
  object-fit: cover;
`
