// import Link to change path when recipe is clicked
import { Link } from 'react-router-dom';

// import CSS
import '../../recipes_style.css';
import '../../bulma.css';

// import recipes of this category to export to App.js in one line
import LemonMeringue from './lemonmeringue';
import AppleFilling from './applefilling';
import BananaCaramel from './bananacaramel';
import GajarHalwa from './gajarhalwa';
import Zabaglione from './zabaglione';
import Suzette from './suzette';
import PotatoPie from './potatopie';
import MugCake from './mugcake';

const Desserts = () => {
    return (
        <div className="section has-text-centered tabcontent">
            <div className="has-text-centered section pt-0">
                <h1 className="title">Desserts</h1>
                <p className="subtitle">The REAL most important meal of the day</p>
            </div>

            <div className="columns is-centered">
                <Link to="lemonmeringue" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="lemonmeringue.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Lemon Meringue Pie</p>
                    </div>
                </Link>
                
                <Link to="applefilling" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="applefilling.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Apple Filling</p>
                    </div>
                </Link>
                
                <Link to="bananacaramel" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="bananacaramel.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Banana Caramel</p>
                    </div>
                </Link>
            </div>
            
            <div className="columns is-centered">
                <Link to="gajarhalwa" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="gajarhalwa.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Gajar Halwa</p>
                    </div>
                </Link>
                
                <Link to="zabaglione" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="zabaglione.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Orange Zabaglione</p>
                    </div>
                </Link>
                
                <Link to="suzette" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="suzette.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Crepes Suzette</p>
                    </div>
                </Link>
            </div>
            
            <div className="columns is-centered">
                <Link to="potatopie" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="potatopie.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Sweet Potato Pie</p>
                    </div>
                </Link>
                
                <Link to="mugcake" className="card column is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL+"placeholder.jpg"} alt="mugcake.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="is-4">Mug Cake</p>
                    </div>
                </Link>	
            </div>
        </div>
    );
}

// export category and recipes
export default Desserts;
export { LemonMeringue, AppleFilling, BananaCaramel, GajarHalwa, Zabaglione, Suzette, PotatoPie, MugCake };
