import React from 'react'
import styles from './Carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { useSwiper } from 'swiper/react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'
import { useEffect } from 'react'
import Card from '../Card/Card'

const Controls = ({ data }) => {
  const { swiper } = useSwiper()
  useEffect(() => {
    swiper?.slideTo(0)
  }, [data, swiper])
}
const Carousel = ({ data, type }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: '10px 10px' }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={'auto'}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <LeftNav />
        <RightNav />
        {data?.map((item) => (
          <SwiperSlide key={item?.id} className={styles.swiperSlide}>
            {<Card cardData={item} type={type} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
