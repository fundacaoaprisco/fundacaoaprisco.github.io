import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

import '@styles/variables.css'
import '@styles/global.css'

function loadStories() {
  const req = require.context('../src/components', true, /stories.js$/)
  req.keys().forEach(filename => req(filename))
}

addDecorator(withKnobs)
addDecorator(withInfo)
configure(loadStories, module)
