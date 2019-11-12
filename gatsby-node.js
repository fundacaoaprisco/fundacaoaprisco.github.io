/* eslint-disable consistent-return */
const path = require('path')

const slugify = require('slugify')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const nodeSlug = slugify(node.frontmatter.title, {
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      lower: true,
    })
    createNodeField({
      node,
      name: `slug`,
      value: nodeSlug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const BlogTemplate = path.resolve(`src/components/templates/blog/index.js`)
  const ProjectTemplate = path.resolve(`src/components/templates/projects/index.js`)

  return graphql(`
    {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/blog/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/projects/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.blogs.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.fields.slug}`,
        component: BlogTemplate,
        context: {
          slug: node.fields.slug,
        }, // additional data can be passed via context
      })
    })

    result.data.projects.edges.forEach(({ node }) => {
      createPage({
        path: `/projetos/${node.fields.slug}`,
        component: ProjectTemplate,
        context: {
          slug: node.fields.slug,
        }, // additional data can be passed via context
      })
    })
  })
}
