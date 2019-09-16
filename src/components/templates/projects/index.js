import React from 'react'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        PROJECTS
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export default BlogTemplate
