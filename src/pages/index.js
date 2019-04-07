import React from 'react'
import { graphql } from 'gatsby'

import { Button, Container } from '@atoms'
import { Navbar } from '@organisms'

import styles from './styles.module.css'

export default ({ data }) => (
  <Container>
    <Navbar />
    <div className={styles.green}>
      Hello {data.site.siteMetadata.title}! <Button>xablau</Button>
    </div>
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
