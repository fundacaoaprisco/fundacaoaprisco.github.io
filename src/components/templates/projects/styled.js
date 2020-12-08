import styled from 'styled-components'

import vars from '@styles/variables'

import { Heading } from '@atoms'

export const PostContainer = styled.div`
  width: 90%;
  max-width: 770px;
  margin: 3rem auto;
`

export const PostTitle = styled(Heading)`
  margin: 1rem 0 1.5rem 0;
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

export const PostDate = styled.p`
  color: ${vars['color-text']};
  margin: 0;
`

export const PostImage = styled.img`
  margin: 0;
  width: 100%;
  border-radius: 8px;
`

export const PostHeaderInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    margin: 0 0.5rem;
  }
`

export const HeaderArticle = styled.header`
  margin-top: -50px;
  background-color: #fff;
  display: block;
  z-index: 99;
  position: relative;
  width: 90%;
  margin: -50px auto 1rem auto;
  text-align: center;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    margin: auto;
    width: 124px;
    height: 1px;
    background-color: #c4c4c4;
    display: block;
  }
`
