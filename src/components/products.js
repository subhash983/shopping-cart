import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, updateCart} from '../actions/cart';
import Product from './product';
import {Link} from 'react-router-dom';
import toastr from 'toastr';

class Products extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.addToCart = this.addToCart.bind(this);
        this.state = {
            cartCount: props.cart.length
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.cart.length != this.props.cart.length) {
            this.setState({cartCount: nextProps.cart.length});
        }
    }

    render() {
        const productsList = this.props.products.map(prd => <div key={prd.id}>
            <Product {...prd } addToCart={this.addToCart}/>
        </div>);

        return (
            <div>
                <header>
                    <div>
                        <span>cart count:{this.state.cartCount}</span>
                        <h2>All Items</h2>
                        {this.props.cart.length > 0
                            ? <Link className="goToCart" to="cart">Go to Cart({this.props.cart.reduce((a, b) => {
                                        return a + b.quantity;
                                    }, 0)})</Link>
                            : null}
                    </div>
                </header>
                <div>{productsList}</div>
            </div>
        );
    }

    addToCart(event) {
        var productId = event.target.id;
        var product = this.props.products.find(prd => prd.id == productId);
        var existsInCart = this.props.cart.some(prd => prd.id == productId);
        if (existsInCart) {
            var productCopy = Object.assign({}, this.props.cart.find(prd => prd.id == productId));
            productCopy.quantity++;
            this.props.updateCart(productCopy);
        } else {
            var productCopy = Object.assign({}, product);
            productCopy.quantity = 1;
            this.props.addToCart(productCopy);
        }
        toastr.success('product added ro cart');
    }

}

const mapStateToProps = state => {
    return {products: state.products, cart: state.cart};
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addToCart: addToCart,
        updateCart: updateCart
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
