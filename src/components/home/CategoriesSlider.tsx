"use client"
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ICategory } from '@/interface/category.interface';
import Link from 'next/link';

const swiperOptions = {
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    1600: {
      slidesPerView: 6,
      spaceBetween: 30
    },
  },
  pagination: {
    clickable: true,
  },
  modules: [Pagination]
}
export default function CategoriesSlider({ cateogries }: { cateogries: ICategory[] }) {
  return (
    <div>
      <Swiper className='categories-Slider' {...swiperOptions}>
        {
          cateogries && cateogries.map((cat) => (
            <SwiperSlide key={cat._id} className='mb-8'>
              <Link href={`/categories/${cat._id}`}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={270}
                  height={250}
                  loading='lazy'
                  className='w-full h-[15.625rem] object-contain bg-gray-100 mb-4'
                />
                <h3 className='text-center font-medium'>{cat.name}</h3>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
