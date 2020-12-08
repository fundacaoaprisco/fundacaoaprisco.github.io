import React from 'react'
import PropTypes from 'prop-types'

import { StyledText, StyledSubTitle, Quote } from './styled'

const Text = ({ children, white, subtitle, quote, className, bold }) =>
  // eslint-disable-next-line no-nested-ternary
  subtitle ? (
    <StyledSubTitle className={className} white={white} subtitle={subtitle}>
      {children}
    </StyledSubTitle>
  ) : quote ? (
    <Quote className={className} white={white} subtitle={subtitle}>
      {children}
    </Quote>
  ) : (
    <StyledText className={className} white={white} subtitle={subtitle} bold={bold}>
      {children}
    </StyledText>
  )

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  white: PropTypes.bool,
  subtitle: PropTypes.bool,
  quote: PropTypes.bool,
}

Text.defaultProps = {
  white: false,
  subtitle: false,
  quote: false,
  className: undefined,
}

export default Text
