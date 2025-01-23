import { useEffect } from "react";
import money from "../assets/himoney.jpg";

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
        src={money}
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
        href="https://www.opentable.com/restref/client/?rid=1279489&restref=1279489&partysize=2&datetime=2024-09-05T19%3A00&lang=en-US&r3uid=Md80nnnPF&ot_source=Restaurant%20website&color=1&corrid=ef28e07b-8f0c-47f3-a126-d91d3c7a78dc"
        className="inline-flex bg-red-700 items-center justify-center h-12 px-6 font-medium tracking-wide hover:bg-black text-white transition duration-200 rounded-full shadow-lg transform hover:scale-105"
      >
        Book A Table
      </a>
      <a
        href="/menu"
        className="inline-flex text-black font-bold hover:text-red-700 border-b-2 border-black hover:border-red-700 transition-colors duration-200"
      >
        View Menu
      </a>
    </div>
  </div>
);
}

export default MobiAbout;