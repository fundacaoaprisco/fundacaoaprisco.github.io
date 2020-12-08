import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import heroBg from '@images/hero-image.png'

import { StyledJumbotron, JumbotronText, SlideImage } from './styled'

import { Heading, Button } from '@atoms'

const Jumbotron = ({ title, text, buttonText, href, image }) => (
  <StyledJumbotron>
    <SlideImage src={image} />
    <Heading type="h1" white>
      {title}
    </Heading>
    <JumbotronText white>{text}</JumbotronText>
    <Button white onClick={() => navigate(href)}>
      {buttonText}
    </Button>
  </StyledJumbotron>
)

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
}

Jumbotron.defaultProps = {
  image: heroBg,
}

export default Jumbotron
