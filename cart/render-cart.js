import { inventory } from '../data.js';
import { findById, calcLineItem, orderTotal } from '../utils.js';


export function renderCart(cartItem){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdSubTotal = document.createElement('td');  
  
    tdQuantity.textContent = cartItem.quantity;

    const cartData = findById(inventory, cartItem.id);
    const price = cartData.price;
    const name = cartData.name;

    tdName.textContent = name;
    tdPrice.textContent = `$${price}`;

    const subTotal = calcLineItem(price, cartItem.quantity);
    tdSubTotal.textContent = `$${subTotal}`;

    tr.append(tdName, tdPrice, tdQuantity, tdSubTotal);

    return tr;

}