import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const EggSandwich = () => {
    return (
        <div id="eggsandwich" className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/sandwiches">Sandwiches</Link></li>
                    <li><p>Fried Egg Sandwich</p></li>
                </ul>
            </nav>
            <p className="mb-5">According to my mom, the best sandwich I've made for her.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Oil pan and toast bread.</li>
                    <li>Let pan cool while you mash avocado in a bowl.</li>
                    <li>Mix salt, pepper, and a squeeze of lime juice into avocado.</li>
                    <li>Spread onto both slices of bread.</li>
                    <li>Crack egg into pan over medium heat with olive oil.</li>
                    <li>Add salt to the whites and garlic powder over the yolk.</li>
                    <li>Flip over without breaking the yolk. Immediately add cheese over it.</li>
                    <li>Cover with lid until cheese melts and add red pepper flakes.</li>
                    <li>Place egg on one slice of bread and place baby spinach on top.</li>
                    <li>Close the sandwich, slice as desired, and serve.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>2 slices sourdough bread</li>
                    <li>1 egg</li>
                    <li>Baby spinach</li>
                    <li>1 avocado</li>
                    <li>1 lime (lemon works too)</li>
                    <li>Mexican 4-cheese blend *</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Garlic powder</li>
                    <li>Red pepper flakes</li>
                    <li>Olive oil</li>
                </ul>
                </div>
                <p>* Grated low-moisture mozzarella works here as well.</p>
                </div>
            </div>
            
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            My mom was too tired to make dinner one night, so she asked me to do it. I asked if a sandwich was okay and she agreed. I looked in the fridge and improvised. The result was 
            so good, my mom said it was the best sandwich I ever made.
            </p>
            <p className="story">
            Drizzle olive oil in a hot pan and toast 2 slices of sourdough. Once the bread is toasted, turn off the heat and let cool on a wire rack. While the pan cools off, mash up 
            an avocado in a bowl along with some salt, pepper, and a squeeze of lime juice. Spread the avocado mixture onto both sides of the bread. If you have guacamole on hand, 
            that's an acceptable substitute as well. Add a few tablespoons of olive oil to the pan and heat over medium. Crack an egg into the hot pan and season it by putting salt on the 
            whites and garlic powder on the yolk. The salt will help the whites set properly, and the garlic will pack the yolk with flavor. Flip over the egg, taking care not to break 
            the yolk. Immediately add cheese over it to ensure it melts as soon as possible. I like using a pre-shredded Mexican 4 cheese blend, but you can also use shredded low-moisture 
            mozzarella instead. Cover with a lid until the cheese melts and add some red pepper flakes over the cheese. You can cook your egg to desired doneness, but I prefer over medium. 
            I like having a runny yolk, but thick enough that it doesn't feel raw.
            </p>
            <p className="story">
            When the egg is done, place the egg on one slice of bread, top with some leaves of baby spinach, and then close the sandwich. I always slice my sandwich in half before serving. 
            If you leave your eggs a little runny like me, you'll be fortunate enough to see the yolk oozing out as you cut into it. Marvelous.
            </p>
        </div>    
    );
}

export default EggSandwich;
