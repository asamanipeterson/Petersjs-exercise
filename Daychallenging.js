const cart=[
    {name:"T-shirt", price: 20, quantity: 3},
    {name:"Jeans", price: 50, quantity: 2},
    {name:"Sneakers", price: 80, quantity: 4},
    {name:"Hat", price: 15, quantity: 3},
]
let subtotal=0;
let totalQuantity=0;
cart.forEach(item =>{
    subtotal += item.price * item.quantity;
    totalQuantity += item.quantity;
})
let discountRate=0;
if(totalQuantity > 10){
    discountRate = 0.2; 
}else if (totalQuantity > 5){
    discountRate = 0.1; 
}else{
    discountRate = 0; 
}
const discount = subtotal * discountRate; 
const total = subtotal - discount; 
console.log(`In all you bought `+ totalQuantity+` items`);
console.log(`Subtotal: $`+ subtotal);
console.log(`Discount: $`+ discount);
console.log(`Final Total After Discount was deducted: $`+ total);