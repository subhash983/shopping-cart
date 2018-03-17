function CartReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                Object.assign({}, action.product)
            ];
            break;

        case 'UPDATE_CART':
            return [
                ...state.filter(prod => prod.id != action.product.id),
                Object.assign({}, action.product)
            ];

        case 'REMOVE_PRODUCT':
            return state.filter(prod => prod.id != action.product.id);
        default:
            return state;
    }
}

export default CartReducer;
