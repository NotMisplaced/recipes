import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const BananaCaramel = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/desserts">Desserts</Link></li>
                    <li><p>Banana Caramel</p></li>
                </ul>
            </nav>
            <p className="mb-5">Goes great on toast, French or otherwise.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Peel and slice banana on a bias.</li>
                    <li>Put sugar in pan over medium high heat with half a tbsp of water around the outside until caramelized. Do not stir.</li>
                    <li>Right before sugar reaches desired color, turn down heat to low and add the rest of the water.</li>
                    <li>Melt in the butter and combine with the caramel along with a pinch of salt.</li>
                    <li>Add vanilla extract and banana.</li>
                    <li>Turn heat back up to medium high and cook until sauce reduces slightly.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1 banana (preferably firm)</li>
                    <li>2 tbsp sugar</li>
                    <li>1 tbsp butter</li>
                    <li>0.5 tsp vanilla extract</li>
                    <li>2 tbsp water</li>
                    <li>Pinch salt</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I originally made this recipe to act as a topping for French toast, but you can use it however you like. This recipe starts with a banana, preferably on the slightly green side, 
            so that it doesn't become too mushy. Peel the banana and slice it on a bias. You could slice it straight, but it looks so much cooler when you've cut it at an angle.
            </p>
            <p className="story">
            Put some sugar in a dry pan over medium high heat with half a tablespoon of water sprinkled around the outside. It may be tempting to stir, but don't. You'll make it into rock 
            candy and we want caramel. Keep an eye on the sugar as it melts. Not only is it fun to watch, but you need to keep track of the color because sugar can go from caramel to 
            burnt mess very fast. That's why the water is on the outside, to prevent the edges from burning too fast. Right before the sugar reaches a dark amber color, turn the heat to 
            low and add the rest of the water, about a tablespoon and a half. Add the butter and a pinch of salt. Only now begin stirring it to melt in the butter. Add the vanilla extract 
            and the banana slices. Turn the heat back up to medium high and reduce slightly. Make sure to flip the bananas while cooking to get even covering of caramel. Don't cook for too 
            long or the bananas will become mush. Take off the heat and serve on top of the breakfast or dessert of your choice.
            </p>
            <p className="story">
            Truth be told, this recipe hasn't been perfected yet. I still get hard pieces of caramel in the sauce, but I'm hoping to work it out eventually. Despite that, I put this work 
            in progress on the website, because it still tastes good regardless. Soft pieces of banana coated in a sweet, slightly banana-flavored caramel sauce. Even if it isn't perfect, 
            it's still pretty great and I stand by that.
            </p>
        </div>    
    );
}

export default BananaCaramel;
