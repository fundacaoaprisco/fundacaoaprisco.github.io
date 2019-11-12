import React from 'react'
import PropTypes from 'prop-types'

import { StyledTag } from './styled'

const Tag = ({ type, text, className }) => (
  <StyledTag className={className} type={type}>
    {text}
  </StyledTag>
)

Tag.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Tag.defaultProps = {
  type: 'primary',
  className: '',
}

export default Tag
