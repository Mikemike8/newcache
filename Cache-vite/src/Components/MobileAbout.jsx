import { useEffect } from "react";
import kill from "../assets/roomcash.png";

function MobiAbout() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInVisible');
        }
      });
    });

    fadeInSections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (    
  <div className="flex flex-col justify-center max-w-screen-xl mx-auto px-4 pb-16 pt-28 lg:pt-32 lg:px-0">
    <div className="relative w-full mb-10 lg:hidden fade-in">
      <img
        src={kill}
        className="object-cover object-center w-full h-64 rounded-lg shadow-xl"
        alt="Upscale dining experience"
      />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg"></div>
    </div>
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-black leading-tight mb-6 fadeInVisible">
        About Us
      </h2>
      <p className="text-base text-gray-800 leading-relaxed sm:text-lg">
        Welcome to Cache42, an urban upscale restaurant offering a unique
        dining experience that combines exceptional cuisine and expertly
        crafted cocktails. Our talented culinary team creates innovative
        dishes using the freshest ingredients sourced from local farms whenever possible.
        <br />
        <br />
        At Cache42, we believe great food should be paired with great drinks.
        Our mixologists have curated a cocktail menu designed to complement
        the flavors of our dishes, enhancing your overall dining experience.
        <br />
        <br />
        Indulge in our stylish and comfortable atmosphere, perfect for any
        occasion. Whether you're celebrating with friends or enjoying a romantic evening,
        Cache42 is the ideal destination.
      </p>
    </div>
    <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center">
      <a
        href="https://www.opentable.com/r/cache-42-downtown-express-memphis"
        className="inline-flex bg-red-700 items-center justify-center h-12 px-6 font-medium tracking-wide hover:bg-black text-white transition duration-200 rounded-full shadow-lg transform hover:scale-105"
      >
        Book A Table
      </a>
      <a
        href="https://order.spoton.com/svy-cache-42-downtown-21327/memphis-tn/6716cc9b8a1487d11dc6f2b2/dinein?tableId="
        className="inline-flex text-black font-bold hover:text-red-700 border-b-2 border-black hover:border-red-700 transition-colors duration-200"
      >
        Order Now
      </a>
    </div>
  </div>
);
}

export default MobiAbout;