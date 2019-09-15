import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Container } from '@atoms'

import { Jumbotron } from '@molecules'

import { Navbar, FeaturedProjectsList } from '@organisms'

const Index = () => {
  const {
    allMarkdownRemark: { edges: FeaturedProjectsListArray },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/projects/*.md" } }
        limit: 4
      ) {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Navbar />
      <Jumbotron />
      <FeaturedProjectsList projects={FeaturedProjectsListArray} />
    </Container>
  )
}

export default Index
