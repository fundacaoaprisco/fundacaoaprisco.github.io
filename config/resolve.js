const path = require('path')

module.exports = {
  alias: {
    '@atoms': path.resolve(process.cwd(), 'src/components/atoms'),
    '@molecules': path.resolve(process.cwd(), 'src/components/molecules'),
    '@organisms': path.resolve(process.cwd(), 'src/components/organisms'),
    '@templates': path.resolve(process.cwd(), 'src/components/templates'),
    '@components': path.resolve(process.cwd(), 'src/components'),
    '@images': path.resolve(process.cwd(), 'src/images'),
    '@styles': path.resolve(process.cwd(), 'src/styles'),
    '@config': path.resolve(process.cwd(), 'src/config'),
    '@pages': path.resolve(process.cwd(), 'src/pages'),
  },
}
