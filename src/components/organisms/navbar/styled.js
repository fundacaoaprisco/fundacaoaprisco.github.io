import styled from 'styled-components'

import { Button } from '@atoms'

import vars from '@styles/variables'

export const StyledNavbar = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

export const NavItems = styled.div`
  & a {
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    background: #ffffff;
    box-shadow: -4px 3px 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
    transition: transform 200ms ease;
    transform: ${({ open }) => (open ? `translateX(0)` : `translateX(110%)`)};

    & a {
      margin-left: 0;
      padding: 16px 24px;
    }
  }
`

export const MobileButtton = styled(Button)`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    color: ${vars['color-black']};

    & svg {
      margin-left: 0.5rem;
    }
  }
`

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseButton = styled(Button)`
  display: none;
  color: ${vars['color-black']};
  padding: 0.5rem 0.75rem;
  margin: 1rem 0.5rem 0 0;

  @media (max-width: 1024px) {
    display: block;
  }
`
