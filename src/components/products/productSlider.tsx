"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay,Pagination } from 'swiper/modules';


const swiperOptions={
  pagination:{
    clickable:true,
  },
  autoplay:{
    delay:2000,
    disapleOnInteraction: false,
  },
  modules:[Pagination,Autoplay]
}
export default function ProductSlider({images}:{images:string[]}) {
  return (
    <Swiper {...swiperOptions}>
      {
         images.map((img,idx)=>(
                <SwiperSlide key={idx}>
                  <Image
                  src={img}
                  alt={`${img}-${idx}`}
                  width={500}
                  height={500}
                  className='w-full h-[37.5rem] mx-auto object-contain'
                  />
                </SwiperSlide>
         ))
      }
    </Swiper>
  )
}
