import getProductsList from '../../api/products';

// function getProducts() {
//     return function(dispatch) {
//         return fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/itemsb08b06c.json').then(function(response) {
//             return response.json();
//         }).then(function(products) {
//             dispatch({type: 'INITIAL_LOAD', products: products});
//         });
//     }
// }

function getProducts() {
    var products = getProductsList();
    return {type: 'INITIAL_LOAD', products: products};
}

export default getProducts;
