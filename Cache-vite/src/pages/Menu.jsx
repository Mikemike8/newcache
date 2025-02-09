import Carousel from "../Components/Carousel";
import Carouselt from "../Components/Carouselt";
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
          <nav className="font-inconsolata sm:text-xl md:text-md lg:text-xl xl:text-xl font-semibold text-base">
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
      <div className="bg-[#F5F5DC] font- text-gray-800 pt-24">
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
          <Carouselt/>
        </div>

        {/* Brunch Section */}
        <div className=" bg-[#F5F5DC] flex flex-col lg:flex-row justify-center py-10">
          <div className="w-full lg:w-1/2 bg-[#F5F5DC] rounded-lg p-4 md:p-8">
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

          {/* Lunch Section */}
          <div className=" bg-[#F5F5DC] w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8 mt-8 lg:mt-0">
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

        {/* Small Plates Section */}
        <div className=" bg-[#F5F5DC] flex flex-col lg:flex-row justify-center py-10">
          <div className="w-full lg:w-1/2 bg-[#F5F5DC] rounded-lg p-4 md:p-8">
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

          {/* Salads Section */}
          <div className="  bg-[#F5F5DC] w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8 mt-8 lg:mt-0">
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

        {/* Main Plates Section */}
        <div className="flex  bg-[#F5F5DC] flex-col lg:flex-row justify-center py-10">
          <div className="w-full lg:w-1/2 bg-[#F5F5DC] rounded-lg p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              MAIN PLATES
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                KING SALMON & SHRIMP - $42
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Bourbon glazed, pan-seared 8oz salmon filet with succulent sautéed jumbo shrimp - a perfect premium duo.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                KING SALMON ONLY - $30
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                OXTAILS - $38
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Slow-braised, tender oxtails served over spiced Jamaican Rice.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                RIBEYE - $42
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Premium Ribeye steak, with rich marbling & bold, juicy flavor.
              </p>
            </div>
           
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                SURF & TURF - $68
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Juicy Ribeye steak paired with your choice of lobster or shrimp & a side.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                CACHE CAJUN PASTA - $22
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Penne Pasta with bell peppers, house Alfredo sauce, & your choice of protein: Chicken, Shrimp, Steak, Lamb, Lobster, Oxtail.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                TURKEY RIBS - $32
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Succulent ribs served with a side of garlic mashed potatoes.
              </p>
            </div>
            <div className="mb-4">
           <h3 className="text-lg md:text-xl text-center font-semibold font-inconsolata">
  CACHE FLIGHT - $35
</h3>

              <div className="mb-4">
</div>

{/* Wrapping remaining items in a horizontal row */}
<div className="flex flex-col md:flex-row items-start justify-center gap-4 text-center">
  {/* First horizontally aligned item */}
  <div>
    <h4 className="text-lg md:text-md font-semibold font-inconsolata">
    Lamb Chop</h4>
    <p className="text-sm text-gray-600 font-inconsolata">
    Grilled lamb chops served over pasta.
    </p>
  </div>

  {/* Separator */}
  <span className="text-gray-500 hidden md:block">|</span>
  
  
  {/* First horizontally aligned item */}
  <div>
    <h4 className="text-lg md:text-md font-semibold font-inconsolata">
      HOT LEMON PEPPER PORK CHOPS 
    </h4>
    <p className="text-sm text-gray-600 font-inconsolata">
      Served over sweet potato mash.
    </p>
  </div>

  {/* Separator */}
  <span className="text-gray-500 hidden md:block">|</span>

  {/* third horizontally aligned item */}
  <div>
    <h4 className="text-lg md:text-md font-semibold font-inconsolata">
      GRILLED SALMON OVER WILD RICE 
    </h4>
    <p className="text-sm text-gray-600 font-inconsolata">
      Served with a bourbon glaze drizzle.
    </p>
  </div>
</div>

            </div>
          </div>

          {/* Sides Section */}
          <div className="w-full lg:w-1/2 bg-[#F5F5DC] rounded-lg p-4 md:p-8 mt-8 lg:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              SIDES
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                FRENCH FRIES - $7
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                MASHED POTATOES - $14
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                MAC & CHEESE - $12
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
              BRUSSEL SPROUTS - $12
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                LOBSTER MAC & CHEESE - $23
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                SAUTEED ASPARAGUS - $13
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}