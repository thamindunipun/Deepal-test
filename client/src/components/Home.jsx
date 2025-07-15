import React, { useState, useEffect } from 'react';
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

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for demo (replace with actual loading logic if needed)
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
        <img src="/favicon.svg" alt="Loading Icon" className="h-16 w-16 mb-6 animate-bounce" />
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500 mb-6"></div>
        <span className="text-white text-xl font-bold">Loading...</span>
      </div>
    );
  }

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
      <div className="w-full h-[40vh] flex items-center justify-center">
        <Swiper spaceBetween={20} slidesPerView={1} loop={true} className="h-full w-screen flex items-center justify-center">
          {/* DeepaleCarShowcaseSlide as the only slide */}
          <SwiperSlide>
            <div className="h-[40vh] w-full flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-xl shadow-lg">
              <DeepaleCarShowcaseSlide />
            </div>
          </SwiperSlide>
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

// Custom DeepaleCarShowcaseSlide component
function DeepaleCarShowcaseSlide() {
  const [activeTab, setActiveTab] = useState('s07');
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const CarIcon = ({ color = "#4a90e2", model = "s07" }) => (
    <svg className="w-full max-w-2xl h-auto transform scale-110 transition-all duration-500 hover:scale-125 filter drop-shadow-2xl" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 250 L150 180 L250 160 L550 160 L650 180 L700 250 L680 280 L120 280 Z" fill={color} stroke={getStrokeColor(color)} strokeWidth="2"/>
      <path d="M180 180 L240 170 L520 170 L580 180 L560 220 L200 220 Z" fill="#87ceeb" opacity="0.8"/>
      <circle cx="220" cy="280" r="40" fill="#333" stroke="#666" strokeWidth="3"/>
      <circle cx="220" cy="280" r="25" fill="#666"/>
      <circle cx="580" cy="280" r="40" fill="#333" stroke="#666" strokeWidth="3"/>
      <circle cx="580" cy="280" r="25" fill="#666"/>
      <ellipse cx="150" cy="200" rx="15" ry="10" fill="#fff" opacity="0.9"/>
      <ellipse cx="650" cy="200" rx="15" ry="10" fill="#fff" opacity="0.9"/>
      <rect x="140" y="210" width="30" height="15" fill="#333" opacity="0.7"/>
      <rect x="320" y="220" width="8" height="3" fill="#333"/>
      <rect x="480" y="220" width="8" height="3" fill="#333"/>
      <ellipse cx="180" cy="190" rx="8" ry="5" fill="#333"/>
      <ellipse cx="620" cy="190" rx="8" ry="5" fill="#333"/>
      {model === 'e07' && (
        <path d="M350 180 L360 160 L370 180 L380 160 L390 180" stroke="#fff" strokeWidth="2" fill="none"/>
      )}
      {model === 'lumin' && (
        <>
          <circle cx="380" cy="200" r="8" fill="#fff" opacity="0.7"/>
          <circle cx="400" cy="190" r="6" fill="#fff" opacity="0.5"/>
          <circle cx="420" cy="200" r="8" fill="#fff" opacity="0.7"/>
        </>
      )}
    </svg>
  );

  const getStrokeColor = (color) => {
    const colorMap = {
      '#4a90e2': '#2c5aa0',
      '#2c3e50': '#1a252f',
      '#27ae60': '#1e8449',
      '#f39c12': '#d68910'
    };
    return colorMap[color] || '#333';
  };

  const carModels = {
    s07: {
      title: 'S07',
      description: 'Discover the Deepal S07 in Sri Lanka: Stunning design, luxurious comfort, and advanced EV technology. A new driving sensation.',
      color: '#4a90e2',
      bgGradient: 'from-blue-100 via-blue-200 to-blue-300'
    },
    l07: {
      title: 'L07',
      description: 'Experience the Deepal L07: Premium luxury meets cutting-edge electric performance. Engineered for the discerning driver who demands excellence.',
      color: '#2c3e50',
      bgGradient: 'from-blue-100 via-blue-200 to-blue-300'
    },
    e07: {
      title: 'E07',
      description: 'The Deepal E07 represents the future of electric mobility. Innovative design, smart connectivity, and sustainable performance in perfect harmony.',
      color: '#27ae60',
      bgGradient: 'from-blue-100 via-blue-200 to-blue-300'
    },
    lumin: {
      title: 'Lumin',
      description: 'Illuminate your journey with the Deepal Lumin. Compact elegance meets urban efficiency in this perfectly crafted electric companion.',
      color: '#f39c12',
      bgGradient: 'from-blue-100 via-blue-200 to-blue-300'
    }
  };

  const currentModel = carModels[activeTab];

  return (
    <div className={`min-h-[36vh] bg-gradient-to-br ${currentModel.bgGradient} overflow-hidden transition-all duration-700 p-4 rounded-xl`}>
      <div className="max-w-3xl mx-auto px-2 py-4 relative">
        {/* Tab Navigation */}
        <div className="flex gap-8 mb-6 justify-center">
          {Object.keys(carModels).map(modelKey => (
            <button
              key={modelKey}
              onClick={() => setActiveTab(modelKey)}
              className={`text-base font-medium py-2 px-1 relative transition-all duration-300 hover:text-gray-800 transform hover:-translate-y-1 ${
                activeTab === modelKey ? 'text-gray-800 font-bold' : 'text-gray-500'
              }`}
            >
              {carModels[modelKey].title}
              <div className={`absolute bottom-0 left-0 h-1 bg-gray-800 transition-all duration-300 ${
                activeTab === modelKey ? 'w-full' : 'w-0'
              }`}></div>
            </button>
          ))}
        </div>
        {/* Merged Main Content */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-[200px]">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-4 tracking-tight">
              {currentModel.title}
            </h1>
            <p className="text-base text-gray-600 mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
              {currentModel.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mt-6">
              <button className="px-8 py-4 bg-white bg-opacity-80 text-gray-800 border-2 border-gray-200 rounded-lg font-medium hover:bg-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Learn More
              </button>
              <button className="px-8 py-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Book a Test Drive
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center relative z-10 mt-8 md:mt-0">
            <div className="animate-pulse">
              <CarIcon color={currentModel.color} model={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
