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
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden mb-12">
      {/* Carousel Container */}
      <div className="flex transition-transform duration-500 ease-in-out rounded-2xl shadow-xl"
           style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {carouselItems.map((item, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0 relative group"
            style={{ 
              height: '70vh',
              minWidth: '100%'
            }}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="absolute top-0 left-0 w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105 rounded-2xl"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
            />
            
            {/* Integrated Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeSlide 
                      ? 'bg-amber-500 scale-125' 
                      : 'bg-white/70 hover:bg-white/90'
                  }`}
                  aria-label={`Navigate to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
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
    </div>
  );
};

export default Carousel;