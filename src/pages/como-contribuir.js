import React from 'react'
import { Grid } from '@material-ui/core'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import vars from '@styles/variables'

import { Text, Heading } from '@atoms'
import { PageTitle } from '@molecules'

export const pageQuery = graphql`
  {
    markdownRemark(fileAbsolutePath: { glob: "**/content/pages/como-contribuir.md" }) {
      id
      html
    }
  }
`

export const Article = styled.article`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${vars['color-text']};

  & p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: ${vars['color-text']};
    margin-bottom: 1rem;
  }

  ol,
  ul {
    list-style: initial !important;
    margin: 1rem;
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-family: ${vars['font-title']};
    color: ${vars['color-title']};
    font-weight: 400;
    margin: 1.5rem 0 1rem 0;
  }

  & h1 {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 300;
  }

  & h2 {
    font-size: 2rem;
    line-height: 2rem;
  }

  & h4 {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }

  & h5 {
    font-size: 1rem;
    line-height: 1rem;
  }

  & h6 {
    font-size: 1rem;
    line-height: 1rem;
  }

  & a {
    font-family: ${vars['font-text']};
    color: ${({ isNavLink }) => (isNavLink ? vars['color-text'] : vars['color-primary'])};
    cursor: pointer;
    text-decoration: none;
    padding: 0;
    transition: all 200ms ease;

    &:hover {
      color: ${({ isNavLink }) => (isNavLink ? vars['color-primary'] : vars['color-primary'])};
      box-shadow: 0px 2px 0px 0px ${vars['color-primary']};
    }
  }
`
export const PostContainer = styled.div`
  width: 90%;
  max-width: 770px;
  margin: 0 auto;
`

const Donate = ({ data }) => {
  const {
    markdownRemark: { html },
  } = data

  return (
    <>
      <PageTitle title="Como contribuir" />
      <PostContainer>
        <Article dangerouslySetInnerHTML={{ __html: html }} />
      </PostContainer>
    </>
  )
}

export default Donate
