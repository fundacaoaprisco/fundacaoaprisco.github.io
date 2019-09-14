import styled from 'styled-components'
import { Link } from 'gatsby'

import vars from '@styles/variables'

export const StyledLink = styled(Link)`
  font-family: ${vars['font-text']};
  color: ${({ isNavLink }) => (isNavLink ? vars['color-text'] : vars['color-primary'])};
  cursor: pointer;
  text-decoration: none;
  padding: 1rem 0;
  &:hover {
    color: ${({ isNavLink }) => (isNavLink ? vars['color-primary'] : vars['color-primary'])};
  }
`
