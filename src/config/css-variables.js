let cssVariables = {}

const typography = {
  'font-title': `'IBM Plex Serif', sans-serif`,
  'font-text': `'Overpass', serif`,
}

const colors = {
  black: '#333',
  gray: '#666',
  green: '#0d9999',
  'color-primary': 'var(--green)',
  'color-title': 'var(--black)',
  'color-text': 'var(--gray)',
}

cssVariables = {
  ...colors,
  ...typography,
}

module.exports = { ...cssVariables }
