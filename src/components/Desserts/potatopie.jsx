import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const PotatoPie = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/desserts">Desserts</Link></li>
                    <li><p>Sweet Potato Pie</p></li>
                </ul>
            </nav>
            <p className="mb-5">Recipe courtesy of my friend's mom.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Boil sweet potato until tender and remove skin.</li>
                    <li>Add sweet potato to a bowl and mash slightly.</li>
                    <li>Add butter and mix well.</li>
                    <li>Stir in sugar, eggs, milk, nutmeg, cinnamon, and vanilla.</li>
                    <li>Beat on medium speed until smooth.</li>
                    <li>Pour into pie crust.</li>
                    <li>Bake at 350F for an hour or until set.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1 pound sweet potato</li>
                    <li>0.5 cup butter, softened</li>
                    <li>1 cup sugar</li>
                    <li>0.5 cup milk</li>
                    <li>2 eggs</li>
                    <li>0.5 tsp nutmeg</li>
                    <li>.5 tsp cinnamon</li>
                    <li>1 tsp vanilla extract</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I remember telling my friend about how I made a recipe for lemon meringue pie. He wanted to learn to make it, and in exchange for my recipe, he told me his mom's special recipe 
            for sweet potato pie. Thank you George, and many thanks to your mom as well.
            </p>
            <p className="story">
            First start by boiling and peeling your sweet potato. You'll know when it's done boiling because you'll be able to insert a fork or paring knife with no resistance. 
            Add the sweet potato to a bowl and mash slightly. Then add butter and mix well. Once that all comes together, stir in the rest of the ingredients and beat until smooth on 
            medium speed. Pour it into an unbaked pie crust and bake at 350F in the center of an oven for an hour or until a toothpick comes out clean.
            </p>
            <p className="story">
            I love sweet potato pie. I wish it was more popular, but even on Thanksgiving, most people overlook it in favor of pumpkin pie. Do give this dessert a chance, 
            it certainly deserves one.
            </p>
        </div>    
    );
}

export default PotatoPie;
