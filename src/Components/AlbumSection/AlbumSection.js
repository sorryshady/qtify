import React, { useState } from 'react'
import Grid from '../Grid/Grid'
import styles from './AlbumSection.module.css'
import Carousel from '../Carousel/Carousel'
const AlbumSection = ({ data, title, type }) => {
  const [showAll, setShowAll] = useState(false)
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <span className={styles.title}>{title}</span>
        <span onClick={() => setShowAll(!showAll)} className={styles.showAll}>
          {showAll ? 'Collapse' : 'Show All'}
        </span>
      </div>
      {showAll ? (
        <Grid data={data} type={type} />
      ) : (
        <Carousel data={data} type={type} />
        // <div></div>
      )}
    </div>
  )
}

export default AlbumSection
