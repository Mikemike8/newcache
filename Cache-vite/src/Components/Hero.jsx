import React from "react";
import lambchops from "/src/assets/lambchops.png";
import steak from "/src/assets/steak.png";
import roomsmoke from "/src/assets/roomsmoke.png";
import roomcash from "/src/assets/roomcash.png";
import heroImage from "/src/assets/cache.webp"; // Ensure this exists in the assets folder

const Hero = () => {
  return (
    <div className="bg-wheat min-h-screen overflow-x-hidden"> {/* Added overflow-x-hidden here */}
      {/* Navigation Bar */}
      <nav className="font-inconsolata font-semibold w-full h-[80px] relative flex justify-center p-0 m-0">
        <ul className="flex flex-wrap bg-[#7B1F1F] w-full h-[80px] justify-end items-center list-none gap-4 px-4">
          <a href="/" className="absolute left-4">
            <img
              className="h-[50px] w-[50px] sm:h-[65px] sm:w-[65px]"
              src="https://static.wixstatic.com/media/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png/v1/fill/w_210,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png"
              alt="Logo"
            />
          </a>
          <a href="/home" className=" hover:text-gray-400 text-white text-sm sm:text-lg">HOME</a>
          <a href="/about" className=" hover:text-gray-400 text-white text-sm sm:text-lg">ABOUT</a>
          <a href="/menu" className=" hover:text-gray-400 text-white text-sm sm:text-lg">MENU</a>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg z-10"></div>
        <img
          src={heroImage}
          alt="Cache42 Hero"
          className="rounded-lg  w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col sm:flex-row gap-4 sm:gap-5 z-20">
          <a href="https://www.opentable.com/r/cache-42-downtown-express-memphis">
            <button className="w-full sm:w-auto font-inconsolata font-semibold bg-[#7B1F1F] text-white px-6 py-2 rounded-lg border-2 border-red-500 shadow-md transition relative overflow-hidden before:absolute before:inset-0 before:bg-red-500/20 before:opacity-0 hover:before:opacity-100 hover:shadow-[0_0_20px_#ff0000] hover:border-[#ff0000] duration-300">
              BOOK TABLE
            </button>
          </a>
          <a href="https://order.spoton.com/svy-cache-42-downtown-21327/memphis-tn/6716cc9b8a1487d11dc6f2b2/dinein?tableId=">
            <button className="w-full sm:w-auto font-inconsolata font-semibold bg-[#7B1F1F] text-white px-6 py-2 rounded-lg border-2 border-red-500 shadow-md transition relative overflow-hidden before:absolute before:inset-0 before:bg-red-500/20 before:opacity-0 hover:before:opacity-100 hover:shadow-[0_0_20px_#ff0000] hover:border-[#ff0000] duration-300">
              ORDER NOW  
            </button>
          </a>
        </div>
      </section>

      {/* Content Section */}
      <div className="flex flex-wrap justify-between gap-4 px-4 pt-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 pr-4">
          <h1 className="text-gray-800 dark:text-dark-text font-bodoni text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight">
            Cache42
          </h1>
          <div className="w-24 h-1 bg-[#D37B14] my-2"></div>
          <h2 className="text-lg sm:text-xl text-gray-700">
            A Southern American Restaurant<br />
            <span className="text-gray-500 text-base sm:text-lg">Located in Memphis, Tennessee</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify my-4">
            Cache42, where exceptional cuisine meets expertly crafted cocktails in an
            upscale urban setting. Our talented chefs create innovative dishes using
            the freshest local ingredients, perfectly paired with our curated cocktail menu.
          </p>
          <p className="text-gray-700 text-base leading-relaxed text-justify my-4">
            Whether you're celebrating a special occasion, enjoying a night out, or
            sharing a romantic dinner, our stylish atmosphere and attentive service
            promise an unforgettable dining experience.
          </p>
          <p className="italic font-medium text-gray-700 text-base">
            Book your table today and embark on a culinary journey like no other!
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full md:w-5/12">
          {[lambchops, steak, roomsmoke, roomcash].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Dish ${index + 1}`}
                className="w-full h-auto object-cover transform transition hover:scale-105 hover:shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
