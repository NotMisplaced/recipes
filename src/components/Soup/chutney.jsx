import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Chutney = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/soup">Soups, Stews, &amp; Sauces</Link></li>
                    <li><p>Green Chutney</p></li>
                </ul>
            </nav>
            <p className="mb-5">A spicy sauce that goes with pretty much anything.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Add ingredients to a blender with just enough water to blend it all together.</li>
                    <li>Blend it until smooth.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>6-8 bird's eye chilis</li>
                    <li>Big handful of cilantro</li>
                    <li>1/4 yellow onion</li>
                    <li>4 cloves garlic</li>
                    <li>2 tsp salt</li>
                    <li>Water</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            This is my mom's green chutney recipe. If you are unfamiliar with chutney, just think of it like salsa or pesto, but Indian. There are hundreds of different chutneys, 
            but this one is very easy, versatile, and is packed with flavor.
            </p>
            <p className="story">
            Put 6-8 bird's eye chilis (depending on how much spice you like) in a blender along with a big handful of cilantro (make sure to use the leaves and stems), a quarter of a 
            yellow onion, 4 cloves of garlic, and about 2 teaspoons of salt. Add just enough water to ensure the blender won't get stuck. Blend it until smooth. That's it. Easy. 
            The uses of chutney aren't limited to Indian food either. It goes great with hotdogs, sandwiches, French fries, nachos, tacos, etc.
            </p>
        </div>
    );
}

export default Chutney;
