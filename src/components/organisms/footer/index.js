import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid } from '@material-ui/core'

import { Logo, Text } from '@atoms'

import { SubtitleBar, LinkButton } from '@molecules'

import navLinks from '@config/nav-links'
import hipermidiaSrc from '@images/apoio/hipermidia.png'

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

const Footer = () => (
  <>
    <StyledFooterContainer>
      <SubtitleBar text="Apoio" />
      <SupportGrid>
        <SupportImage src={hipermidiaSrc} alt="HIPERMÍDIA" />
        <SupportImage src={hipermidiaSrc} alt="HIPERMÍDIA" />
        <SupportImage src={hipermidiaSrc} alt="HIPERMÍDIA" />
        <SupportImage src={hipermidiaSrc} alt="HIPERMÍDIA" />
        <SupportImage src={hipermidiaSrc} alt="HIPERMÍDIA" />
      </SupportGrid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={2}>
          <Logo />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <FooterSubTitle type="h4">A fundação</FooterSubTitle>
          <FooterMenu>
            {navLinks.map(link => (
              <LinkButton href="/blog" title={link.title} key={`link-key-${link.href}`}>
                {link.title}
              </LinkButton>
            ))}
          </FooterMenu>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <FooterSubTitle type="h4">Fale conosco</FooterSubTitle>
          <FacebookLink
            external
            to="https://pt-br.facebook.com/fundaprisco"
            rel="noreferrer nofollow"
            target="_blank"
          >
            <FacebookIcon />
            Facebook
          </FacebookLink>
          <Text>2883 Avenida Gov. João Durval Carneiro, 44051634 Feira de Santana</Text>
        </Grid>
        <Grid item xs={12} md={5}>
          <FooterSubTitle type="h4">Nossa missão</FooterSubTitle>
          <Text>
            Além de fazer assistência social, reunir recursos humanos e financeiros para o
            planejamento, execução e gestão de projetos sociais voltados à educação, cultura, lazer,
            desenvolvimento profissional, inclusão social e geração de renda
          </Text>
        </Grid>
      </Grid>
    </StyledFooterContainer>
    <StyledSubFooterContainer>
      <SubFooterText>Fundação Aprisco • ONG em Feira de Sananta</SubFooterText>
      <SubFooterText>CNPJ: 04.027.896/0001-53</SubFooterText>
    </StyledSubFooterContainer>
  </>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
