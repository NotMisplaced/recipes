import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Gastrique = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/soup">Soups, Stews, &amp; Sauces</Link></li>
                    <li><p>Apple Cider Gastrique</p></li>
                </ul>
            </nav>
            <p className="mb-5">A sweet and sour sauce. Sounds fancy. And it is.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Pour sugar and water in a small saucepan and bring to a simmer. Do not agitate it.</li>
                    <li>Warm up apple cider vinegar while you wait for the sugar to caramelize.</li>
                    <li>Once the caramel reaches the desired color (I prefer darker), take it off the heat and pour in the vinegar.</li>
                    <li>Put it back onto medium-high heat and stir until the sugar is fully dissolved in the vinegar.</li>
                    <li>Throw in pepper and cinnamon and continue to cook until the gastrique reduces and slightly thickens (should have a syrupy consistency).</li>
                    <li>Turn off the heat, stir in a pinch of salt, and let cool for a few minutes before straining into a container of your choice.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>0.5 cup sugar</li>
                    <li>0.25 cup water</li>
                    <li>0.5 cup apple cider vinegar</li>
                    <li>Coarsely crushed black peppercorns (optional)</li>
                    <li>Cinnamon stick (optional)</li>
                    <li>Pinch salt</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I'm one of the best cooks my friends know, but I'm the worst cook in my family. That's why it's a delight when they let me help out in the kitchen. I remember once, during 
            Thanksgiving, we split up different tasks. I was in charge of roasted brussels sprouts and cranberry sauce. Of course, I wasn't planning on serving brussels sprouts alone, 
            so I had the idea to make an apple cider gastrique. A gastrique is basically a combination of caramel and vinegar of some kind, which creates a sweet and sour sauce that goes 
            well with scallops, roasted vegetables, and much more. This is based on a couple recipes I found online with some minor modifications.
            </p>
            <p className="story">
            Start by pouring the sugar and water into a small saucepan and bring it to a simmer. It may be tempting to stir, but don't. It will cause the caramel to harden, and we want it 
            to remain liquid. In the microwave, heat up the apple cider vinegar. It doesn't need to be simmering, just make sure it is above room temperature. Caramelizing sugar is 
            incredibly hot, so if you splash a bunch of cool liquid in it, it'll start bubbling and splattering boiling sugar everywhere, which will be immensely painful if it gets on you. 
            Keep a good watch over the caramel. Caramel goes from brown to burnt in a matter of seconds if you're not careful. Once the desired color is achieved (around a maple syrup 
            color), turn off the heat.
            </p>
            <p className="story">
            CAREFULLY pour in the hot vinegar. Put it back onto medium-high heat and stir until the sugar is fully dissolved. Throw in peppercorns and cinnamon stick if desired 
            (along with any other desired whole spices), and reduce the gastrique slightly. It should coat the back of a spoon and should have a slightly syrupy viscosity. Turn off the heat, 
            stir in a pinch of salt, and let cool for a few minutes. Strain out the spices using a fine mesh sieve. This is why we used a cinnamon stick and coarse pepper, so that the sieve 
            would be able to separate them, leaving you with a beautiful container of liquid gold. If you are averse to the pungency of apple cider vinegar, any cooking vinegar will do fine, 
            but you forgo the apple flavor. This was a hit at Thanksgiving and I wouldn't shut up about how proud I was of making something so fancy, much to my family's annoyance.
            </p>
        </div>
    );
}

export default Gastrique;
