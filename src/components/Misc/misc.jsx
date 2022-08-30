// import Link to change path when recipe is clicked
import { Link } from 'react-router-dom';

// import CSS
import '../../recipes_style.css';
import '../../bulma.css';

// import recipes of this category to export to App.js in one line
import PopcornChicken from './popcornchicken';
import Meatballs from './meatballs';
import DeviledEggs from './deviledeggs';
import Pizza from './pizza';
import Coffee from './coffee';
import Ricotta from './ricotta';

const Misc = () => {
    // opens Domino's website in a new tab when called
    const handlePizza = () => {
        window.open("https://www.dominos.com", "_blank");
    };

    return (
        <div className="section has-text-centered tabcontent">
            <div className="has-text-centered section pt-0">
                <h1 className="title">Misc.</h1>
                <p className="subtitle">I don't know how to categorize these, but I love them just the same</p>
            </div>
            
            <div className="columns is-centered">
                <Link to="popcornchicken" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="popcornchicken.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Makeshift Popcorn Chicken</p>
                    </div>
                </Link>
                
                <Link to="meatballs" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="meatballs.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Meatballs</p>
                    </div>
                </Link>
                
                <Link to="deviledeggs" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="deviledeggs.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Deviled Eggs</p>
                    </div>
                </Link>
            </div>
            
            <div className="columns is-centered">
                <Link to="pizza" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="pizza.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Pizza</p>
                    </div>
                </Link>
                
                <Link to="coffee" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="coffee.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Cold Brew Coffee</p>
                    </div>
                </Link>
                
                <div className="card column is-one-quarter recipelink mx-2 mb-4" onClick={handlePizza}>
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="nobake.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">No-Bake Pizza</p>
                    </div>
                </div>
            </div>
            
            <div className="columns is-centered">
                <Link to="ricotta" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="ricotta.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Ricotta</p>
                    </div>
                </Link>	
            </div>
        </div>
    );
}

// export category and recipes
export default Misc;
export { PopcornChicken, Meatballs, DeviledEggs, Pizza, Coffee, Ricotta };
