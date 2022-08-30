import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const FrenchToast = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/breakfast">Breakfast</Link></li>
                    <li><p>French Toast</p></li>
                </ul>
            </nav>
            <p className="mb-5">Nothing particularly French about it, but it tastes good so who cares?</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Leave bread on wire rack overnight to let it become stale.</li>
                    <li>Crack eggs into casserole dish or any dish deep enough to hold the dipping liquid but wide enough to fit a slice of the bread.</li>
                    <li>Whisk cinnamon, sugar, and salt until fully and evenly combined.</li>
                    <li>Slowly stream in milk and continue whisking.</li>
                    <li>Soak a slice of stale bread in dipping liquid until saturated. This should take no more than a couple of minutes.</li>
                    <li>Flip bread to soak other side and warm up a skillet over medium heat.</li>
                    <li>Once pan is heated, grease it with butter and toast the soaked bread.</li>
                    <li>While cooking one slice, place the next slice into the liquid.</li>
                    <li>Once browned on bottom, flip toast and cook on the other side until it's browned as well.</li>
                    <li>Serve on a plate with a generous dusting of powdered sugar. Using a sifter ensures even, gentle coverage.</li>
                    <li>Top with anything your heart desires.</li>
                </ol>
                </div>
            
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>3 thick slices brioche *</li>
                    <li>2 eggs</li>
                    <li>0.5 cups whole milk</li>
                    <li>2 tbsp sugar</li>
                    <li>0.5 tsp cinnamon</li>
                    <li>Pinch salt</li>
                    <li>Powdered Sugar</li>
                </ul>
                </div>
                <p>* Challah can also be used here. Other breads can work, but are not as good</p>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            In English, we call it French toast, but the French  call it “pain perdu” (lost bread). The recipe itself actually originates in the Roman Empire, 
            as detailed in the <em>Apicius</em>, a cookbook compiled by the Romans sometime around 400 AD. What?? Ancient Romans, making French toast? It sounds 
            so weird until you realize it's just bread soaked in milk and eggs and fried. Pretty simple, but the name we've given it in English makes it sound so fancy. 
            I started this recipe by looking up a basic recipe for French toast. Mix milk, eggs, cinnamon, and sugar, then dip some stale, thick-sliced bread in it and fry. 
            Sounds easy enough (and it really is) but there's a few tips and tricks I've picked up that might help you make your best French toast.
            </p>
            <p className="story">
            First we start with the bread. I've made this several times with just regular whole-wheat bread, and I must say, it really is subpar. 
            Your choice in bread really matters here, so opt for a brioche, challah, or similar bread here. If you can't get your hands on a bread like that, 
            you can use regular sliced bread as well and it'll be fine, but as I mentioned, it isn't nearly as delicious. I once went to the farmer's market with my roommate 
            and saw one stand selling loaves of chocolate chip challah bread. I knew right away I had to make this recipe with it, and I must say, it was the best French toast I ever made. 
            Cutting the bread into thick slices (about an inch thick at least) will allow it to develop the soft, custardy inside you expect from a classic French toast. 
            In order to absorb the liquid properly, it's important to use stale bread. After all, this recipe is a popular way to reconstitute old, dry bread. 
            The quickest way to get your bread stale is to spread out the slices on a wire rack overnight and let it dry out. That way, when you wake up, you're ready to make that 
            sweet, sweet toast.
            </p>
            <p className="story">
            For the dipping liquid, it is best to start by mixing the cinnamon, sugar, and salt into the eggs first, then add the milk after the other ingredients are evenly combined. 
            The order is important, because those who make French toast know adding cinnamon to a milk mixture leads to unevenly dispersed swirls of cinnamon. 
            However, when combined with the eggs alone, the cinnamon disperses evenly, and streaming in the milk slowly will lead to a dipping liquid that holds the cinnamon much better 
            than if the milk had gone beforehand. This liquid should be mixed and contained in a Tupperware or pie dish, whatever is wide enough to hold a slice of bread but deep enough 
            to soak the slice through (it doesn't need to be fully submerged). I've found that 3 thick brioche slices are enough to soak up the amount of liquid used in this recipe, 
            but you'd need to double the number of slices if using regular sliced bread. Remember that it's far better to have too much liquid than too much bread. 
            If you're like me and you don't like wasting any leftover liquid, mix some flour into it after you're done cooking and make a pancake or two for yourself. 
            They're not going to be great, but at least they're not going to waste.
            </p>
            <p className="story">
            French toast tastes fine on its own, but the toppings will elevate your breakfast to another level. I consider powdered sugar to be a necessity on French toast, 
            since it looks pretty and it adds a very delicate sweetness to the dish. Do not assume granulated sugar to ever be an acceptable substitute where powdered sugar is required. 
            Trust me, I once accidentally made a frosting recipe using regular sugar and it felt like I was chewing on candied sand. So take some powdered sugar and sift a little snowfall 
            onto your perfectly plated French toast. I like doing the powdered sugar after all the other toppings, but the order is up to you and it really depends on what toppings you use. 
            Maple syrup is a classic, but the possibilities are endless. You can slap some peanut butter and jelly on there and make a French toast PB&J. Or you could throw down a little 
            sriracha and mayo on there to make all your friends gag at brunch. Or maybe slather on some peanut butter and top with bananas and bacon bits for an Elvis-inspired take on it. 
            Cream cheese and basil? Sure! Greek yogurt with honey and chopped pistachios? Go right ahead! Condensed milk with fresh berries? Yes, as long as you save me a slice. 
            You can even take a look at some of my other recipes like my banana caramel or apple filling (both of which I made to eat with French toast). It's all up to you.
            </p>
        </div>
    );
}

export default FrenchToast;