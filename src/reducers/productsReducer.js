function productsReducer(state = [], action) {
    switch (action.type) {
        case 'INITIAL_LOAD':
            return action.products;
            break;
        default:
            return state;
    }
}

export default productsReducer;
