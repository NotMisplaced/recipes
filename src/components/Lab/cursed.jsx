import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Cursed = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/lab">The Laboratory</Link></li>
                    <li><p>Cursed Sandwich</p></li>
                </ul>
            </nav>
            <p className="mb-5">I am so sorry.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Spread hummus on one slice of bread and Nutella on the other slice.</li>
                    <li>Spread a thin layer of mustard over the hummus. Yellow mustard is strong, so use it sparingly.</li>
                    <li>Slice up strawberries and put them on the Nutella.</li>
                    <li>Close the sandwich, cut as desired, and serve.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>2 slices bread</li>
                    <li>Hummus (pref. roasted garlic hummus)</li>
                    <li>Nutella</li>
                    <li>Yellow mustard</li>
                    <li>Strawberry</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            Don't make that face. I know you read the ingredients. I know how you're feeling. Hummus, nutella, mustard, and strawberries?? You think I'm crazy. You think I've lost it. You may be right. 
            All I ask is that you let me explain myself.
            </p>
            <p className="story">
            I was bored one day, in the summer of 2015. I went to the kitchen to make lunch and I improvised with whatever I had. I took 2 slices of sandwich bread. I used whole wheat, 
            but white bread would've worked fine. On one slice, I spread a layer of roasted garlic hummus. In a moment of blind curiosity, I spread Nutella on the other slice. 
            But my chaotic heart remained unsatisfied. It needed to be more cursed. I spread some yellow mustard over the hummus, making sure to use a thin layer, since it could overpower 
            the hummus in large quantities. I closed the sandwich and ate it. To my surprise, it was actually good. My only qualm was that it was very dry. After all, it was just a sandwich of 
            only condiments. It needed something fresh, something juicy, like maybe… strawberries. The second time I made the sandwich (yes I ate this multiple times), I placed some sliced 
            strawberries between the mustard and the Nutella. I took a bite and knew right away that I had nailed it. I told my family all about my proud invention while they fought the urge to gag.
            </p>
            <p className="story">
            Of course, it <em>sounds</em> bad, but because I'm the only one that has ever actually eaten it, I alone am left with the mystery: why does it taste so good? The ingredients 
            make no sense but somehow it just works. I think I figured it out. It's like a cycle. Hummus and Nutella go together, and now many grocery stores actually sell chocolate hummus 
            as a popular item. Nutella and strawberries need no explanation as they are a classic pairing. Strawberries and mustard, while unconventional together, contain bright, acidic 
            notes that pair nicely with one another. Yellow mustard and hummus both have slightly bitter, earthy tastes from the turmeric and tahini respectively that make them work well 
            together, contrary to what one might imagine. This is a tangled web of flavor interactions, but it all somehow works out. I invite you to walk on the wild side and give this 
            unlikely hero a try.
            </p>
        </div>    
    );
}

export default Cursed;
