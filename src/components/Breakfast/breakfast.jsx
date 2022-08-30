// import Link to change path when recipe is clicked
import { Link } from 'react-router-dom';

// import CSS
import '../../recipes_style.css';
import '../../bulma.css';

// import recipes of this category to export to App.js in one line
import Pancakes from './pancakes';
import FrenchToast from './frenchtoast';

const Breakfast = () => {
    return (
        <div className="section has-text-centered tabcontent">
            <div className="has-text-centered section pt-0">
                <h1 className="title">Breakfast</h1>
                <p className="subtitle">Recipes for the most important meal of the day</p>
            </div>

            <div className="columns is-centered">
                <Link to="pancakes" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="pancake.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Pancakes</p>
                    </div>
                </Link>
                
                <Link to="frenchtoast" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="frenchtoast.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">French Toast</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

// export category and recipes
export default Breakfast;
export { Pancakes, FrenchToast };
