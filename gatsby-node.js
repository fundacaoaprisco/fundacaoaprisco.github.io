/* eslint-disable consistent-return */
const path = require('path')

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
            frontmatter {
              path
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
            frontmatter {
              path
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
        path: node.frontmatter.path,
        component: BlogTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    result.data.projects.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: ProjectTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
