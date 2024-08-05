import React from 'react';

const ProductPage = () => {

    return (
        <div className='product-page__wrapper'>
            <div className='product-details-container'>
                <img className='product-details-image' src='images/model.png' />
                <div>
                    <h1>Assorted Coffee</h1>
                    <h4>Free Shipping</h4>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;