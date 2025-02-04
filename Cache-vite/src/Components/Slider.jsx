import React from'react';
import'aos/dist/aos.css';
import'../styles.css';
import lambchops from '../assets/lambchops.png';
import steak from '../assets/steak.png';
import roomcash from '../assets/roomcash.png';
import roomsmoke from '../assets/roomsmoke.png';

const Slider = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-between px-4 sm:px-8 md:px-12">
    {/* Text Section */}
    <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
      <div className="mb-8">
        <h1 className="text-gray-800 dark:text-dark-text font-bodoni text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
          Cache42
        </h1>
        <div className="w-24 h-1 bg-amber-600 mx-auto lg:mx-0 mb-6"></div>
        
        <h2 className="text-gray-600 dark:text-gray-300 font-semibold text-xl md:text-2xl lg:text-3xl mb-6 leading-tight">
          A Southern American Restaurant<br/>
          <span className="text-gray-500 text-lg">Located in Memphis, Tennessee</span>
        </h2>
      </div>

      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed text-justify">
          Cache42, where exceptional cuisine meets expertly crafted cocktails in an 
          upscale urban setting. Our talented chefs create innovative dishes using 
          the freshest local ingredients, perfectly paired with our curated cocktail menu.
        </p>
        
        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed text-justify">
          Whether you're celebrating a special occasion, enjoying a night out, or 
          sharing a romantic dinner, our stylish atmosphere and attentive service 
          promise an unforgettable dining experience.
        </p>

        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed font-medium italic mt-6">
          Book your table today and embark on a culinary journey like no other!
        </p>
      </div>
    </div>

      {/* Images Section */}
      <div  data-aos="fade-left"  className="mt-4 w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Image 1 */}
        <div className="w-full h-[auto] overflow-hidden">
          <img
            src={lambchops}
            alt="Lambchops"
            className="w-full h-[100%] object-cover shadow-md rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full h-[auto] overflow-hidden">
          <img
            src={steak}
            alt="Steak"
            className="w-full h-[100%] object-cover shadow-md rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Image 3 */}
        <div className="w-full h-[auto] overflow-hidden">
          <img
            src={roomcash}
            alt="Room Cash"
            className="w-full h-[100%] object-cover shadow-md rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Image 4 */}
        <div className="w-full h-[auto] overflow-hidden">
          <img
            src={roomsmoke}
            alt="Room Smoke"
            className="w-full h-[100%] object-cover shadow-md rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;