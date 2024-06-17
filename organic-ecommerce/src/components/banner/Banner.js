import React from 'react';

const Banner = (props) => (
    <div className="banner-container">
        <div className="banner-left">
            <img src="images/organic-products-hero.png" />
        </div>

        <div className="banner-right">
            <img src="images/logo-leaf-new.png" />
            <h3>Best Quality Products</h3>
            <h1>Join The Organic Movement!</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
            <div><img src="images/cart.svg"/><span>SHOP NOW</span></div>
        </div>
    </div>
);

export default Banner;