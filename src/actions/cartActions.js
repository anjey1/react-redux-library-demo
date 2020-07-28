// GET CART
export function getCart(cart) {
    return {type: "GET_CART"};
}

// ADD TO CART
export function addToCart(cart) {
    return {type: "ADD_TO_CART", payload: cart};
}

// UPDATE CART
export function updateCart(_id, unit) {
    return {type: "UPDATE_CART", _id: _id, unit: unit};
}

// DELETE CART ITEM
export function deleteCartItem(cart) {
    return {type: "DELETE_CART_ITEM", payload: cart};
}
