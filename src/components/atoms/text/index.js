import React from 'react'
import PropTypes from 'prop-types'

import { StyledText, StyledSubTitle } from './styled'

const Text = ({ children, white, subtitle, className }) =>
  subtitle ? (
    <StyledSubTitle className={className} white={white} subtitle={subtitle}>
      {children}
    </StyledSubTitle>
  ) : (
    <StyledText className={className} white={white} subtitle={subtitle}>
      {children}
    </StyledText>
  )

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  white: PropTypes.bool,
  subtitle: PropTypes.bool,
}

Text.defaultProps = {
  white: false,
  subtitle: false,
  className: undefined,
}

export default Text
