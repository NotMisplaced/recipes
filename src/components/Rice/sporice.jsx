import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const SPORice = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/rice">Rice &amp; Pasta</Link></li>
                    <li><p>SausagePeppers&amp;Onions</p></li>
                </ul>
            </nav>
            <p className="mb-5">Sausage. Peppers. Onions. SausagePeppers&amp;Onions.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Start by cooking the rice.</li>
                    <li>In the meantime, cut onion into thin slices and stir fry in fat of choice over high heat with red pepper flakes.</li>
                    <li>Cut bell pepper into thin slices as well and mince garlic.</li>
                    <li>Once onion is translucent, add in peppers and garlic. Season with salt and paprika.</li>
                    <li>Cut sausages into coins and add them to the pan once the peppers are cooked through and some browning occurs on the vegetables.</li>
                    <li>Stir fry for 1-2 minutes and then cover with a lid. Cook on low heat for 5 minutes.</li>
                    <li>Uncover and stir in oregano and black pepper, then cook again with lid on for an additional 5 minutes.</li>
                    <li>Stir a splash of soy sauce in the rice. Every grain of rice should have some color on it.</li>
                    <li>When the soy sauce is fully incorporated, turn off the heat and pour the sausagepeppers&onions with all the flavored oil onto the rice.</li>
                    <li>Mix thoroughly and serve with sliced scallions as a garnish.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1 cup white rice, dry</li>
                    <li>2 sausages</li>
                    <li>0.5 red bell pepper</li>
                    <li>0.25 yellow onion</li>
                    <li>2 cloves garlic</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Paprika</li>
                    <li>Oregano</li>
                    <li>Red pepper flakes</li>
                    <li>2 tbsp bacon grease or olive oil</li>
                    <li>Soy sauce</li>
                    <li>2 scallions</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            Sausage, peppers, and onions. A classic combination in Italian cooking, and for good reason. But stir fried with bacon grease and soy sauce, then served over rice? 
            A game changer for sure.
            </p>
            <p className="story">
            Start by cooking your rice in a pot. While you're waiting on the rice, slice up the onion and bell pepper thinly and mince the garlic. Stir fry the onion in a skillet over 
            high heat with red pepper flakes in bacon grease if you have it. If not, olive oil is fine. The trick to stir fry is stirring it as you fry it. Sounds tautological, sure, 
            but seriously, stir frying is all about using high heat to cook quickly, so keep it moving so you don't burn anything. Once the onion becomes translucent, add the peppers and 
            garlic, along with a sprinkle of salt and a hefty shake or two of paprika. 
            </p>
            <p className="story">
            Slice up the sausages into coins. I prefer using Italian sausage or smoked sausage, but any sausage will do. When the onion and bell pepper both start getting slightly browned, 
            add the sausage and stir fry for 1-2 minutes to get some color on the sausages. Cover with a lid and cook on low heat for 5 minutes. Uncover, stir in a small amount of oregano 
            and a large amount of black pepper, then put the lid back on for another 5 minutes.
            </p>
            <p className="story">
            Stir a splash of soy sauce into the rice, which should have finished cooking by now. Make sure every grain of rice has some color on it. Turn off the heat on the skillet and 
            pour the sausagepeppers&onions onto the rice. Make sure to use a clump of rice to mop up all the oil and stray bits of flavor left in the skillet so everything makes it into 
            the rice. Mix thoroughly and serve with sliced scallions as a garnish.
            </p>
        </div>    
    );
}

export default SPORice;
