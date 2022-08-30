// import Link to change path when recipe is clicked
import { Link } from 'react-router-dom';

// import CSS
import '../../recipes_style.css';
import '../../bulma.css';

// import recipes of this category to export to App.js in one line
import Cursed from './cursed';
import ThanksgivingPie from './thanksgivingpie';
import PineapplePizza from './pineapplepizza';

const Lab = () => {
    return (
        <div className="section has-text-centered tabcontent">
            <div className="has-text-centered section pt-0">
                <h1 className="title">The Laboratory</h1>
                <p className="subtitle">My best culinary experimentations</p>
            </div>
            
            <div className="columns is-centered">
                <Link to="cursed" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="cursed.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Cursed Sandwich</p>
                    </div>
                </Link>
                
                <Link to="thanksgivingpie" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="thanksgivingpie.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Thanksgiving Cottage Pie</p>
                    </div>
                </Link>
                
                <Link to="pineapplepizza" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="pineapplepizza.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Pineapple Upside-Down Deep-Dish Pizza</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

// export category and recipes
export default Lab;
export { Cursed, ThanksgivingPie, PineapplePizza };
