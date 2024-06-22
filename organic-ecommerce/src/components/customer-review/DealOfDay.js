import React from 'react';

const DealOfDay = () => {
    return (
        <div className="deal_container">
            <img src="images/model.png"/>
            <div className="overlay"></div>
            <div className="deal_content">
                <h1>Deal Of The Day 15% Off On All Jewelery!</h1>
                <p>Buy best jewelery at 15% less ...</p>
                <button>&rarr; shop now</button>
            </div>
        </div>
    );
}

export default DealOfDay;