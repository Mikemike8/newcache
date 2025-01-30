import React, { useState, useEffect } from "react";
import AOS from "aos";
import desktopCache from "../assets/cache.webp";
import mobileCache from "../assets/mobileCacheWeb.webp";
import cacheLogo from "../assets/cache42logo.webp";
import "aos/dist/aos.css";
import "../styles.css";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(desktopCache);

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(window.innerWidth < 768 ? mobileCache : desktopCache);
    };
    handleResize();
    window.addEventListener("resize", debounce(handleResize, 100));
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => setScrollY(window.scrollY), 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1650 });
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen w-full flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <link rel="preload" href={backgroundImage} as="image" />
      
      {/* Navigation Section */}
      <div className="absolute inset-0 flex flex-col items-center p-4 z-10">
        <section
          data-aos="fade"
          data-aos-delay="100"
          className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between px-4 py-2"
        >
          <div
            className="flex items-center transition-transform duration-300"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <a href="/">
              <img
                src={cacheLogo}
                className="cursor-pointer w-16 h-14 md:w-20 md:h-16 object-contain"
                alt="Cache 42 Logo"
                loading="eager"
              />
            </a>
          </div>
          
          <nav className="font-inconsolata font-semibold mt-4 sm:mt-0">
            <ul className="flex flex-wrap gap-4 sm:gap-8 justify-center text-sm md:text-base lg:text-lg">
              {['Home', 'About', 'Menu'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-red-600 text-gray-300 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-6 w-full max-w-2xl flex flex-col sm:flex-row justify-center gap-4 px-4 z-10">
        <a
          href="https://order.spoton.com/svy-cache-42-downtown-21327/memphis-tn/6716cc9b8a1487d11dc6f2b2/dinein?tableId="
          className="w-full sm:w-auto text-center"
        >
          <button className="w-full bg-red-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
            ORDER NOW
          </button>
        </a>
        <a
          href="https://www.opentable.com/r/cache-42-downtown-express-memphis"
          className="w-full sm:w-auto text-center"
        >
          <button className="w-full bg-red-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
            BOOK A TABLE
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;