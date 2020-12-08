const resolvers = require('./gatsby.resolve')
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Fundação Aprisco`,
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
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlTitle: 'Admin - Fundação Aprisco',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM Plex Serif\:300,400,300i`,
          `Overpass\:300,400,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/templates/base`),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fundação Aprisco`,
        short_name: `Fundação Aprisco`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `##0d9999`,
        display: `standalone`,
        icon: 'src/images/fundacao-aprisco-logo.png',
      },
    },
  ],
}
