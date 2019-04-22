import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

const Button = ({ children, white, ...props }) => (
  <button className={classNames(styles.btn, { [styles.white]: white })} {...props}>
    {children}
  </button>
)

export default Button
