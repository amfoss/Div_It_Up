// The below function uses defult value of parameters if no value is given by the user

function total(subtotal, discount = 0, deliveryFee = 50) {
    let discountAmount = subtotal * discount/100;
    let totalCost = subtotal - discountAmount + deliveryFee;

    return `The total cost is ${totalCost.toFixed(2)}`;
}

console.log(total(200, 30, 60));
console.log(total(200));