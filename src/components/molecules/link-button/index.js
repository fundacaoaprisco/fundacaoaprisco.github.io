import React from 'react'
import PropTypes from 'prop-types'

import { StyledLink, InternalLink } from './styled'

const LinkButton = ({ href, className, children, isNavLink, external }) =>
  // eslint-disable-next-line no-nested-ternary
  external ? (
    <StyledLink className={className} href={href}>
      {children}
    </StyledLink>
  ) : isNavLink ? (
    <InternalLink className={className} to={href} isNavLink>
      {children}
    </InternalLink>
  ) : (
    <InternalLink className={className} to={href}>
      {children}
    </InternalLink>
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
