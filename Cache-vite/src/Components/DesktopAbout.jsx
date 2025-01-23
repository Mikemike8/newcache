import { useEffect } from "react";
import money from "../assets/himoney.jpg";

function DeskAbout() {
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
    <div className="flex flex-col lg:flex-row lg:justify-between lg:max-w-screen-xl mx-auto px-4 lg:px-0 pb-16 lg:pb-28 pt-20 lg:pt-32">
      <div className="lg:w-2/5 lg:order-2 relative">
        <img
          src={money}
          className="object-cover object-top w-full h-full rounded-lg shadow-xl transform hover:scale-105 transition duration-700 ease-in-out"
          alt="Upscale dining experience"
        />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg"></div>
      </div>
      <div className="pt-6 lg:pt-0 lg:pr-10 lg:w-3/5 fade-in lg:order-1">
        <div className="max-w-xl mx-auto lg:mx-0 mb-10">
          <h2 className="text-4xl font-bold text-black leading-tight mb-6 text-center lg:text-left fadeInVisible">
            About Us
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-center lg:text-left">
          Welcome to Cache42, an urban upscale restaurant that offers a unique dining experience that combines exceptional cuisine and expertly crafted cocktails. Our talented culinary team creates innovative dishes using only the freshest and finest ingredients, sourced from local farms and purveyors whenever possible.




            <br />
            <br />
            At Cache42, we believe that great food should be accompanied by great drinks, which is why our mixologists have curated a cocktail menu that is sure to impress. From classic favorites to creative concoctions, our cocktails are expertly crafted to complement the flavors of our dishes and enhance your dining experience.




            <br />
            <br />
            We invite you to come and indulge in our stylish and comfortable atmosphere, where our attentive staff will ensure that your every need is met. Whether you're celebrating a special occasion, enjoying a night out with friends, or looking for a romantic dinner for two, Cache42 is the perfect destination.




            <br />
            <br />
            Join us for an unforgettable culinary journey and experience the best of what the urban upscale dining scene has to offer. Book your table today and let us take you on a gastronomic adventure you won't soon forget!



          </p>
        </div>

        <div className="flex items-center justify-center lg:justify-start space-x-6">
          <a
            href="https://www.opentable.com/restref/client/?rid=1279489&restref=1279489&partysize=2&datetime=2024-09-05T19%3A00&lang=en-US&r3uid=Md80nnnPF&ot_source=Restaurant%20website&color=1&corrid=ef28e07b-8f0c-47f3-a126-d91d3c7a78dc"
            className="bg-red-700 text-white py-3 px-8 rounded-full font-semibold hover:bg-black transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Book A Table
          </a>
          <a
            href="/menu"
            className="text-black font-bold border-b-2 border-black hover:border-red-700 hover:text-red-700 transition-colors duration-300"

          >
            View Menu
          </a>
        </div>
      </div>







    </div>
  );
}

export default DeskAbout;