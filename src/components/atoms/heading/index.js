import React from 'react'
import PropTypes from 'prop-types'

import { StyledH1, StyledH2, StyledH3, StyledH4 } from './styled'

const Heading = ({ type, children, white, className, ...props }) => {
  let heading
  switch (type) {
    case 'h1':
      heading = (
        <StyledH1 as="h1" white={white} className={className} {...props}>
          {children}
        </StyledH1>
      )
      break
    case 'h2':
      heading = (
        <StyledH2 as="h2" white={white} className={className} {...props}>
          {children}
        </StyledH2>
      )
      break
    case 'h3':
      heading = (
        <StyledH3 as="h3" white={white} className={className} {...props}>
          {children}
        </StyledH3>
      )
      break
    case 'h4':
      heading = (
        <StyledH4 as="h4" white={white} className={className} {...props}>
          {children}
        </StyledH4>
      )
      break
    default:
      heading = null
      break
  }
  return heading
}

Heading.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  white: PropTypes.bool,
}

Heading.defaultProps = {
  type: 'h2',
  white: false,
  className: undefined,
}

export default Heading
