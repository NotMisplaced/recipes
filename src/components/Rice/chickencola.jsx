import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const ChickenCola = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/rice">Rice &amp; Pasta</Link></li>
                    <li><p>Chicken and Cola Stir-Fry</p></li>
                </ul>
            </nav>
            <p className="mb-5">The best chicken and rice I've ever had.</p>
            
            <div className="columns is-8 is-variable has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Salt chicken thighs on both sides.</li>
                    <li>Mix mayo with minced garlic, herbs, and spices in a bowl.</li>
                    <li>Smear mayo all over chicken and lay out on foil-lined baking sheet.</li>
                    <li>Add excess mayo marinade on top.</li>
                    <li>Bake at 400F for 30 mins.</li>
                    <li>Start cooking rice.</li>
                    <li>Thinly slice onions and fry in hot oil with red pepper flakes on a pan over high heat.</li>
                    <li>Thinly slice bell pepper and mince garlic, then add to the pan with a pinch of salt.</li>
                    <li>Stir-fry and allow a slight char to develop on the onion and bell pepper.</li>
                    <li>Add ginger, oregano, and paprika. Mix well.</li>
                    <li>When the spices release their aroma, add the soy sauce.</li>
                    <li>Continue to stir-fry for another 1-2 mins and add cola.</li>
                    <li>Reduce until the sauce coats the back of a spoon.</li>
                    <li>Add to the rice and mix well.</li>
                    <li>Once chicken is done cooking and has an internal temp of 160F, serve with the rice.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <p>For the Chicken:</p>
                <ul>
                    <li>2 boneless, skinless chicken thighs</li>
                    <li>0.33 cup mayo</li>
                    <li>2 cloves garlic</li>
                    <li>Paprika</li>
                    <li>Thyme</li>
                    <li>Rosemary</li>
                    <li>Oregano</li>
                    <li>Cayenne</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                </ul>
                <p>For the Cola Stir-Fry:</p>
                <ul>
                    <li>1 cup white rice, uncoooked</li>
                    <li>0.5 large yellow onion</li>
                    <li>0.5 large green bell pepper</li>
                    <li>2 cloves garlic</li>
                    <li>2 tbsp vegetable oil</li>
                    <li>2 tbsp soy sauce</li>
                    <li>.33 cup cola</li>
                    <li>1 tbsp ground ginger</li>
                    <li>1 tbsp paprika</li>
                    <li>1 tsp oregano</li>
                    <li>1 tsp red pepper flakes</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I found this recipe for chicken on TikTok. The person who made the video put mayo, salt, pepper, parmesan, and minced garlic on some chicken breasts and baked them in the oven. 
            I tried out the recipe and although it tasted great, it was missing something. A lot of things, actually. First of all, where's the spices? You think salt and pepper count as 
            spices? That's the bare minimum. Second, this is all just protein covered in fat. There's not a vegetable or complex carbohydrate in sight. No, if I were to make this recipe 
            again, I'd have to do better.
            </p>
            <p className="story">
            I opted to use boneless and skinless chicken thighs instead of breasts for their flavor and texture. I made sure to salt them well on both sides first, and mixed the mayo with 
            the garlic and some herbs and spices in a separate bowl. The herbs and spices consisted of a heavy shake each of paprika, freshly ground black pepper, thyme, and rosemary 
            followed a small shake each of oregano and cayenne. Now <em>that's</em> what I call seasoning. I also opted out of using the parmesan since I had recently run out, but feel 
            free to add it if you want. When making the mayo marinade, only use enough mayo to fully coat the chicken, so as to avoid waste or drowning the chicken mayo.
            </p>
            <p className="story">
            Preheat your oven to 400F and prepare a foil-lined baking sheet. Smear the marinade all over the thighs (the chicken's, not yours) and make sure all the little crevices are 
            completely covered. Once every inch of the chicken is properly dressed, lay them flat onto the baking sheet and add any leftover marinade on top. Bake for 30 minutes.
            </p>
            <p className="story">
            While waiting for that, now is the perfect time to make your cola stir-fry and rice. You read that right, we're using cola in the stir-fry. Start by cooking a pot of rice. In 
            the meantime, slice the onion and bell pepper thinly. Cook the onions in a pan with vegetable oil and red pepper flakes over high heat. Once they become slightly fragrant, add 
            the minced garlic and bell pepper with a pinch of salt. Keep the vegetables moving so they don't burn. Once you get a bit of a char on the onion and bell peppers, add ground 
            ginger, oregano, and paprika. Mix well to wake up the spices, then throw in a splash of soy sauce.
            </p>
            <p className="story">
            Reduce and cook down for 1-2 minutes until the vegetables absorb the flavor, then add the coke along with some black pepper. You might find it strange, but I think it works 
            very well. Coke is high in sugar and acidity, so by reducing it, you can easily make your own sweet and sour sauce. And it's not too overwhelming either, most of the cola 
            flavor dissipates as it cooks, so it actually blends in quite nicely. I got the idea when I saw some recipes for steak with a cola-based marinade that had soy sauce in it. 
            The cola will reduce to the point where it coats the back of a spoon and a line can be drawn through it. That means it's good to go. Add it over your rice and mix well to 
            distribute the flavor. Adjust seasoning as necessary.
            </p>
            <p className="story">
            Chances are, your stir-fry will be done before the chicken. That's okay, just put a lid on the rice and wait for the chicken to be done. To be safe, check if the thighs are hot 
            enough (the chicken's, not yours) by inserting a meat thermometer into the thickest part of the chicken. It should clock in at 160F for safe consumption. If it's too low, let it 
            keep cooking until it reaches the target temp. I find that the marinade and the short cooking time keep the chicken relatively moist even when fully cooked. Serve the chicken 
            beside the rice on a plate and enjoy. I personally like using a fork to shred up one bite of chicken at a time and eat it with a forkful of rice and vegetables. Now, is this 
            recipe healthy? Goodness no, I hope you gave up on that the second I told you to rub chicken thighs with mayonnaise. But is it good? Oh you bet.
            </p>
        </div>    
    );
}

export default ChickenCola;
