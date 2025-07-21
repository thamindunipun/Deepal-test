import React, { useState, useEffect } from 'react';

// Slider 1: Video Slider
const videoSlides = [
  '/src/assets/AI.mov',
];

// Slider 2: Image Slider
const imageSlides = [
  '/src/assets/S07.jpg',
  '/src/assets/L07.jpeg',
  '/src/assets/E07.jpeg',
  '/src/assets/Lumin.jpeg'
];

// Slider 3: Text Slider
const textSlides = [
  'Welcome to Deepal Electric Vehicles!',
  'Book a test drive and experience the future.',
  'Contact our agents for exclusive offers.'
];

// Custom Slider Component
const CustomSlider = ({ children, className = "", autoPlay = false, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  useEffect(() => {
    if (autoPlay && totalSlides > 1) {
      const timer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      
      {totalSlides > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
          >
            →
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Specifications Section Component - Updated to Horizontal Layout
const specificationsData = {
  s07: [
    { category: "RANGE", value: "485 km of range (NEDC)", icon: "🔋" },
    { category: "BATTERY CAPACITY", value: "68.8 kWh", icon: "⚡" },
    { category: "POWER AND TORQUE", value: "99 Kw | 320 Nm", icon: "⚙️" },
    { category: "SAFETY", value: "5* NCAP Safety Rating", icon: "🛡️" }
  ],
  l07: [
    { category: "RANGE", value: "530 km of range (NEDC)", icon: "🔋" },
    { category: "BATTERY CAPACITY", value: "70.5 kWh", icon: "⚡" },
    { category: "POWER AND TORQUE", value: "160 Kw | 320 Nm", icon: "⚙️" },
    { category: "SAFETY", value: "5* NCAP Safety Rating", icon: "🛡️" }
  ],
  e07: [
    { category: "RANGE", value: "600 km of range (NEDC)", icon: "🔋" },
    { category: "BATTERY CAPACITY", value: "75 kWh", icon: "⚡" },
    { category: "POWER AND TORQUE", value: "180 Kw | 350 Nm", icon: "⚙️" },
    { category: "SAFETY", value: "5* NCAP Safety Rating", icon: "🛡️" }
  ],
  lumin: [
    { category: "RANGE", value: "300 km of range (NEDC)", icon: "🔋" },
    { category: "BATTERY CAPACITY", value: "40 kWh", icon: "⚡" },
    { category: "POWER AND TORQUE", value: "60 Kw | 150 Nm", icon: "⚙️" },
    { category: "SAFETY", value: "5* NCAP Safety Rating", icon: "🛡️" }
  ]
};

const SpecificationsSection = ({ model = "s07" }) => {
  const specifications = specificationsData[model] || specificationsData["s07"];

  return (
    <div className="w-full bg-gradient-to-b from-slate-700 to-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Specifications</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Specifications Row - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-stretch">
          {specifications.map((spec, index) => (
            <div 
              key={index}
              className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 text-center border border-white/20 hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl min-w-0"
            >
              <div className="text-3xl lg:text-4xl mb-4">{spec.icon}</div>
              <div className="text-xs lg:text-sm font-medium text-blue-300 uppercase tracking-wide mb-3 border-b border-white/20 pb-2">
                {spec.category}
              </div>
              <div className="text-lg lg:text-2xl font-bold text-white leading-tight">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [activeModel, setActiveModel] = useState('s07');

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
        <CustomSlider className="h-full rounded-xl overflow-hidden">
          {videoSlides.map((src, idx) => (
            <video
              key={idx}
              src={src}
              className="w-full h-[60vh] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ))}
        </CustomSlider>
      </div>
      
      {/* Image Slider - Enhanced with better alignment and larger images */}
      <div className="w-full h-[70vh] flex items-center justify-center">
        <CustomSlider className="h-full w-full rounded-xl overflow-hidden">
          <div className="h-[70vh] w-full flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
            <DeepaleCarShowcaseSlide activeModel={activeModel} setActiveModel={setActiveModel} />
          </div>
        </CustomSlider>
      </div>
      
      {/* Specifications Section - Updated to Horizontal Layout */}
      <SpecificationsSection model={activeModel} />
      
      {/* Text Slider */}
      <div className="w-full h-[20vh] flex items-center justify-center">
        <CustomSlider className="h-full w-2/3 rounded-xl overflow-hidden" autoPlay={true} interval={4000}>
          {textSlides.map((text, idx) => (
            <div key={idx} className="flex items-center justify-center h-[20vh] text-2xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600">
              {text}
            </div>
          ))}
        </CustomSlider>
      </div>
    </div>
  );
};

// Enhanced DeepaleCarShowcaseSlide component with better text alignment and larger images
function DeepaleCarShowcaseSlide({ activeModel = 's07', setActiveModel }) {
  const [activeTab, setActiveTab] = useState(activeModel);

  useEffect(() => {
    setActiveTab(activeModel);
  }, [activeModel]);

  useEffect(() => {
    if (setActiveModel) setActiveModel(activeTab);
  }, [activeTab, setActiveModel]);

  const carImages = {
    s07: '/src/assets/S07.jpg',
    l07: '/src/assets/L07.jpeg',
    e07: '/src/assets/E07.jpeg',
    lumin: '/src/assets/Lumin.jpeg'
  };

  const CarIcon = ({ model = "s07" }) => (
    <div className="relative group">
      <img
        src={carImages[model]}
        alt={model}
        className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
        style={{ maxHeight: '400px', minHeight: '300px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

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
    <div className={`h-full w-full bg-gradient-to-br ${currentModel.bgGradient} overflow-hidden transition-all duration-700 p-6`}>
      <div className="max-w-7xl mx-auto px-4 py-6 relative h-full flex flex-col">
        {/* Tab Navigation - Better aligned */}
        <div className="flex gap-8 mb-8 justify-center">
          {Object.keys(carModels).map(modelKey => (
            <button
              key={modelKey}
              onClick={() => setActiveTab(modelKey)}
              className={`text-lg font-medium py-3 px-4 relative transition-all duration-300 hover:text-gray-800 transform hover:-translate-y-1 rounded-lg ${
                activeTab === modelKey ? 'text-gray-800 font-bold bg-white/20 shadow-md' : 'text-gray-600 hover:bg-white/10'
              }`}
            >
              {carModels[modelKey].title}
              <div className={`absolute bottom-0 left-0 h-1 bg-gray-800 transition-all duration-300 rounded-full ${
                activeTab === modelKey ? 'w-full' : 'w-0'
              }`}></div>
            </button>
          ))}
        </div>
        
        {/* Main Content - Enhanced layout and alignment */}
        <div className="flex-1 flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Text Content - Better aligned and spaced */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-light text-gray-800 tracking-tight leading-tight">
                {currentModel.title}
              </h1>
              <div className="w-24 h-1 bg-gray-800 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-700 max-w-lg leading-relaxed font-medium">
              {currentModel.description}
            </p>
          </div>
          
          {/* Image Content - Enhanced size and positioning */}
          <div className="flex-1 flex flex-col items-center justify-center relative max-w-2xl">
            <div className="relative w-full mb-6">
              <CarIcon model={activeTab} />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
            </div>
            {/* Action buttons below image */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto justify-center">
              <button className="px-10 py-4 bg-white bg-opacity-90 text-gray-800 border-2 border-gray-300 rounded-lg font-semibold hover:bg-white hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
              <button className="px-10 py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                Book a Test Drive
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative line */}
        <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div>
    </div>
  );
}

export default Home;