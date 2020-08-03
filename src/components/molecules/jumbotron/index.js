import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { StyledJumbotron, JumbotronText } from './styled'

import { Heading, Button } from '@atoms'

const Jumbotron = ({ title, text }) => (
  <StyledJumbotron>
    <Heading type="h1" white>
      {title}
    </Heading>
    <JumbotronText white>{text}</JumbotronText>
    <Button white onClick={() => navigate('/projetos', { replace: true })}>
      Veja nossos projetos
    </Button>
  </StyledJumbotron>
)

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Jumbotron
