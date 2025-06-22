import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Item from './Item';
import { ShopContext } from '../context/ShopContext';


const NewArrivals = () => {

  const {products} = useContext(ShopContext)
  const [newArrivals, setNewArrivals] = useState([])

  useEffect(() => {
    const data = products.slice(0, 10)
    setNewArrivals(data)
  }, [products])

  return (
    <section className='max-padd-container pt-16 pb-6 bg-primary'>
      <Title title1={'New'} title2={'Arrivals'} titleStyles={'pb-10'} paraStyles={'!block'}/>
      
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30
          },
        }}
        modules={[Autoplay, Pagination]}
        className="h-[555px] sm:h-[411px] md:h-[488px]"
      >
        {newArrivals.map((product) => (
          <SwiperSlide key={product._id}>
            <Item product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default NewArrivals