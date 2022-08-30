import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Suzette = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/desserts">Desserts</Link></li>
                    <li><p>Crepes Suzette</p></li>
                </ul>
            </nav>
            <p className="mb-5">Recipe from Binging with Babish. Eat as dessert. Or as breakfast. I don't care.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Combine eggs, water, milk, butter, and salt.</li>
                    <li>Whisk in flour until smooth.</li>
                    <li>Let rest for 30 mins.</li>
                    <li>Ladle batter onto a skillet on medium heat and spread thin.</li>
                    <li>Cook until slightly browned. Then flip and cook again until slightly browned on other side.</li>
                    <li>Set aside 4 crepes for this recipe, do what you want with the rest.</li>
                    <li>Melt butter and dissolve sugar in pan.</li>
                    <li>Add in zest and juice of orange.</li>
                    <li>Combine and bring to a simmer.</li>
                    <li>Dip half of crepe into the liquid and fold into quarters.</li>
                    <li>Repeat for 3 other crepes until four quarters form a circle, cooking them in the sauce.</li>
                    <li>Flip after 1 min.</li>
                    <li>Cook until bottoms become caramelized.</li>
                    <li>Flambé with Grand Marinier.</li>
                    <li>Once alcohol is cooked off, serve with vanilla ice cream.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                    <p>For the Crepes:</p>
                    <ul>	
                        <li>2 eggs</li>
                        <li>0.5 cups water</li>
                        <li>0.75 cups milk</li>
                        <li>3 tbsp melted butter</li>
                        <li>1 cup flour</li>
                        <li>Salt</li>
                    </ul>	
                    <p>For the Sauce:</p>
                    <ul>
                        <li>3 tbsp butter</li>
                        <li>2 tbsp sugar</li>
                        <li>1 orange</li>
                        <li>Grand Marnier</li>
                        <li>1 scoop vanilla ice cream</li>
                    </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            This recipe is directly taken from Binging with Babish. I like making this whenever I have leftover crepes after a big breakfast or brunch. Start by whisking eggs, water, milk, 
            butter, and salt. Whisk flour into the wet mixture until smooth. Let the batter rest for 30 minutes. This will relax the gluten and allow the flour to finish hydrating properly. 
            When ready, ladle the batter onto a skillet over medium heat and spread it thin. Cook until slightly browned, then flip and cook again until slightly browned on the other side. 
            This recipe will make a lot of crepes, but you really only need to save the 4 best ones to make crepes suzette. But what to do with the rest? Eat them, of course. Fill them 
            with Nutella, strawberries, condensed milk, sauteed mushrooms and cheese, I don't care.
            </p>
            <p className="story">
            Now that you have your 4 remaining crepes set aside, melt the butter in a pan and dissolve the sugar in it. Mix in the zest and juice of 1 orange. When it comes to a simmer, 
            dip half a crepe in the sauce and fold it into quarters. Repeat the process with the 3 other crepes and fit them in the pan. Now you see why this recipe accommodates 4 crepes, 
            because each one is folded into a quarter of the size. Flip them after 1 minute and cook until they're caramelized on the bottom.
            </p>
            <p className="story">
            Next step is the flambe. Be very careful here. Turn off the heat first, then add a splash of Grand Marnier. While the pan is NOT over the stove, turn the heat back on, 
            then gently put the pan back over. Alcohol is very flammable, so we want to control precisely when it gets set ablaze. If you have a gas stove, gently tilt the pan to the side 
            so some of the alcohol fumes catch on fire. Keep the flames away from you and continue gently shaking the pan until the alcohol burns out. If you have an electric stove, 
            try using a lighter, but still be incredibly cautious. If you're too nervous about doing this, that's totally okay, flambe is just for show. You can just cook out the alcohol 
            over the stove without setting the contents of the pan on fire. If you don't consume alcohol, skip that step entirely. Serve on a plate with some vanilla ice cream and enjoy.
            </p>
        </div>    
    );
}

export default Suzette;
