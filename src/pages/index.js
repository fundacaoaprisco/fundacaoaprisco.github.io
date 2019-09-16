import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Jumbotron } from '@molecules'

import { FeaturedProjectsList } from '@organisms'

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
    <>
      <Jumbotron />
      <FeaturedProjectsList projects={FeaturedProjectsListArray} />
    </>
  )
}

export default Index
