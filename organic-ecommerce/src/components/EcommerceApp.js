import React from 'react';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import Usp from './usp/Usp';
import BestProducts from './products/BestProducts';
import CategoryCarousel from './category/CategoryCarousel';
import DealOfDay from './customer-review/DealOfDay';

export default class EcommerceApp extends React.Component {

    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <Usp />
                <BestProducts />
                <CategoryCarousel />
                <BestProducts url="https://fakestoreapi.com/products/category/jewelery?limit=4" title="Top Jewelery" />
                <DealOfDay />
            </>
        );
    }
}