import React from 'react'
import styles from './NavBar.module.css'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
const NavBar = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <Logo className={styles.logo} />
      {children}
      <Button
        text='Give Feedback'
        className={styles.feedbackBtn}
        onClick={() => {}}
      />
    </nav>
  )
}

export default NavBar
