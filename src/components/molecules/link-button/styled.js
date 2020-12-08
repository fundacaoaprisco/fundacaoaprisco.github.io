import styled from 'styled-components'
import { Link } from 'gatsby'

import vars from '@styles/variables'

export const StyledLink = styled.a`
  font-family: ${vars['font-text']};
  color: ${({ isNavLink }) => (isNavLink ? vars['color-text'] : vars['color-primary'])};
  cursor: pointer;
  text-decoration: none;
  padding: 0.25rem 0;
  transition: all 200ms ease;

  &:hover {
    color: ${({ isNavLink }) => (isNavLink ? vars['color-primary'] : vars['color-primary'])};
    box-shadow: 0px 2px 0px 0px ${vars['color-primary']};
  }
`

export const InternalLink = styled(Link)`
  font-family: ${vars['font-text']};
  color: ${({ isNavLink }) => (isNavLink ? vars['color-text'] : vars['color-primary'])};
  cursor: pointer;
  text-decoration: none;
  padding: 0.25rem 0;
  transition: all 200ms ease;

  &:hover {
    color: ${({ isNavLink }) => (isNavLink ? vars['color-primary'] : vars['color-primary'])};
    box-shadow: 0px 2px 0px 0px ${vars['color-primary']};
  }
`
