import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../../recipes_style.css';
import '../../bulma.css';

const Navbar = () => {
    const [isActive, setActive] = useState("false");

    const handleBurger = () => {
        setActive(!isActive);
    };

    return (
        <nav className = "navbar has-background-white-ter mb-4">
            <div className="navbar-brand">
                <h1 className="title navbar-item py-3 mb-0">Mihir's Recipes</h1>
                
                <button className="navbar-burger mt-2" onClick={handleBurger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            
            <div className={`navbar-menu has-background-white-ter tab ${isActive ? "is-hidden-mobile" : "is-active"}`}>
                <Link to="/" className="navbar-item px-4">Home</Link>
                <Link to="/breakfast" className="navbar-item px-4">Breakfast</Link>
                <Link to="/soup" className="navbar-item px-4">Soups, Stews, &amp; Sauces</Link>
                <Link to="/sandwiches" className="navbar-item px-4">Sandwiches</Link>
                <Link to="/rice" className="navbar-item px-4">Rice &amp; Pasta</Link>
                <Link to="/desserts" className="navbar-item px-4">Desserts</Link>
                <Link to="/lab" className="navbar-item px-4">The Laboratory</Link>
                <Link to="/misc" className="navbar-item px-4">Misc.</Link>
                <Link to="/search" className="navbar-item navbar-end px-4 mr-4">
                    <img className="image" src={process.env.PUBLIC_URL+"search-icon.png"} alt="Search" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
