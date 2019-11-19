import React, { useState } from 'react'

import navLinks from '@config/nav-links'

import { StyledNavbar, NavItems, MobileButtton, CloseButtonWrapper, CloseButton } from './styled'

import { Logo } from '@atoms'
import { LinkButton } from '@molecules'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false)
  return (
    <StyledNavbar>
      <Logo />
      <MobileButtton onClick={() => setMobileMenu(true)} white small>
        Menu{' '}
        <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 459 459" fill="#333">
          <g>
            <g id="menu">
              <path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" />
            </g>
          </g>
        </svg>
      </MobileButtton>
      <NavItems open={mobileMenuOpen}>
        <CloseButtonWrapper>
          <CloseButton onClick={() => setMobileMenu(false)} white small>
            Fechar{' '}
            <svg
              version="1.1"
              x="0px"
              y="0px"
              width="16px"
              height="16px"
              viewBox="0 0 357 357"
              xmlSpace="preserve"
              fill="#333"
              style={{ marginLeft: 8 }}
            >
              <g>
                <g id="close">
                  <polygon
                    points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		"
                  />
                </g>
              </g>
            </svg>
          </CloseButton>
        </CloseButtonWrapper>
        {navLinks.map(link => (
          <LinkButton
            href={link.href}
            title={link.title}
            activeClassName="active"
            key={`link-key-${link.href}`}
            isNavLink
          >
            {link.title}
          </LinkButton>
        ))}
      </NavItems>
    </StyledNavbar>
  )
}
export default Navbar
