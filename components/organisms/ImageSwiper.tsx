import React, { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageSwiperProps } from '@/types/common'
import Image from 'next/image'
import { EffectCoverflow } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

const ImageSwiper: FC<ImageSwiperProps> = ({ swiperImages }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const getActiveIndex = (swiper: any) => {
    console.log(swiper)
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        centeredSlides={true}
        className='mySwiper'
        grabCursor={true}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        modules={[EffectCoverflow]}
        initialSlide={3}
        onSlideChangeTransitionEnd={getActiveIndex}
      >
        {swiperImages.map((image, index) => (
          <SwiperSlide
            key={index}
            className='my-6'
            style={{ width: '320px', height: '360' }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={320}
              height={360}
              className={`rounded-lg transition ${
                index % 2 === 0 ? 'rotate-2' : '-rotate-2'
              } ${
                activeIndex === index
                  ? 'border-2 border-blue-700/50 shadow-lg shadow-blue-700/50 grayscale-0'
                  : 'grayscale'
              }`}
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSwiper
