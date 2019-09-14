import React from 'react'

import { Logo } from '@atoms'

import { LinkButton } from '@molecules'

import navLinks from './nav-links'
import { StyledNavbar, NavItems } from './styled'

const Navbar = () => (
  <StyledNavbar>
    <Logo />
    <NavItems>
      {navLinks.map((link, i) => (
        <LinkButton
          href="/blog"
          title={link.title}
          key={`link-key-${link.href}`}
          navLink={i !== navLinks.length - 1}
        >
          {link.title}
        </LinkButton>
      ))}
    </NavItems>
  </StyledNavbar>
)

export default Navbar
