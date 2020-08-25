import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import navLinks from '@config/nav-links'

import {
  StyledFooterContainer,
  StyledSubFooterContainer,
  SubFooterText,
  SupportGrid,
  SupportImage,
  FooterSubTitle,
  FooterMenu,
  FacebookIcon,
  FacebookLink,
} from './styled'

import { Logo, Text } from '@atoms'
import { SubtitleBar, LinkButton } from '@molecules'

const Footer = ({ brands, metadata }) => (
  <>
    <StyledFooterContainer>
      <SubtitleBar text="Apoio" />
      <SupportGrid>
        {brands.map(({ node }) => (
          <SupportImage
            key={`apoio-brand-${node.id}`}
            src={node.frontmatter.brand}
            alt={node.frontmatter.title}
          />
        ))}
      </SupportGrid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={2}>
          <Logo />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <FooterSubTitle type="h4">A fundação</FooterSubTitle>
          <FooterMenu>
            {navLinks.map(link => (
              <LinkButton href={link.href} title={link.title} key={`link-key-${link.href}`}>
                {link.title}
              </LinkButton>
            ))}
          </FooterMenu>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <FooterSubTitle type="h4">Fale conosco</FooterSubTitle>

          <FacebookLink
            external
            href="https://pt-br.facebook.com/fundaprisco"
            rel="noreferrer nofollow noopener"
            target="_blank"
          >
            <FacebookIcon />
            Facebook
          </FacebookLink>

          <Text>{metadata.tel}</Text>
          <Text>{metadata.email}</Text>
          <br />
          <Text>{metadata.andress}</Text>
        </Grid>
        <Grid item xs={12} md={5}>
          <FooterSubTitle type="h4">Nossa missão</FooterSubTitle>
          <Text>{metadata.mission}</Text>
        </Grid>
      </Grid>
    </StyledFooterContainer>
    <StyledSubFooterContainer>
      <SubFooterText>Fundação Aprisco • {metadata.subtitle}</SubFooterText>
      <SubFooterText>CNPJ: 04.027.896/0001-53</SubFooterText>
    </StyledSubFooterContainer>
  </>
)

Footer.propTypes = {
  brands: PropTypes.instanceOf(Array).isRequired,
  metadata: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
    andress: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
}

export default Footer
