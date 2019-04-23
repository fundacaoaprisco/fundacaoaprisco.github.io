const resolve = require('./config/resolve')

module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: resolve.alias,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Serif`,
            subsets: [`latin`],
            variants: [`300`, `400`],
          },
          {
            family: `Overpass`,
            subsets: [`latin`],
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
  ],
}
