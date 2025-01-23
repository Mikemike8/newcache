import React from"react";
import LOGOS3M from"../Logos/3m.svg";
import BARSTOOL from"../Logos/barstool-store.svg";
import BUDWEISER from"../Logos/budweiser.svg";
import FORBES from"../Logos/forbes.svg";
import MACY from"../Logos/macys.svg";
import MENSHEALTH from"../Logos/menshealth.svg";

const Carousel = () => {
  return (
    <div className="overflow-hidden relative w-full bg-white shadow-md">
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .carousel-slide {
            display: flex;
            white-space: nowrap;
            width: auto;
            animation: 60s slide infinite linear;
          }
        `}
      </style>
      <div className="carousel-slide flex items-center space-x-4 p-4">
        <img className="h-12 mx-2" src={LOGOS3M} alt="logo" />
        <img className="h-12 mx-2" src={BARSTOOL} alt="logo" />
        <img className="h-12 mx-2" src={BUDWEISER} alt="logo" />
        <img className="h-12 mx-2" src={MACY} alt="logo" />
        <img className="h-12 mx-2" src={FORBES} alt="logo" />
        <img className="h-12 mx-2" src={MENSHEALTH} alt="logo" />
        {/* Duplicate slides for seamless animation */}
        <img className="h-12 mx-2" src={LOGOS3M} alt="logo" />
        <img className="h-12 mx-2" src={BARSTOOL} alt="logo" />
        <img className="h-12 mx-2" src={BUDWEISER} alt="logo" />
        <img className="h-12 mx-2" src={MACY} alt="logo" />
        <img className="h-12 mx-2" src={FORBES} alt="logo" />
        <img className="h-12 mx-2" src={MENSHEALTH} alt="logo" />
      </div>
    </div>
  );
};

export default Carousel;