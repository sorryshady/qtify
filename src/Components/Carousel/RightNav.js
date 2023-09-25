import React, { useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import { useState } from 'react'
import styles from './Carousel.module.css'
import { ReactComponent as RightArrow } from '../../Assets/RightArrow.svg'

const RightNav = () => {
  const swiper = useSwiper()

  const [isEnd, setIsEnd] = useState(swiper.isEnd)

  useEffect(() => {
    swiper.on('slideChange', () => {
      setIsEnd(swiper.isEnd)
    })
  }, [swiper])

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  )
}

export default RightNav