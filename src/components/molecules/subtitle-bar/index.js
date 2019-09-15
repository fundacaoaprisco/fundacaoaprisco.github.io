import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '@atoms'

import { StyledSubTitleBar } from './styled'

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
