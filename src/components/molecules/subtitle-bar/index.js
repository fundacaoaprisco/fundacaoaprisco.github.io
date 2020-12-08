import React from 'react'
import PropTypes from 'prop-types'

import { StyledSubTitleBar } from './styled'

import { Text } from '@atoms'

const SubtitleBar = ({ text, button }) => (
  <StyledSubTitleBar>
    <Text subtitle>{text}</Text>
    {button && button}
  </StyledSubTitleBar>
)

SubtitleBar.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.node,
}

SubtitleBar.defaultProps = {
  button: undefined,
}

export default SubtitleBar
