import React from 'react'

import { Logo } from '@atoms'
import NavItems from './components/nav-items'

import styles from './styles.module.css'

const Navbar = () => (
  <div className={styles.navbar}>
    <Logo />
    <nav className={styles.navItems}>
      <NavItems />
    </nav>
  </div>
)

export default Navbar
