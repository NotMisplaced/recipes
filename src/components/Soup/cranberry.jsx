import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Cranberry = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/soup">Soups, Stews, &amp; Sauces</Link></li>
                    <li><p>Cranberry Sauce</p></li>
                </ul>
            </nav>
            <p className="mb-5">Perfect for Thanksgiving, but still good anywhere else.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Put the cranberries, sugar, cinnamon, and the zest and juice of the orange into a saucepan.</li>
                    <li>Add the water and stir occasionally over medium-high heat until it comes to a boil.</li>
                    <li>Simmer on low heat for 15 minutes or until thickened. Make sure to burst the cooked cranberries.</li>
                    <li>Let cool and serve.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>12 oz cranberries</li>
                    <li>1 cup sugar</li>
                    <li>1/2 cup water</li>
                    <li>1 orange</li>
                    <li>Cinnamon stick</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            My family has tried to make cranberry sauce on Thanksgiving many times, and I always found it too sour or too spicy. When I was put in charge of making it, I made sure it was 
            the perfect recipe. Full disclosure, I don't remember where I got this recipe from, but I definitely stole it off the internet somewhere for your enjoyment.
            </p>
            <p className="story">
            The best advice I can give is to listen to the Cranberries while making cranberry sauce. I swear it makes the flavor ten times better. Put all the ingredients in a saucepan, 
            except the orange and the water. For the orange, you'll want to zest it and then squeeze out all the juice into the saucepan. Then add the water and turn the heat up to medium 
            high, stirring occasionally until it begins to boil. Then simmer on low for 15 minutes. You'll know when the cranberries are cooked because they will swell and burst when 
            pressed with your trusty wooden spoon.
            </p>
            <p className="story">
            Once it cools, serve it with whatever you like. Whether it's Thanksgiving or National Eat A Cranberry Day (November 23) or you just wanted a nice sweet and sour treat, 
            this sauce is sure to put a smile on your face.
            </p>
        </div>
    );
}

export default Cranberry;
