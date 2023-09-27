import React from 'react'
import styles from './MenuItem.module.css'
const MenuItem = ({ data }) => {
  console.log(data)
  return (
    <div className={styles.menuItemContainer}>
      <img src={data.image} className={styles.img} alt={data.title} />
      <div className={styles.info}>
        <div className={styles.albumInfo}>
          <p className={styles.albumName}>{data.title}</p>
        </div>
        <div className={styles.follows}>{data.follows} follows</div>
      </div>
    </div>
  )
}

export default MenuItem
