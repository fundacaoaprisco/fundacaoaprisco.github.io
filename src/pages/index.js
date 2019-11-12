import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Jumbotron } from '@molecules'
import { CardGrid } from '@organisms'
import { frontmatterToCard } from '@utils'

const Index = () => {
  const {
    allMarkdownRemark: { edges: featuredProjects },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/projects/*.md" } }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
              image
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  const featuredProjectsContent = frontmatterToCard({
    array: featuredProjects,
    beforeHref: 'projetos',
    buttonText: 'Mais informações',
  })

  return (
    <>
      <Jumbotron />
      <CardGrid cards={featuredProjectsContent} column={3} title="Projetos em destaque" />
    </>
  )
}

export default Index
