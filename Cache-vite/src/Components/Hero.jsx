import React, { useState, useEffect } from "react";
import AOS from "aos";
import cacheLogo from "../assets/cache42logo.webp";
import "aos/dist/aos.css";
import "../styles.css";

// Import all image sizes
const images = {
  xs: "../assets/hero-xs.webp",
  xs2x: "../assets/hero-xs@2x.webp",
  sm: "../assets/hero-sm.webp",
  sm2x: "../assets/hero-sm@2x.webp",
  md: "../assets/hero-md.webp",
  md2x: "../assets/hero-md@2x.webp",
  lg: "../assets/hero-lg.webp",
  lg2x: "../assets/hero-lg@2x.webp",
  xl: "../assets/hero-xl.webp",
  xl2x: "../assets/hero-xl@2x.webp",
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentBreakpoint, setCurrentBreakpoint] = useState("xl");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setCurrentBreakpoint("xs");
      else if (width < 768) setCurrentBreakpoint("sm");
      else if (width < 1024) setCurrentBreakpoint("md");
      else if (width < 1280) setCurrentBreakpoint("lg");
      else setCurrentBreakpoint("xl");
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
    <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Preload critical images */}
      <link
        rel="preload"
        href={images.xs}
        as="image"
        media="(max-width: 639px)"
      />
      <link
        rel="preload"
        href={images.sm}
        as="image"
        media="(min-width: 640px) and (max-width: 767px)"
      />
      <link
        rel="preload"
        href={images.md}
        as="image"
        media="(min-width: 768px) and (max-width: 1023px)"
      />
      <link
        rel="preload"
        href={images.lg}
        as="image"
        media="(min-width: 1024px) and (max-width: 1279px)"
      />
      <link
        rel="preload"
        href={images.xl}
        as="image"
        media="(min-width: 1280px)"
      />

      {/* Responsive Background Image */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full">
          <source
            media="(min-width: 1280px)"
            srcSet={`${images.xl} 1x, ${images.xl2x} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1024px)"
            srcSet={`${images.lg} 1x, ${images.lg2x} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${images.md} 1x, ${images.md2x} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 640px)"
            srcSet={`${images.sm} 1x, ${images.sm2x} 2x`}
            type="image/webp"
          />
          <img
            src={images.xs}
            srcSet={`${images.xs2x} 2x`}
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

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