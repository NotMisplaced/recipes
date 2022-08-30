// import Link to change path when recipe is clicked
import { Link } from 'react-router-dom';

// import CSS
import '../../recipes_style.css';
import '../../bulma.css';

// import recipes of this category to export to App.js in one line
import TomatoSauce from './tomatosauce';
import Gumbo from './gumbo';
import Tikka from './tikka';
import Rajma from './rajma';
import NoodleSoup from './noodlesoup';
import Canes from './canes';
import Chutney from './chutney';
import Gastrique from './gastrique';
import Cranberry from './cranberry';
import Chana from './chana';

const Soup = () => {
    return (
        <div className="section has-text-centered tabcontent">
            <div className="has-text-centered section pt-0">
                <h1 className="title">Soups, Stews, &amp; Sauces</h1>
                <p className="subtitle">Liquids for bowls, not cups</p>
            </div>
            
            <div className = "columns is-centered">
                <Link to="tomatosauce" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="tomatosauce.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Tomato Sauce</p>
                    </div>
                </Link>
                
                <Link to="gumbo" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="gumbo.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Chicken &amp; Sausage Gumbo</p>
                    </div>
                </Link>
                
                <Link to="tikka" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="tikka.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Chicken Tikka Masala</p>
                    </div>
                </Link>
            </div>
            
            <div className = "columns is-centered">
                <Link to="rajma" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="rajma.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Rajma</p>
                    </div>
                </Link>
                
                <Link to="noodlesoup" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="noodlesoup.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Noodle Soup</p>
                    </div>
                </Link>
                
                <Link to="canes" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="canes.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Cane's Sauce</p>
                    </div>
                </Link>
            </div>
            
            <div className = "columns is-centered">
                <Link to="chutney" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="chutney.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Green Chutney</p>
                    </div>
                </Link>
                
                <Link to="gastrique" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="gastrique.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Apple Cider Gastrique</p>
                    </div>
                </Link>
                
                <Link to="cranberry" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="cranberry.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Cranberry Sauce</p>
                    </div>
                </Link>
            </div>
            
            <div className = "columns is-centered">
                <Link to="chana" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="chana.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Chana Masala</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

// export category and recipes
export default Soup;
export { TomatoSauce, Gumbo, Tikka, Rajma, NoodleSoup, Canes, 
    Chutney, Gastrique, Cranberry, Chana };
