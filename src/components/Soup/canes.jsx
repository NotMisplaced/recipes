import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Canes = () => {
    return (
        <div id="canes" className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/soup">Soups, Stews, &amp; Sauces</Link></li>
                    <li><p>Cane's Sauce</p></li>
                </ul>
            </nav>
            <p className="mb-5">The sauce from Raising Cane's. I don't think it's the exact recipe, but this circulated on the internet a little while ago.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Mix ingredients and adjust to taste.</li>
                    <li>Let rest refrigerated and covered for 24 hours for best results (optional).</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>0.5 cups mayo</li>
                    <li>0.25 cup ketchup</li>
                    <li>0.5 tsp garlic salt</li>
                    <li>0.25 tsp worcestershire sauce</li>
                    <li>0.5 tsp black pepper</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            Despite how much I love to cook, I sometimes give in to the easy way of making dinner by throwing a tray of chicken nuggets in the oven. But even a simple comfort meal can be 
            enhanced greatly through something like making your own version of Raising Cane's signature sauce right at home. I found this recipe online, and while it isn't an exact match, 
            it's still just as tangy, creamy, and every bit as rich as the real thing.
            </p>
            <p className="story">
            Mix half a cup of mayo, a quarter cup of ketchup, half a teaspoon of garlic salt, half a teaspoon of black pepper, and a quarter teaspoon of Worcestershire sauce in a bowl. 
            I like going a little heavy on the garlic and adding a pinch of cayenne. That's the advantage of making it at home: you get to customize it to your liking. I've heard that 
            leaving it covered and refrigerated for 24 hours gives best results, but I can never wait longer than 10 minutes.
            </p>
        </div>
    );
}

export default Canes;
