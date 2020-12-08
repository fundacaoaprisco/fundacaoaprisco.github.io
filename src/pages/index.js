import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Jumbotron, LinkButton } from '@molecules'
import { CardGrid, ContributeBar } from '@organisms'
import { frontmatterToCard } from '@utils'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      blogs: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "**/content/blog/*.md" }
          frontmatter: { isPublic: { eq: true } }
        }
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
        filter: {
          fileAbsolutePath: { glob: "**/content/blog/*.md" }
          frontmatter: { featured: { eq: true }, isPublic: { eq: true } }
        }
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

      <Slider
        className="slick-home-slider"
        dots
        infinite
        arrows
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {data.featuredPosts.edges.map(({ node }) => (
          <Jumbotron
            key={`featured-post-${node.id}`}
            title={node.frontmatter.title}
            text={node.excerpt}
            image={node.frontmatter.image}
            href={`/blog/${node.fields.slug}`}
            buttonText="Saiba mais"
          />
        ))}
      </Slider>

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
