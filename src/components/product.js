import React from 'react';

const Product = (product) => {
    return (
        <div className="product">
            <div className="proudctImage"></div>
            <div className="productDetails">
            <div className="productName">{product.name}</div>
            <div className="productPrice">
                <div className="price">${product.price - (product.discount / 100) * product.price}</div>
                <input type="button" className="addToCart" value="Add to cart" id={product.id} onClick={product.addToCart}/>
            </div>
            </div>
        </div>
    );
};

export default Product;
