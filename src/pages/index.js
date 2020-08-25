import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import { Jumbotron, LinkButton } from '@molecules'
import { CardGrid, ContributeBar } from '@organisms'
import { frontmatterToCard } from '@utils'

const Index = () => {
  const [slide, setSlideIndex] = useState(0)

  const data = useStaticQuery(graphql`
    {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/blog/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 4
      ) {
        edges {
          node {
            id
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
            id
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
      featuredPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/blog/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 5
      ) {
        edges {
          node {
            id
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
      SiteMetadata: markdownRemark(fileAbsolutePath: { glob: "**/content/sitemetadata/*.md" }) {
        id
        frontmatter {
          subtitle
          heroTitle
          heroText
          mission
          peopleHelped
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

  const blogButton = <LinkButton href="/blog">Ver todas</LinkButton>
  const projectsButton = <LinkButton href="/projetos">Todos os projetos</LinkButton>

  return (
    <>
      <Helmet>
        <title>Fundação Aprisco • {data.SiteMetadata.frontmatter.subtitle}</title>
        <meta name="description" content={data.SiteMetadata.frontmatter.mission} />
      </Helmet>

      <Carousel value={slide} onChange={setSlideIndex} plugins={['infinite', 'fastSwipe']}>
        <Jumbotron
          title={data.SiteMetadata.frontmatter.heroTitle}
          text={data.SiteMetadata.frontmatter.heroText}
        />
        <Jumbotron
          title={data.SiteMetadata.frontmatter.heroTitle}
          text={data.SiteMetadata.frontmatter.heroText}
        />
        <Jumbotron
          title={data.SiteMetadata.frontmatter.heroTitle}
          text={data.SiteMetadata.frontmatter.heroText}
        />
      </Carousel>
      <Dots value={slide} onChange={setSlideIndex} />

      <CardGrid
        cards={featuredProjectsContent}
        columns={3}
        title="Projetos em destaque"
        button={projectsButton}
      />

      <ContributeBar number={data.SiteMetadata.frontmatter.peopleHelped} />

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
