import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const GajarHalwa = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/desserts">Desserts</Link></li>
                    <li><p>Gajar Halwa</p></li>
                </ul>
            </nav>
            <p className="mb-5">My mom's recipe for gajar halwa. An Indian dessert made with carrots.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Heat up ghee in pot until melted.</li>
                    <li>Add cashews and raisins into pot until raisins are plumped up and cashews have a little color on them.</li>
                    <li>Remove cashews and raisins, leaving the ghee in the pot.</li>
                    <li>Add carrots to the hot ghee and sauté until they're all coated in ghee, cooking for 4-5 mins on medium heat.</li>
                    <li>Add a cup and a half of whole milk.</li>
                    <li>Let the carrots cook in the milk, stirring occasionally so as not to let the milk burn (don't put a lid on it either).</li>
                    <li>Once all the milk is absorbed by the carrots and the carrots are fully cooked (may take 15-20 mins), stir in the sugar and continue cooking for about another 15 minutes.</li>
                    <li>Stir in milk powder and turn off flame.</li>
                    <li>Crush cardamom pods into a powder and stir it in along with the fried cashews and raisins from before.</li>
                    <li>Refrigerate until you're ready to serve. This recipe is best made the night before you eat it. Serve at room temp.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>4 cups coarsely shredded carrots</li>
                    <li>4 spoonfuls of ghee</li>
                    <li>7-8 cashews halved</li>
                    <li>1 handful golden raisins</li>
                    <li>1.5 cup whole milk</li>
                    <li>1.5 cups sugar</li>
                    <li>4 tbsp milk powder</li>
                    <li>5 cardamom pods</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            This is kind of like an Indian version of carrot cake. I'm not the biggest fan of it, but my friend wanted to know how to make it so I wrote down my mom's recipe. As you can 
            see, a lot of the recipe is based on feel rather than exact timings, so without experience, it's difficult to gauge. I've never even made this recipe myself, but it would 
            still be fun to try.
            </p>
            <p className="story">
            Start by heating up ghee in a large pot. Ghee (also known as clarified butter) is just butter with the milk solids separated out through cooking. It has a slightly nuttier 
            taste, a more unctuous texture, and is a staple in Indian cooking. Next, add the cashews and raisins and cook until the raisins are plump and the cashews develop a little color. 
            Remove the cashews and raisins, but keep the ghee in there, because we need to cook down the carrots in it. The name gajar halwa means carrot halwa in Hindi (halwa being a 
            dessert common in west, central, and south Asia). I've opted to call it gajar halwa instead of carrot halwa on this website because it's my mother's recipe and that 
            pronunciation is true to what I called it when I was growing up.
            </p>
            <p className="story">
            Cook the carrots in the ghee on medium heat for 4-5 minutes, coating every piece of carrot in it. Then add a cup and a half of whole milk. Don't use skim, you need the milkfat 
            in there. Milk boils over really fast and scorched milk is a big problem, so be sure to occasionally stir it. Eventually, the carrots will absorb the milk after about 
            15-20 minutes. When this happens, stir in the sugar and keep cooking for another 15 minutes. Stir in some milk powder and turn off the flame. I have no idea why we need 
            milk powder despite adding over a cup of milk, maybe just to get more milk per unit of milk. I think I'm just milking the joke at this point.
            </p>
            <p className="story">
            Crush up some cardamom pods into a powder and stir it in along with the fried cashews and raisins from the beginning. You didn't forget about those, did you? Refrigerate the 
            halwa, preferably overnight. Serve at room temperature and enjoy.
            </p>
        </div>    
    );
}

export default GajarHalwa;
