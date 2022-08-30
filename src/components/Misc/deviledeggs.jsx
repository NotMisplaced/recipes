import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const DeviledEggs = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/misc">Misc.</Link></li>
                    <li><p>Deviled Eggs</p></li>
                </ul>
            </nav>
            <p className="mb-5">Credit to AllRecipes for this recipe.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Put 6 eggs in a pot of water.</li>
                    <li>Bring up to a boil and turn off the heat.</li>
                    <li>Leave for 10-12 minutes.</li>
                    <li>Remove eggs and cool in ice water.</li>
                    <li>Peel eggs and cut lengthwise.</li>
                    <li>Remove and mash the yolks in a bowl.</li>
                    <li>Add mayo, mustard, salt, pepper, hot sauce, and stir until smooth.</li>
                    <li>Adjust seasoning as necessary.</li>
                    <li>Pipe yolk mixture back into egg whites.</li>
                    <li>Garnish each egg with cayenne and a sprig of parsley.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>6 large eggs</li>
                    <li>0.25 cups mayo</li>
                    <li>2 tsp yellow mustard</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Cayenne</li>
                    <li>Parsley</li>
                    <li>Hot sauce (optional)</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I remember when I was alone in my apartment one time for Thanksgiving break. Normally, spending Thanksgiving alone is sad, but for me, I got the chance to make a six course feast 
            all to myself. Deviled eggs, pasta aglio e olio, turkey and mashed potato sandwiches, fruit salad, tomato soup, and lemon meringue pie. The whole thing took me 24 hours and I 
            ate it all by myself in 3 days. The appetizers for this feast, deviled eggs, were something I'd never tried before. I got this recipe from AllRecipes and tried it out. In short, 
            I ended up wolfing down half a dozen eggs because these little bites of pure richness were too good to put down.
            </p>
            <p className="story">
            Start by putting 6 eggs in a pot of water, then bring up to a boil. Once it begins boiling, turn off the heat. Let sit for 10-12 minutes. Remove the eggs and put them in a bowl 
            of ice water to prevent them from overcooking. Peel the eggs and cut lengthwise. If you want to call it quits here and just eat hardboiled eggs, I don't blame you. But if you 
            want to finish the recipe, the next step is to remove the yolks and mash them in a bowl with a fork. Add mayo, mustard, salt, pepper, and a dash or two of hot sauce. Stir until 
            smooth and creamy. Taste for seasoning and adjust as necessary. Pipe the yolk mixture back into the egg whites. I like putting the mixture in a plastic baggie, then cutting off 
            a corner and using that as a makeshift piping bag. Garnish each egg with cayenne pepper and a sprig of parsley. This appetizer is perfect for any party or feast of your choosing. 
            I'd have to say the hardest part of this recipe is resisting the urge to eat them all before someone else gets a chance to try.
            </p>
        </div>    
    );
}

export default DeviledEggs;
