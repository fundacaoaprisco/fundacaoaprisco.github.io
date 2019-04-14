import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '@atoms'

import styles from './styles.module.css'

const SubtitleBar = ({ text, button }) => {
  return (
    <div className={styles.subtitleBar}>
      <Text subtitle>{text}</Text>
      {button}
    </div>
  )
}

export default SubtitleBar
