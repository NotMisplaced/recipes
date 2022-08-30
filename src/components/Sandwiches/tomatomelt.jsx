import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const TomatoMelt = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/sandwiches">Sandwiches</Link></li>
                    <li><p>Tomato Melt</p></li>
                </ul>
            </nav>
            <p className="mb-5">So good it made my friend cry.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Slice tomato and grate copious amounts of cheese on the side (equal parts cheddar and Monterey jack).</li>
                    <li>Spread a thin layer of mayo on one side of each bread slice.</li>
                    <li>Toast mayo-side-down on a skillet over medium-high heat.</li>
                    <li>Toast until golden-brown.</li>
                    <li>Flip and add grated cheese on both slices.</li>
                    <li>Lower the heat to medium-low and wait for cheese to melt. Make sure to move the bread around to pick up those burnt bits of cheese on the sides.</li>
                    <li>Add the tomato slices and season with salt and pepper.</li>
                    <li>Close the sandwich and press down slightly.</li>
                    <li>Continue to toast either side of the sandwich until bread is fully toasted and tomato is warmed through.</li>
                    <li>Cut as desired and serve.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>2 slices bread</li>
                    <li>1 Roma tomato</li>
                    <li>Cheddar cheese</li>
                    <li>Monterey jack cheese *</li>
                    <li>Mayo</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                </ul>
                </div>
                <p>* Any good melting cheese will work here.</p>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            Perhaps one of the simplest dishes, but a certified crowd-pleaser nonetheless. There's some little tips and tricks here that will revolutionize your sandwich making skills, 
            so pay attention and don't skip a single step.
            </p>
            <p className="story">
            First slice your tomato into even slices, about a centimeter thick. Too thin, and there's no point in calling it a tomato melt. Too thick, and it'll slide right out. 
            Grate the cheese in advance and keep it to the side. I like using a 50-50 blend of sharp cheddar for the flavor, and Monterey jack because it melts very well. 
            Feel free to use any cheese you like, as long as you can shred it and it will melt. Smoked gouda, pepperjack, or low-moisture mozzarella might be worth a try.
            </p>
            <p className="story">
            When it comes to toasting the bread, most people use butter. Some use olive oil. The true culinary wizards know that mayonnaise is the key to a perfect grilled sandwich. 
            Before you turn up your nose at the idea of this, think about what mayo is made of. Oil and egg yolk. This fatty mixture with a smoke point higher than butter will allow 
            you to get the perfect crispy crust on your toast. Furthermore, it is far easier to evenly spread mayo on bread than butter or olive oil. There are also small amounts of 
            spices and flavorings in mayo that will provide just the lightest oomph of flavor to elevate your sandwich to the next level. If you don't like the taste or texture of mayo, 
            don't worry! It doesn't even taste like mayo because we use such a small amount and it all gets toasted. So go ahead and spread a thin layer of mayonnaise on one side of each 
            slice of bread. I like using multigrain whole wheat bread, but any sliced sandwich bread should be fine.
            </p>
            <p className="story">
            Toast the bread mayo-side-down over medium-high heat. Once golden brown, flip over and add the grated cheese to both slices. Always add more cheese than you think you'll need. 
            When it melts, it seems like a lot less than what you put down. It's okay if some strands of cheese spill off the bread and start sizzling. Those will become little brown, 
            lacy, crunchy, delicious cheese crisps that will add a lot of flavor to the sandwich. Just make sure to move around the bread a little to pick up all of those crunchy bits. 
            Lower the heat to medium-low to prevent the bread from burning and wait for the cheese to melt. It might help to cover the skillet with a lid to speed up the process.
            </p>
            <p className="story">
            Put a layer of tomatoes on one of the slices, and try to cover as much surface area as possible. You might have to cut up a slice or two of the tomatoes to get it to fit. 
            Now for the most important part: SEASON YOUR TOMATOES! Nothing crazy, just some salt and pepper, but this makes such a big difference. That's most likely why so many people 
            are averse to tomatoes in sandwiches. Without seasoning, they're bland, moist pucks that take up space in your sandwich. But with just a sprinkle of salt, all the natural 
            flavors in the tomato are brought to the surface: a surge of sweet, sour, and umami, all from one simple ingredient. Don't ever let me catch you making a sandwich using 
            unseasoned tomatoes ever again.
            </p>
            <p className="story">
            Close the sandwich and press gently to glue the cheese onto the tomato. Continue to toast either side of the sandwich until the bread is fully toasted. Also, a hot cheese 
            sandwich with cold tomato is a bit weird, so this will also give time for the tomato to warm through. Cut diagonally (if you cut your sandwich any other way, don't talk to me) 
            and serve. I originally made this because I wanted a grilled cheese but I also needed at least one vegetable with my meal. Upon eating this, I felt warmed to my soul, 
            and it became a staple meal during my college years. It took me 2 years to realize it felt so comforting because it tastes like tomato soup and grilled cheese all in one 
            sandwich. Such a simple and cheap meal, but so unbelievably good.
            </p>
        </div>    
    );
}

export default TomatoMelt;
