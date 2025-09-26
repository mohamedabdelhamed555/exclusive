"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';


import slide1 from '@/assets/images/gallery1.png'
import slide2 from '@/assets/images/gallery2.png'
import slide3 from '@/assets/images/gallery3.png'
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

const images=[
  {
    path:slide1.src,
    label:"slide 1"
  },
  {
    path:slide2.src,
    label:"slide 2"
  },
  {
    path:slide3.src,
    label:"slide 3"
  },
]

export default function MainSlider() {
  return (
   <section>
    <div className="mx-auto container">
       <div>
    <Swiper {...swiperOptions}>
      {
         images.map((img,idx)=>(
                <SwiperSlide key={idx}>
                  <Image
                  src={img.path}
                  alt={img.label}
                  width={600}
                  height={400}
                  loading='lazy'
                  className='w-full h-[21.5rem] object-cover'
                  />
                </SwiperSlide>
         ))
      }
    </Swiper>
    </div>
    </div>
   </section>
  )
}
