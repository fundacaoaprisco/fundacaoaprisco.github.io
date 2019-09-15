import React from 'react'
import PropTypes from 'prop-types'

import { StyledLink } from './styled'

const LinkButton = ({ to, children, isNavLink }) => (
  <StyledLink to={to} isNavLink={isNavLink}>
    {children}
  </StyledLink>
)

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isNavLink: PropTypes.bool,
}

LinkButton.defaultProps = {
  isNavLink: false,
}

export default LinkButton
