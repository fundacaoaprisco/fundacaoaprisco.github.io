import React from 'react'
import { graphql } from 'gatsby'

import {
  PostContainer,
  PostTitle,
  Article,
  HeaderArticle,
  PostDate,
  PostImage,
  PostHeaderInfo,
} from './styled'

import { Tag } from '@atoms'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "pt-BR")
        title
        image
        active
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, image, date, active },
      html,
    },
  } = data

  const getDate = () => {
    const splitedDate = date.split(' ')

    return `${splitedDate[0]} de ${splitedDate[1]} de ${splitedDate[2]}`
  }

  return (
    <PostContainer>
      <PostImage src={image} />
      <HeaderArticle>
        <PostHeaderInfo>
          <PostDate>{getDate()}</PostDate>
        </PostHeaderInfo>
        <PostTitle type="h1">{title}</PostTitle>
      </HeaderArticle>

      <Article dangerouslySetInnerHTML={{ __html: html }} />
    </PostContainer>
  )
}
export default BlogTemplate
