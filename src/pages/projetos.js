import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from '@material-ui/core'
import { Helmet } from 'react-helmet'

import { Card, PageTitle } from '@molecules'
import { frontmatterToCard } from '@utils'

const Index = () => {
  const {
    allMarkdownRemark: { edges: allProjects },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/projects/*.md" } }
        sort: { fields: frontmatter___active, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              image
              active
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

  const allProjectsContent = frontmatterToCard({
    array: allProjects,
    beforeHref: 'projetos',
    buttonText: 'Mais informações',
  })

  return (
    <>
      <Helmet>
        <title>Projetos • Fundação Aprisco</title>
        <meta name="description" content="Veja a lista de todos os nossos projetos sociais" />
      </Helmet>

      <PageTitle title="Todos os projetos" />
      <Grid container spacing={3}>
        {allProjectsContent.map(project => (
          <Grid key={`project-list-key-${project.title}`} item xs={12} sm={6} md={4}>
            <Card content={project} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Index
