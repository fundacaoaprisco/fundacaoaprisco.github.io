import React from 'react'
import classNames from 'classnames'

import { Link } from 'gatsby'

import styles from './styles.module.css'

const LinkTo = ({ href, children, navLink }) => (
  <Link to={href} className={classNames(styles.link, { [styles.navLink]: navLink })}>
    {children}
  </Link>
)

export default LinkTo
