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
              href="https://drive.google.com/file/d/1lWLrv0vuIAitLw8YtLy6E9MkmeFQMSjQ/view?usp=sharing"
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
              Small Plates
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Lobster Queso with warm chips - $20
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Fresh lobster blended into a creamy queso, served with warm,
                crispy chips for a delightful appetizer.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Char Grilled Oysters - $22
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Smoky, grilled oysters with a burst of savory flavor, perfect
                for seafood lovers.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Smoked Wings (Bourbon Glazed, Cajun Dusted, Buffalo) - $18
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Juicy wings served three ways, each with its own unique spice
                and flavor profile.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Bourbon Lollipop Lamb - $35
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Tender lamb lollipops glazed with bourbon, offering a sweet and
                savory bite.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                OxTail Egg Rolls - $22
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Crispy egg rolls stuffed with slow-cooked oxtail, delivering
                rich flavors in every bite.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Lobster Menage (3 Cold Water Tails 3 Ways - Grilled, Fried, and
                Stuffed, served with 3 sauces) - $51
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A trio of lobster tails, each prepared in a distinct style,
                accompanied by three complementary sauces.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Jumbo Fried Shrimp (Served with double dipping sauces) - $22
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Crisp, golden jumbo shrimp served with a duo of dipping sauces
                for a flavorful experience.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Lobster Queso Fries (House-made fries with a jalapeño queso and
                warm butter-poached lobster) - $21
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Crispy fries topped with spicy queso and succulent
                butter-poached lobster, a perfect indulgence.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Jumbo Shrimp Cocktail (Jumbo prawns served with cocktail and
                spicy remoulade) - $20
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Refreshing shrimp cocktail with jumbo prawns, served with
                classic cocktail sauce and spicy remoulade.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Buffalo Egg Rolls - $20
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Crispy egg rolls filled with buffalo chicken, offering a tangy,
                spicy kick with every bite.
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
                42 Chopped Salad - $14
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A fresh mix of crisp lettuce, tomatoes, cucumbers, and cheese,
                finely chopped and tossed in a zesty vinaigrette.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                42 Caesar Salad - $14
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A classic Caesar salad featuring crisp romaine lettuce,
                croutons, parmesan cheese, and a creamy Caesar dressing.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                42 Wedge Ice Salad - $14
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A wedge of iceberg lettuce served with blue cheese dressing,
                crispy bacon bits, and fresh tomatoes.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                42 House Salad - $14
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A simple and refreshing house salad with mixed greens,
                cucumbers, cherry tomatoes, and your choice of dressing.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center py-10">
          {/* Off The Grill */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              Off The Grill
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                40oz Prime Tomahawk - $135
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A massive, bone-in prime tomahawk steak, expertly grilled to
                perfection with a juicy and tender texture.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Golden Rack Of Lamb - Market Price
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A luxurious rack of lamb, grilled to a golden finish, bursting
                with flavor and tenderness.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Surf And Turf (8oz Filet Mignon with a delicious grilled lobster
                tail served with melted garlic butter and lemon) - $68
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A perfect pairing of tender filet mignon and succulent lobster
                tail, enhanced with garlic butter and a touch of lemon.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Cajun NY Strip with Shrimp - $55
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A spicy Cajun NY strip steak served alongside plump, flavorful
                shrimp, combining bold flavors in every bite.
              </p>
            </div>
          </div>

          {/* Mains */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8 mt-8 lg:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              Mains
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Jamaican Oxtails Over Rice - $38
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Tender and flavorful Jamaican oxtails slow-cooked to perfection,
                served over a bed of seasoned rice.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                King Salmon And Shrimp - $42
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A delicious combination of grilled king salmon and succulent
                shrimp, served with a side of fresh vegetables.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Cache Cajun Pasta (Options: Shrimp, Chicken, Lamb, Lobster,
                Salmon) - $28
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Creamy Cajun pasta tossed with your choice of protein, including
                shrimp, chicken, lamb, lobster, or salmon, and finished with a
                spicy kick.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center py-10">
          {/* Side Items */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              Side Items
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Lobster Mashed Potatoes - $23
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Creamy mashed potatoes topped with succulent lobster chunks,
                offering a luxurious twist on a classic dish.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                1LB Baked Potatoes - $14
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A hefty 1-pound baked potato, perfectly cooked and served with
                butter, sour cream, and chives.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Garlic Mashed Potatoes - $13
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Smooth and creamy mashed potatoes infused with roasted garlic
                for a rich, savory flavor.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Brussel Sprouts - $13
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Crispy roasted Brussels sprouts, caramelized to perfection with
                a touch of balsamic glaze.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Queso Blanco Lobster Mac - $23
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A rich and cheesy mac and cheese, loaded with tender lobster
                pieces and a creamy queso blanco sauce.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Creamed Spinach - $12
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Velvety creamed spinach, seasoned with garlic and nutmeg for a
                classic side dish.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Sautéed Asparagus - $13
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                Tender asparagus spears, lightly sautéed in olive oil and
                finished with a sprinkle of sea salt.
              </p>
            </div>
          </div>

          {/* Cocktails */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8 mt-8 lg:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              Cocktails
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                House Martini - $12
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A classic martini with your choice of gin or vodka, shaken or
                stirred to perfection, garnished with an olive or twist of
                lemon.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Top Shelf Martini - $15
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                An elevated martini featuring premium spirits, offering a smooth
                and sophisticated taste.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Bubbly Martini - $15
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A martini with a twist of bubbly champagne, perfect for
                celebrations and special occasions.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Cotton Candy Margarita/Martini - $15
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A fun and sweet cocktail, garnished with a swirl of cotton candy
                for a playful twist.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Wokesha - $20
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A unique cocktail with bold flavors, perfect for those looking
                to try something different.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Strawberry Casamigos - $14
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A refreshing mix of Casamigos tequila with fresh strawberries
                for a sweet and tangy flavor.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Strawberry Hennessy - $14
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A fruity twist on the classic Hennessy, with a burst of fresh
                strawberry flavor.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Old Fashion - $12
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A timeless cocktail made with bourbon, bitters, sugar, and a
                twist of orange peel.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Long Island - $10
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A strong and refreshing mix of spirits with a splash of cola and
                a hint of citrus.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Walk Me Down - $10
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A vibrant and potent cocktail with a mix of blue curaçao and
                spirits, offering a tropical flair.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Amaretto Sour - $10
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A sweet and tangy cocktail made with amaretto liqueur, lemon
                juice, and a hint of sweetness.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Top Shelf Margarita - $17
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A premium margarita made with top-shelf tequila, fresh lime
                juice, and a touch of agave syrup.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center py-10">
          {/* House Margarita */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-inconsolata">
              House Margarita
            </h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                House Margarita - $12
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A classic margarita made with quality tequila, fresh lime juice,
                and a touch of orange liqueur, served with a salted rim.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Mai Tai - $10
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A tropical blend of rum, orange curaçao, lime juice, and a hint
                of almond syrup, garnished with a cherry and pineapple slice.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Screwdriver - $10
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A simple yet refreshing cocktail made with vodka and fresh
                orange juice, perfect for any time of day.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Tequila Sunrise - $10
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A vibrant mix of tequila, orange juice, and grenadine, creating
                a beautiful sunrise effect in the glass.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Green Tea Shot - $10
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A fun and flavorful shot combining whiskey, peach schnapps, and
                sour mix with a splash of lemon-lime soda.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Don Julio 1942 - $35
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                An exquisite tequila known for its rich and complex flavor
                profile, featuring notes of vanilla, oak, and caramel.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold font-inconsolata">
                Don Julio Rosado - $30
              </h3>
              <p className="text-sm text-gray-600 font-inconsolata">
                A refined tequila with a smooth taste, featuring notes of
                vanilla, oak, and caramel, perfect for sipping or mixing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Carousel />
    </>
  );
}
