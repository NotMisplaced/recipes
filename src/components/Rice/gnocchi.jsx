import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Gnocchi = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/rice">Rice &amp; Pasta</Link></li>
                    <li><p>Gnocchi</p></li>
                </ul>
            </nav>
            <p className="mb-5">Potato dumplings that go great with brown butter and sage or tomato sauce.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">	
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Preheat oven to 350F</li>
                    <li>Stab and salt potatoes</li>
                    <li>Bake for 90 mins or until no resistance is met with a knife.</li>
                    <li>Peel potatoes and grate them (best while hot).</li>
                    <li>Fold in beaten egg and a most of the flour.</li>
                    <li>Taking care not to knead it, continue adding flour and gently mixing until a smooth ball forms (soft not sticky).</li>
                    <li>Roll out small portions at a time, spreading your fingers to help stretch the dough until the dough looks like a snake the width of your finger.</li>
                    <li>Cut the rolls into inch-long pieces, then roll into balls.</li>
                    <li>Roll balls over back of a fork to form ridges.</li>
                    <li>Cook butter in a pan on medium-high until toasty, but not burnt.</li>
                    <li>Add sage leaves and turn heat to medium-low. Cook until sage is slightly crispy and turn off heat.</li>
                    <li>Boil gnocchi for a few minutes. They are cooked when they begin to float.</li>
                    <li>Add gnocchi to butter and sage sauce with a splash of the starchy water from the gnocchi pot.</li>
                    <li>Cook gnocchi in sauce on medium-high until sauce reduces and thickens slightly and gnocchi develops a slight browning.</li>
                    <li>Serve topped with grated parmesan.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                    <p>For the Gnocchi:</p>
                    <ul>
                        <li>2 lbs russet potatoes (abt 4-6)</li>
                        <li>1 egg</li>
                        <li>1 cup flour</li>
                    </ul>
                    <p>For the Brown Butter Sage Sauce:</p>
                    <ul>
                        <li>4 tbsp butter</li>
                        <li>Fresh sage leaves</li>
                        <li>Parmesan cheese</li>
                    </ul>
                </div>
                <p><u>NOTE:</u> You can substitute the brown butter sage sauce for tomato sauce if desired</p>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            There's only 2 foods I've ever cooked that made it impossible for me to stop smiling while eating them. Gumbo and gnocchi. These tender potato dumplings are excellent with 
            tomato sauce, but the recipe I have here is for a traditional sage and brown butter sauce. This recipe is by Stephen Cusato of Not Another Cooking Show.
            </p>
            <p className="story">
            First, preheat the oven to 350F. We're using baked potatoes rather than boiled to avoid excess moisture. Moisture + flour = gluten = chewy. We want soft and tender, not tough 
            and chewy. Stab your potatoes with a fork so that they can vent steam, and sprinkle them with salt. Bake on a foil-lined baking tray for at least 90 minutes. The potatoes 
            should meet absolutely no resistance when stabbed with a knife. You can even let them go for a full 2 hours, as long as the potatoes are as soft as possible on the inside. 
            Take out the potatoes when done, then peel and grate them onto a clean countertop.
            </p>
            <p className="story">
            Fold in a beaten egg and most of the flour using a bench scraper. Gradually fold in flour gently, taking care not to knead it, until a smooth ball can be formed and the dough 
            is no longer sticky. Remember, the less you work the dough, the more tender the gnocchi will be. Roll out the dough with your fingers into a snake about the width of your 
            finger. Try spreading your fingers as you roll to help stretch out the dough into the snake shape. Cut the snake into inch-long pieces, and roll the pieces into balls. 
            Place a fork upside down and coat in flour. Roll the dough balls over the back of the fork. This will curl the dumplings into a pill bug shape and create ridges on the back 
            which will be great for clinging onto the sauce.
            </p>
            <p className="story">
            Now for the brown butter sage sauce. Start boiling a pot of water and melt some butter in a separate pan. Cook the butter over medium-high until it becomes toasty and browned, 
            but not burnt. If you blacken it, you need to start the sauce over. Add some fresh sage leaves to the butter and turn down the heat to prevent burning. Cook until sage begins 
            to become crispy and turn off the heat. By now the pot of water should be boiling. Boil the gnocchi for a few minutes. They're done cooking when they begin to float. 
            Add the gnocchi to the brown butter sage sauce along with a splash of the cooking water. That water is now laden with starch, which will thicken the sauce and help it stick to 
            the gnocchi. Cook gnocchi in the sauce on medium heat until sauce thickens slightly and gnocchi gets a little color. Make sure to keep the contents of the pan moving to 
            emulsify the sauce with the water. Serve and top with grated parmesan.
            </p>
        </div>    
    );
}

export default Gnocchi;
