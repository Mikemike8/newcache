import React from'react';
import'aos/dist/aos.css';
import'../styles.css';

const Slider = () => {
  return (
    <div className="dark:bg-black-900 p-4 overflow-hidden ">
      <h1 className="text-gray-900 dark:text-dark-text text-black flex justify-center font-bodoni text-center text-2xl md:text-3xl lg:text-4xl whitespace-pre-wrap">
        Cache42
      </h1>
      <strong className="text-gray-900 flex justify-center dark:text-dark-text text-black mb-4 font-bodoni text-base md:text-lg lg:text-xl text-center whitespace-pre-wrap">
        Cache42, A Southern American Restaurant Located in Memphis Tennessee.
      </strong>
      <pre className="text-gray-900 flex justify-center dark:text-dark-text text-black mb-14 text-base md:text-lg lg:text-xl max-w-4xl mx-auto whitespace-pre-wrap">
        Cache42, where exceptional cuisine meets expertly crafted cocktails in
        an upscale urban setting. Our talented chefs create innovative dishes
        using the freshest local ingredients, perfectly paired with our curated
        cocktail menu. Whether you’re celebrating a special occasion, enjoying
        a night out, or sharing a romantic dinner, our stylish atmosphere and
        attentive service promise an unforgettable dining experience. Book your
        table today and embark on a culinary journey like no other!
      </pre>

      <div
        data-aos="fade-up" 
        className="flex flex-wrap   justify-center gap-4"
      >
        <div  className="w-full duration-300 sm:w-[400px] sm:h-[428px]">
          <img
            src="https://static.wixstatic.com/media/de49ba_98670a0955a24c2784af0ee457193eac~mv2.jpg/v1/fill/w_1202,h_368,usm_1.20_1.00_0.01/file.webp"
            alt="Description 1"
            className="w-full  h-full object-cover shadow  shadow-md"
          />
        </div>
        <div className="w-full sm:w-[400px] sm:h-[428px]">
          <img
            src="https://static.wixstatic.com/media/37127851f7a04ce39f2732b477f7a929.jpg/v1/fill/w_1202,h_368,usm_1.20_1.00_0.01/file.webp"
            alt="Description 2"
            className="w-full h-full object-cover shadow  shadow-md"
          />
        </div>
        <div  className="w-full  sm:w-[400px] sm:h-[428px]">
          <img
            src="https://static.wixstatic.com/media/de49ba_f856220e1a7c429c8fbeb4555da04cac~mv2.jpg/v1/fill/w_1202,h_368,usm_1.20_1.00_0.01/file.webp"
            alt="Description 3"
            className="w-full h-full object-cover shadow  shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
