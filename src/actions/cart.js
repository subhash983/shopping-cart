export function addToCart(product) {
    return {type: 'ADD_TO_CART', product: product};
}

export function updateCart(product) {
    return {type: 'UPDATE_CART', product: product};
}

export function removeProduct(product) {
    return {type: 'REMOVE_PRODUCT', product: product};
}
