import React from 'react';
import { Rating } from '@mui/material';

const Product = ({ product }) => {

    return (
        <div className="product_container">
            <img 
                className="product_image product_element" 
                src={product.image} 
            />

            <div className="product_element product_category">{product.category}</div>

            <div className="product_element product_title">{product.title}</div>

            <Rating 
                className="product_element" 
                defaultValue={parseFloat(product.rating.rate)} 
                precision={0.5} 
                size="small"
            />

            <div className="product_element">{`₹ ${product.price}`}</div>

        </div>
    );
}

export default Product;