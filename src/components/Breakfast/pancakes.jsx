import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Pancakes = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/breakfast">Breakfast</Link></li>
                    <li className="is-active"><p>Pancakes</p></li>
                </ul>
            </nav>

            <p className="mb-5">Here's my recipe for pancakes. And when I say pancakes, I mean pan CAKES. These are some thicc boys.</p>
            <div className="columns is-8 is-variable mb-6 has-background-light">	
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Sift and combine dry ingredients in large bowl.</li>
                    <li>Separate egg whites and yolk into separate bowls.</li>
                    <li>Whisk egg whites until they form soft peaks. It is not necessary to go quite this far, but it does make a difference.</li>
                    <li>Stir sugar into yolks until fully combined and color lightens slightly.</li>
                    <li>Add butter and vanilla to yolk mixture and stir until homogenous.</li>
                    <li>Stream buttermilk into yolk, whisking constantly to combine.</li>
                    <li>Gently fold egg whites with a spatula into buttermilk mixture, taking care not to deflate the whites.</li>
                    <li>Add wet mixture gently into dry ingredients, fold together until just barely combined.</li>
                    <li>Chill batter in fridge for 30-60 minutes.</li>
                    <li>Ladle batter into a pan lubricated with butter over medium heat. Do not disturb it after pouring.</li>
                    <li>Add whatever other ingredients you want to flavor the pancake (blueberries, chocolate chips, cooked bacon, etc.)</li>
                    <li>Flip when bubbles begin to pop in the middle of the pancake.</li>
                    <li>Cook on the other side for 30-60 seconds until browned.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                    <p>Dry Ingredients</p>
                    <ul>
                        <li>1 cup all purpose flour</li>
                        <li>1.5 tsp baking powder</li>
                        <li>0.5 tsp baking soda</li>
                        <li>Pinch salt</li>
                    </ul>
                    <p>Wet Ingredients</p>
                    <ul>
                        <li>3 tbsp sugar</li>
                        <li>1 cup buttermilk *</li>
                        <li>1 egg</li>
                        <li>2 tbsp melted butter **</li>
                        <li>0.5 tsp vanilla extract</li>
                    </ul>
                </div>
                <p>* Buttermilk can be made at home by thoroughly mixing equal parts yogurt and water</p>
                <p>** Can be substituted for coconut oil to add subtle coconut flavor if desired</p>
                </div>
            </div>
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I feel like it's important for everyone to know a few basic recipes, and one recipe everyone should know is buttermilk pancakes. 
            Pancakes are a staple breakfast food in the US and if you ever have guests over in the morning, you can wow them easily by serving them up a homemade short stack. 
            It's fun and delicious too! I wanted to be able to make the perfect thick and fluffy buttermilk pancakes from scratch, so I looked up a few recipes and tried them out. 
            The first was fine, but not thick enough. The second was certainly fluffy enough, but was lacking in sweetness and flavor. 
            By combining elements of both recipes, as well as experimenting with different ingredient amounts, I was able to create my very own recipe! 
            I encourage you to do the same in your cooking endeavors. Find what works and what doesn't, and roll with the changes.
            </p>
            <p className="story">
            We start this recipe by sorting out our dry ingredients. Sift a cup of all-purpose flour, 1.5 tsp of baking powder, 0.5 tsp of baking soda, and a pinch of salt into a 
            large mixing bowl. You'll notice that I use both baking powder and baking soda in this recipe. Both serve the purpose of leavening, which will create bubbles inside the batter 
            to help the pancakes rise. Baking powder contains some baking soda along with some acidic ingredients which react with the soda to release gas which creates bubbles 
            on the inside of the batter when cooking. But why use baking soda when you're already using baking powder? Baking soda has a very high pH which will neutralize some of 
            the acidity from the buttermilk and improve the browning as well as the rise of the pancake. However, baking soda's weaknesses are that it needs the buttermilk to activate, 
            and adding too much can change the taste for the worse (it's very strong!). But baking powder only needs liquid and heat (not acidity) to activate its leavening properties, 
            which means it's doing the bulk of the leavening here without changing the taste of the batter too much. Salt is added to bring out the flavor of the other ingredients, 
            and it always helps to add it to sweet dishes, even though it's just a pinch. Truth be told, I can't always be bothered to sift my dry ingredients, but it does make it 
            easier to avoid lumpy pancakes.
            </p>
            <p className="story">
            Then you want to separate your whites and yolks of your egg. As always, if you leave a little white in the yolk, you're fine. But yolk in the white is a no-no. 
            The reason is because we want to whip air into the egg whites, almost until it becomes a meringue. This is a very delicate process; you want to make sure your hands are 
            clean and dry. Always keep your whites in a clean, dry, cool, glass or metal bowl. Things like plastic, moisture, grease, soap, and dirt may interfere with the whipping 
            process if they make contact with the whites, causing them to not inflate properly. That being said, whip the separated whites into soft peaks with a whisk. 
            If you can't be bothered to put that much effort into making pancakes it is totally understandable, as long as you work in plenty of air you should be fine. 
            Now pour the sugar over the yolks. I don't know why, but I love the look of sugar poured on top of an intact egg yolk. Whisk it together, then stream in your choice of fat here. 
            I tend to go for melted butter, but if you want a slight coconut flavor, you can use coconut oil too. I've done it and it tastes great! 
            Be careful using different oils though, as when I was experimenting with this recipe I tried using olive oil. Big mistake. The texture was fine, 
            but you can really taste the choice of fat you use at this stage, and the flavor of olive oil belongs nowhere near pancakes. The point of adding the fat and sugar to the 
            yolks is to help dissolve them in the wet mixture, so when you add the buttermilk, you're not left with any loose bits of sugar or butter floating around. 
            Now add in the vanilla extract. Even though it isn't much, it has a huge impact on the flavor to the pancake. If you're trying to make a holiday version of this recipe, 
            you can try adding a teaspoon of cinnamon and a quarter teaspoon each nutmeg and allspice at this stage as well. Don't be afraid to experiment with the flavorings! 
            Now it's finally time for the buttermilk. I tend to use my mother's recipe for making buttermilk at home which is mixing equal parts yogurt and water until fully homogenous. 
            Buttermilk is like regular milk but far more acidic, which will help activate the baking powder, giving you a taller, fluffier pancake. Gently stream buttermilk into the yolk 
            mixture, whisking constantly until fully combined.
            </p>
            <p className="story">
            Now you have 3 bowls of stuff: your dry mixture, your wet mixture, and your airy egg whites. Despite all the leavening agents, one of the best ways to get air into the 
            pancakes is through the egg whites, which is why it's important to whip them until either very frothy or developing soft peaks. That is also why it's important to be careful 
            when you mix your ingredients together. You don't want to deflate those egg whites and knock out the bubbles. So fold in the whites with a rubber spatula into the wet mixture, 
            adding in one half of the egg at a time until just barely incorporated. Then add that mixture to your dry ingredients in the same manner, gently folding in one half of the wet 
            mixture at a time. Do not overmix here! By adding moisture to the flour, it encourages gluten development, which is necessary to hold the pancake together, but overmixing can 
            cause too much gluten development, which makes the batter very tight and the end product very chewy. Because I enjoy a tender texture to my pancakes, I recommend folding the 
            batter together until just combined. It's okay if the mixture isn't very smooth, as long as there are no big chunks of flour left. Leave the batter to rest in the fridge for 
            30-60 minutes. Resting will allow the gluten to relax and the flour to hydrate properly, which will improve the texture of the batter. I know it's hard to wait, but you can 
            use this time to put away the ingredients you don't need anymore, and you'll still have spare time to clean up the flour you spilled everywhere as well. 
            </p>
            <p className="story">
            Once ready, scoop a half-ladle of batter (adjust amount to your liking) onto a pan heated over medium heat and greased with butter. Do NOT touch that batter once it's on there. 
            Don't try and make the edges perfectly round, don't try and peek underneath it or jiggle it around. Just let it cook. Let those bubbles do their job undisturbed. 
            Bubbles really are the key to this whole recipe. They're the reason we added buttermilk, baking soda, and baking powder, and the reason we so meticulously fold in those 
            egg whites that took so much effort to whisk. Now watch as bubbles begin to form and burst slowly on the surface of the pancake. Now is the time to add your blueberries, 
            chocolate chips, or whatever topping you want Once you see bubbles begin to pop in the middle of the pancake, it's time to gently flip it over with your most trusted spatula. 
            Cook on the other side for 30-60 seconds until the bottom is browned and you can't see any raw batter from the sides. Don't get discouraged if the first pancake isn't great. 
            It might be a little underdone in the middle, in which case you should let the next one cook longer. It might not brown properly or rise evenly. Whatever the case is, it's 
            really good for learning what you need to adjust for the following pancakes, so just remember the Golden Rule of Pancakes: the first pancake is always sacrificial. 
            This rule applies to crepes, dosas, and other similar dishes as well. Enjoy your pancakes with syrup and any other toppings you might like.
            </p>
        </div>
    );
}

export default Pancakes;