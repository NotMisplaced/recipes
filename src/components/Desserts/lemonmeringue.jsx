import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const LemonMeringue = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/desserts">Desserts</Link></li>
                    <li><p>Lemon Meringue Pie</p></li>
                </ul>
            </nav>
            <p className="mb-5">The first and hardest dessert I learned to make.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Mix salt and flour in a large bowl and refrigerate</li>
                    <li>Cut butter into flour until butter is in pea-sized, flour-coated chunks.</li>
                    <li>Add water little by little until the mixture can be clumped. Use as little water as possible.</li>
                    <li>Form into a ball of dough, wrap, and freeze overnight.</li>
                    <li>Take half of dough, roll out 2 inches wider than pie dish.</li>
                    <li>Butter and flour the pie dish and put in dough. Trim, crimp, dock, and refrigerate for at least 30 minutes.</li>
                    <li>Preheat oven to 350F.</li>
                    <li>Place in pie weights (you can use nuts or dry beans in aluminum foil instead).</li>
                    <li>Bake at 350F for 20 minutes, remove pie weights, then put it back in oven until golden brown.</li>
                    <li>Juice and zest lemons into a bowl.</li>
                    <li>Add 2 yolks and 1 whole egg, store 2 remaining whites at room temperature in a clean, dry, cool, glass or metal bowl.</li>
                    <li>Add cornstarch and sugar to lemon mixture, then whisk over double boiler until smooth.</li>
                    <li>Melt in butter piece by piece. Whisk curd constantly to avoid scrambling the eggs.</li>
                    <li>Keep whisking until the butter is fully incorporated and the curd coats the back of a spoon and a line can be drawn through it.</li>
                    <li>Pour curd onto cooled crust, cover with plastic wrap, let set in fridge for at least 30 mins.</li>
                    <li>Add a tiny splash of vinegar to the egg whites you set aside earlier.</li>
                    <li>Whisk whites until very frothy.</li>
                    <li>Add sugar slowly and keep whisking until stiff peaks form.</li>
                    <li>Gently spread meringue onto pie. Do not disrupt the curd or deflate the meringue.</li>
                    <li>Swirl meringue into preferred pattern and torch until browned. A broiler may be used instead of a pastry torch, but be careful not to burn the meringue.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                    <p>For the Crust:</p>
                    <ul>
                        <li>2.5 cups all-purpose flour, chilled</li>
                        <li>1 tsp salt</li>
                        <li>1 cup butter, cold, cubed</li>
                        <li>0.33 cups ice-cold water</li>
                    </ul>
                    <p>For the Lemon Curd:</p>
                    <ul>
                        <li>3 eggs</li>
                        <li>2-3 lemons</li>
                        <li>0.5 cups sugar</li>
                        <li>3 oz butter, cubed</li>
                        <li>1 heaped tsp cornstarch</li>
                    </ul>
                    <p>For the Meringue:</p>
                    <ul>
                        <li>.5 cups sugar</li>
                        <li>White vinegar</li>
                    </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I'm not really a baking guy, I'm a cooking guy. Baking requires precision, while cooking is more forgiving with improvisation. Because I tend to favor flexibility in the 
            kitchen, I'm a decent cook, but a terrible baker. That being said, I wanted to try baking a dessert when I had just started cooking, and I'm the type of person to go big 
            or go home. So I settled on lemon meringue pie. The first time I made it was horrible. Our springform pan was too big, so I had to triple the recipe, and I ended up forgetting 
            to triple some of the ingredients. As a result, the meringue wasn't stiff, the curd hadn't set, and the graham cracker crust just tasted all wrong. But I learned my lesson. 
            I started by learning to make a pate brisee, none of this graham cracker business. If you're making a pie, at least use a pie dish and a proper pie crust. Second, people 
            complained that there was too much meringue, so I had to reduce that. In doing research, I found that the recipe I used called for whole eggs in the curd, while some opted 
            for just the yolks. That's where I had an idea: Create the perfect lemon meringue pie recipe with no leftover whites or yolks. And that's exactly what I did. This is one of the 
            first recipes I engineered on my own and I must say, I'm quite proud of it.
            </p>
            <p className="story">
            There are 3 main components to a lemon meringue pie. Crust, lemon curd, and meringue. The three of these work together in perfect harmony to create a perfect dessert. 
            It can even show us a lesson in rhetoric, if you replace these components with Ethos, Logos, and Pathos. This rhetorical triangle, proposed by Aristotle, illustrates the 3 main 
            components of rhetoric. Ethos is authority: to deliver a strong message you must be credible. Logos is logic: to deliver a sound message you must use factual arguments. 
            Pathos is emotion: to deliver a moving message you must appeal to the emotions of your audience. Many people fail to deliver messages because they leave the rhetorical triangle 
            incomplete. For instance, scientists can't convince people of facts because they are trained only to use Ethos and Logos. Without Pathos, who will listen to reason? 
            All three are equally important in rhetoric, just as crust, curd, and meringue are equally important in a lemon meringue pie.
            </p>
            <p className="story">
            The crust is like Ethos: it provides definition and stability. Without it, the pie wouldn't hold up and people would question if it even counts as a pie anymore. The lemon curd 
            is like Logos, because people mistakenly assume it matters more than the other components. But it's so bright and tart that an audience would find it unpleasant to experience on 
            its own. That's why it must be balanced with meringue, which is like Pathos. The swirling, toasted peaks and delicate sweetness make the pie a true work of art and offset the 
            sourness of the curd. Together, this culinary rhetorical triangle works to create a harmonious, delicious experience. Now, enough about rhetoric, let's make some pie.
            </p>
            <p className="story">
            Start with the crust. This recipe makes enough dough for 2 pie crusts on a standard 9-inch pie dish. The most important thing when making pie crust is to keep it COLD. 
            Warmth will melt the butter, which is bad because we want little chunks of butter in the dough to melt in the oven. That way, the water in the butter evaporates and creates 
            little steam pockets, while the fat in the butter crisps up the edges of those pockets. When you have layers of these little crispy air pockets, that's called a flaky crust. 
            It's a similar principle to making croissants. In addition, by keeping the crust cold, you prevent water in the dough from evaporating too quickly in the oven, which would 
            otherwise cause the crust to shrink as it bakes. I prefer making my dough the night before I want pie. This allows me to work in a cool environment and give me plenty of time 
            to rest the dough while I sleep.
            </p>
            <p className="story">
            Because we want everything to be cold, start by refrigerating your flour and salt in a mixing bowl. In the meantime, cube up some cold butter and put it in the freezer. When 
            everything is cooled down, after about 30 minutes, take out the dry mixture and butter. Put the butter in the flour and begin using your hands to coat the cubes and break them 
            apart (if you have a handheld pastry blender, refrigerate ahead of time and use that instead). The idea here is not to fully mix the butter and flour together. We want to 
            instead break the butter up into pea-sized chunks and coat them in the flour. Make sure to use your fingers and not palms, as the warmth of your hands may melt the butter too 
            much. When the butter is cut into the flour properly, that's the time to start adding the water.
            </p>
            <p className="story">
            Just like everything else, the water should have ice in it and should be refrigerated ahead of time. Add a small amount of water at a time and mix it into the dough. Avoid 
            kneading the dough as much as possible, as kneading will develop the gluten and form a chewy crust. Stop adding water when you are able to clump the dough into a shaggy mass. 
            Use as little water as possible. You may not even need all the water, depending on the moisture in the air. All these steps are to ensure that the dough shrinks as little as 
            possible and produces a flaky, delicate crust. Work the dough (as little as possible) until you can shape it into a ball. You'll notice that the dough is dry, held weakly 
            together, has visible bits of butter streaking through, and it cracks easily when squished. That's exactly what you want. Cover the dough tightly in plastic wrap and 
            freeze overnight.
            </p>
            <p className="story">
            The next day, cut the dough in half, wrap up the half you aren't going to use and place back in the freezer. This should be good for at least another 4 months. It's an excellent 
            all-purpose crust dough, you can use it in pies, tarts, quiches, etc. Let the half you are using thaw on a clean work surface. You want it to remain cold, but still be more 
            workable than a block of ice. Dust the surface and a rolling pin with flour and roll out the dough evenly until it is about 2 inches wider than the outside rim of the pie dish. 
            Now grease your pie dish with some butter and dust with a thin layer of flour. This will ensure an easy release from the dish every single time without fail. Place the dough in 
            the dish and gently fit it into all the edges, taking care not to stretch out or squish the dough too much. Trim off any excess hanging off the side and crimp the edges of the 
            dough so it rests nicely on the rim of the pie dish. Now take a fork and stab a whole bunch of holes all over the sides and bottom of the dough. This is called “docking” and it 
            will prevent any large air bubbles from puffing up the dough too much. Place the pie dish in the freezer for at least 30 minutes while you heat up the oven to 350F. When the 
            oven is ready, place pie weights in your pie crust. If you don't have pie weights, you can just use nuts or dry beans on a layer of tinfoil instead. These will ensure that 
            the pie doesn't puff up, in the event that the docking doesn't do the trick. Place in the center of the oven, take it out after 20 minutes, remove the foil and pie weights, 
            and resume baking until golden brown (maybe another 15-30 minutes).
            </p>
            <p className="story">
            While you let the finished crust cool off by a windowsill, Juice and zest 2-3 lemons (depending on size) into a mixing bowl (preferably glass or metal). Add 2 egg yolks and 
            1 whole egg to the bowl. Leave the 2 remaining egg whites at room temperature in a clean, dry, cool, bowl made of metal or glass. These whites will be needed to make the 
            meringue, and any moisture, dirt, oil, plastic, soap, etc. will prevent the meringue from whipping to stiff peaks. Add cornstarch and sugar to the lemon mixture, then whisk 
            over a double boiler until smooth. Melt in butter one cube at a time. Adding too many at once will cool down the mixture too fast and make it harder to melt. Make sure to 
            whisk constantly. Do not stop even for 5 seconds, or else you risk scrambling the eggs in the curd. Once all the butter is fully incorporated, you can test if the curd is 
            ready by dipping the back of a spoon in it. If it coats the back of a spoon and a clear line can be drawn through it with your finger, it's ready. Pour it into the crust, 
            cover with plastic wrap, making sure the plastic makes contact with the surface of the curd, and refrigerate it for 30 minutes. Keeping the plastic wrap in contact with the 
            curd prevents it from forming a skin on the surface.
            </p>
            <p className="story">
            While waiting for the curd to set, make the meringue using the 2 egg whites from before. Add a splash of white vinegar and whip until very frothy. The vinegar will help to 
            stabilize the structure of the meringue. Please avoid making a meringue using a handheld whisk. I've tried it and it took forever. I thought my wrist would fall off. 
            Use a stand mixer or an electric mixer if you have it. Once the whites are frothed up, begin gently sprinkling in the sugar. Too fast and it will deflate the meringue. 
            Too slow and it won't all dissolve in time. Add it very gradually and always keep whipping. Once all the sugar has been added, continue whipping until it reaches a stiff peaks 
            stage. This means that if you dip a whisk in the meringue and hold it up, you should see a peak of meringue on the whisk. If the tip of the peak is floppy, it's soft peaks. 
            If it points up, then it's stiff peaks. If it looks puffy, you've over-beaten it by shearing the proteins too much and you need to start over.
            </p>
            <p className="story">
            Take the plastic off of your lemon curd and gently place the meringue on top using a spatula. Use a fork to create swirls and peaks, this is the time to really get creative. 
            Then use a pastry torch to toast the top of the meringue. It should be browned, but not blackened. If you're like me and you don't have a pastry torch, set the rack in your 
            oven to the highest placement and set it to broil. Once it's preheated, add your pie to the top rack and watch carefully as the meringue toasts. This will take only 
            30-60 seconds, so keep the oven light on and watch it at all times. Now look upon the culinary beauty you've created. Hours of work, philosophical perfection.
            </p>
        </div>    
    );
}

export default LemonMeringue;
