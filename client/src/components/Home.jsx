import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoHomepage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const models = [
    {
      name: 'E 07',
      brand: 'DEEPAL',
      color: 'text-gray-600'
    },
    {
      name: 'S 07',
      brand: 'DEEPAL', 
      color: 'text-blue-600'
    },
    {
      name: 'L 07',
      brand: 'DEEPAL',
      color: 'text-blue-600'
    },
    {
      name: 'Lumin',
      brand: 'CHANGAN',
      color: 'text-green-600'
    }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-screen video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
        >
          {/* AI Neural Network Animation Videos */}
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          {/* Fallback: AI-themed gradient */}
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-700 to-cyan-600"></div>
        </video>
        
        {/* Dark overlay with AI-themed gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/20 to-purple-900/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-16">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Electric Vehicles
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience intelligent transportation with neural network technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Models
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        <button
          onClick={togglePlay}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button
          onClick={toggleMute}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default VideoHomepage;