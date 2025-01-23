import React,{useState,useEffect}from"react";import AOS from"aos";import desktopCache from"../assets/cache.webp";import mobileCache from"../assets/mobileCacheWeb.webp";import cacheLogo from"../assets/cache42logo.webp";import"aos/dist/aos.css";import"../styles.css";
const debounce=(t,o)=>{let u;return(...e)=>{clearTimeout(u);u=setTimeout(()=>t.apply(this,e),o)}};
const Hero = () => {
  const [t, e] = useState(0);
  const [s, a] = useState(desktopCache);
  useEffect(()=>{const e=()=>{if(window.innerWidth<768){a(mobileCache)}else{a(desktopCache)}};e();window.addEventListener("resize",e);return()=>{window.removeEventListener("resize",e)}},[]);
  useEffect(()=>{const o=debounce(()=>e(window.t),10);window.addEventListener("scroll",o);return()=>{window.removeEventListener("scroll",o)}},[]);
  useEffect(() => {
    AOS.init({ duration: 1650 });
  }, []);
  return (
    <>
      <link rel="preload" href={s} as="image" />
      <div
        className="relative bg-cover bg-center min-h-screen h-screen w-full flex flex-col justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${s})`,
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 flex flex-col items-center p-4">
          <section
            data-aos="fade"
            data-aos-delay="100"
            className="w-full flex flex-col sm:flex-row items-center justify-between px-4 py-2"
          >
            <div
              className="flex items-center transform transition-transform duration-300"
              style={{
                transform: `translateY(${t * 0.3}px)`,
              }}
            >
              <a href="/">
                <img
                  src={cacheLogo}
                  className="cursor-pointer w-16 h-14 md:w-20 md:h-16 object-cover"
                  alt="Logo"
                  width="80"
                  height="60"
                  loading="lazy"
                />
              </a>
            </div>
            <nav className="font-inconsolata font-semibold sm:flex-row text-base sm:text-sm md:text-md lg:text-lg xl:text-xl mt-4 sm:mt-0">
  <ul className="flex sm:flex-row items-center space-x-4 sm:space-x-12">
    <li>
      <a
        href="/home"
        data-aos-delay="100"
        className="hover:text-red-600 text-gray-300"
      >
        Home
      </a>
    </li>
    <li>
      <a href="/about" className="hover:text-red-600 text-gray-300">
        About
      </a>
    </li>
    <li>
      <a href="/menu" className="hover:text-red-600 text-gray-300">
        Menu
      </a>
    </li>
  </ul>
</nav>

          </section>
        </div>
        <div className="absolute bottom-6 w-full flex flex-row justify-center space-x-4 px-4">

  <a href="/menu">
    <button className="bg-red-600 text-white font-medium py-2 px-6 rounded shadow-md border-2 border-transparent hover:bg-red-700 hover:shadow-red-600 hover:border-red-600 transition duration-300">
      View Menu
    </button>
  </a>

  
  <a href="https://www.opentable.com/restref/client/?rid=1279489&restref=1279489&partysize=2&datetime=2024-09-05T19%3A00&lang=en-US&r3uid=Md80nnnPF&ot_source=Restaurant%20website&color=1&corrid=ef28e07b-8f0c-47f3-a126-d91d3c7a78dc">
    <button className="bg-red-600 text-white font-medium py-2 px-6 rounded shadow-md border-2 border-transparent hover:bg-red-700 hover:shadow-red-600 hover:border-red-600 transition duration-300">
      Book A Table
    </button>
  </a>
</div>


      </div>
    </>
  );
};
export default Hero;