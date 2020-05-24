export const calculateCartSubTotal = (productMap, shoppingCart, currentCurrency) => {
    let total = 0;
    Object.keys(shoppingCart).forEach((itemId) => {
        total += parseFloat(currentCurrency === 'dollar' ? productMap[itemId].dollar_price : productMap[itemId].euro_price)
            * shoppingCart[itemId]
    })
    return Number.parseFloat(total).toFixed(2);
}

export const convertToKeyValueObject = array => {
        let objectMap = {};
        array.forEach((elem) => { 
            objectMap[elem.id] = elem;
        })
        return objectMap;
}

export const firstToUppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}