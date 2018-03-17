import React from 'react';

const CartItem = product => {
    return (
        <tr>
            <td>
                <div className="cartItemImage"></div>
                <div className="cartItemtName">{product.name}</div>
                <input className="remove" type="button" id={product.id} value="X" onClick={product.removeProduct}/>
            </td>
            <td>
                <input type="button" action="decrement" id={product.id} value="-" onClick={product.updateQuantity}/>
                <span>{product.quantity}</span>
                <input type="button" action="increment" id={product.id} value="+" onClick={product.updateQuantity}/>
            </td>
            <td>
                <span>${product.price - (product.discount / 100) * product.price}</span>
            </td>
        </tr>
    );
}

export default CartItem;
