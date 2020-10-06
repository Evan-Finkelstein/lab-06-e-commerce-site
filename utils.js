import { inventory } from "./data.js";


export function findById(someArray, someId) {
    for (const booger of someArray){
        if(booger.id === someId){
            return booger;
    }
}
}  


export function calcLineItem(quanity, price){
  const amount =  quanity * price;
  return Math.round(amount * 100) / 100;
}


export function orderTotal(cartArray){
  
    let accumulator = 0;


    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const trueItem = findById(inventory, item.id);
        const price = trueItem.price;
        const quantity = item.quantity;
        const subtotal = calcLineItem(price, quantity)

        accumulator = accumulator + subtotal;
    }

    return accumulator;
}

// export function orderTotal(cartArray, inventoryArray){
//     let accumulator = 0;
//     for (let i = 0; i < cartArray.length; i++) {
//         const item = cartArray[i];
//         const quantity = item.quanity;
    
//     for (let i = 0; i < inventoryArray.length; i++) {
//         const item2 = inventoryArray[i];
//         const price = item2.price;
//         const subtotal = calcLineItem(price, quantity)
//         accumulator = accumulator + subtotal;
//     }}
//     return accumulator;
// }