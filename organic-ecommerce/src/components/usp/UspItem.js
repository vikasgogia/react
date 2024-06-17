import React from 'react';

const UspItem = (props) => (
    <div className="usp-item-container">
        <div className="usp-item-image block-to-inline">
            <img src="images/cart.svg" />
        </div>

        <div className="block-to-inline">
            <span>Free Shipping</span><br />
            <span>Above 5$ only</span>
        </div>
    </div>
);

export default UspItem;