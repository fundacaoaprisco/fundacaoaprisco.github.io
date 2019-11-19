import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { StyledLink } from './styled'

const LinkButton = ({ href, className, children, isNavLink, external, ...props }) =>
  external ? (
    <StyledLink className={className} href={href}>
      {children}
    </StyledLink>
  ) : (
    <StyledLink className={className} as={Link} to={href} isNavLink={isNavLink} {...props}>
      {children}
    </StyledLink>
  )

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isNavLink: PropTypes.bool,
  className: PropTypes.string,
  external: PropTypes.bool,
}

LinkButton.defaultProps = {
  className: undefined,
  isNavLink: false,
  external: false,
}

export default LinkButton
