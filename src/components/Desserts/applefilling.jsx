import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const AppleFilling = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/desserts">Desserts</Link></li>
                    <li><p>Apple Filling</p></li>
                </ul>
            </nav>
            <p className="mb-5">Apple pie filling without the pie.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Peel and cut apples into half-inch pieces.</li>
                    <li>Melt butter in pan over medium heat.</li>
                    <li>Add apples, sugar, and salt.</li>
                    <li>Stir until sugar dissolves.</li>
                    <li>Cook until butter and sugar caramelize.</li>
                    <li>Add water and lemon juice.</li>
                    <li>Cook until slightly thickened, then add vanilla and spices.</li>
                    <li>Continue cooking until reduced to syrupy consistency and apples are soft.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>2 apples</li>
                    <li>2-3 spoonfuls of sugar</li>
                    <li>2-3 tbsp butter</li>
                    <li>1 tbsp lemon juice</li>
                    <li>0.25 cup water</li>
                    <li>0.25 tsp vanilla extract</li>
                    <li>1 tsp cinnamon</li>
                    <li>0.5 tsp nutmeg</li>
                    <li>0.5 tsp allspice</li>
                    <li>1 tsp ground ginger</li>
                    <li>Pinch salt</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I originally created this recipe as part of a recipe for apple turnovers, but those turned out horrible. The filling was still good though, so I reworked it to be a stovetop 
            apple filling that would go great with vanilla ice cream, French toast, etc.
            </p>
            <p className="story">
            Peel and core the apples, then cut them into half-inch cubes. I like using honeycrisp apples for their sweetness, but you can use whatever you want. If you prefer a tart apple, 
            granny smiths work very well, though you'll need to add more sugar to your taste. Melt the butter in a pan over medium heat. Make sure to keep the butter moving as you melt it, 
            so as to avoid breaking the natural emulsion of fat and water in the butter. Add in your apple pieces along with some sugar and a pinch of salt. Stir until the sugar dissolves 
            and continue to cook until the butter begins to brown and the sugar begins to caramelize.
            </p>
            <p className="story">
            Add the water along with a small squeeze of lemon juice. You can even add a bit of lemon zest if you like, but I find it unnecessary. Adding lemon juice will help the natural 
            pectin in the apples thicken the liquid to make a gorgeous, golden-brown, syrupy sauce. Once the water comes to a simmer and begins to thicken, add the vanilla extract and 
            the spices. Cinnamon and ginger, supplemented with a bit of nutmeg and allspice, will bring that classic, warm pumpkin-spice smell we all associate with autumn flavors. 
            Continue cooking until the sauce becomes syrupy and the apples are softened all the way through. Now you have the essence of an apple pie in your hands. Do with it 
            what you will, but remember: with great flavor comes great responsibility.
            </p>
        </div>    
    );
}

export default AppleFilling;
