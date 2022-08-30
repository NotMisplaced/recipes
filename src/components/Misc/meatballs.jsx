import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Meatballs = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/misc">Misc.</Link></li>
                    <li><p>Meatballs</p></li>
                </ul>
            </nav>
            <p className="mb-5">Adapted from Joshua Weissman's recipe.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Mix it in a bowl until homogenous and shape into balls (approx 15 of equal weight).</li>
                    <li>Fry in hot olive oil until crust forms on outside.</li>
                    <li>Finish by simmering in tomato sauce with lid on for 10 minutes or cooking on low for a similar amount of time until cooked through.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1 lb ground beef</li>
                    <li>0.25 cups grated parmesan</li>
                    <li>3 cloves garlic, minced</li>
                    <li>1 egg</li>
                    <li>0.5 cups Italian breadcrumbs</li>
                    <li>1.5 tsp salt</li>
                    <li>Pepper</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            This recipe is literally just Joshua Weissman's recipe but missing a few ingredients that I don't have in my kitchen. The meatballs still taste fantastic and go great with 
            spaghetti, meatball subs, or even just by themselves.
            </p>
            <p className="story">
            Mix 1 pound of ground beef with some parmesan, breadcrumbs, an egg, salt, minced garlic, and pepper in a bowl. The reason we add so much other stuff to the meat is for both 
            seasoning and also breaking up the meat so that it falls apart in your mouth delicately rather than seizing up and becoming tight. Once homogenous, form it into balls. 
            I usually end up with 15 if I'm going for bigger meatballs, but if you're not cooking them in sauce, I recommend going to ping pong ball size. Fry them in batches in a few 
            tablespoons of shimmering hot olive oil on medium-high until a crust forms on the outside. Make sure to turn the meatballs every once in a while so they get a crust on every 
            side. If they're being cooked in sauce, take them out and use the oil to make tomato sauce. If you don't want to make homemade sauce, discard the oil and put in the store-bought 
            sauce. In either case, when the sauce is simmering, add the meatballs back in and let simmer covered for a minimum of 10 minutes on low with the lid on.
            </p>
            <p className="story">
            If you don't want to use sauce at all to simmer them, put all the meatballs back in the pan and cook them on medium-low for 15 minutes with the lid on. You can always check 
            if they're done by cutting a sacrificial one open. If it's still pink, keep going. Medium-rare is unsafe if you're using ground meat. When they're ready, eat them however you 
            prefer, just don't attempt to fit them all in your mouth at once like a chipmunk.
            </p>
        </div>    
    );
}

export default Meatballs;
