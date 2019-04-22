import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

import styles from './styles.module.css'

const LinkButton = ({ to, children, navLink }) => (
  <Link to={to} className={classNames(styles.link, { [styles.navLink]: navLink })}>
    {children}
  </Link>
)

export default LinkButton
