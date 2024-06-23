import React from 'react';
import CustomerReview from './CustomerReview';
import DealOfDay from './DealOfDay';

const CategoryCarousel = () => {
    return (

        <div className="review-carousel__container">
            <CustomerReview />
            <DealOfDay />
            <CustomerReview />
        </div>
    );
}

export default CategoryCarousel;