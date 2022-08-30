import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const PopcornChicken = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/misc">Misc.</Link></li>
                    <li><p>Makeshift Popcorn Chicken</p></li>
                </ul>
            </nav>
            <p className="mb-5">The best way to eat chicken nuggets.</p>
            
            <div className="columns is-8 is-variable has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Count chicken nuggets and begin baking on a foil-lined tray following specified directions. Counting them will help proportion other ingredients.</li>
                    <li>When about 5 minutes from being done, heat up oil in pan on high until shimmering (use about 1 tbsp for every 10 nuggets).</li>
                    <li>While oil heats up, roughly dice garlic into large chunks (about 1 clove for every 5 nuggets)</li>
                    <li>Once oil is hot, add red pepper flakes and a hefty pinch of ginger powder.</li>
                    <li>Add the basil immediately (about 3 leaves for every 5 nuggets). Take it off the heat after no more than 10 seconds.</li>
                    <p><u>NOTE:</u> This will flash-fry the basil, so be wary of oil spluttering.</p>
                    <li>Add the garlic followed by a heavy shake of paprika and onion powder, then add pepper to taste.</li>
                    <li>Once the flavors come together after a few seconds, cool down the pan with a splash of soy sauce and mix until homogenous.</li>
                    <li>Take nuggets out of oven and put in a mixing bowl, toss with a sprinkle of salt.</li>
                    <li>Pour oil over the nuggets, making sure to get all the little powdery bits out of the pan with a spatula.</li>
                    <li>Toss together and make sure all the nuggets get covered in the oil and serve.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>Chicken nuggets</li>
                    <li>Whole basil leaves *</li>
                    <li>Garlic cloves **</li>
                    <li>Soy sauce</li>
                    <li>Paprika</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Onion powder</li>
                    <li>Red pepper flakes</li>
                    <li>Ginger powder</li>
                    <li>Vegetable oil ***</li>
                </ul>
                </div>
                <p>* basil leaves = (3 &times; nuggets) / 5 rounded up to nearest whole number.</p>
                <p>** garlic cloves = nuggets / 5 rounded up to nearest whole number.</p>
                <p>*** tablespoons of oil = nuggets / 10 rounded up to nearest whole number.</p>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I love the popcorn chicken a nearby boba place in town. I wanted to know if I could make this Taiwanese street food classic in my own kitchen with less effort than it would 
            take to go to the shop and buy some. By making chicken nuggets and tossing them in seasoned oil, you can get something that may not be quite as good, but it's still absolutely 
            delicious. Whether you want to spice up your chicken nuggets gourmet-style or you want a simplified version of popcorn chicken you can make right at home, this is the recipe for 
            you. So here's my take on a makeshift popcorn chicken.
            </p>
            <p className="story">
            The ingredient amounts are mostly in direct proportion to the number of nuggets you have. Follow the instructions for making the nuggets in the oven and count them before they 
            go in. I'm sorry in advance about all the math you'll have to do, but I have no idea how else to describe the proportions of these ingredients. When they are about 5 minutes 
            away from being done, heat up some vegetable oil in a pan on high. Divide the number of nuggets by 10 and round up to get the amount of oil in tablespoons (i.e. for 21 nuggets, 
            use 3 tbsp oil because 21/10 = 2.1 gets rounded up to 3). While the oil heats up, roughly dice the garlic. Divide the number of nuggets by 5 and round up to get the number of 
            garlic cloves (i.e. for 21 nuggets, use 5 cloves because 21/5 = 4.1 gets rounded up to 5).
            </p>
            <p className="story">
            Once the oil is hot, add red pepper flakes for some heat along with a hefty amount of ginger powder. Add the basil right away, and be sure to use fresh basil leaves only. 
            The flavor and texture of fresh, whole basil leaves when fried is inimitable. Divide the number of nuggets by 5, multiply by 3, and round up to get the number of basil leaves 
            (i.e. for 21 nuggets, use 13 basil leaves because (21/5)*3 = 12.3 rounded up to 13). Be careful when adding in the basil, as it will flash fry and splutter oil everywhere. 
            Take off the heat after 10 seconds (not a second more) and add the garlic, a heavy shake of paprika, onion powder, and black pepper. If you happen to have white pepper and 
            ground Szechuan peppercorns, you should use those instead of the black pepper. Once the flavors have a chance to assimilate, cool them off with a glug of soy sauce and mix 
            until homogenous.
            </p>
            <p className="story">
            By now the nuggets should be done, so take them out of the oven, put them in a large bowl, sprinkle with a bit of salt, and give them a little toss. Pour the seasoned oil over 
            the nuggets, making sure to use a spatula to get out all the powdery bits and every last drop of oil. Toss together, making sure all the nuggets get covered in oil, and then 
            serve hot. This may not be the best popcorn chicken you'll ever have, but I guarantee it'll be the best chicken nuggets of your life.
            </p>
        </div>    
    );
}

export default PopcornChicken;
