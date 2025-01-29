import Carousel from "../Components/Carousel";
import Footer from"../Components/Footer";
export default function Menu() {
  return (
    <>
      <header className="bg-red-900 w-full fixed h-20 text-white shadow-lg top-0 left-0 z-50">
        <div className="mx-auto flex items-center justify-between h-full px-4">
          <a href="#" className="flex items-center">
            <img
              className="h-16"
              src="https://static.wixstatic.com/media/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png/v1/fill/w_210,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png"
              alt="Logo"
            />
          </a>
          <nav className="font-inconsolata font-semibold text-base">
            <ul className="flex items-center space-x-2">
              <li className="p-2">
                <a href="/home" className="hover:text-gray-400 text-white font-inconsolata">
                  Home
                </a>
              </li>
              <li className="p-2">
                <a href="/about" className="hover:text-gray-400 text-white font-inconsolata">
                  About
                </a>
              </li>
              <li className="p-2">
                <a href="/menu" className="hover:text-gray-400 text-white font-inconsolata">
                  Menu
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-white font- text-gray-800 pt-24">
        <div className="text-center">
          <h3 className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            MENU
          </h3>
          <h3 className="font-light text-md">
            <a
              href="https://drive.google.com/file/d/1CLu090kZWg2K-cppivYBKbVhvxG9Q0QT/view?usp=sharing"
              className="text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD MENU
            </a>
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center py-10">
          {/* Small Plates */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              BRUNCH
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                CHICKEN & WAFFLES - $18
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                SHRIMP & GRITS - $22
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                CATFISH & GRITS - $25
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                CACHE CAJUN PASTA - $22
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                ADD Chicken, Shrimp, Steak, Lamb, Lobster, Oxtail
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                TURKEY RIBS - $32
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                STEAK & EGGS - $35
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                LAMB & EGGS - $35
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                2 EGGS 4 | TOAST 3 | GRITS 6 | BREAKFAST POTATOES 6
              </p>
            </div>
          </div>

          {/* Lunch */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8 mt-8 lg:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              LUNCH
            </h2>
            <p className="text-sm text-gray-600 font-inconsolata">
              Served with fries
            </p>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                LOBSTER GRILLED CHEESE - $15
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                OXTAIL GRILLED CHEESE - $17
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                DELUXE CHICKEN SANDWICH - $18
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                SINGLE SMASH BURGER - $11
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                DOUBLE SMASH BURGER - $14
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                TRIPLE SMASH BURGER - $17
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                CATFISH PLATTER - $17
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                CACHE CAJUN PASTA - $22
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center py-10">
          {/* SMALL PLATES */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              SMALL PLATES
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                LOBSTER QUESO - $20
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Rich queso with succulent, tender lobster & warm crispy chips. Just queso & chips - $13
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                LOBSTER QUESO FRIES - $21
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                House-made fries with jalapeno queso & warm butter-poached lobster. Regular queso fries - $14
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                LAMB LOLLIPOPS - $45
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Tender bourbon-glazed lamb grilled to perfection - sweet & savory.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                CACHE 42 WINGS - $20
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Bourbon Glazed, Seasoned, or Buffalo.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                SPINACH DIP - $16
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Creamy, cheesy, fresh spinach dip with crispy tortilla chips.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                GRILLED SHRIMP - $22
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Perfectly seasoned, expertly grilled, & full of flavor.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                FRIED SHRIMP - $18
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Crispy, golden, & full of flavor. Lightly seasoned and fried to perfection.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                BUFFALO EGGROLLS - $22
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Crispy egg rolls stuffed with tender chicken, creamy cheese, & zesty buffalo sauce.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                HONEY GLAZED CROISSANTS
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                3 for $5.25 / 6 for $10.50
              </p>
            </div>
          </div>

          {/* Salads */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8 mt-8 lg:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              Salads
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                CAESAR SALAD - $14
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Classic favorite featuring crisp romaine lettuce, crunchy croutons, & grated parmesan, tossed in a creamy Caesar dressing. <br />
                HALF PORTION - $7 <br />
                Add GRILLED CHICKEN +$5 <br />
                Add GRILLED SALMON +$8 <br />
                Add SAUTEED SHRIMP +$10
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                HOUSE SALAD - $14
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Fresh & vibrant mix of crisp greens, ripe tomatoes, cucumbers, & shredded carrots, topped with your choice of dressing. <br />
                HALF PORTION - $7 <br />
                Add GRILLED CHICKEN +$5 <br />
                Add GRILLED SALMON +$8 <br />
                Add SAUTEED SHRIMP +$10
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}