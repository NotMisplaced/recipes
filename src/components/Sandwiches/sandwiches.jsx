// import Link to change path when recipe is clicked
import { Link } from 'react-router-dom';

// import CSS
import '../../recipes_style.css';
import '../../bulma.css';

// import recipes of this category to export to App.js in one line
import TomatoMelt from './tomatomelt';
import EggSandwich from './eggsandwich';

const Sandwiches = () => {
    return (
        <div className="section has-text-centered tabcontent">
            <div className="has-text-centered section pt-0">
                <h1 className="title">Sandwiches</h1>
                <p className="subtitle">Despite the name, there's no sand</p>
            </div>
            
            <div className="columns is-centered">
                <Link to="tomatomelt" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="tomatomelt.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Tomato Melt</p>
                    </div>
                </Link>
                
                <Link to="eggsandwich" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="eggsandwich.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Fried Egg Sandwich</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

// export category and recipes
export default Sandwiches;
export { TomatoMelt, EggSandwich };
