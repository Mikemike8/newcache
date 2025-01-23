import React from "react";
import "aos/dist/aos.css";
import Carousel from "./Components/Carousel";
import Slider from "./Components/Slider";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function Home(){
    return (
        <>
        <Hero />
          <Slider />
          <Footer />
          <Carousel />
          </>
)
}