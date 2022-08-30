import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Chana = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/soup">Soups, Stews, &amp; Sauces</Link></li>
                    <li><p>Chana Masala</p></li>
                </ul>
            </nav>
            <p className="mb-5">My mom's recipe for chana masala.</p>
            
            <div className="columns is-8 is-variable has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Add cumin seeds and bay leaf to hot oil.</li>
                    <li>Sautee finely diced onion until fully cooked.</li>
                    <li>Add grated ginger with minced garlic, diced tomato, and a pinch of salt to release moisture.</li>
                    <li>Mix until flavors come together, then add cinnamon, cloves, coriander powder, cumin powder, paprika, and cayenne.</li>
                    <li>Cook down until paste-like and shiny.</li>
                    <li>Add chickpeas and half as much water.</li>
                    <li>Bring to a simmer, then leave the lid on for 5-10 minutes.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>2 cups chickpeas, soaked</li>
                    <li>1 onion</li>
                    <li>1 tomato</li>
                    <li>2 tbsp vegetable oil</li>
                    <li>0.5 inches ginger (1 tbsp)</li>
                    <li>2 cloves garlic</li>
                    <li>1 bay leaf</li>
                    <li>0.25 tsp cloves</li>
                    <li>0.25 tsp cinnamon</li>
                    <li>1 tbsp coriander powder</li>
                    <li>1 tsp cumin seed</li>
                    <li>1 tsp cumin powder</li>
                    <li>0.5 tsp paprika</li>
                    <li>Cayenne</li>
                    <li>Salt</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            You may have heard this recipe called by the name <em>chole</em>, usually served with a side of fried bread called <em>bhatura</em>. Whatever you call it, this North Indian 
            classic is packed with energy, flavor, and nutrition that is a guaranteed knockout for a simple yet filling weeknight meal.
            </p>
            <p className="story">
            Start by adding cumin seeds and a bay leaf to a pot with hot oil. This will wake up the flavor compounds in these ingredients. Of course, if you leave your spices frying too 
            long, you risk burning them, so make sure to add some finely diced onion when the cumin becomes fragrant and slightly toasted.
            </p>
            <p className="story">
            The onion is going to need to cook for a little while so you can mince your garlic, peel your ginger, and dice your tomato in the meantime. Make sure the onion doesn't burn by 
            stirring the pot occasionally. You'll know the onion is fully cooked when it becomes translucent and shrinks a bit due to water loss. You don't want to caramelize or sear the 
            onion, just make sure they're fully cooked. Once they're at that stage, grate in some ginger, add the minced garlic with the tomatoes, then sprinkle in a pinch of salt. The 
            salt will help release moisture and break down the vegetables faster. Once all the ingredients are well-mixed, Add all the rest of the spices. The coriander, cumin, cinnamon, 
            and cloves are common ingredients in garam masala that will give a lot of flavor and warmth to the chana. Then add a bit of paprika for color and cayenne powder to taste.
            </p>
            <p className="story">
            Mix the ingredients together well, making sure to mash the tomato up as much as possible. The spices will combine with the tomato and create a paste-like substance that will act 
            as the base for our gravy. Let the paste continue to reduce so that it deepens in flavor and the spices have a chance to cook properly. You'll be able to tell that the spices 
            are done cooking when the oil begins to leak out. The paste will have a noticeable sheen and you'll be able to see a little oil sizzling out at the edges of the paste. This 
            stage is critical, so don't try to rush it. If you read my recipes for rajma and chicken tikka masala, you'll notice a similar trend. Cooking down onion, tomato, and spices into 
            a paste and getting to this leaking-oil stage before adding water. Congratulations, you just discovered the quintessential technique for making a good curry. By mastering this 
            technique, you'll unlock the ability to make a plethora of Indian dishes and even make your own curry recipe if you want.
            </p>
            <p className="story">
            Add 2 cups of chickpeas and half as much water once the spices are done cooking. I like using drained, canned chickpeas for this recipe, despite the reduction in flavor. I find 
            that it's far easier than soaking the chickpeas overnight and having to cook them for longer. Plus, the can is a great way to measure out the amount of water you need as well. 
            Mix and bring up to a simmer. Continue to simmer with the lid on for 5-10 minutes. You want the chickpeas to soften and absorb as much flavor as possible. Take off the lid and 
            mash some of the chickpeas against the sides of the pot to help thicken the gravy. Adjust for seasoning, then serve with bhature, naan, or rice. Top with chopped cilantro 
            leaves, raw red onion slices, or both.
            </p>
        </div>    
    );
}

export default Chana;
