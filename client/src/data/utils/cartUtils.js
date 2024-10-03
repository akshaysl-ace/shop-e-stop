export const addDecimals = n => (Math.round(n * 100) / 100).toFixed(2);

export const updateCart = (state = {}) => {

    // calculate item's price, shipping price, tax, total price and return updated state
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + (item.price) * item.qty, 0));

    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
    state.tax = addDecimals(Number(0.15 * state.itemsPrice).toFixed(2));
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.tax)
    ).toFixed(2);
    localStorage.setItem('cart', JSON.stringify(state));
    return state;
}