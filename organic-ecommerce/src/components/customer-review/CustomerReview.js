import React from 'react';
import { Rating } from '@mui/material';

const CustomerReview = () => {
    return (
        <div className="review_container">
            <Rating 
                className="review_element" 
                defaultValue={0.5} 
                precision={0.5} 
                size="small"
            />
            <p className="review_element">
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="review_element review_client">
                <img src="images/model.png"/>
                <span>Mila Kunis</span>
            </div>
        </div>
    );
}

export default CustomerReview;