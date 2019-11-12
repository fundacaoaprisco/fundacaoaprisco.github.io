import React from 'react'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  } = data

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}
export default BlogTemplate
