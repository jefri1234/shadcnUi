"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './globals.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function App() {

  async function  handleSubmit(){
    try {
      const repuesta= await  fetch('http://localhost:3000',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          },
          
      });
      const datos = await repuesta.json();
      console.log("DATOS DEL SERVIDOR :", datos)
    } catch (error) {
        console.log("erroe en la peticion" +error)
    }
  }


  return (
    <>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>
      <div>
        <button 
        className='bg-red-500 p-5 rounded-lg inline-block m-auto'
        onClick={handleSubmit}>PEDIR DATOS</button>
      </div>

    </>
  );
}
