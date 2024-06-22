import React from 'react';
import ProductCarousel from './ProductCarousel';

const BestProducts = ({ url = "https://fakestoreapi.com/products?limit=4", title = "Trending Products" }) => {
    
    return (

        <div className="product-carousel_container">
            <h1 className="product-carousel_title">{title}</h1>
            <ProductCarousel url={url} />
        </div>
    );
}

export default BestProducts;