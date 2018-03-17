import React from 'react';
import {connect} from 'react-redux';
import CartItem from './cartItem';
import {bindActionCreators} from 'redux';
import {updateCart, removeProduct} from '../actions/cart';
import TotalContainer from './totalContainer';
import toastr from 'toastr';

class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    render() {
        return (
            <div>
                <header>
                    <h2>
                        Order Summary
                    </h2>
                </header>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.sort((a, b) => a.id - b.id > 0).map(prd => <CartItem key={prd.id} {...prd } updateQuantity={this.updateQuantity} removeProduct={this.removeProduct}/>)}
                    </tbody>
                </table>
                <TotalContainer products={this.props.cart}/>
            </div>
        );
    }

    updateQuantity(event) {
        var action = (event.target.getAttribute('action'));
        var product = this.props.cart.find(prd => prd.id == event.target.id);
        if (action == "increment") {
            product.quantity++;
        } else {
            product.quantity--;

        }
        if (product.quantity == 0) {
            this.removeProduct(event);
        } else {
            this.props.updateCart(product);
        }
        toastr.success('product quantity updated');
    }

    removeProduct(event) {
        var product = this.props.cart.find(prd => prd.id == event.target.id);
        this.props.removeProduct(product);
        if (this.props.cart.length == 1) {
            this.props.history.push('/');
        }
        toastr.success('product removed from cart');

    }

}

const mapStateToProps = state => {
    return {cart: state.cart};
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateCart: updateCart,
        removeProduct: removeProduct
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
