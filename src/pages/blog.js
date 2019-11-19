import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from '@material-ui/core'

import { Card, PageTitle } from '@molecules'
import { frontmatterToCard } from '@utils'

const Index = () => {
  const {
    allMarkdownRemark: { edges: allPosts },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/blog/*.md" } }
        sort: { fields: frontmatter___active, order: DESC }
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

  const allPostsContent = frontmatterToCard({
    array: allPosts,
    beforeHref: 'blog',
    buttonText: 'Mais informações',
  })

  return (
    <>
      <PageTitle title="Blog" />
      <Grid container spacing={3}>
        {allPostsContent.map(project => (
          <Grid key={`post-list-key-${project.title}`} item xs={12} sm={6} md={4}>
            <Card content={project} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Index
