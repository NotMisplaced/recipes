import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Gumbo = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/soup">Soups, Stews, &amp; Sauces</Link></li>
                    <li><p>Chicken &amp; Sausage Gumbo</p></li>
                </ul>
            </nav>
            <p className="mb-5">I got this recipe for Chicken and Sausage Gumbo from Binging With Babish. Credits are owed to Isaac Toups and Andrew Rea.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>First you make a roux: heat the oil on medium until shimmering and add the flour.</li>
                    <li>Constantly whisk roux over medium to medium high heat, taking care not to burn it until it becomes the color of dark chocolate.</li>
                    <li>Add the onion, celery, bell pepper, a pinch of salt, and bay leaves and cook until fragrant, then add the garlic.</li>
                    <li>Deglaze with beer, adding it in slowly.</li>
                    <li>Once homogenous, stream in the chicken stock.</li>
                    <li>While gumbo comes to a simmer, cut sausage into coins and pan sear the chicken with salt and pepper on high heat until a brown crust forms.</li>
                    <li>Add the meat to the simmering pot along with the spices and an aggressive amount of pepper.</li>
                    <li>Simmer with lid on for an hour.</li>
                    <li>Adjust seasoning as necessary and serve, preferably over white rice. Garnish with sliced scallion.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1 lb boneless, skinless chicken thighs</li>
                    <li>0.5 cup AP flour</li>
                    <li>0.5 cup vegetable oil</li>
                    <li>6 garlic cloves, minced</li>
                    <li>2 stalks celery, diced</li>
                    <li>1 small green bell pepper, diced</li>
                    <li>1 small white onion, diced</li>
                    <li>8 oz beer (a flavorful one)</li>
                    <li>4 cups chicken stock</li>
                    <li>2 bay leaves</li>
                    <li>1 lb andouille sausage</li>
                    <li>0.5 tbsp cayenne pepper</li>
                    <li>1 tbsp smoked paprika</li>
                    <li>Scallions</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Cooked white rice (optional)</li>
                </ul>
                </div>
                </div>
            </div>
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            Full disclosure, this chicken and sausage gumbo is the best thing I have ever cooked in my life. And while we're in the spirit of disclosure, 
            I must admit I did not write this recipe. This was taken from famous Cajun chef Isaac Toups when he made a guest appearance on Binging with Babish. 
            I haven't made much Cajun cooking, and really, I have no exposure to southern cooking or soul food at all, having grown up on the west coast. 
            But as always, the recipes you find here are in the spirit of trying new things, so I figured, why not give it a go? If you're like me and you've never had Cajun cuisine before, 
            let me take you on my journey of discovery and share some tips I picked up from the Cajun cooking community.
            </p>
            <p className="story">
            “First, you make a roux.” An introductory sentence that is the hallmark of most Cajun recipes. Roux is added to thicken liquid-based dishes like soups, stews, and sauces. 
            The thickening properties of roux come from flour, which has starch molecules that absorb water and swell up, causing an ordinarily thin liquid to become far richer in texture. 
            Of course, raw flour tastes like absolute cheeks, which can be mitigated by cooking it in fat. Keep in mind when cooking roux that thickness and flavor are inversely proportional. 
            A lightly cooked roux (white roux) will contribute no flavor, but is the best for thickening. This type of roux is used in bechamel sauce. A deeply toasted roux 
            (chocolate/dark-brown roux) has a far more complex flavor with nutty, earthy elements to it, but doesn't produce nearly as thick of a stew. This is the roux that is used in gumbo. 
            Start by getting your oil smoking hot in a pan and add an equal amount of flour. Whisk constantly to combine and keep whisking until you get the right color. 
            Patience is key, as you really want your roux to get to that dark chocolate stage. It's important to never stop whisking, as the roux is on such high heat that it will burn 
            if left alone. If you burn it, that's okay, just start over. It happens to everyone (not me though, because I'm perfect). The trick is to pay attention to the edges and 
            corners of the pot, and adjust the heat if you feel like it's darkening too quickly. The darker it gets, the more you have to whisk it to prevent burning. 
            The entire process takes me under 40 minutes, but you should be willing to spend well over an hour on this stage if you feel like you might burn it.
            </p>
            <p className="story">
            Once the roux looks like the color of dark chocolate, immediately add your trinity. Trinity in Cajun cooking refers to a combination of onion, celery, and green bell pepper. 
            This works much the same as a mirepoix (or sofrito, if you prefer the Italian term), but the sweetness of the carrot is replaced by that of the bell pepper. 
            I like to have these all diced up before even making the roux, as you can't really prepare the roux and the trinity at the same time. Once in the roux, 
            season lightly with salt to draw out some moisture and add the bay leaves for flavor. Bay leaves add a very subtle flavor. You don't always know they're there, 
            but they definitely add that extra oomph that kicks any stew up a notch. Once the vegetables cook down a little and release their fragrance 
            (it shouldn't take long, since they're practically flash-frying in the roux), add the minced garlic. It is important to add the garlic later because the vegetables cool down 
            the pot and add moisture which prevents the garlic from instantly burning.
            </p>
            <p className="story">
            Now you're ready to add the beer. Be sure to use a flavorful beer here, as it will enhance the taste of the gumbo. If you can't have beer for religious or health reasons, 
            I'm sure water will work fine as well. But if you're thinking about skimping out on beer because you dislike beer, please don't skip this step. 
            I served this recipe to a friend who detests the taste of beer and she loved it. Not only does most of the alcohol (over 75%) cook off, the beer flavor is more of a 
            background player that enhances the dish. The only way you would be able to tell the beer was there is if you were looking for it. Beer also serves the purpose of deglazing, 
            so you pick up any errant bits of flour or vegetables that stuck themselves to the bottom of the pot. Make sure the beer is cold, so it combines better with the roux. 
            In the words of Chef John of Food Wishes, “hot roux, cold milk, no lumps.” There's no milk in this recipe, but the principle stands. Whisk in the beer gradually. 
            If you bought a can bigger than 8 oz, feel free to take a couple sips as well. Have fun with it. Once all the beer is mixed in, stream in the chicken stock. 
            Keep whisking until it's all one big soup. This is going to cool down the pot quite a bit, and you need to wait for it to come back up to a simmer before adding other ingredients. 
            So let's go prepare those in the meantime.
            </p>
            <p className="story">
            The meat is the key to this whole thing. After all, it is called “chicken and sausage gumbo”. For the chicken, you want to use boneless, skinless thighs. 
            Thighs tend to be more flavorful and juicier than breasts, which is why we use them here. Get a pan smoking hot and add a little oil, like you're about to cook a steak. 
            Season the chicken with salt and pepper and lay onto the pan. When frying, always lay the food away from you to prevent oil splashing on you. Let the chicken sit for a minute 
            until it develops a beautiful brown crust. Flip and get a similar crust on the other side. This crust is caused by the Maillard reaction. Basically, a lot of complex chemical 
            processes occur with amino acids when proteins are broken down by excessive heat, adding a depth of color and flavor that turns any meat-based dish from good to great. 
            In order to get Maillard browning, the surface of the food must reach around 300 degrees Fahrenheit, which is why keeping your pan on very high heat is important. 
            You definitely don't want to burn or char the chicken so do be wary not to let it sit too long. By the time you take it off, the chicken should be a nice medium-rare. 
            Beautiful. Don't worry though, by the time the gumbo is done, that chicken will be so tender it'll fall apart in your mouth. As for the sausage, I highly recommend andouille, 
            but any smoked sausage will do. The sausage lends a wonderful, warm, smoky flavor that really ties the whole dish together. Slice the sausages into coins, about half-inch thick, 
            and add it to the pot along with the chicken thighs after the pot reaches a simmer.
            </p>
            <p className="story">
            Now for the seasoning. Add some cayenne and smoked paprika. Do not fear the cayenne, it won't make the gumbo too spicy. It's more of a gentle warmth that resonates 
            through your entire body, like being given a hug from the inside out. I never happen to have smoked paprika on hand, so I just use regular paprika and that works fine. 
            I usually just add paprika for color, as it doesn't taste like much, but I have recently found that, like the bay leaf, it adds a certain oomph to the dish that takes 
            it to the next level. At this point, I'm realizing this recipe takes so many things to the next level, it's no wonder it tastes this good. For the pepper, you're going to 
            want to trust me on this one. Crank freshly ground pepper into the pot until you feel discomfort in your wrist. Yes, I understand that's like over 30 cranks of pepper. 
            Yes, I know that's a lot. But that's what I heard from Isaac Toups, and he does this professionally, so take his word for it if not mine. This dish has a long time to cook, 
            and pepper mellows out pretty easily. If I want that pepper flavor to be very pronounced when I'm cooking, I usually add it closer to the end. But if I want it to be more 
            subtle and well-blended, like in gumbo, I add it while it still has plenty of time to simmer. Give the pot a quick stir and put a lid on it. Leave it to simmer for a full hour. 
            Yes, I understand you've been cooking a while already. Yes, I know that's a lot. But you want those sausages to plump up and release their flavor. You want that chicken 
            to become tender. You want that roux to cook all the way through (even though it's toasted, the flour will still taste chalky unless cooked for a long time).
            </p>
            <p className="story">
            After it's done cooking, give it a little stir. Break up the chicken a little into more manageable pieces using the whisk. Taste for seasoning, adjusting as necessary, 
            then slice up some scallions. You can eat this either as a stew on a bed of white rice or as a soup on its own. Either way, once it's in the bowl, top with the sliced 
            scallions and enjoy. Make this recipe and I defy you not to smile after the first bite.
            </p>
        </div>
    );
}

export default Gumbo;
