import React from 'react'
import Card from '../Card/Card'
import styles from './Grid.module.css'
const Grid = ({ data, type }) => {
  return (
    <div className={styles.grid}>
      {data.map((item) => {
        return <Card cardData={item} key={item.id} type={type} />
      })}
    </div>
  )
}

export default Grid
