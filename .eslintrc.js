module.exports = {
    "extends": [
      "cheesecakelabs/react"
    ],
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest": true
    },
    "settings": {
      "import/resolver": {
        "webpack": {
          "config": "./config/resolve.js"
        }
      }
    },
    "rules": {
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": [
            "**/*.dev.js",
            "**/*.test.js",
            "**/*.stories.js",
            "server.js",
            "next.config.js",
            "postcss.config.js",
            "webpack.config.*",
            "storybook/*",
            ".storybook/**",
            "stories/**",
            "stories.**",
          ]
        }
      ],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ]
        }
      ]
    },
    "globals": {}
};