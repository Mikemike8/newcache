import React,{useEffect}from"react";
import"aos/dist/aos.css";
import AOS from"aos";
import Carousel from"../Components/Carousel";
import Slider from"../Components/Slider";
import Hero from"../Components/Hero";
import Footer from"../Components/Footer";

export default function Home() {
  useEffect(()=>{AOS.init({duration:1000,once: true});},[]);
  return (
    <>
      <Hero />
      <Slider />
      <Footer />
      <Carousel />
    </>
  );
}
