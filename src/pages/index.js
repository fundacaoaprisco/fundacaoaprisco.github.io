import React from 'react'
import { graphql } from 'gatsby'

import { Container } from '@atoms'
import { Jumbotron, Card, SubtitleBar } from '@molecules'
import { Navbar } from '@organisms'

// import styles from './styles.module.css'

export default ({ data }) => (
  <Container>
    <Navbar />
    <Jumbotron />
    <SubtitleBar text="Últimos posts" />
    <Card
      content={{
        title: 'Infocentro',
        text:
          'O objetivo é fomentar o desenvolvimento profissional das camadas mais pobres de Feira de Santana, através de cursos básicos nas áreas de informática e internet.',
        image: 'https://picsum.photos/350/300',
        href: '#',
        button: 'Leia mais',
      }}
    />
  </Container>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
