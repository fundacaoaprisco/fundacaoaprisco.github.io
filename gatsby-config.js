const autoprefixer = require("autoprefixer");
const postCSSImport = require("postcss-import")();
const postCSSNested = require("postcss-nested");
const postCSSVariables = require("postcss-css-variables");

const cssVariables = require("./src/config/css-variables");

const postCSSAutoprefixer = autoprefixer({ browsers: ["IE 9", "iOS 7"] });

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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSAutoprefixer,
          postCSSImport,
          postCSSNested,
          postCSSVariables({
            variables: cssVariables
          })
        ]
      }
    }
  ]
};
