import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Pizza = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/misc">Misc.</Link></li>
                    <li><p>Pizza</p></li>
                </ul>
            </nav>
            <p className="mb-5">Ethan Chlebowski's recipe for quick, weeknight pizza.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Put yeast and a spoonful of flour in the warm water. Stir and let sit for 5 mins until it begins foaming. If the yeast doesn't react, start over with new yeast.</li>
                    <li>Combine salt and flour in a large bowl.</li>
                    <li>Add wet mixture to the bowl and combine by hand until cohesive (about 2 mins).</li>
                    <li>Cover and rest for 15 mins.</li>
                    <li>Dip fingers in cold water and pull one side of dough, folding it over onto itself, repeating around the circumference of the dough.</li>
                    <li>Turn out onto a clean counter and slap and fold dough for 5 mins or until it can hold a translucent window pane.</li>
                    <li>Cover and let rest for 40 mins in a bowl.</li>
                    <li>Drizzle olive oil on it and fold edges onto the top like in step 5.</li>
                    <li>Divide in half and round out on table.</li>
                    <li>Oil up bowl and let dough balls rest for another 30 mins.</li>
                    <li>Make pizza, bake at 450F.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>320 mL water (at 105 deg F)
                    <li>8g yeast</li>
                    <li>400g flour</li>
                    <li>8g salt</li></li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            This recipe is from Ethan Chlebowski's recipe for spicy garlicky weeknight pizza. I've tried making pizza from scratch in the past and it never worked (except for pineapple 
            upside-down deep-dish pizza, but that's another story). I have yet to try this one out, but it looks easy to do, and with the right patience, I think I can finally make myself 
            some good pizza.
            </p>
            <p className="story">
            Start by putting the yeast in warm water with a spoonful of flour. Stir and let sit for 5 minutes. The warm water will activate the yeast and they will begin feeding on the 
            flour (if they are alive). If so, the yeast will begin foaming. If not, the yeast is dead. Start over with new yeast. Combine salt and flour in a large bowl, then add the yeasty 
            water to it. Combine by hand for 2 minutes until cohesive. This dough is very well hydrated, even for pizza, so it will be sticky. Be patient, stay calm, use flour to get excess 
            dough off your hands. Just trust the process. Cover and let the dough rest for 15 minutes.
            </p>
            <p className="story">
            Dip your fingers in cold water, pull one side of the dough, fold it onto itself, and repeat the process around the circumference of the dough. Turn out onto a clean countertop. 
            Knead by slapping the dough onto the counter and folding over for about 5 minutes until it passes a windowpane test. The windowpane test is used to check if gluten has developed 
            enough in a dough. Try stretching out a piece of a dough into a rectangle in your hand, as thin as possible. So thin that light can pass through it. If it can hold as a 
            rectangle that thin, the gluten is well developed. Cover and let rest for 40 minutes back in the bowl.
            </p>
            <p className="story">
            Drizzle olive oil on it and fold it over on itself like you did before. Divide it in half, since this is enough for 2 pizzas. Form into balls on the counter, drizzle olive oil 
            into the bowl, and put the dough balls back in. Rest for another 30 minutes. Take out a ball, shape it into a pizza on your pizza cooking surface, top with sauce, cheese, 
            and whatever else you like. Bake at 450F on the top rack for a few minutes until the crust looks done and the cheese has melted.
            </p>
        </div>    
    );
}

export default Pizza;
