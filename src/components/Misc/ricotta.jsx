import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Ricotta = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/misc">Misc.</Link></li>
                    <li><p>Ricotta</p></li>
                </ul>
            </nav>
            <p className="mb-5">Recipe from Bon Apetit. I've never attempted this recipe, but I saved it just in case I ever needed it.</p>
            
            <div className="columns is-8 is-variable has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Heat the cream and milk until at 200°F, stirring occasionally.</li>
                    <li>Stir in salt and vinegar when the liquid comes up to temp.</li>
                    <li>Allow the curds to form off the heat for 15-20 mins then strain through a cheese cloth.</li>
                    <li>Let it drain without squeezing through the cheese cloth for 30 mins.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>7 cups whole milk</li>
                    <li>1 cup heavy cream</li>
                    <li>2 tsp salt</li>
                    <li>5 tbsp white vinegar</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I've always thought it would be cool to make my own cheese. Usually you need some kind of enzyme like rennet to make cheese, but ricotta is a little different. As long as you 
            have a pot, some everyday ingredients, a food thermometer, and a cheesecloth, you can make this versatile cheese any time you want. Top your fresh ricotta with some salt, pepper,
            and olive oil, and you have a simple, delicious dip. Spread it on toast. Eat it with peaches. Add it to lasagna. The possibilities are endless.
            </p>
        </div>    
    );
}

export default Ricotta;
