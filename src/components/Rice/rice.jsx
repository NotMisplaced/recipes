// import Link to change path when recipe is clicked
import { Link } from 'react-router-dom';

// import CSS
import '../../recipes_style.css';
import '../../bulma.css';

// import recipes of this category to export to App.js in one line
import SPORice from './sporice';
import Gnocchi from './gnocchi';
import TurkeyRice from './turkeyrice';
import ChickenCola from './chickencola';

const Rice = () => {
    return (
        <div className="section has-text-centered tabcontent">
            <div className="has-text-centered section pt-0">
                <h1 className="title">Rice &amp; Pasta</h1>
                <p className="subtitle">Don't ever tell me that carbs are bad</p>
            </div>
            
            <div className="columns is-centered">
                <Link to="sporice" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="sporice.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">SausagePeppers&amp;Onions</p>
                    </div>
                </Link>
                
                <Link to="gnocchi" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="gnocchi.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Gnocchi</p>
                    </div>
                </Link>
                
                <Link to="turkeyrice" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="turkeyrice.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Turkey Rice</p>
                    </div>
                </Link>
            </div>
            
            <div className="columns is-centered">
                <Link to="chickencola" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="chickencola.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Chicken and Cola Stir-Fry</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

// export category and recipes
export default Rice;
export { SPORice, Gnocchi, TurkeyRice, ChickenCola };
