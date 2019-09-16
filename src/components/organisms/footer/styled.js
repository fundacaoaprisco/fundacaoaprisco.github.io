import styled from 'styled-components'
import { Facebook } from 'styled-icons/fa-brands'

import { Text, Heading } from '@atoms'

import { LinkButton } from '@molecules'

import bg from '@images/footer-gradient.jpg'
import line from '@images/sub-footer-line.jpg'

export const StyledFooterContainer = styled.footer`
  background-color: #fff;
  background-image: url(${bg});
  background-repeat: repeat-x;
  width: 100%;
  padding: 1rem 2rem 2rem 2rem;
  margin-top: 4rem;
  border-radius: 4px 4px 0 0;
`

export const StyledSubFooterContainer = styled.div`
  background-color: #fff;
  background-image: url(${line});
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  background-position: top;
  background-repeat: no-repeat;
  font-size: 0.875rem;
`

export const FooterSubTitle = styled(Heading)`
  margin-bottom: 1.5rem;
`

export const SubFooterText = styled(Text)`
  font-size: 0.875rem;
`

export const SupportGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
`

export const SupportImage = styled.img`
  width: calc(180px - 0.5rem);
  margin: 0.25rem;
`

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & a {
    margin-bottom: 0.5rem;
    display: inline-block;
  }
`

export const FacebookLink = styled(LinkButton)`
  display: inline-block;
  margin-bottom: 1rem;
`

export const FacebookIcon = styled(Facebook)`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  margin-right: 0.4rem;
`
