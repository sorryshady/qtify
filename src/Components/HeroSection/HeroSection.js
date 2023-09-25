import React from 'react'
import styles from './HeroSection.module.css'
import heroImg from '../../Assets/heroimage.svg'
const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.text}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <div>
        <img className={styles.heroimg} src={heroImg} alt='hero' />
      </div>
    </div>
  )
}

export default HeroSection
