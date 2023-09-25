import React from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import styles from './LandingPage.module.css'
import HeroSection from '../HeroSection/HeroSection'
const LandingPage = () => {
  return (
    <>
      <NavBar>
        <SearchBar className={styles.desktop} />
      </NavBar>
      <SearchBar className={styles.mobile} />
      <HeroSection />
    </>
  )
}

export default LandingPage
