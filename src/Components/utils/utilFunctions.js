export const calculateCartSubTotal = (productMap, shoppingCart, currentCurrency) => {
    let total = 0;
    Object.keys(shoppingCart).forEach((itemId) => {
        total += parseFloat(currentCurrency === 'dollar' ? productMap[itemId].dollar_price : productMap[itemId].euro_price)
            * shoppingCart[itemId]
    })
    return (currentCurrency === 'dollar' ? "$ " : "€ ") + Number.parseFloat(total).toFixed(2);
}
