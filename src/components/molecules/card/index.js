import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { LinkButton } from '@molecules'

import { StyledCard, ImageWrapper, CardTitle, CardText } from './styled'

const Card = ({ content, ...props }) => {
  const { image, title, text, href, button } = content

  return (
    <StyledCard {...props}>
      <Link to={href}>
        <ImageWrapper>
          <img src={image} alt={title} />
        </ImageWrapper>
      </Link>
      <Link to={href}>
        <CardTitle type="h3">{title}</CardTitle>
      </Link>
      <Link to={href}>
        <CardText>{text}</CardText>
      </Link>
      {button && <LinkButton to={href}>{button}</LinkButton>}
    </StyledCard>
  )
}

Card.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
    button: PropTypes.string,
  }),
}

Card.defaultProps = {
  content: PropTypes.shape({
    image: undefined,
    href: undefined,
    button: undefined,
  }),
}

export default Card
