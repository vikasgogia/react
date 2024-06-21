import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products?limit=4");
                setProducts(response.data);
            } catch (error) {
                console.log("error in loading products data", error);
            }
        })();

    }, []);

    return (
        <div className="prod-carusel_container">
            {products.map((prod) => <Product key={prod.title} product={prod} /> )}
        </div>
        
    );
}

export default ProductCarousel;