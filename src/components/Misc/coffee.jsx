import { Link } from 'react-router-dom';
import '../../recipes_style.css';
import '../../bulma.css';

const Coffee = () => {
    return (
        <div className="section recipe tabcontent pt-4">
            {/* Introduction */}
            <nav className="breadcrumb has-succeeds-separator is-medium">
                <ul>
                    <li><Link to="/misc">Misc.</Link></li>
                    <li><p>Cold Brew Coffee</p></li>
                </ul>
            </nav>
            <p className="mb-5">Recipe for cold brew from NYT Cooking.</p>
            
            <div className="columns is-8 is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <ol className="ml-1">
                    <li>Combine coffee and water.</li>
                    <li>Cover and let rest for 12 hours at room temperature.</li>
                    <li>Filter and serve with ice cubes.</li>
                </ol>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>0.33 cups coarse ground coffee</li>
                    <li>2 cups water</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            This recipe comes from NYT Cooking. I used to make this every night and drink it first thing the next morning, 30 minutes before my workout, and it really energized me quite a 
            bit. As someone who hates the taste of coffee, this is as palatable as black coffee gets. If you twist my arm, I might even admit that I enjoy it. When you filter the coffee, 
            be sure to use a coffee filter, as a mesh strainer will let a few errant grounds into the cup. Other than that, this recipe needs no further explanation.
            </p>
        </div>    
    );
}

export default Coffee;
