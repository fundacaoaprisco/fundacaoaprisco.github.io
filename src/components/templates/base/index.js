import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import GlobalStyles from '@styles/global'

import { Container } from '@atoms'
import { Navbar, Footer } from '@organisms'

const BaseTemplate = ({ children }) => {
  const queryResult = useStaticQuery(graphql`
    {
      Apoiadores: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/apoio/*.md" } }
        limit: 5
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              brand
            }
          }
        }
      }
      SiteMetadata: markdownRemark(fileAbsolutePath: { glob: "**/content/sitemetadata/*.md" }) {
        id
        frontmatter {
          subtitle
          mission
          andress
          tel
          email
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <GlobalStyles />
        <Navbar />
        {children}
        <Footer
          brands={queryResult.Apoiadores.edges}
          metadata={queryResult.SiteMetadata.frontmatter}
        />
      </Container>
    </>
  )
}

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseTemplate
