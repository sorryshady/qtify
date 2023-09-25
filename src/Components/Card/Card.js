// {
// "id": "08ab10b4-0b30-4545-8cd5-ba60592e9062",
// "title": "Fluid Till",
// "description": "Similique voluptatem harum.\nQuae in ducimus commodi similique.\nIncidunt labore ad nemo.",
// "follows": 11306,
// "image": "https://images.pexels.com/photos/37646/new-york-skyline-new-york-city-city-37646.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
// "slug": "fluid-till",}
import React from 'react'
import { Tooltip } from '@mui/material'
import styles from './Card.module.css'
const Card = ({ cardData, type }) => {
  const word = type === 'album' ? 'follows' : 'likes'
  // const sampleData = {
  //   id: '08ab10b4-0b30-4545-8cd5-ba60592e9062',
  //   title: 'Fluid Till',
  //   description:
  //     'Similique voluptatem harum. Quae in ducimus commodi similique. Incidunt labore ad nemo.',
  //   follows: 11306,
  //   likes: 3000,
  //   image:
  //     'https://images.pexels.com/photos/37646/new-york-skyline-new-york-city-city-37646.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //   songs: 42,
  // }
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
