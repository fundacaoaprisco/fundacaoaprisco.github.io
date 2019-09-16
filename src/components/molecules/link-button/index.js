import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { StyledLink } from './styled'

const LinkButton = ({ to, className, children, isNavLink, external }) =>
  external ? (
    <StyledLink className={className} href={to} isNavLink={isNavLink} external={external}>
      {children}
    </StyledLink>
  ) : (
    <StyledLink className={className} as={Link} to={to} isNavLink={isNavLink} external={external}>
      {children}
    </StyledLink>
  )

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isNavLink: PropTypes.bool,
  className: PropTypes.string,
  external: PropTypes.bool,
}

LinkButton.defaultProps = {
  className: undefined,
  isNavLink: false,
  external: true,
}

export default LinkButton
