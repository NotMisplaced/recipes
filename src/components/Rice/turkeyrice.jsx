import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const TurkeyRice = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/rice">Rice &amp; Pasta</Link></li>
                    <li><p>Turkey Rice</p></li>
                </ul>
            </nav>
            <p className="mb-5">Very nutritious, flavorful, and high in macros. I ate this a lot while working out.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Start by cooking the rice.</li>
                    <li>Put olive oil, cayenne, turmeric, cumin, and mustard seed into a pan on medium heat.</li>
                    <li>Mince garlic and dice onion.</li>
                    <li>When mustard seeds begin to pop, turn heat to medium low and add onions and garlic.</li>
                    <li>Add ground turkey when the onions begin to sweat and break turkey into small pieces, mixing with the vegetables.</li>
                    <li>Season with a bit of salt and continue mixing meat and vegetables. Make sure there are no large chunks of turkey.</li>
                    <li>Dice mushrooms and tomato, and add them to the pan.</li>
                    <li>Season with salt and pepper.</li>
                    <li>Let cook until mushrooms shrink and then cover with lid for 2 minutes.</li>
                    <li>Take off lid and mix. Then form 3 empty spaces in pan.</li>
                    <li>Add eggs into the spaces and scramble them into the mix</li>
                    <li>Once the eggs are cooked but a lot of moisture is still left, turn off the heat.</li>
                    <li>Fold everything in the pan into the rice until turmeric has stained the whole dish yellow. You should not see a single grain of rice that is left white.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1 cup dry rice</li>
                    <li>0.25 yellow onion</li>
                    <li>1 clove garlic</li>
                    <li>0.25 lb ground turkey breast</li>
                    <li>3 crimini mushrooms</li>
                    <li>1 Roma tomato</li>
                    <li>3 eggs</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Cayenne</li>
                    <li>Cumin seeds</li>
                    <li>Turmeric</li>
                    <li>Mustard seeds</li>
                    <li>Olive oil</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I created this dish when I used to work out regularly to help me bulk. Heavy on protein, carbs, and fat to help you meet your macros. Heavy on flavor so you could eat 
            it every day and never tire of it. Of course, feel free to omit the eggs if you don't care for the taste or don't need the extra protein and fat. Don't be afraid to make it 
            your own. I sometimes add things like green bell pepper, carrots, or celery, depending on what's in the fridge.
            </p>
            <p className="story">
            While you wait for your rice to cook, put some olive oil, cayenne, turmeric, cumin seed, and mustard seed into a pan over medium heat. These are traditional Indian flavors, 
            and although this dish is not at all Indian, I'm glad I was able to use my knowledge of Indian cuisine to help me in inventing new dishes. Next, mince the garlic and dice the 
            onion. When the mustard seeds begin popping, that's when you know the spices are properly toasted. Add the onions and garlic, then turn the heat to medium-low. Once the onions
            begin to sweat, Add the ground turkey. Break up the turkey as much as possible and season with salt. Most people complain that turkey is too dry, but the little juicy nuggets 
            of meat in this dish do everything except disappoint. Next, dice up mushroom and tomato, then add them to the mix with some salt and pepper. Because these ingredients contain a 
            lot of water, they are key in preventing the turkey from drying out. Once the mushrooms lose some of their water, cover with a lid for 2 minutes. This will allow the tomatoes to 
            release all their moisture without it all evaporating away. Take off the lid and stir. 
            </p>
            <p className="story">
            Make 3 spaces in the pan and crack eggs into them. Scramble the eggs, mix everything together, and turn off the heat. The eggs should be fully cooked, but there should still 
            be a lot of liquid in the pan from the tomato. Fold the contents of the pan into the rice until the turmeric stains every grain of rice yellow. I call this process reverse 
            colonization, because we don't want any white remaining. Scoop into a plate or bowl and serve. This dish is very heavy in protein and carbs, making it a great 
            option for people trying to gain muscle without eating just bland chicken and plain rice. This dish has nutrients. This dish has spices. This dish nourishes. This dish satisfies, 
            guaranteed.
            </p>
        </div>    
    );
}

export default TurkeyRice;
