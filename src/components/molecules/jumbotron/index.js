import React from 'react'
import { navigate } from 'gatsby'

import { StyledJumbotron, JumbotronText } from './styled'

import { Heading, Button } from '@atoms'

const Jumbotron = () => (
  <StyledJumbotron>
    <Heading type="h1" white>
      Comunidade que se
      <br /> propõe a fazer o bem.
    </Heading>
    <JumbotronText white>
      Promovemos projetos sociais voltados à educação, cultura, inclusão social e geração de renda.
    </JumbotronText>
    <Button white onClick={() => navigate('/projetos', { replace: true })}>
      Veja nossos projetos
    </Button>
  </StyledJumbotron>
)

export default Jumbotron
