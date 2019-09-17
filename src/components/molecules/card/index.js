import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { LinkButton } from '@molecules'

import { StyledCard, ImageWrapper, CardTitle } from './styled'

const Card = ({ content, ...props }) => {
  const {
    node: {
      frontmatter: { path, title, image },
    },
  } = content
  return (
    <StyledCard {...props}>
      <Link to={path}>
        <ImageWrapper>
          <img src={image} alt={title} />
        </ImageWrapper>
      </Link>
      <Link to={path}>
        <CardTitle type="h3">{title}</CardTitle>
      </Link>
      {path && <LinkButton to={path}>Leia mais</LinkButton>}
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
