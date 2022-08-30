import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const ThanksgivingPie = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/lab">The Laboratory</Link></li>
                    <li><p>Thanksgiving Cottage Pie</p></li>
                </ul>
            </nav>
            <p className="mb-5">Your favorite Thanksgiving meals in one dish.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Cook the turkey on high until a sear forms, set aside.</li>
                    <li>Cook onion, garlic, and celery in the fond with 4 tbsp butter.</li>
                    <li>While you let it cook, start boiling the potatoes.</li>
                    <li>Add in a pinch of flour to the vegetables, then put the turkey back in, along with a spoon of tomato paste.</li>
                    <li>Once flour cooks a bit, add in chicken stock, herbs, and cayenne. Let the mixture thicken.</li>
                    <li>Once thickened, take off heat and stir in peas.</li>
                    <li>Remove, peel, and dry the potatoes. In the meantime, let milk and cheese heat up slowly over a double boiler</li>
                    <li>Push potatoes through a strainer or run across a fine grater.</li>
                    <li>Fold and mash potatoes gently into the dairy mixture over the double boiler until appropriate consistency is achieved.</li>
                    <li>Add salt and melt in 2 tbsp cold cubed butter to mashed potatoes.</li>
                    <li>Pour mince into a casserole dish and layer the potato over the top. Create a craggly surface on the top.</li>
                    <li>Add extra cheese on top and bake at 375F on the highest rack until top is browned.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                    <p>For the Mince:</p>
                    <ul>
                        <li>1 lb ground turkey</li>
                        <li>2 cups chicken stock</li>
                        <li>0.5 onions</li>
                        <li>4 stalks celery</li>
                        <li>1 spoon tomato paste</li>
                        <li>4 cloves garlic</li>
                        <li>4 tbsp butter</li>
                        <li>Salt</li>
                        <li>Pepper</li>
                        <li>Sage</li>
                        <li>Thyme</li>
                        <li>Cayenne</li>
                        <li>1 spoon flour</li>
                        <li>Handful frozen peas</li>
                    </ul>
                    <p>For the Potatoes:</p>
                    <ul>
                        <li>2 potatoes</li>
                        <li>2 tbsp butter</li>
                        <li>0.25 cup Milk</li>
                        <li>Cheddar cheese, grated</li>
                        <li>Salt</li>
                        <li>Pepper</li>
                    </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            The classic Thankgiving feast, while delicious, is quite the daunting task to make. Wouldn't you rather capture the spirit of Thanksgiving all in one simple dish? What if I told 
            you there was a way to combine turkey, stuffing, gravy, peas, and mashed potatoes all in one dish? Well, let's say you used ground turkey instead of whole turkey. Let's say you 
            cooked it with aromatics and herbs that would normally go with the bread in stuffing, along with a roux and some chicken stock that would normally make a gravy. If you top it with 
            some cheesy mashed potatoes, what do you have? A shepherd's pie! Well, technically there's no lamb, so it's a cottage pie, but you get the idea. All the classic smells and 
            ingredients of a Thanksgiving meal, all tucked into one big casserole dish.
            </p>
            <p className="story">
            That was the idea I had years ago, but I never got the chance to make it until much later. I didn't even end up cooking it on Thanksgiving, I just needed an excuse to 
            finally try it out. And I must say, it's fantastic. It's everything I thought it would be. Turkey, potato, gravy, all in one bite, with the rich, savory aromas of classic 
            Thanksgiving herbs. Delicious. The only problem is that I didn't make enough of it.
            </p>
            <p className="story">
            Start by cooking the ground turkey on high heat in a pot or high-walled pan. The idea is to sear the meat and break it up, not to cook it all the way through. When you get 
            that sear and some fond on the bottom of the pan, set the turkey aside. In the same pan over medium-low heat, add a generous amount of butter along with diced onion, 
            diced celery, and minced garlic. Potatoes take a long time to boil, so while your aromatics are cooking, start boiling those potatoes in a separate pot. I prefer Yukon gold 
            potatoes, but russets work here too. Sprinkle a big pinch of flour onto the vegetables, then put the turkey back in with a spoonful of tomato paste. The tomato paste, while 
            it has nothing to do with Thanksgiving, will add a bit of acidity and help pick up any remaining fond from the bottom of the pan. Give the flour a chance to cook for a few 
            minutes, then slowly stream in your chicken stock, mixing constantly. Add your herbs along with a pinch of cayenne for some heat. You can add more than sage and thyme if you 
            would like, as long as it's within the realm of Thanksgiving flavors. Let the mixture come up to a simmer, thicken, then take it off the heat and stir in the frozen peas.
            </p>
            <p className="story">
            By now the potatoes should be done, so remove them from the water, peel them, and let them dry out on some paper towels. Removing some moisture will help them be more fluffy. 
            Then add the milk and cheese to a bowl. Use however much cheese you prefer in your mashed potatoes, or even none at all if you don't care for cheese. Put the milk and cheese 
            over a double boiler. If you didn't dump out the water from boiling the potatoes, I recommend using that pot to create a double boiler easily. Then rice, grate, or strain out 
            the potatoes, depending on what utensils you have available. Put the potatoes in the double boiler and gently fold the mixture together with the hot milk and cheese. 
            Add salt to taste and take off the heat. Melt in 2 tablespoons of cold, cubed butter, using only a couple cubes at a time. Remember: hot milk, cold butter, perfect mashed 
            potatoes. Be sure not to mix the potatoes too much, as that makes them gluey and not fluffy.
            </p>
            <p className="story">
            Once all the butter is incorporated, put your mince that you set aside earlier into the casserole dish and gently top with a layer of mashed potato. Use a fork to create a 
            textured, craggy surface, and top with more cheese. Bake at 375F on the top rack of the oven until the cheese melts and the top gets browned. Cut squares using a spatula and 
            serve. This Thanksgiving-themed cottage pie is the first big experimental recipe I ever wrote. This idea and recipe are both entirely mine and I couldn't be prouder of this pie. 
            Come to think of it, I have no idea why this even counts as a pie, but it's so delicious that I don't care.
            </p>
        </div>    
    );
}

export default ThanksgivingPie;
