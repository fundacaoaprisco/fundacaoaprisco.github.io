import React from 'react'
import { Link } from 'gatsby'

import logoImage from '@images/fundacao-aprisco-logo.png'

import { StyledLogo } from './styled'

const Logo = () => (
  <Link to="/">
    <StyledLogo to src={logoImage} alt="Logo Fundação Aprisco" />
  </Link>
)

export default Logo
