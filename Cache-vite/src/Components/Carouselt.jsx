import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import lambchops from '../assets/lambchops.png';
import steak from '../assets/steak.png';
import roomsmoke from '../assets/roomsmoke.png';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const carouselItems = [
    { image: lambchops, alt: 'Lamb chops dish' },
    { image: steak, alt: 'Steak special' },
    { image: roomsmoke, alt: 'Restaurant ambiance' },
  ];

  const goToNext = () => {
    setActiveSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setActiveSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden mb-12 rounded-2xl shadow-xl">
      {/* Carousel Container */}
      <div className="flex transition-transform duration-500 ease-in-out" 
           style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {carouselItems.map((item, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0 relative group"
            style={{ paddingTop: '50%' }} // 2:1 aspect ratio
          >
            <img
              src={item.image}
              alt={item.alt}
              className="absolute top-0 left-0 w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              style={{ 
                backgroundColor: '#f3f4f6',
                maxHeight: '70vh',
                objectPosition: 'center 30%' // Adjust focus area
              }}
            />
            {/* Image overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Improved Visibility */}
      <button
        onClick={goToPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors backdrop-blur-sm"
      >
        <FiChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors backdrop-blur-sm"
      >
        <FiChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Enhanced Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center ${
              index === activeSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            } transition-all duration-300`}
          >
            {index === activeSlide && (
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;