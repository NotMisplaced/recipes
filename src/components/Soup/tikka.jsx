import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Tikka = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/soup">Soups, Stews, &amp; Sauces</Link></li>
                    <li><p>Chicken Tikka Masala</p></li>
                </ul>
            </nav>
            <p className="mb-5">The national dish of England, created by South Asian immigrants. You love to see it.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Cut chicken into 1 inch cubes.</li>
                    <li>Let sit in lemon juice and salt marinade for 20 mins.</li>
                    <li>Add ground spices to chicken (spices in each bullet point are listed from most used to least)</li>
                    <div className="content">
                    <ul>
                        <li>Go heavy on: Ginger, garlic, paprika</li>
                        <li>Go medium on: Black pepper, ground coriander, ground cumin, cayenne</li>
                        <li>Go light on: Fennel, allspice, cloves, cinnamon</li>
                    </ul>
                    </div>
                    <li>Cover chicken with a few spoonfuls of yogurt, fully combining the yogurt with the spices and massaging it all over the chicken to cover every crevice.</li>
                    <li>Marinate chicken in yogurt mixture for at least 3 hours.</li>
                    <li>Sear chicken on high heat with some vegetable oil until a charred crust forms on each side.</li>
                    <li>Set chicken aside and add thinly sliced onion and cumin seeds, picking up the fond and charred marinade on the pan.</li>
                    <li>Once sweated, add turmeric, minced garlic, ground ginger, and diced bell pepper.</li>
                    <li>When onion cooks through, add finely diced tomato, ground coriander, and ground cumin.</li>
                    <li>Mash tomato as it cooks, and when spices cook through, add water.</li>
                    <li>Wait until sauce reaches a simmer to add cayenne pepper and paprika.</li>
                    <li>Add chicken and simmer covered for 10-15 minutes.</li>
                    <li>In the meantime, separate cilantro leaves from stems and chop up the stems.</li>
                    <li>Add cilantro stems, then add salt and pepper to taste.</li>
                    <li>Stir in leftover marinade (or a couple spoons of yogurt) one spoonful at a time.</li>
                    <li>Serve topped with cilantro leaves beside naan or rice.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                    <p>For the Chicken Marinade:</p>
                    <ul>
                        <li>2 chicken thighs</li>
                        <li>Lemon</li>
                        <li>Salt</li>
                        <li>Pepper</li>
                        <li><b>Cinnamon</b></li>
                        <li><b>Cloves</b></li>
                        <li><b>Allspice</b></li>
                        <li><b>Ground coriander</b></li>
                        <li><b>Ground cumin</b></li>
                        <li><b>Ground fennel</b></li>
                        <li>Cayenne pepper</li>
                        <li>Paprika</li>
                        <li>Ground ginger</li>
                        <li>Garlic powder</li>
                        <li>Yogurt</li>
                    </ul>
                    <p>For the Gravy:</p>
                    <ul>
                        <li>1 tomato</li>
                        <li>0.5 onions</li>
                        <li>3 cloves garlic</li>
                        <li>0.25 green bell pepper</li>
                        <li>Turmeric</li>
                        <li>Cumin seeds</li>
                        <li>Vegetable oil</li>
                        <li>Cilantro</li>
                    </ul>
                </div>
                <p><u>NOTE:</u> Ingredients that are in <b>bold</b> can ALL be replaced by just using an equivalent amount of garam masala.</p>
                </div>
            </div>
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            People think of chicken tikka masala as a stereotypical Indian food, but really it's thought to have originated from Indian immigrants living in Scotland. 
            It has become a fan favorite all across the UK, and some even consider it their national dish. Despite the complexity of flavors, the dish itself is quite simple, 
            though it does require some preparation in advance.
            </p>
            <p className="story">
            The recipe begins with a double marinade, a trick I picked up from Madhur Jaffrey's take on this recipe. First, cut your boneless, skinless chicken thighs into 1 inch cubes, 
            then put them in a bowl. You could do this with breasts, but thighs work better because they're more flavorful. Season with salt and about half a lemon's juice. 
            You only need enough juice to coat the chicken, you don't want them to be swimming in a pool of lemonade. Massage the salt and lemon juice into the chicken with your hands, 
            making sure each piece is coated evenly. Let sit covered at room temperature for 20 minutes. The reason we do this part of the marinade is to let the salt and acidity 
            flavor the meat while breaking down the proteins, resulting in tender, juicy chicken.
            </p>
            <p className="story">
            Now comes the tricky part: the yogurt marinade. Start by adding the spices to your chicken. Ginger and garlic should be the main flavors used, so either using a couple tablespoons 
            of homemade ginger-garlic paste or using a lot of ground ginger and garlic powder works here. I also recommend adding a heavy amount of paprika as well, 
            as it adds a very subtle warmth and works better in larger quantities. I recommend going a bit lighter on spices like black pepper, coriander seed, cumin, and cayenne. 
            They add warmth and strong flavor, but are not the star flavors of this dish, so use them in moderation. I recommend using even less on fennel, allspice, cloves, and cinnamon. 
            With fennel it's fine to add a bit more, but the other three are very strong and you don't want them to take over the flavor profile. We want the warmth and some of the flavor 
            of spices like cinnamon, but be a little more stingy unless you want your chicken to taste like French toast. Of course, the ratios of the spices and flavorings become far 
            simpler if you have premade garam masala powder, so you can replace the cinnamon, cloves, allspice, coriander, cumin, and fennel with the same amount of garam masala. 
            “Garam masala” is Hindi for “hot spice” and contains a lot of warm flavors that are fundamental to a fair amount of Indian cuisine, as the name suggests. 
            But why add yogurt to the marinade? Are the spices not enough? Yogurt is not only acidic, adding to the tenderizing capabilities of the lemon, it also has a thick consistency 
            that allows it to coat the meat better, which allows for even distribution of spices. In addition, when we sear the chicken, the proteins and sugars in yogurt caramelize and 
            provide a beautiful, flavorful crust that is the star of this dish. Add the yogurt and mix it with the spices to form a marinade that fully coats the chicken, 
            and do not leave any crevice uncovered. I like using a few heaped spoonfuls of Greek yogurt, but any plain yogurt will do, preferably full-fat yogurt. 
            It's okay to use a little more yogurt than necessary, as that can be added back into the gravy later. Let sit covered in the fridge for at least 3 hours.
            </p>
            <p className="story">
            Add some vegetable oil to a pan and get it smoking hot. I like using a pan with higher walls or a dutch oven-like pot to do this, since we're going to be making the gravy 
            in the same pan. Add the chicken and sear one side for about 1-2 minutes before flipping and doing the same on the other side. It should be blackened somewhat on both sides. 
            Don't worry, it isn't ruined, charring the meat will add a tremendous amount of flavor. Also, by heating it that quickly, you don't cook it all the way through, so don't go 
            for a taste test just yet. The chicken will finish cooking in the gravy which will impart a tremendous amount of flavor and ensure that the chicken retains a juicy, tender inside. 
            Make sure to sear the chicken in batches so you don't overcrowd the pan. Giving the chicken pieces some room to breathe ensures that each piece has a chance to fully touch the 
            pan's surface and the excess water that evaporates off the chicken won't interfere with developing that charred crust on the meat either.
            </p>
            <p className="story">
            Once your chicken is ready, place it on the side. Look inside the pan. You'll notice little charred bits stuck to the bottom swimming in some flavored oil and grease. 
            Do not clean that out. That is going to contribute so much flavor to the gravy, you don't want to waste a drop. To ensure you pick up all that flavor, add the sliced onions 
            with a couple tablespoons of oil and fry on medium high heat with a touch of salt to draw out some moisture and a generous pinch of whole cumin seeds. 
            The reason we fry them with the cumin is to wake up the flavor in those seeds by lightly toasting them so they contribute maximum flavor to the rest of the dish. 
            Use the onions to pick up all the fond and charred bits and cook until sweated through. Now add a pinch of turmeric, minced garlic, ground ginger (or fresh grated), 
            and green bell pepper. When cooking things like this with a lot of vegetables, it's important to take stock of how long each ingredient needs to cook. For instance, 
            it's okay to cook the onion for a little longer, but adding the garlic too soon would risk burning it. You can time when you need to add the next ingredients that way as well, 
            the way you know to add the bell pepper when the onion begins to sweat out. When the onion becomes more translucent and you can smell the bell pepper cooking, 
            it's a good time to add the next ingredients. Put in the tomato along with a tablespoon or two of ground coriander and a third as much of ground cumin 
            (tip: a teaspoon is a third of a tablespoon). You might be asking, “But why add ground cumin when you already have the whole cumin seeds from before?” To that I say, shut up. 
            Cumin tastes good. Adding ground spices in high quantities also allows the gravy to thicken and provides a lot of substance. This is the trickiest part of the dish. 
            Fry the vegetables together on medium-high heat, mashing the tomato as it cooks. That's why the tomato had to be diced so finely before adding it, so that it would become 
            paste-like in the pan when mushed together. Once it reaches a consistency resembling a paste with chunks of onion and bell pepper, it will eventually start leaking a bit of oil. 
            The oil will begin to slightly pool around the outside of the paste and sizzle. That's the indicator that you've cooked the mixture long enough to fully cook the spices. 
            It takes a bit of practice to identify this stage, but when you can, you'll be able to make a perfect curry every time.
            </p>
            <p className="story">
            Now add in water. Not too much, but enough so that if you added the chicken, it would be just fully submerged in the gravy. Stir until the gravy is homogenous. Of course, 
            this will cool down the pan quite a bit, so it may take a while for it to reheat. Once it reaches a simmer, add a hefty shake of paprika and a pinch or two of cayenne. 
            Ordinarily, one would add the cayenne closer to the beginning with the onion and bell pepper, but I was taught the fundamentals of Indian cooking by my mother. 
            Indian cuisine is incredibly diverse and uses a lot of different practices. According to my mom, a hallmark of Marathi cooking is adding the chili powder closer to the end 
            of the dish after the water. Because my family is from the state of Maharashtra, those cooking traditions were passed on to me. Once the paprika and cayenne are incorporated, 
            add the chicken and cover with a lid, simmering on low for 10-15 minutes. The longer you let the chicken stew, the more tender it will be, but it's hard to wait any longer than 
            10 minutes for such a delicious dish.
            </p>
            <p className="story">
            While that's cooking, take some time to clean the mess you made in the kitchen and prepare your cilantro by separating the leaves and stems. 
            I can understand omitting the cilantro if you have the gene that makes it taste soapy, but a few sprigs of fresh cilantro make such a huge difference. 
            The reason we take apart the cilantro like this is because the leaves work better as a garnish and the stems provide flavor to the gravy when stewed for a bit. 
            Before adding in the stems, get the bowl with the leftover yogurt marinade. If you have no leftover marinade, just use a couple small spoonfuls of yogurt. 
            Adding in a bit of yogurt to the gravy one spoon at a time and stirring it until it becomes homogenous mellows out the curry and gives it a creamier texture. 
            Once you stir in all the leftover yogurt, chop up the cilantro stems and add to the curry. Cover the pot and let sit on low for 2-5 minutes. Serve over rice with chopped cilantro 
            leaves as a garnish and enjoy. This is a delicious dish, but just think about the principles you've learned from this one recipe: making a yogurt marinade, searing and stewing meat, 
            and the basic technique to make a perfect curry with whatever meats or vegetables you want.
            </p>
        </div>
    );
}

export default Tikka;
