import React from 'react';

const Category = ({ category }) => {
    return (

        <div className="category_container">
            <h2>Electronics</h2>
            <div>Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.</div>
            <div className="category_shop_now">
                <button>&rarr; shop now</button>
                <img className="category_image" src="images/model.png" />
            </div>
        </div>
    );
}

export default Category;