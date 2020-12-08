import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styled'

const Button = ({ children, white, small, type, onClick, className, ...props }) => (
  <StyledButton type={type} onClick={onClick} white={white} className={className} {...props}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  white: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  white: false,
  small: false,
  onClick: () => {},
  className: undefined,
}

export default Button
