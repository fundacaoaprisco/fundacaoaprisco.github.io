import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from '@styles/global'

const BaseTemplate = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseTemplate
