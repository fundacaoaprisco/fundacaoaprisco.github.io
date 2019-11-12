import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { StyledCard, ImageWrapper, CardTitle, CardTag, CardText } from './styled'

import { LinkButton } from '@molecules'

const Card = ({ content, ...props }) => {
  const { image, title, text, href, button, active } = content
  return (
    <StyledCard {...props}>
      <Link to={href}>
        <ImageWrapper disabled={active === false}>
          <img src={image} alt={title} />
          {active !== null ||
            (typeof active !== 'undefined' && (
              <CardTag
                type={active ? 'primary' : 'secondary'}
                text={active ? 'Ativo' : 'Inátivo'}
              />
            ))}
        </ImageWrapper>
      </Link>
      <Link to={href}>
        <CardTitle type="h3">{title}</CardTitle>
      </Link>
      {text && (
        <Link to={href}>
          <CardText>{title}</CardText>
        </Link>
      )}
      {href && <LinkButton href={href}>{button}</LinkButton>}
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
    active: PropTypes.string,
  }),
}

Card.defaultProps = {
  content: PropTypes.shape({
    image: undefined,
    href: undefined,
    button: undefined,
    active: null,
  }),
}

export default Card
