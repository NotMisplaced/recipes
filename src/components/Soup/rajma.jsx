import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Rajma = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/soup">Soups, Stews, &amp; Sauces</Link></li>
                    <li><p>Rajma</p></li>
                </ul>
            </nav>
            <p className="mb-5">My personal favorite food. I wish I could make it as well as my mom.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Soak the kidney beans in water for 10 hours. Skip this step if using canned beans.</li>
                    <li>Put bay leaves and cumin seeds in hot oil.</li>
                    <li>Finely dice onion and add it to the pot, then add ginger (grate it if using fresh ginger).</li>
                    <li>Finely dice 2 tomatoes.</li>
                    <li>When onion is sweated, add tomato, 3 tbsp coriander powder, 1 tbsp cumin powder, 1 tsp fennel, and salt.</li>
                    <li>Add 1 tbsp tomato paste (optional), turmeric, and cayenne once flavors are combined.</li>
                    <li>Cook down until paste-like and shiny, making sure to break down the tomato.</li>
                    <li>Add beans and half as much water. Add more water if necessary. Beans should be fully submerged.</li>
                    <li>Put on the lid and cook until everything comes together, about 5-10 minutes.</li>
                    <li>Chop up cilantro and stir it in.</li>
                    <li>Serve over rice with ghee.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1.5 cup dry kidney beans (2 cups canned)</li>
                    <li>1 yellow onion</li>
                    <li>2 bay leaves</li>
                    <li>0.5 tbsp cumin seeds</li>
                    <li>3 tbsp vegetable oil</li>
                    <li>0.5 inch fresh ginger (or 1 tbsp ground ginger)</li>
                    <li>2 tomatoes</li>
                    <li>3 tbsp coriander powder</li>
                    <li>1 tbsp ground cumin</li>
                    <li>1 tsp fennel powder</li>
                    <li>1 tbsp tomato paste (optional)</li>
                    <li>0.5 tsp cayenne</li>
                    <li>0.5 tsp turmeric</li>
                    <li>Cilantro</li>
                    <li>Salt</li>
                </ul>
                </div>
                </div>
            </div>
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            If you could choose your last meal, what would you have? I know mine would be my mom's rajma, no contest. Rich, spicy gravy with ruby-red kidney beans poured lovingly over a bed 
            of basmati rice. That's the good stuff. It's nutritious, delicious, and incredibly filling. If my mom makes it, I just know I'm going to be eating rajma and rice for lunch for 
            the next 3 days. I'm sorry to say that you'll never make it as good as my mom. I can't do it either, that's for sure. But that shouldn't stop you from trying, because even if 
            you mess it up, it's hard to beat a dish that's this good.
            </p>
            <p className="story">
            Start by preparing your kidney beans. After all, that's what “rajma” means in Hindi: kidney beans. If you're doing this the right way, you'll use a cup and a half of dry kidney 
            beans. You'll soak them in cold water overnight for about 10 hours before cooking with them. You'll begin boiling them in a separate pot while you prepare the rest of the curry, 
            since they'll need to boil at least an hour to cook through. Of course, if you're not fond of using more than 1 pot or if you're lazy like me, you'll just use 2 cups of canned, 
            pre-cooked kidney beans. You will, of course, save hours of time, but the trade-off is a major reduction in the quality of the flavor.
            </p>
            <p className="story">
            While your soaked beans are boiling (or your canned beans are sitting in their can), begin heating up 3 tablespoons of vegetable oil on medium high heat. When shimmering, 
            add bay leaves and half a tablespoon of cumin seeds. While that toasts, chop up 1 medium onion finely and add it to the pot along with the ginger. Let the onion sweat out 
            and move it occasionally. In the meantime, finely dice 2 tomatoes and add them once the onion is translucent along with 3 tablespoons coriander powder, 1 tablespoon cumin powder, 
            1 teaspoon of fennel, and a pinch of salt. Do not skip any of these spices, omitting a single one will change the flavor completely, trust me. Once you mix everything together, 
            add turmeric and cayenne powder along with a spoonful of tomato paste. The tomato paste isn't necessary, but it does add flavor, richness, and speeds up the cooking process a bit, 
            since you don't have to cook the tomatoes as much. Stir as you cook, mashing the tomatoes until a paste-like consistency is achieved. Once the paste begins releasing little pools 
            of sizzling oil, that means the spices are cooked through.
            </p>
            <p className="story">
            Next, add the beans to the mix and add enough water to just barely cover them. The soaked beans should have been going for about half an hour at least, 
            so now they'll only need another half-hour to fully cook through. The canned beans are pre-cooked, so they'll only need another 10 minutes to assimilate with the flavors 
            of the dish. Once you add the beans and their water, bring to a simmer, turn down the heat, cover with a lid and continue to let it simmer for 30 or 10 minutes, depending 
            on whether you used soaked or canned beans respectively.
            </p>
            <p className="story">
            While the beans are cooking, separate the stems from the leaves of the cilantro and roughly chop them up. When the beans are about 5 minutes away from being done, uncover the lid 
            and check the beans. If they are soft and mash easily, they're ready. If not, put the lid back on and continue cooking until they are. When ready, smash at least a quarter 
            of the beans against the sides of the pot. This will release the paste inside the beans which will add body and flavor to the gravy. Add the cilantro stems and stir well. 
            Cover with a lid for another 5 minutes and then taste for seasoning, adjusting salt as necessary.
            </p>
            <p className="story">
            Serve the rajma over rice and top with cilantro leaves, ghee, and some slices of raw red onion if you're feeling fancy. The ghee really makes the biggest difference here, 
            it's just not the same without a spoonful of it melting over the top. You might notice that you've made way too much, as it's a very filling dish. That's okay, it's one of 
            those special foods like lasagna that taste just as good when reheated the next day. Packed with iron, fiber, protein, and most of all, flavor, rajma is a wonderful weeknight 
            meal to add to your repertoire.
            </p>
        </div>
    );
}

export default Rajma;
