import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const NoodleSoup = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/soup">Soups, Stews, &amp; Sauces</Link></li>
                    <li><p>Noodle Soup</p></li>
                </ul>
            </nav>
            <p className="mb-5">Here's a good starting point for a basic noodle soup you can make from scratch right at home.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Create a well of flour and add beaten eggs and oil. Season lightly with salt.</li>
                    <li>Stir flour into eggs with a fork until it becomes kneadable.</li>
                    <li>Knead dough for 7-10 mins until smooth and elastic.</li>
                    <li>Let rest 30 mins at room temp covered in plastic wrap.</li>
                    <li>Cut into manageable pieces and roll out.</li>
                    <li>Laminate the dough and roll it out into a translucent rectangle.</li>
                    <li>Cut into preferred pasta shape.</li>
                    <li>Dice mirepoix (onion, garlic, celery), mince garlic. Cut any other vegetables you might want to add.</li>
                    <li>Melt butter in pot and add mirepoix over medium heat.</li>
                    <li>Once the vegetables become fragrant, sprinkle in flour and season with cayenne and thyme.</li>
                    <li>Cook down the flour until blond in color, about 5 mins.</li>
                    <li>Stream in cold water slowly in batches, constantly stirring to make sure the roux dissolves. Fill to desired level.</li>
                    <li>Bring to a boil, turn down heat, cover, and let simmer for 10-15 mins.</li>
                    <li>Add pasta and garlic and boil for about 1-2 minutes until pasta is cooked.</li>
                    <li>Season to taste with salt and pepper. Serve and finish with a glug of olive oil.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                    <p>For the Noodles:</p>
                    <ul>
                        <li>2 eggs</li>
                        <li>Flour</li>
                        <li>Olive oil</li>
                        <li>Salt</li>
                    </ul>
                    <p>For the Soup:</p>
                    <ul>
                        <li>1 tbsp flour</li>
                        <li>2 tbsp butter</li>
                        <li>0.5 onions</li>
                        <li>2 carrots</li>
                        <li>2 stalks celery</li>
                        <li>2 cloves garlic</li>
                        <li>Pepper</li>
                        <li>Salt</li>
                        <li>Cayenne</li>
                        <li>Thyme</li>
                        <li>Olive oil</li>
                    </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            Sometimes I have trouble falling asleep at night. When that happens, I get bored. Usually I just watch YouTube until I get tired, but one night, for whatever reason, 
            I stayed up and wrote a recipe for vegetable noodle soup from scratch. I just wrote it for kicks, it wasn't until months later that I found it in my notes and decided to make it. 
            And somehow, without ever needing to tweak the recipe through trial and error, I managed to write a perfect soup recipe in that one sleepless night. Soup is an incredibly 
            versatile group of dishes, so this recipe will show you not only the technique for making a good soup base that can be used for chicken noodle or veggie noodle soup, 
            but also how to make fresh pasta in your kitchen from scratch.
            </p>
            <p className="story">
            Start by making the noodles. This recipe doesn't use many measurements, because this is something that is best learned with practice and made with instinct. 
            Dump out some all-purpose (or 00 flour if you can find it) onto a clean, dry countertop. Make a crater in the middle of the flour mound you've created to make a well just 
            big enough to hold 2 eggs. Crack the aforementioned eggs into a bowl, whisk together and pour them into the well. This dough dries out very quickly, so add a drizzle of olive oil 
            over the top and sprinkle a little salt for seasoning. Using a fork, start bringing clumps of flour into the egg mixture and whisking to combine. Continue until a moist dough 
            forms. It's okay (it's actually preferable) if you don't use all of the flour on the counter. Use your hands to start kneading the dough. If there are still wet portions of the 
            dough, roll it in some flour and continue to knead. The flour on the counter is now acting as a non-stick coating and preventing the tacky dough from gluing itself to the table.
            </p>
            <p className="story">
            Knead it for about 10 minutes until the dough becomes smooth. When poked, it should start to spring back due to the gluten development. Form into a ball, cover tightly on all 
            sides with plastic wrap, and let rest for 30 minutes at room temperature. As I mentioned before, all that kneading has caused gluten to develop. Gluten is a protein that becomes 
            increasingly complex the more you mix flour with water. This will keep the dough held together and give it a nice chew, but that tightness also makes it more difficult 
            to roll out, as it tries to retain its shape like a rubber band. Resting the dough, even for half an hour, will let the dough finish hydrating slowly and allow the gluten to 
            relax, which will make all the difference in the world.
            </p>
            <p className="story">
            Once your dough wakes up from its little power nap, cut it into quarters. Rolling out the dough one quarter at a time will make it easier to work with, but the tradeoff is that 
            some pieces of dough may dry out sooner than others, so you'll have to work quickly. Sprinkle down some bench flour (that's the fancy term for putting flour on a surface so the 
            dough doesn't stick) and put some flour on your rolling pin as well. Roll out slightly and fold the dough lengthwise in thirds. This is known as laminating the dough and it 
            creates layers in the dough which give it a better texture. Roll out the folded rectangle, making sure it's as even as possible, until it's so thin that it becomes translucent. 
            They say you should “be able to read a love letter through it”, but since nobody writes me those, I roll it out until I can see my fingers through it when I hold the dough under 
            the light. At this stage, the pasta is ready to cut. Fold it gently, so as not to crease it, then cut thin strips. Unfold the strips and dust with some extra flour. 
            Bunch them in a nest and make strips out of the rest of the dough and let them dry out on the counter. The advantage to making noodles from scratch is not only flavor, 
            but you could theoretically make whatever shape you wanted, not just noodles. Try mixing it up by cutting the sheets of dough into small rectangles and pinching the middle to 
            create little bowties!
            </p>
            <p className="story">
            Now that the noodles are taken care of, only one part of Noodle Soup remains. Dice up onion, carrot, and celery into similar sized pieces in roughly equal amounts. 
            This trio of vegetables is called a <em>mirepoix</em> in French (or <em>sofrito</em> in Italian). They act as aromatics, lending a tremendous amount of well-balanced flavor to 
            virtually any dish. At this stage, you can also mince the garlic and chop up any other vegetables you might want to add.
            </p>
            <p className="story">
            If you plan on using meat, cut it on a separate cutting board with a clean knife, season the meat with salt and pepper, and turn your pot onto high heat. Add a small amount of 
            a neutral oil such as vegetable oil and sear the meat. It is not important to cook the meat all the way through at this stage, the whole point of this is to develop a brown 
            crust on the outside of the meat as fast as possible. This is known as the Maillard reaction, and the caramelized proteins that result from it provide an incredible depth of 
            flavor that takes your dish from okay to mind-blowing. Take out the meat when the crust forms and you'll see some rendered fat and brown residue in the pan. Do not clean that out. 
            The fat contains flavor, and the brown stuff, called “fond”, is going to give the soup that depth of flavor that was mentioned earlier.
            </p>
            <p className="story">
            Whether or not you are using meat, the next steps are the same. Melt the butter in the pot over medium heat and add the mirepoix. Use the vegetables to try and pick up the fond 
            from the bottom of the pot if you seared meat in it earlier. Once the vegetables become fragrant, sprinkle in a spoonful of flour and season with cayenne powder and thyme. 
            When mixed with butter, the flour will become a roux. This paste-like substance is often used to thicken soups and sauces. The more flour, the more starch, the thicker the soup. 
            Roux must be cooked through unless you want your soup tasting like raw flour. For this recipe, let the roux come to a blond color. The darker the roux gets, the less thick the 
            soup, but the more flavor it adds. In Cajun cooking, it is common to cook roux until it reaches the color of peanut butter or even chocolate to add an earthy, nutty flavor. 
            However, when making bechamel sauce, the roux should remain white in order to keep the sauce as thick and creamy as possible. For a soup, you want it thicker than water but 
            thinner than a sauce. Because we want to get some of that nutty flavor, we slightly toast the roux until it becomes blond. but we don't go further, since we want to retain its 
            thickening power when using such a small amount of flour.
            </p>
            <p className="story">
            Once the roux is blond and has taken on a toasted smell, the thyme should be fragrant and the mirepoix should be cooked properly. That's the time to add the water. 
            There's a saying I heard from Chef John from Food Wishes: hot roux, cold milk, no lumps. Of course, in this case, we're using water instead of milk, but the principle stands. 
            To avoid your soup from becoming lumpy, stream in cold water slowly, stirring as you go to dissolve the roux. The amount of water depends entirely on how much soup you want. 
            If any fond still remains on the pot, take this opportunity to make sure it gets dissolved into the soup. Bring it to a boil and add the meat or other vegetables you wanted to 
            add. Cover, turn down the heat, and simmer for about 10-15 minutes to cook the newly added ingredients. Go at least 15 minutes if using meat to ensure it cooks fully. 
            This will also allow the starch molecules in the roux to take on the water and thicken the soup.
            </p>
            <p className="story">
            At this point, uncover the soup and bring back up to a boil. Shake off as much excess flour from the noodles as possible and add them to the pot along with the minced garlic. 
            I like adding garlic at the end of a soup to get a fresher flavor, but some people like the sauteed garlic flavor better. If that's the case, add the garlic with the mirepoix 
            instead. Or if you're a serious garlic-head, double the amount of garlic and add one half at the beginning and one at the end. Boil for 1-2 minutes until the pasta comes to 
            an al dente stage. Because the pasta is fresh, it won't need to cook longer. Taste the soup, season with salt and pepper to taste, and turn off the heat. Keep in mind that 
            you'll need a lot of salt, since we didn't use any thus far. Soup is often best seasoned closer to the end to get the amount of salt just right.
            </p>
            <p className="story">
            Serve the soup, making sure to get a little bit of everything in each bowl. Drizzle a glug of olive oil over the top and enjoy. The only ingredients I listed are a mirepoix, roux, 
            garlic, a couple basic seasonings, olive oil, noodles, and water. Very simple, but this is just the bare essentials. In the past, I've added things like mushrooms, peas, 
            ground turkey, chicken breast, and bell peppers, depending on what I had in the kitchen at the time. Feel free to experiment with the ingredients according to your tastes, 
            including the herbs and spices. Make it your own and make it good.
            </p>
        </div>
    );
}

export default NoodleSoup;
