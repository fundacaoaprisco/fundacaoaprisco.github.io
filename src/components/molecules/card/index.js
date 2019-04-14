import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Link } from 'gatsby'
import { Heading, Text } from '@atoms'
import { LinkButton } from '@molecules'

import styles from './styles.module.css'

const Card = ({ content, ...props }) => {
  const { image, title, text, href, button } = content
  return (
    <div className={classNames(styles.card)} {...props}>
      <Link to={href}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} />
        </div>
        <Heading type="h2" className={styles.cardTitle}>
          {title}
        </Heading>
        <Text className={styles.cardText}>{text}</Text>
        {button && <LinkButton to={href}>{button}</LinkButton>}
      </Link>
    </div>
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
