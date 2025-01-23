import React from'react';
import'aos/dist/aos.css';
import'../styles.css';
import lambchops from '../assets/lambchops.png';
import steak from '../assets/steak.png';
import roomcash from '../assets/roomcash.png';
import roomsmoke from '../assets/roomsmoke.png';

const Slider = () => {
  return (
    <div
     
      className="flex flex-col lg:flex-row gap-8 items-center justify-between"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-2 mb-auto">
        <h1 className="text-gray-900 text-center dark:text-dark-text text-black font-bodoni text-2xl md:text-3xl lg:text-4xl whitespace-pre-wrap">
          Cache42
        </h1>
        <strong className="text-gray-900 dark:text-dark-text text-black mb-4 font-bodoni text-base md:text-lg lg:text-xl whitespace-pre-wrap">
          Cache42, A Southern American Restaurant Located in Memphis Tennessee.
        </strong>
        <pre className="text-gray-900 dark:text-dark-text text-black mb-14 text-base md:text-lg lg:text-xl max-w-4xl mx-auto whitespace-pre-wrap">
          Cache42, where exceptional cuisine meets expertly crafted cocktails in
          an upscale urban setting. Our talented chefs create innovative dishes
          using the freshest local ingredients, perfectly paired with our curated
          cocktail menu. Whether you’re celebrating a special occasion, enjoying
          a night out, or sharing a romantic dinner, our stylish atmosphere and
          attentive service promise an unforgettable dining experience. Book your
          table today and embark on a culinary journey like no other!
        </pre>
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
