import {  inventory } from '../data.js';
import { orderTotal } from '../utils.js';
import { renderCart } from './render-cart.js';
import { getFromLocalStorage } from '../local-storage-utils.js';
import { CART } from '../products/render-product.js'

const table = document.querySelector('table');
const orderButton = document.querySelector('#order-button');
const cart = getFromLocalStorage(CART) || [];
for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    const tr = renderCart(item);

    table.appendChild(tr);    
}


const total = orderTotal(cart, inventory);
const totalCell = document.querySelector('.total');
totalCell.textContent = `Total: $${total}`;

orderButton.addEventListener('click', () => {
const stringyCart = JSON.stringify(cart, true, 2)
alert(stringyCart);
localStorage.removeItem(CART)
window.location.href = './thank-you.html'
})

