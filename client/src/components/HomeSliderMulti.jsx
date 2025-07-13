import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Slider 1: Video Slider
const videoSlides = [
  '/src/assets/AI.mov',
  'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4',
  'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4'
];

// Slider 2: Image Slider
const imageSlides = [
  '/src/assets/car_image1.png',
  '/src/assets/car_image2.png',
  '/src/assets/car_image3.png',
  '/src/assets/car_image4.png'
];

// Slider 3: Text Slider
const textSlides = [
  'Welcome to Deepal Electric Vehicles!',
  'Book a test drive and experience the future.',
  'Contact our agents for exclusive offers.'
];

const HomeSliderMulti = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col gap-12 py-8">
      {/* Video Slider */}
      <div className="w-full h-[60vh]">
        <Swiper spaceBetween={30} slidesPerView={1} loop={true} className="h-full">
          {videoSlides.map((src, idx) => (
            <SwiperSlide key={idx}>
              <video
                src={src}
                className="w-full h-[60vh] object-cover rounded-xl"
                autoPlay
                loop
                muted
                playsInline
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Image Slider */}
      <div className="w-full h-[40vh]">
        <Swiper spaceBetween={20} slidesPerView={2} loop={true} className="h-full">
          {imageSlides.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Car ${idx+1}`}
                className="w-full h-[40vh] object-cover rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Text Slider */}
      <div className="w-full h-[20vh] flex items-center justify-center">
        <Swiper spaceBetween={10} slidesPerView={1} loop={true} className="h-full w-2/3">
          {textSlides.map((text, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center justify-center h-[20vh] text-2xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
                {text}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSliderMulti;
