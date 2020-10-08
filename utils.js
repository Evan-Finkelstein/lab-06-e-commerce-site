import { getLocalStorage  } from "./local-storage-utils.js";
const PRODUCTS = 'PRODUCTS'

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

const localInventory = getLocalStorage();
export function orderTotal(cartArray){

    let accumulator = 0;


    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const trueItem = findById(localInventory, item.id);
        const price = trueItem.price;
        const quantity = item.quantity;
        const subtotal = calcLineItem(price, quantity)

        accumulator = accumulator + subtotal;
    }

    return accumulator;
}

