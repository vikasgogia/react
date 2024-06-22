import React from 'react';

const CustomerReview = () => {
    return (
        <div>
            <Rating 
                className="product_element" 
                defaultValue={parseFloat(product.rating.rate)} 
                precision={0.5} 
                size="small"
            />
            <p>
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="">
                <img src="images/model.png"/>
                <span>Mila Kunis</span>
            </div>
        </div>
    );
}

export default CustomerReview;