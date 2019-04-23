import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '.'

storiesOf('Atoms/Button', module).add('default', () => (
  <Button onClick={action('Clicked')}>Default</Button>
))
