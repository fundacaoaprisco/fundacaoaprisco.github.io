import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

const Button = ({ children, white }) => (
  <button className={classNames(styles.btn, { [styles.white]: white })}>{children}</button>
)

export default Button
