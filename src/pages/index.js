import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Jumbotron, LinkButton } from '@molecules'
import { CardGrid, ContributeBar } from '@organisms'
import { frontmatterToCard } from '@utils'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/blog/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 4
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
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/projects/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
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
    array: data.projects.edges,
    beforeHref: 'projetos',
    buttonText: 'Mais informações',
  })

  const featuredBlogContent = frontmatterToCard({
    array: data.blogs.edges,
    beforeHref: 'blog',
    buttonText: 'Ler mais',
  })

  const blogButton = <LinkButton to="/blog">Ver todas</LinkButton>
  const projectsButton = <LinkButton to="/projetos">Todos os projetos</LinkButton>

  return (
    <>
      <Jumbotron />

      <CardGrid
        cards={featuredProjectsContent}
        columns={3}
        title="Projetos em destaque"
        button={projectsButton}
      />
      <ContributeBar />

      <CardGrid
        cards={featuredBlogContent}
        columns={4}
        title="Últimas publicações"
        button={blogButton}
      />
    </>
  )
}

export default Index
