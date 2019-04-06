module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: "markdown-pages"
      }
    },
    `gatsby-transformer-remark`
  ]
};
