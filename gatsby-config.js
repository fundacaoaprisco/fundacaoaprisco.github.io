const resolvers = require('./gatsby.resolve')
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'uploads',
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/docs`,
        name: 'docs',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: resolvers.resolve.alias,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Serif`,
            subsets: [`latin`],
            variants: [`300`, `400`, `300i`],
          },
          {
            family: `Overpass`,
            subsets: [`latin`],
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/templates/base`),
      },
    },
  ],
}
