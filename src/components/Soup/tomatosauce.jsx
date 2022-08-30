import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const TomatoSauce = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/soup">Soups, Stews, &amp; Sauces</Link></li>
                    <li><p>Tomato Sauce</p></li>
                </ul>
            </nav>
            <p className="mb-5">Goes great with pasta, gnocchi, or even works as a dipping sauce.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <p><u>NOTE:</u> If using San Marzano tomatoes, ignore steps 1-3.</p>
                <ol className="ml-1">
                    <li>Score an X on the end of the tomatoes.</li>
                    <li>Blanch for 30-60 seconds and place them in cold water.</li>
                    <li>Peel tomatoes and dice them (or blend them after peeling).</li>
                    <li>Mince the onion very finely and cook with basil, oregano, and red pepper flakes in enough olive oil to coat the bottom of the pan. Cook until the onions brown.</li>
                    <li>Thinly slice the garlic and cook in the oil until blond.</li>
                    <li>Flip bread to soak other side and warm up a skillet over medium heat.</li>
                    <li>Add the tomatoes.</li>
                    <li>Simmer over high heat, smashing tomatoes against side of pot. Reduce until it holds a line through the middle of the sauce.</li>
                    <li>Adjust seasoning as necessary.</li>
                </ol>
                </div>
            
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>2 cloves garlic</li>
                    <li>0.25 yellow onion</li>
                    <li>3 Roma tomatoes, or 1 can whole, peeled San Marzano tomatoes</li>
                    <li>Basil</li>
                    <li>Oregano</li>
                    <li>Red pepper flakes</li>
                    <li>Olive oil</li>
                    <li>Salt</li>
                </ul>
                </div>
                </div>
            </div>
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            Making your own tomato sauce at home is one of those little things that makes a big difference. You can control the flavors, the ingredients, 
            the texture, even the moisture level of the sauce for various applications. And believe me, there are so many applications for this recipe. 
            You can have this with pasta, gnocchi, meatballs, lasagna, pizza, sandwiches, or even drink it out of a vase to freak people out on the subway. 
            In any case, it's fun, rewarding, and kind of a big flex to be able to whip up fresh tomato sauce in 30 minutes for dinner.
            </p>
            <p className="story">
            The recipe starts with tomatoes. I recommend using a large can of whole, peeled San Marzano tomatoes. These are really good quality and absolutely worth it. 
            The reason why I prefer them whole is so I can control the texture of the sauce a little better. If you don't have these, or don't want to spring for them, 
            that's totally fine, I've got you covered. Just use 3 Roma tomatoes and you should be fine (though keep in mind that the texture and taste are going to be very different, 
            but still good). If you're using the fresh tomatoes, you don't want the skin on there, so use a knife to make an X on one end of each tomato and let them sit in boiling 
            water for about a minute. Fish out the tomatoes and cool off in cold water. This process allows the skin to come off easily without overcooking the tomato. 
            Once you peel them, dice them up into small cubes. You could blend them, but that incorporates a lot of air into the tomatoes, changing the color and texture, which is fine, 
            but I personally prefer the dicing method.
            </p>
            <p className="story">
            Now that the tomatoes are prepared, mince the onion as finely as you possibly can and cook with basil, dried oregano, and red pepper flakes in olive oil over medium heat. 
            You can use fresh basil or even fresh oregano if you want, but you don't have to. Keep in mind that overcooking fresh basil makes it bitter, so you want to keep this mixture 
            moving. Using a lot of olive oil (enough to coat the bottom of the pan) is important, because it's going to pick up all the little flavors from the aromatics and seasonings 
            make the sauce very flavorful. In the meantime, chop the garlic into paper-thin slices. I saw it in a scene in Goodfellas while they were making sauce, and that's how I cut 
            garlic for my sauces ever since. It's not just to try to look cool, the thin slices have a high surface area to volume ratio, making the shape ideal for leaching out the 
            aromatic compounds of the garlic into the sauce. Mincing them has a similar effect, but slicing allows you to see the garlic in the final product, and until you've had a 
            slice of garlic melt in your mouth, you haven't lived. Okay fine, maybe I just do it so I can pretend to be a cool Italian mobster, but the other stuff is still true. 
            You'll notice I limit myself to 2 cloves of garlic in this recipe. You can add more if you want, but if you're making Italian food, just remember that Italians don't 
            actually add that much garlic to their dishes at all, as that's more of an Italian-American thing. Add the garlic to the pan when the onions begin to brown. 
            If they seem a little too dark, that's okay too. The point of cutting them that finely is to get them to caramelize. The onion doesn't add a lot of onion flavor 
            because of this, but it does add a gentle sweetness which is good to balance the acidity of the tomatoes. Once the garlic goes from a stark white to a gentler blond color, 
            it's tomato time.
            </p>
            <p className="story">
            Add the tomatoes to the pan and crush them with a wooden spoon, simmering on high heat. The wooden spoon is non-negotiable when making this dish. 
            Every grandma knows that the wooden spoon picks up character over time with every dish you make and that all the love and experience that it accumulates will transfer 
            into your food. The first time I made this sauce, my spoon was new. I oversalted the sauce, didn't mash the tomatoes well, and the whole thing turned out a bit of a mess. 
            I must've made this recipe a hundred times since then, and now my spoon and I both know exactly how to make the perfect tomato sauce.
            </p>
            <p className="story">
            In addition to becoming smoother from crushing the tomatoes, the sauce should reduce and concentrate in flavor over time. While you're stirring it constantly, 
            it's important to let a little sauce accumulate on the edges or walls of the pan, as those bits will darken and deepen in flavor, essentially turning into tomato paste. 
            Once the little bits around the edges look like that, go ahead and mix them into your sauce. When the sauce thickens enough that you can draw a line in it with the spoon 
            and it doesn't flow back together, you're done. I call this point the Moses Stage, because you know you've reached it when you can part the Red Sea. Taste a little, adjust 
            seasoning, and store in a container that can't be stained by tomatoes.
            </p>
            <p className="story">
            If you need this sauce for pasta, warm some up in a pan, then when the pasta is cooked, dump the pasta plus a little pasta cooking liquid into the pan with the sauce. 
            The reason you use the pasta water is so you can reconstitute the concentrated sauce and make it more liquid again, and also because pasta water is seasoned well with salt 
            (or at least it should be if you want your pasta to taste good) and is high in starch that it picked up from the pasta. The starch allows for thickening, making a smooth, 
            creamy sauce. Toss the pasta, sauce, and water over a medium heat until the sauce becomes fully reconstituted by the water and the starch allows it to thicken slightly into 
            a cohesive sauce.
            </p>
            <p className="story">
            That's just one way to use this recipe. Like I said, there are many applications for tomato sauce. Feel free to make it your own as well. If you want to add a splash of 
            vodka or red wine, I've tried the latter and it's very good. Just make sure not to overdo it and to cook out as much alcohol as possible. If you want to add parmesan, 
            throw some in towards the end. This is your chance to make it your own. Put a lot of love and care into this one and the results will astound you.
            </p>
        </div>
    );
}

export default TomatoSauce;
