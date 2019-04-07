const autoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')()
const postCSSNested = require('postcss-nested')
const postCSSVariables = require('postcss-css-variables')

const cssVariables = require('./src/config/css-variables')

const postCSSAutoprefixer = autoprefixer({ browsers: ['IE 9', 'iOS 7'] })

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
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSAutoprefixer,
          postCSSImport,
          postCSSNested,
          postCSSVariables({
            variables: cssVariables,
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@images': 'static/images',
          '@components': 'src/components',
          '@atoms': 'src/components/atoms',
          '@molecules': 'src/components/molecules',
          '@organisms': 'src/components/organisms',
        },
        extensions: ['js'],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layouts/`),
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
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}
