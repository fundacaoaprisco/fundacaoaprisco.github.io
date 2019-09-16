import React from 'react'
import PropTypes from 'prop-types'

import { Container } from '@atoms'

import { Navbar, Footer } from '@organisms'

import GlobalStyles from '@styles/global'

const BaseTemplate = ({ children }) => (
  <>
    <Container>
      <GlobalStyles />
      <Navbar />

      {children}
      <Footer />
    </Container>
  </>
)

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseTemplate
