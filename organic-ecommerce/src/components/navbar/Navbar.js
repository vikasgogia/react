import React from 'react';

const Navbar = (props) => (
    <div className="nav-container">

        <div className="nav-left">
            <img className="nav-logo" src="images/logo.svg"/>
            <a className="nav-element">Everything</a>
            <a className="nav-element">Groceries</a>
            <a className="nav-element">Juice</a>
        </div>
        
        <div className="nav-right">
            <a className="nav-element">About</a>
            <a className="nav-element">Contact</a>
            <a className="nav-element">₹ 0.0</a>
            <img className="nav-element" src="images/cart.svg" />
            <img className="nav-element" src="images/user.svg" />
        </div>
    </div>
);

export default Navbar;