'use client';

import React, { Suspense } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Loading from './loading';

export default function App() {
  return (


    <Suspense fallback={<Loading />}>

      <div class="grid grid-cols-1 md:grid-cols-3   " style={{ maxHeight: '70%' }}>
        <div class=" col-span-2 md:col-span-2 p-2 ">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper rounded-lg transition-opacity ease-in duration-200 opacity-100 hover:opacity-85 "
          >
            <SwiperSlide><img src={'/crowd-img.jpg'} alt='ss' width={100} height={100} /></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>

          </Swiper>
        </div>
        <div class="col-span-1 md:col-span-1 p-2" >
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper rounded-lg transition-opacity ease-in duration-200 opacity-100 hover:opacity-85 "
          >
            <SwiperSlide><img src={'/crowd-img.jpg'} alt='ss' width={100} height={100} /></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>

          </Swiper>

        </div>


      </div>
      <div class="grid grid-cols-1 md:grid-cols-3  ">
        <div class=" md:col-span-2 p-2 transition-opacity ease-in duration-200 opacity-100 hover:opacity-85">
          <div class="card"><p>Services</p></div>
        </div> <div class=" md:col-span-1 p-2 transition-opacity ease-in duration-200 opacity-100 hover:opacity-85">
          <div class="card"><p>Services</p></div>
        </div>
      </div>


    </Suspense>
  );
}
