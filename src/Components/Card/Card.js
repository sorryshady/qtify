
import React from 'react'
import { Tooltip } from '@mui/material'
import styles from './Card.module.css'
const Card = ({ cardData, type }) => {
  const word = type === 'album' ? 'follows' : 'likes'
  let count = type === 'album' ? cardData.follows : cardData.likes
  count = (count / 1000).toFixed(1)
  const card = (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src={cardData.image}
            alt={cardData.description}
            className={styles.image}
          />
        </div>
        <span className={styles.count}>{`${count} ${word}`}</span>
      </div>
      <span className={styles.cardTitle}>{cardData.title}</span>
    </div>
  )
  return (
    <>
      {type === 'album' ? (
        <Tooltip title={`${cardData.songs.length} songs`} placement='top'>
          {card}
        </Tooltip>
      ) : (
        card
      )}
    </>
  )
}

export default Card
