import React from 'react';

const TotalContainer = ({products}) => {
    let totalQuantity = products.reduce((a, b) => {
        return a + b.quantity;
    }, 0);

    let totalPrice = products.reduce((a, b) => {
        return a + b.price * b.quantity;
    }, 0);
    let totalDiscount = products.reduce((a, b) => {
        return a + (b.discount / 100) * b.price * b.quantity;
    }, 0);
    let fictionProducts = products.filter(prd => prd.type == "fiction");
    let typeDiscount = products.filter(prd => prd.type == "fiction").reduce((a, b) => {
        return a + 0.15 * b.price * b.quantity;
    }, 0);
    let orderTotal = totalPrice - totalDiscount - typeDiscount;
    return (
        <div className="total">
            <h3>Total</h3>
            <div>
                <span>Items({totalQuantity}):</span>
                <span>${totalPrice}</span>
            </div>
            <div>
                <span>Discount:</span>
                <span>-${totalDiscount}
                </span>
            </div>
            <div>
                <span>Type Discount:</span>
                <span>-${typeDiscount}
                </span>
            </div>
            <div>
                <span>Order Total</span>
                <span>${orderTotal}
                </span>
            </div>
        </div>

    );
}

export default TotalContainer;
